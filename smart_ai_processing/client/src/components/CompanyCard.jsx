import { MapPin, Users, Flame, Briefcase } from "lucide-react";
const CompanyCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border">
      <div
        className="h-40 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://placehold.co/400x400)",
        }}
      ></div>

      <div className="p-4">
        <div className="flex items-center mb-3">
          <img
            src="https://placehold.co/400x400"
            alt="Company Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-3 text-lg font-semibold text-gray-800">
            Zentar Healthcare
          </span>
        </div>

        <p className="text-gray-700 text-sm">
          Zentar Healthcare is a trusted staffing agency specializing in
          providing highly skilled healthcare...
        </p>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex items-center bg-gray-100 text-gray-700 text-sm px-3 py-2 rounded-lg">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" /> London
          </div>
          <div className="flex items-center bg-red-100 text-red-700 text-sm px-3 py-2 rounded-lg">
            <Flame className="w-4 h-4 mr-2 text-red-500" /> Live Job: 1
          </div>
          <div className="flex items-center bg-green-100 text-green-700 text-sm px-3 py-2 rounded-lg">
            <Users className="w-4 h-4 mr-2 text-green-500" /> 21-50
          </div>
          <div className="flex items-center bg-blue-100 text-blue-700 text-sm px-3 py-2 rounded-lg">
            <Briefcase className="w-4 h-4 mr-2 text-blue-500" /> Healthcare
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 border-t">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          More
        </button>
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm">
          1 Open Job
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
