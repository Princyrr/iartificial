import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Contato.module.css";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por: ${formData.nome}`);
    // Aqui você pode enviar os dados para um backend futuramente
  };

  return (
    <>
      <Header /> {/* Header com o espaçamento adequado */}
      <div className={styles.titulo}>
        <h1 className={styles.title}>Entre em Contato</h1> {/* Título com classe para margem */}</div>
      <div className={styles.contatoContainer}>
        
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Mensagem:</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>

      <Footer /> {/* Footer com o espaçamento adequado */}
    </>
  );
}

export default Contato;
