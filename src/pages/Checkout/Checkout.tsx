import CardCredit from "../../components/ui/CardCredit/CardCredit";
import Table from "../../components/ui/Table/Table";
import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>
        <div>
          <Table />
        </div>
        <div>
          {/* formulario de la tarjeta */}
          <CardCredit />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
