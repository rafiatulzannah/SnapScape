import { loginSchema } from "@/schema/loginSchema";
import { useFormik } from "formik";
import Link from "next/link";

const login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    handleBlur,
    errors,
    values,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <>

      <section className="">
        <div className="flex flex-col items-center justify-center mt-20 mx-auto h-screen lg:py-0">
          <div className="w-full bg-teal-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 px-4 py-6">
            <div className="space-y-4 md:space-y-6 sm:p-8">
              <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login
              </h1>
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Unsername/Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-cyan-900 focus:border-cyan-900 block w-full p-2.5"
                    placeholder="name@email.com"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && <p>{errors.email}</p>}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-cyan-900 focus:border-cyan-900 block w-full p-2.5"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <p>{errors.password}</p>
                  )}
                </div>
                <div className="flex items-center justify-end">
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline"
                    passHref
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full text-white bg-cyan-800 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?
                  <Link
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline"
                    passHref
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;
