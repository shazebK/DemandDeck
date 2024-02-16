import React, { useState } from "react";
import DropDownCard from "../Forms/vendor_signup_components/DropDownCard";
import { useFormik } from "formik";
import { usePollMutations } from "../../hooks/mutations";
import { useRouter } from "next/router";

export default function CreatePage() {
  const [tags, setTags] = useState([]);
  const [tagIp, setTagIp] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (tagIp === "") {
      return;
    }
    setTags((prev) => [...prev, tagIp]);
    setTagIp("");
  };

  function closeHandler(index) {
    const newTags = tags.filter((element, i) => i != index);
    setTags(newTags);
  }

  const initialValues = {
    // category: "",
    title: "",
    description: "",
    state: "",
    city: "",
    area: "",
  };

  const router = useRouter();
  const { createDemand } = usePollMutations();

  const onSubmit = (values) => {
    createDemand.mutate({
      title: values.title,
      description: values.description,
      location: values.state + "," + values.city + "," + values.area,
      tags,
    });

    router.push("/demand");
  };

  const validate = (values) => {
    const errors = {};
    // if (!values.category) {
    //   errors.category = "Category Required";
    // }

    if (!values.title) {
      errors.title = "Title Required";
    }

    if (!values.description) {
      errors.description = "Description Required";
    }

    if (!values.state) {
      errors.state = "State Required";
    }

    if (!values.city) {
      errors.city = "City Required";
    }

    if (!values.area) {
      errors.area = "Area Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="w-full my-8 px-4">
      <h1 className="text-[48px] text-center font-bold">Create Your Demand</h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="w-full md:w-1/2 mx-auto my-8">
          <div className="my-4">
            {/* <h3 className="text-xl font-semibold my-4">Category</h3> */}
            {/* <select
              className="select select-bordered w-full focus:outline-none"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
            >
              <option value="" disabled selected hidden>
                Category
              </option>
              <option>Laundary</option>
              <option>Milk</option>
              <option>Newspaper</option>
            </select>
            {formik.touched.category && formik.errors.category && (
              <span className="text-red-500">{formik.errors.category}</span>
            )} */}
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold my-4">Demand Title</h3>
            <input
              type="text"
              placeholder="Keep title precise and small"
              name="title"
              className="input input-bordered w-full focus:outline-none"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.touched.title && formik.errors.title && (
              <span className="text-red-500">{formik.errors.title}</span>
            )}
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold my-4">Description</h3>
            <textarea
              className="textarea textarea-bordered w-full h-60 resize-none focus:outline-none"
              placeholder="Mention details and resources required for the demand"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <span className="text-red-500">{formik.errors.description}</span>
            )}
          </div>

          <div className="my-8 flex flex-col">
            <h3 className="text-xl font-semibold my-4">Location</h3>
            <select
              className="select select-bordered w-full my-4 focus:outline-none"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
            >
              <option value="" disabled selected hidden>
                State
              </option>
              <option>Uttar Pradesh</option>
            </select>
            {formik.touched.state && formik.errors.state && (
              <span className="text-red-500">{formik.errors.state}</span>
            )}

            <select
              className="select select-bordered w-full my-4 focus:outline-none"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
            >
              <option value="" disabled selected hidden>
                City
              </option>
              <option>Lucknow</option>
            </select>
            {formik.touched.city && formik.errors.city && (
              <span className="text-red-500">{formik.errors.city}</span>
            )}
            <select
              className="select select-bordered w-full my-4 focus:outline-none"
              name="area"
              value={formik.values.area}
              onChange={formik.handleChange}
            >
              <option value="" disabled selected hidden>
                Area
              </option>
              <option>Babuganj</option>
            </select>
            {formik.touched.area && formik.errors.area && (
              <span className="text-red-500">{formik.errors.area}</span>
            )}
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold my-4">Related Tags</h3>
            <input
              type="text"
              placeholder="Tagname"
              className="input input-bordered w-full focus:outline-none"
              name="currentTag"
              value={tagIp}
              onChange={(e) => setTagIp(e.target.value)}
            />
            <button className="btn my-4" onClick={handleAdd}>
              Add
            </button>

            <div className="my-4 w-full flex flex-wrap">
              {tags.map((tag, index) => (
                <DropDownCard
                  text={tag}
                  key={index}
                  onClick={closeHandler.bind(this, index)}
                />
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="btn w-40 rounded-full border-none bg-sec hover:bg-sec-dark mx-auto"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
