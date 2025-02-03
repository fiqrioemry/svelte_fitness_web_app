/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JobCard from "@/components/JobCard";
import JobList from "@/components/JobList";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";
import InputForm from "@/components/form/InputForm";
import { filterControl, filterForm } from "@/config";
import { useFormSchema } from "@/hooks/useFormSchema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JobListsPreview = ({ jobs }) => {
  const formik = useFormSchema(filterForm, null, null, null);

  return (
    <div className="container mx-auto space-y-6 py-6">
      <div className="text-center py-3">
        <h4>Start Searching Your Dream Jobs</h4>
      </div>
      <div className="flex items-center justify-center">
        <InputForm
          formik={formik}
          formControl={filterControl}
          formStyle={"flex items-center space-x-2"}
          inputStyle={"w-[16.5rem]"}
        />
        <Button>Find Jobs</Button>
      </div>
      <div className="px-12">
        <Tabs defaultValue="card">
          <div className="flex justify-between">
            <div>
              <h4>Showing All Jobs</h4>
            </div>
            <div className="flex space-x-6">
              <TabsList className="space-x-4">
                <TabsTrigger value="card">
                  <LayoutGrid size={20} />
                </TabsTrigger>
                <TabsTrigger value="list">
                  <List size={20} />
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center space-x-4">
                <span>Sort by</span>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Newest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Latest">Latest</SelectItem>
                    <SelectItem value="Newest">Newest</SelectItem>
                    <SelectItem value="Popular">Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <TabsContent value="card" className="py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {jobs.map((job) => (
                <JobCard job={job} key={job.id} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list" className="py-6">
            <div className="space-y-6">
              {jobs.map((job) => (
                <JobList job={job} key={job.id} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default JobListsPreview;
