import { useNavigate } from "react-router-dom";
const checkUser = async () => {
  const navigate = useNavigate();
  const response = await fetch("http://localhost:4000/api/users/me");
  const data = await response.json();
  // if (data.err) {
  //   navigate("/login");
  // }
};
export default checkUser;
