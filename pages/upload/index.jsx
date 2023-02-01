import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const ImageUpload = () => (
  <Formik
    initialValues={{
      image_title: "",
      artist_name: "",
      description: "",
      file: "",
    }}
    validationSchema={Yup.object().shape({
      image_title: Yup.string()
        .max(64, "title can not exceed 64 chatacters")
        .required("Required"),
      artist_name: Yup.string()
        .max(64, "name can not exceed 64 chatacters")
        .required("Required"),
      description: Yup.string()
        .max(200, "description can not exceed 200 characters")
        .required("Required"),
      file: Yup.mixed()
        .required("File is required")
        .test(
          "fileSize",
          "File too large",
          (value) => value && value.size <= 1024 * 1024
        )
        .test(
          "fileFormat",
          "Unsupported Format",
          (value) => value && SUPPORTED_FORMATS.includes(value.type)
        ),
    })}
    onSubmit={(values, { resetForm }) => {
      setTimeout(() => {
        console.log(values);
        console.log(values.file.size);
        resetForm({ values: null });
      }, 1000);
    }}
  >
    {({ isSubmitting, setFieldValue, errors }) => (
      <div className="">
        <section className="py-12">
          <div className="flex flex-col items-center justify-center mt-20 mx-auto lg:py-0 h-screen">
            <div className="w-full bg-teal-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 px-5 py-6">
              <div className="space-y-4 md:space-y-2 sm:p-8">
                <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Upload Image
                </h1>
                <Form className="space-y-4 md:space-y-3">
                  <label
                    htmlFor="image_title"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Image Title
                  </label>
                  <Field
                    type="text"
                    name="image_title"
                    id="image_title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-cyan-900 focus:border-cyan-900 block w-full p-2.5"
                    placeholder="Please enter the image title"
                  />
                  {errors.file && <p>{errors.image_title}</p>}
                  <label
                    htmlFor="artist_name"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Artist Name
                  </label>
                  <Field
                    type="text"
                    name="artist_name"
                    id="artist_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-cyan-900 focus:border-cyan-900 block w-full p-2.5"
                    placeholder="Please enter the image title"
                  />
                  {errors.file && <p>{errors.artist_name}</p>}
                  <label
                    htmlFor="description"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <Field
                    type="text"
                    name="description"
                    id="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-cyan-900 focus:border-cyan-900 block w-full p-2.5"
                    placeholder="Please enter the image title"
                  />
                  {errors.file && <p>{errors.description}</p>}
                  <label
                    htmlFor="file"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-teal-600 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-1 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload </span>
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF
                      </p>
                    </div>
                  </label>
                  <input
                    id="file"
                    className="hidden"
                    type="file"
                    name="file"
                    onChange={(event) => {
                      setFieldValue("file", event.target.files[0]);
                    }}
                  />
                  {errors.file && <p>{errors.file}</p>}
                  <button
                    className="w-full text-white bg-cyan-800 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Upload File
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )}
  </Formik>
);

export default ImageUpload;
