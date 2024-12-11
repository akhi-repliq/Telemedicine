"use client";

import * as Yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";  
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("This field is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("This field is required"),
});

export default function signup() {
  const router = useRouter();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: schema,
      onSubmit: (values, { resetForm }) => {
        toast.success("Signed up successfully! 🎉");
        console.log("Form Data:", values);
        resetForm(); 
        setTimeout(() => {
          router.push("/Signin"); 
        }, 2000); 
      },
    });

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-lg">
        <Toaster position="top-center" reverseOrder={false} />

        <h1 className="text-3xl text-center font-bold mb-8">Sign Up</h1>

        <section>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                autoComplete="off"
                name="name"
                id="name"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <div className="text-red-500">{errors.name}</div>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <div className="text-red-500">{errors.email}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="Enter password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <div className="text-red-500">{errors.password}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="confirm_password"
                id="confirm_password"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="Confirm password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password && (
                <div className="text-red-500">{errors.confirm_password}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-violet-500 rounded font-semibold text-sm text-white hover:bg-fuchsia-500 transition"
            >
              Sign Up
            </button>
          </form>
        </section>

        <h2 className="text-center mt-10">
          Already have an account?{" "}
          <Link className="text-violet-500" href="/S ignin">
            Sign In
          </Link>
        </h2>
      </div>
    </div>
  );
}
