import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            {/* Nome clicável para voltar à Home */}
            <span 
                onClick={() => navigate("/")} 
                className={styles.brandName}
            >
                Priscila Ramonna
            </span>

            {/* Link na imagem para voltar à página inicial */}
            <Link to="/" className={styles.logoLink}>
                <img className={styles.logo} src="imgs/logo.png" alt="logo" />
            </Link>

            <nav className={styles.nav}>
                <Link to="/" className={styles.navLink}>Home</Link>
                <Link to="/contato" className={styles.navLink}>Contato</Link>
            </nav>
        </header>
    );
}

export default Header;
