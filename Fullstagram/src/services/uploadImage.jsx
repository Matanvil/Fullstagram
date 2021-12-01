const fetchImg = async (formData) => {
  const response = await fetch("http://localhost:4000/api/upload", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  const myImg = data.secure_url;
  return myImg
};

export default fetchImg;
