import handleError from "./handleError";
import { privateApi } from "../api/privateApi";

const employerService = {
  createJob: async (formData) => {
    return privateApi
      .post("/employer/jobs", formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  updateJob: async (id, formData) => {
    return privateApi
      .put(`/employer/jobs/${id}`, formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  deleteJob: async (id) => {
    return privateApi
      .delete(`/employer/jobs/${id}`)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  getAllEmployerPostedJobs: async () => {
    return privateApi
      .get("/employer/jobs")
      .then((res) => res.data)
      .catch(handleError);
  },

  getProfile: async () => {
    return privateApi
      .get("/employer/profile")
      .then((res) => res.data)
      .catch(handleError);
  },

  updateProfile: async (formData) => {
    return privateApi
      .put("/employer/profile", formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  updateApplicationStatus: async (jobId, formData) => {
    return privateApi
      .put(`/employer/jobs/${jobId}/applications`, formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  getEmployerJobApplications: async (jobId) => {
    return privateApi
      .get(`/employer/jobs/${jobId}/applications`)
      .then((res) => res.data)
      .catch(handleError);
  },
};

export default employerService;
