import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Product } from "../../interface";
import { createProduct } from "../../service";
import { toast } from "sonner";
import { Toaster } from "sonner";

function Dashboard() {
  const [product, setProduct] = useState({
    amiiboSeries: "",
    character: "",
    gameSeries: "",
    head: "",
    image: "",
    name: "",
    releaseDate: "",
    tail: "",
    type: "",
    price: 0,
  });

  const navigate = useNavigate();

  // validar cuando se carga la pagina saber si existe

  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin");

    if (!userLogin) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };
  const handleCahnge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const mutation = useMutation((newProduct: Product) => {
    return createProduct(newProduct);
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(product);
    mutation.mutate(product);

    setProduct({
      amiiboSeries: "",
      character: "",
      gameSeries: "",
      head: "",
      image: "",
      name: "",
      releaseDate: "",
      tail: "",
      type: "",
      price: 0,
    });

    toast.success("Product added");
  };

  return (
    <div className={styles.container}>
      <Toaster richColors visibleToasts={1} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Amiibo Series */}
        <div className={styles.formControlLogin}>
          <label htmlFor="amiiboSeries">Amiibo Series</label>
          <input
            type="text"
            id="amiiboSeries"
            name="amiiboSeries"
            value={product.amiiboSeries}
            onChange={handleCahnge}
            required
          />
        </div>
        {/* Character */}
        <div className={styles.formControlLogin}>
          <label htmlFor="character">Characters</label>
          <input
            type="text"
            id="character"
            name="character"
            value={product.character}
            onChange={handleCahnge}
            required
          />
        </div>
        {/* Game Series */}
        <div className={styles.formControlLogin}>
          <label htmlFor="gameSeries">Game Series</label>
          <input
            type="text"
            id="gameSeries"
            name="gameSeries"
            value={product.gameSeries}
            onChange={handleCahnge}
            required
          />
        </div>
        {/* head */}
        <div className={styles.formControlLogin}>
          <label htmlFor="head">Head</label>
          <input
            type="text"
            id="head"
            name="head"
            value={product.head}
            onChange={handleCahnge}
            required
          />
        </div>
        {/* image */}
        <div className={styles.formControlLogin}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            id="image"
            name="image"
            value={product.image}
            onChange={handleCahnge}
            required
          />
        </div>
        {/* image */}
        <div className={styles.formControlLogin}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleCahnge}
            required
          />
        </div>
        {/* release // fecha de lanzamiento */}
        <div className={styles.formControlLogin}>
          <label htmlFor="releaseDate">Release</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={product.releaseDate}
            onChange={handleCahnge}
            required
          />
        </div>
        {/* Tail */}
        <div className={styles.formControlLogin}>
          <label htmlFor="tail">Tail</label>
          <input
            type="text"
            id="tail"
            name="tail"
            value={product.tail}
            onChange={handleCahnge}
            required
          />
        </div>
        {/* type */}
        <div className={styles.formControlLogin}>
          <label htmlFor="type">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={product.type}
            onChange={handleCahnge}
            required
          />
        </div>
        {/* price  */}
        <div className={styles.formControlLogin}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleCahnge}
            required
          />
        </div>
        <div className={styles.formControlLogin}>
          <button type="submit">Add product</button>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
