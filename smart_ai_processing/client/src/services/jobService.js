import handleError from "./handleError";
import { publicApi } from "../api/publicApi";
import { privateApi } from "../api/privateApi";

const jobService = {
  getAllJobs: async () => {
    return publicApi
      .get("/jobs")
      .then((res) => res.data)
      .catch(handleError);
  },

  getJobByID: async (id) => {
    return publicApi
      .get(`/jobs/${id}`)
      .then((res) => res.data)
      .catch(handleError);
  },

  applyToJob: async (id) => {
    return privateApi
      .post(`/jobs/${id}/apply`)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  getSeekerApplications: async () => {
    return privateApi
      .get("/seeker/applications")
      .then((res) => res.data)
      .catch(handleError);
  },

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

  getEmployerJobApplications: async (id) => {
    return privateApi
      .get(`/employer/jobs/${id}/applications`)
      .then((res) => res.data)
      .catch(handleError);
  },

  updateApplicationStatus: async (id, formData) => {
    return privateApi
      .put(`/employer/jobs/${id}/applications`, formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },
};

export default jobService;
