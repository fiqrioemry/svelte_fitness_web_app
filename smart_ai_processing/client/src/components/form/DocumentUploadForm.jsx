/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Edit } from "lucide-react";

const DocumentUploadForm = ({ buttonTitle, inputName, action, loading }) => {
  return (
    <div>
      <label className="cursor-pointer flex items-center space-x-2">
        <input
          id="file"
          name={inputName}
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={action}
          disabled={loading}
        />
        <Edit className="text-blue-600" size={20} />
      </label>
    </div>
  );
};

export default DocumentUploadForm;
