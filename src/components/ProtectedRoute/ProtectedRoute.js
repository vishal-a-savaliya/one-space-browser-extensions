import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
function ProtectedRoute({ children }) {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate replace to={"/"} />;
  }
  return children;
}
export default ProtectedRoute;
