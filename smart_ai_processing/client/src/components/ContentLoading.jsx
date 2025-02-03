import { Loader } from "lucide-react";

const ContentLoading = () => {
  return (
    <div className="h-full backdrop:flex items-center justify-center">
      <Loader size={40} className="animate-spin" />
    </div>
  );
};

export default ContentLoading;
