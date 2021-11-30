import Modal from "../../UI/Modal";
import Button from "@mui/material/Button";
import "../../Dist/newPost.css";
import dragImg from "../../assets/drag-and-drop.png";

const NewPost = () => {
  const addFileHandler = (event) => {
    const selectedFile = event.target.files[0];
    return selectedFile;
  };

  const uploadImage = async (event) => {
    try {
      const myFile = JSON.stringify(event.target.files[0]);
      await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: { photo: myFile },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal>
      <div>
        <div className="top-header"> Create new post</div>
        <div className="center-section">
          <p className="main-content">Drag Photos and Videos here to upload</p>
          <img src={dragImg} height={150} width={150} />

          <Button
            variant="contained"
            type="button"
            className="add-btn"
            // onClick={uploadImage}
          >
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
      </div>
    </Modal>
  );
};

export default NewPost;
