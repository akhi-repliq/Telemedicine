'use client';
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

export default function signin() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted successfully:", values);
      
      localStorage.setItem("authToken", "fakeToken123");
      localStorage.setItem("signedIn","true")
      setTimeout(() => {
        console.log("Redirecting to dashboard...");
        window.location.href = "/";  
      }, 1000);
    },
  });

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-8">Sign In</h1>

        <section>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white text-sm"
                placeholder="Enter Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-violet-500 rounded font-semibold text-sm text-white hover:bg-fuchsia-500 transition"
            >
              Sign In
            </button>
          </form>
        </section>

        <h2 className="text-center mt-10">
          Don't have an account?{" "}
          <Link className="text-violet-500" href="/Signup">
            Sign Up
          </Link>
        </h2>
      </div>
    </div>
  );
}
