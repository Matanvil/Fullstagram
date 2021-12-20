const logoutUser = async () => {
    const response = await fetch("http://localhost:4000/api/users/logout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
}

export default logoutUser