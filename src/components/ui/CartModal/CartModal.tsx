import { FC } from "react";
import Close from "../../../assets/close.svg";
import styles from "./CartModal.module.css";
import Table from "../Table/Table";
import { useNavigate } from "react-router-dom";

interface Props {
  handleShowCartModal: () => void;
}

export const CartModal: FC<Props> = ({ handleShowCartModal }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/checkout");
    handleShowCartModal(); // Apenas toque el cehcout se cierre el modal y nos lleve a esa pagina
  };

  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
        <img src={Close} alt="Close" />
      </button>
      {/* tabla */}
      <Table />
      <div className={styles.modalButtonContainer}>
        <button onClick={handleNavigate}>Checkout</button>
      </div>
    </div>
  );
};
