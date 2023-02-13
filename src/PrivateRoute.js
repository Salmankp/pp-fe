import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const { userInfo } = useSelector(state => state.loggedInUser);
  const { data } = userInfo;

  if (!data) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/" state={{ from: history.location }} />;
  }

  // authorized so return child components
  return children;
}
