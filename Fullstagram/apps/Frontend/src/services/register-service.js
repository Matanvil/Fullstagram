const registerUser = async (userInfo) => {
  const response = await fetch("http://localhost:4000/api/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  const data = await response.json();
  console.log(data);
};

export default registerUser;
