/* eslint-disable react/prop-types */
import { Camera } from "lucide-react";

const SingleUploadForm = ({ buttonTitle, inputName, action, loading }) => {
  return (
    <div>
      <input
        id="file"
        name={inputName}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={action}
        disabled={loading}
      />
      <label
        htmlFor="file"
        className={`w-full inline-block text-white font-semibold py-2 px-4 text-center rounded cursor-pointer ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? (
          "Uploading..."
        ) : (
          <div className="flex items-center justify-center gap-4">
            <Camera />
            {buttonTitle}
          </div>
        )}
      </label>
    </div>
  );
};

export default SingleUploadForm;
