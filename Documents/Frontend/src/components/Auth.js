import { Navigate } from "react-router-dom";

export default function Auth({ children }) {
  if (sessionStorage.getItem("isLoggedIn")) return children;
  else return <Navigate to="/signup" />;
}
