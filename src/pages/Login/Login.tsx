import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //   hacer la validación
    if (userData.email.trim() === "" || userData.password.trim() === "") {
      return;
    }

    // Validar la contraseña con localStorage

    localStorage.setItem("userLogin", JSON.stringify(userData.email));

    navigate("/dashboard");
  };

  return (
    <div className={styles.containerLogin}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className={styles.formControlLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        {/* Password */}
        <div className={styles.formControlLogin}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formControlLogin}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
