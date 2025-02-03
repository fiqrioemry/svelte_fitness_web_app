import { clsx } from "clsx";
import * as Yup from "yup";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDateToISO(date) {
  if (date && !isNaN(new Date(date))) {
    return new Date(date).toISOString().split("T")[0];
  }
  return "";
}

export function formatFormDataDates(data, dateFields = []) {
  const formattedDates = {};

  dateFields.forEach((field) => {
    if (data[field]) {
      formattedDates[field] = formatDateToISO(data[field]);
    }
  });

  return formattedDates;
}
export function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000)
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
}

export function formatReadableDate(
  date,
  locale = "en-US",
  options = { day: "numeric", month: "long", year: "numeric" }
) {
  if (!date) return "";
  return new Date(date).toLocaleDateString(locale, options);
}

const baseValidations = {
  email: Yup.string().email("is not valid").required("is required"),
  password: Yup.string()
    .min(6, "must be min. 6 characters")
    .required("is required"),
  name: Yup.string()
    .min(6, "must be min. 6 characters")
    .required("is required"),
  location: Yup.string().required("is required"),
  bio: Yup.string()
    .min(6, "must be min. 20 characters")
    .required("is required"),
  birthday: Yup.date()
    .max(new Date(), "Birthday cannot be in the future")
    .required("is required")
    .typeError("must be a valid date"),
  gender: Yup.string().required("is required"),
  title: Yup.string()
    .min(3, "Title harus minimal 3 karakter")
    .required("Title wajib diisi"),
  company: Yup.string()
    .min(3, "Company harus minimal 3 karakter")
    .required("Company wajib diisi"),
  start_date: Yup.date()
    .required("Start date wajib diisi")
    .typeError("Start date harus berupa tanggal yang valid"),
  end_date: Yup.date()
    .nullable()
    .typeError("End date harus berupa tanggal yang valid")
    .min(Yup.ref("start_date"), "End date tidak boleh sebelum start date"),
};

export const newValidationSchema = (fields = []) => {
  const schemaFields = {};
  fields.forEach((field) => {
    if (baseValidations[field.name]) {
      schemaFields[field.name] = baseValidations[field.name];
    }
  });

  return Yup.object().shape(schemaFields);
};
