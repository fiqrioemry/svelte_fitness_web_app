/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useProvider } from "../context/GlobalProvider";

export const EmployerRoute = ({ children }) => {
  const { isAuthenticate, user } = useProvider();

  if (!isAuthenticate || user?.role !== "employer") {
    return <Navigate to="/" />;
  }

  return <Fragment>{children}</Fragment>;
};

export const SeekerRoute = ({ children }) => {
  const { isAuthenticate, user } = useProvider();

  if (!isAuthenticate || user?.role !== "seeker") {
    return <Navigate to="/" />;
  }

  return <Fragment>{children}</Fragment>;
};

export const NonAuthRoute = () => {
  const { isAuthenticate } = useProvider();

  if (isAuthenticate === true) {
    return <Navigate to="/" />;
  }

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
