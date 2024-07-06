import { useEffect, useState } from "react";
import Hero from "../../components/ui/Hero/Hero";
import styles from "./Home.module.css";
import { getProducts } from "../../service";
import { Product } from "../../interface";
import { CardProduct } from "../../components/ui/CardProduct";
import { Toaster } from "sonner";
import { useQuery } from "react-query";

const Home = () => {
  const [page, setPage] = useState(1);

  // const { data, isLoading, error } = useQuery("products", getProducts);
  const { data, isLoading, error } = useQuery(
    ["products", page],
    () => getProducts(page),
    { keepPreviousData: true }
  );

  // const [products, setProducts] = useState<Product[]>([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getProducts()
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.container}>
        {/* {products.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))} */}
        {data?.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button
          onClick={() => setPage(page - 1)}
          className={styles.paginationButton}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button
          onClick={() => setPage(page + 1)}
          className={styles.paginationButton}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default Home;
