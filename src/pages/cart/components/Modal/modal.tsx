import {
  Fragment,
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
} from "react";
import classes from "./Modal.module.css";

const BackDrop = (props: {
  onClose: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props: {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props: {
  onClose: MouseEventHandler<HTMLDivElement> | undefined;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}) => {
  return (
    <Fragment>
      <BackDrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
