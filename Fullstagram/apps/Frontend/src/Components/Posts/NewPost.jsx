import Modal from "../../UI/Modal";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../../store/post-slice";
import { useNavigate } from "react-router-dom";
import "../../Dist/newPost.css";
import dragImg from "../../assets/drag-and-drop.png";
import fetchImg from "../../services/uploadImage";

const NewPost = () => {
  const dispatch = useDispatch();
  const myPhotoLink = useSelector((state) => state.post.image);
  const navigate = useNavigate();
  const uploadImage = async () => {
    const fileInput = document.querySelector("#file");
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    const myImageLink = await fetchImg(formData);
    dispatch(postActions.addImage({ image: myImageLink }));
  };

  const onContinueHandler = (event) => {
    navigate("/create/post-info")
  }

  let content;

  if (myPhotoLink) {
    content = (
      <Fragment>
        <div className="top-header">
          Create new post
          <Button variant="contained" type="button" className="continue-btn" onClick={onContinueHandler}>
            Continue
          </Button>
        </div>
        <div className="center-section">
          <img className='my-photo' src={myPhotoLink} />
        </div>
      </Fragment>
    );
  } else {
    content = (
      <Fragment>
        <div className="top-header"> Create new post</div>
        <div className="center-section">
          <p className="main-content">Drag Photos and Videos here to upload</p>
          <img src={dragImg} height={150} width={150} />
          <Button variant="contained" type="button" className="add-btn">
            <input
              type="file"
              name="file"
              id="file"
              className="inputfile"
              onChange={uploadImage}
            />
            <label htmlFor="file"> Select from computer </label>
          </Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Modal>
      <div>
       {content}
      </div>
    </Modal>
  );
};

export default NewPost;
