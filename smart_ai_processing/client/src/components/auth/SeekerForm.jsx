import WebLogo from "../WebLogo";
import {
  seekerRegisterForm as formData,
  seekerRegisterControl as formControl,
} from "@/config";

import { Card } from "@/components/ui/card";
import { newValidationSchema } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";
import InputForm from "@/components/form/InputForm";
import { Link, useNavigate } from "react-router-dom";
import ButtonForm from "@/components/form/ButtonForm";
import { useFormSchema } from "@/hooks/useFormSchema";

const SeekerForm = () => {
  const navigate = useNavigate();
  const { seekerRegister, loading } = useAuthStore();
  const validation = newValidationSchema(formControl);
  const formik = useFormSchema(formData, validation, seekerRegister, navigate);

  return (
    <Card className="w-full max-w-lg p-4 space-y-6">
      <div className="text-center">
        <WebLogo />
      </div>
      <InputForm formik={formik} formControl={formControl}>
        <ButtonForm formik={formik} loading={loading} title={"Login"} />
      </InputForm>
      <div className="text-center text-sm">
        Already have an account ? login{" "}
        <Link to="/auth/login" className="text_button">
          here
        </Link>
      </div>
    </Card>
  );
};

export default SeekerForm;
