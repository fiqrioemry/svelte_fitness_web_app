import { MapPin, Users, Flame, Briefcase } from "lucide-react";

const CompanyList = () => {
  return (
    <div className="max-w-full bg-white rounded-2xl shadow-lg overflow-hidden border p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://placehold.co/400x400"
            alt="Company Logo"
            className="w-16 h-16 rounded-lg"
          />
          <div> 
            <h2 className="text-lg font-semibold text-gray-900">
              Zentar Healthcare
            </h2>
            <p className="text-gray-700 text-sm max-w-lg">
              Zentar Healthcare is a trusted staffing agency specializing in
              providing highly skilled healthcare professionals to hospitals,
              clinics, and care homes across the U...
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            More
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm">
            1 Open Job
          </button>
        </div>
      </div>
      <div className="flex space-x-6 text-sm text-gray-700">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1 text-gray-500" /> London
        </div>
        <div className="flex items-center text-red-500">
          <Flame className="w-4 h-4 mr-1" /> Live Job: 1
        </div>
        <div className="flex items-center text-green-500">
          <Users className="w-4 h-4 mr-1" /> 21-50
        </div>
        <div className="flex items-center text-blue-500">
          <Briefcase className="w-4 h-4 mr-1" /> Healthcare
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
