import { Link } from "react-router-dom";
import WebLogo from "@/components/WebLogo";
import { Card } from "@/components/ui/card";
import { newValidationSchema } from "@/lib/utils";
import InputForm from "@/components/form/InputForm";
import { useAuthStore } from "@/store/useAuthStore";
import ButtonForm from "@/components/form/ButtonForm";
import { useFormSchema } from "@/hooks/useFormSchema";
import { loginForm as formData, loginControl } from "@/config";

const Login = () => {
  const { userLogin, loading } = useAuthStore();
  const validation = newValidationSchema(["email", "password"]);
  const loginForm = useFormSchema(formData, validation, userLogin);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-xs p-4 space-y-6">
        <div className="text-center">
          <WebLogo />
        </div>
        <InputForm formik={loginForm} formControl={loginControl}>
          <ButtonForm title={"login"} formik={loginForm} loading={loading} />
        </InputForm>
        <div className="text-center text-sm">
          Dont have an account ? register{" "}
          <Link to="/auth/register" className="text_button">
            here
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
