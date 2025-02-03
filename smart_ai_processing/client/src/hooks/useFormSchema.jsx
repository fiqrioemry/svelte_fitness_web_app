import { useFormik } from "formik";

export const useFormSchema = (form, validation, action, navigate) => {
  return useFormik({
    initialValues: form,
    validationSchema: validation,
    onSubmit: (values) => {
      action(values, navigate);
    },
  });
};
