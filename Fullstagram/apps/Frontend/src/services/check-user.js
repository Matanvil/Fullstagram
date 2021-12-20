import { useNavigate } from "react-router-dom";



const checkUser = async () => {
 
  const navigate = useNavigate();
  
  const response = await fetch("/api/users/me");
  const data = await response.json();
  
  if (data.status === 401) {
    navigate("/login");
  }
};
export default checkUser;
