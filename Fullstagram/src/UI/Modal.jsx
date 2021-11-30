import { Fragment } from "react";
import ReactDom from "react-dom";
import "../Dist/modal.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";


const Backdrop = (props) => {
    const dispatch = useDispatch();
    
    const closeModalHandler = (event) => {
      dispatch(uiActions.HideModal());
    };
    
  return <div className="backdrop" onClick={closeModalHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClick} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
