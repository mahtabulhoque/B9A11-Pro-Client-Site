import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, []); 

  if (isLoading || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/logIn" state={location.pathname} replace={true}/>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
