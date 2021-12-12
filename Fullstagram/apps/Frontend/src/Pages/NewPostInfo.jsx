import Modal from "../UI/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import uploadPost from "../services/uploadPost";
import "../Dist/newPost.css";

const NewPostInfo = () => {
  const navigate = useNavigate();
  const [descriptionInput, setDescriptionInput] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const myPhotoLink = useSelector((state) => state.post.image);

  const descriptionInputHandler = (event) => {
    setDescriptionInput(event.target.value);
  };
  const tagsInputHandler = (event) => {
    setTagsInput(event.target.value);
  };
  const locationInputHandler = (event) => {
    setLocationInput(event.target.value);
  };

  const submitPost = async (event) => {
    console.log("Post submmited");
    const newPost = {
      description: descriptionInput,
      tags: tagsInput,
      location: locationInput,
      image: myPhotoLink,
    };
    try {
      await uploadPost(newPost);
    } catch (err) {
      console.log(err);
    }

    navigate("/feed");
  };
  return (
    <Modal>
      <div>
        <div className="top-header">
          <input
            placeholder="Post description"
            type="text"
            value={descriptionInput}
            onChange={descriptionInputHandler}
          ></input>
        </div>
        <div className="newpost-information">
          <div>
            <img className="my-photo" src={myPhotoLink} />
          </div>
          <div className="newpost-additional">
            <div>
              <input
                placeholder="Tags#"
                type="text"
                value={tagsInput}
                onChange={tagsInputHandler}
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="Location"
                value={locationInput}
                onChange={locationInputHandler}
              ></input>
            </div>
          </div>
          <Button
            variant="contained"
            type="button"
            className="continue-btn"
            onClick={submitPost}
          >
            Submit Post
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default NewPostInfo;
