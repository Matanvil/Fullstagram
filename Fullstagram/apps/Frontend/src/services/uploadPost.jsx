const postUpload = async (post) => {
  const response = await fetch("http://localhost:4000/api/posts", {
    method: "POST",
    headers: {
      user: "Matan Vilensky",
    },
    body: JSON.stringify({
      description: post.description,
      tags: post.tags,
      image: post.image,
      location: post.location,
    }),
  });
  const data = await response.json();
  console.log(post)
  console.log(data);
};

export default postUpload;
