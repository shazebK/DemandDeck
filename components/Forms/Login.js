import { Mail, Visibility } from '@mui/icons-material'
import React from 'react'
import AuthInput from '../UI/AuthInput'

export default function Login() {
  return (
    <div className='w-full my-6'>
    <AuthInput placeholder="user@gmail.com"><Mail/></AuthInput>
    <AuthInput type = "password" placeholder="Password"><Visibility/></AuthInput>
    </div>
  )
}
