import {useState} from "react";
import Check from "./components/Check/check";
import Confirm from "./components/Confirm/confirm";
import Modal from "./components/Modal/modal";

interface Props {
  onClose: () => void;
}

const Cart = (props: Props) => {
  const [confirmIsClicked, setConfirmIsClicked] = useState(true);
  const showConfirmHandler = () => {
    setConfirmIsClicked(false);
  };

  return (
    <Modal onClose={props.onClose}>
      {confirmIsClicked ? (
        <Check onClick={showConfirmHandler} />
      ) : (
        <Confirm onClose={props.onClose} />
      )}
    </Modal>
  );
};
export default Cart;
