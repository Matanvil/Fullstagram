const DUMMY_TAGGED = [
    {
      id: "pic1",
      img: "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
    },
    {
      id: "pic2",
      img: "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg",
    },
  ];
  
  const UserTagged = () => {
    return (
      <ul className="user-posts-list">
        {DUMMY_TAGGED.map((post) => (
          <li className="user-post-item" key={post.id}>
            {<img src={post.img} />}
          </li>
        ))}
      </ul>
    );
  };
  
  export default UserTagged;