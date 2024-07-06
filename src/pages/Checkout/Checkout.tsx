import CardCredit from "../../components/ui/CardCredit/CardCredit";
import Table from "../../components/ui/Table/Table";
import styles from "./Checkout.module.css";
import { Toaster } from "sonner";

function Checkout() {
  return (
    <div className={styles.container}>
      <Toaster richColors visibleToasts={1} />
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
      {/* <button className={styles.buyButton}>Buy Now</button> */}
    </div>
  );
}

export default Checkout;
