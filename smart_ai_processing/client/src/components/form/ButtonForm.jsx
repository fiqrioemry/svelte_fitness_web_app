/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const ButtonForm = ({ formik, title, loading }) => {
  return (
    <Button
      type="submit"
      className="w-full"
      disabled={!((formik.isValid && formik.dirty) || loading)}
    >
      {loading ? <Loader className="animate-spin" /> : title}
    </Button>
  );
};

export default ButtonForm;
