import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchValidationSchema = Yup.object().shape({
  searchTerm: Yup.string().trim().required("This field is required!"),
});

const MainSearch = () => {
  const handleSearch = (term) => {
    console.log("search term", term);
  };

  return (
    <Formik
      validationSchema={SearchValidationSchema}
      initialValues={{ searchTerm: "" }}
      onSubmit={handleSearch}
    >
      {({ values, handleChange, handleSubmit }) => {
        console.log("values", values);
        return (
          <Form className="relative flex flex-1 w-full" onSubmit={handleSubmit}>
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <MagnifyingGlassIcon
              className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name={values.searchTerm}
              onChange={handleChange}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default MainSearch;
