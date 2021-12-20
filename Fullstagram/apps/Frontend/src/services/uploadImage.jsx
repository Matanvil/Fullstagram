const fetchImg = async (formData) => {
  try {
     const response = await fetch("http://localhost:4000/api/posts", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  const myImg = data.secure_url;
  return myImg
  } catch (err) {
    if (response.status === 401) {
      console.log('Unauthorized user, Please log In' + err.message);
    }

  }
 
};

export default fetchImg;
