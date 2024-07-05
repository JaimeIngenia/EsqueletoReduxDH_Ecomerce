import Cards from "react-credit-cards-2";
import styles from "./CardCredit.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";

export default function CardCredit() {
  return (
    <div className={styles.container}>
      <div>
        {/* cards */}
        <Cards number={""} name={""} expiry={""} cvc={""} focused={""} />
      </div>
      <form>
        <div className={styles.formControl}>
          <label htmlFor="number"> Card Number</label>
          <input type="text" name="number" id="number" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="name">Card Name</label>
          <input type="text" name="name" id="name" />
        </div>
        {/* Grupo */}
        <div className={styles.formInputGrup}>
          <div className={styles.formControl}>
            <label htmlFor="expiry">Card Expiry</label>
            <input type="text" name="expiry" id="expiry" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="cvc">Card CVC</label>
            <input type="text" name="cvc" id="cvc" />
          </div>
        </div>
        <button className={styles.buyButton}>Buy Now</button>
      </form>
    </div>
  );
}
