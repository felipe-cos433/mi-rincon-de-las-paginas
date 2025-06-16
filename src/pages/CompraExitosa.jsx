import "../styles/compraExitosa.css";
import { useNavigate } from "react-router-dom";

function CompraExitosa() {
  const navigate = useNavigate();

  return (
    <div className="compra-wrapper">
      <div className="compra-contenido">
        <img src="/images/check.png" alt="Compra realizada" />
        <h1>¡Gracias por tu compra!</h1>
        <p>Tu pedido ha sido procesado exitosamente.</p>
        <button onClick={() => navigate("/colecciones")}>
          Seguir explorando
        </button>
      </div>
    </div>
  );
}

export default CompraExitosa;
