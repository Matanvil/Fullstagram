const loginUser = async (email, password) => {
  const user = {
    email,
    password,
  };
  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("login failed");
  }
};

export default loginUser;
