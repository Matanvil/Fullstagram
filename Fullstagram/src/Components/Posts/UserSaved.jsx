const DUMMY_SAVED = [
  {
    id: "pic1",
    img: "http://newnation.sg/wp-content/uploads/random-pic-internet-22.jpg",
  },
  {
    id: "pic2",
    img: "https://image.shutterstock.com/image-photo/random-photo-very-active-child-260nw-283928318.jpg",
  },
];

const UserSaved = () => {
  return (
    <ul className="user-posts-list">
      {DUMMY_SAVED.map((post) => (
        <li className="user-post-item" key={post.id}>
          {<img src={post.img} />}
        </li>
      ))}
    </ul>
  );
};

export default UserSaved;
