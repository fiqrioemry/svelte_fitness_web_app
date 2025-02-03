/* eslint-disable react/prop-types */
import {
  Calendar,
  MapPin,
  Briefcase,
  Bookmark,
  SlashSquare,
  Flame,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import { formatTimeAgo } from "@/lib/utils";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border">
      <div className="flex items-center p-4 border-b">
        <img
          src="https://placehold.co/400x400"
          alt="Company Logo"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h5>{job.title}</h5>
          <Link
            className="text-xs font-medium text-gray-700"
            to={`/companies/${job.company_id}/detail`}
          >
            {job.company_name}
          </Link>
        </div>
      </div>
      <div className="space-y-4 p-4 border-b">
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex text-xs items-center">
            <MapPin className="w-4 h-4 mr-1 text-gray-500" /> {job.location}
          </div>
          <div className="flex  text-xs items-center text-red-500">
            <Flame className="w-4 h-4 mr-1" />
            pelamar : {job.total_applications}
          </div>
          <div className="flex text-xs items-center text-green-500">
            <Users className="w-4 h-4 mr-1" /> {job.type}
          </div>
          <div className="flex text-xs items-center text-blue-500">
            <SlashSquare className="w-4 h-4 mr-1" />
            {job.salary || "Rp. 7.500.000"}
          </div>
          <div className="flex text-xs items-center text-blue-500">
            <Briefcase className="w-4 h-4 mr-1" />
            {job.experience}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center text-xs space-x-2">
            <Calendar className="w-4 h-4 mr-1  text-yellow-500" />
            <span>{formatTimeAgo(job.created_at)}</span>
          </div>

          <Bookmark className=" text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
