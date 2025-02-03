import { useEffect } from "react";
import { formatFormDataDates } from "@/lib/utils";

export const useSetFormData = (data, formik) => {
  useEffect(() => {
    const dateFields = [];

    if (data?.birthday) {
      dateFields.push("birthday");
    }
    if (data?.start_date) {
      dateFields.push("start_date");
    }
    if (data?.end_date) {
      dateFields.push("end_date");
    }

    const formattedDates = formatFormDataDates(data, dateFields);

    formik.setValues({
      ...data,
      ...formattedDates,
    });
  }, [data]);
};
