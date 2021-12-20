const logoutUser = async () => {
    const response = await fetch("/api/users/logout", {
        method: "POST",
      });
      const data = await response.json();
      console.log(data);
}

export default logoutUser