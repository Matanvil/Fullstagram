import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import "../Dist/newPost.css";

const NewPostInfo = () => {
  const myPhotoLink = useSelector(state => state.post.image)
  return (
    <Modal>
      <div>
      <div className="top-header"> Please add some information</div>
      <div className='newpost-information'>
        <div>
        <img className='my-photo' src={myPhotoLink} />
        </div>
        <aside>
          <div>some information</div>
          <div>some location</div>
        </aside>
      </div>
      </div>
    </Modal>
  );
};
export default NewPostInfo;
