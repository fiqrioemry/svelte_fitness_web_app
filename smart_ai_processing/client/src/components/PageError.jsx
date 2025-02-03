import { Loader } from "lucide-react";

const PageError = () => {
  return (
    <div className="min-h-svh flex items-center justify-center">
      <Loader size={40} className="animate-spin" />
    </div>
  );
};

export default PageError;
