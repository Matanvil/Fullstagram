const postUpload = async (post) => {
  const newPost = {
    description: post.description,
    tags: post.tags,
    image: post.image,
    location: post.location,
  };
  const response = await fetch("http://localhost:4000/api/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      user: "Matan Vilensky",
    },
    body: JSON.stringify(newPost),
  });
  const data = await response.json();
};

export default postUpload;
