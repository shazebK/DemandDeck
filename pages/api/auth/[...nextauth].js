import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import connectDB from "../../../utils/db";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await connectDB();

        const { email, password } = credentials;

        const user = await User.findOne({ email: email });
        if (!user) {
          return null;
        }
        const isAuth = await bcrypt.compare(password, user.password);
        if (!isAuth) return null;

        return {
          id: user._id,
          role: user.role,
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
