import { formatReadableDate } from "../../lib/utils";

/* eslint-disable react/prop-types */
const JobApplicationCard = ({ application }) => {
  const {
    company_name,
    created_at,
    job_location,
    job_title,
    status,
    total_applications,
  } = application;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-3xl border border-gray-200 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row md:items-center w-full">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800">{job_title}</h2>
          <p className="text-gray-600 text-sm">
            {company_name} • {job_location}
          </p>
          <span className="text-sm text-gray-500">
            Dibuat: {formatReadableDate(created_at)}
          </span>
        </div>
        <div className="flex items-center mt-3 md:mt-0 md:ml-4">
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              status === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="mt-3 md:mt-0 md:ml-4 flex items-center">
        <span className="text-sm text-gray-700 mr-4">
          Total Pelamar: <strong>{total_applications}</strong>
        </span>
        <button className="px-4 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default JobApplicationCard;
