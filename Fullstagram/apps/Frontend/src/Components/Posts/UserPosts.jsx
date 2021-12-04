const DUMMY_POSTS = [
  {
    id: "p1",
    img: "https://picsum.photos/id/237/536/354",
  },
  {
    id: "p2",
    img: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  },
];

const UserPosts = () => {
  //   async function getUserPosts() {
  //     const response = await fetch("");
  //     const data = response.json();
  //     return data;
  //   }
  return (
    <ul className="user-posts-list">
      {DUMMY_POSTS.map((post) => (
        <li className="user-post-item" key={post.id}>{<img src={post.img} />}</li>
      ))}
    </ul>
  );
};

export default UserPosts;
