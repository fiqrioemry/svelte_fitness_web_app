import Login from "./pages/auth/Login";
import JobLists from "./pages/JobLists";
import Companies from "./pages/Companies";
import JobDetail from "./pages/JobDetail";
import Register from "./pages/auth/Register";
import { Routes, Route } from "react-router-dom";
import CompanyDetail from "./pages/CompanyDetail";
import MainLayout from "./components/layout/MainLayout";
import SeekerSettings from "./pages/seeker/SeekerSettings";
import EmployerJobs from "./pages/employer/EmployerJobs";
import EmployerSetting from "./pages/employer/EmployerSetting";
import DashboardLayout from "./components/layout/DashboardLayout";
import SeekerApplications from "./pages/seeker/SeekerApplications";
import { NonAuthRoute, SeekerRoute, EmployerRoute } from "./middleware";
import EmployerApplications from "./pages/employer/EmployerApplications";
import Home from "./pages/Home";
import SeekerNotifications from "./pages/seeker/SeekerNotifications";
import DownloadProgress from "./pages/DownloadProgress";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<NonAuthRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<JobLists />} />
          <Route path="downloads" element={<DownloadProgress />} />

          <Route path="jobs/:id" element={<JobDetail />} />
          <Route path="companies" element={<Companies />} />
          <Route path="companies/{id}/detail" element={<CompanyDetail />} />
        </Route>

        <Route
          path="employer"
          element={
            <EmployerRoute>
              <DashboardLayout />
            </EmployerRoute>
          }
        >
          <Route path="jobs" element={<EmployerJobs />} />
          <Route path="settings" element={<EmployerSetting />} />
          <Route path="applications" element={<EmployerApplications />} />
        </Route>

        <Route
          path="seeker"
          element={
            <SeekerRoute>
              <DashboardLayout />
            </SeekerRoute>
          }
        >
          <Route path="settings" element={<SeekerSettings />} />
          <Route path="applications" element={<SeekerApplications />} />
          <Route path="notifications" element={<SeekerNotifications />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
