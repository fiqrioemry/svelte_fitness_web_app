/* eslint-disable react/prop-types */
import {
  MapPin,
  Users,
  Flame,
  Briefcase,
  Bookmark,
  SlashSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { formatTimeAgo } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const JobList = ({ job }) => {
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
            <div className="flex items-center space-x-4">
              <h5>{job.title}</h5>
              <span className="text-xs">{formatTimeAgo(job.created_at)}</span>
            </div>

            <Link
              className="text-xs font-medium text-gray-700"
              to={`/companies/${job.company_id}/detail`}
            >
              {job.company_name}
            </Link>

            <div className="flex space-x-6 text-sm text-gray-700">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-gray-500" /> {job.location}
              </div>
              <div className="flex items-center text-green-500 ">
                <Users className="w-4 h-4 mr-1" />
                pelamar : {job.total_applications}
              </div>
              <div className="flex items-center text-red-500 ">
                <Flame className="w-4 h-4 mr-1" />
                {job.type}
              </div>
              <div className="flex items-center text-blue-500">
                <SlashSquare className="w-4 h-4 mr-1" />
                {job.salary || "Rp. 7.500.000"}
              </div>
              <div className="flex items-center text-blue-500">
                <Briefcase className="w-4 h-4 mr-1" />
                {job.experience}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button>Apply Job</Button>
          <Bookmark />
        </div>
      </div>
    </div>
  );
};

export default JobList;
