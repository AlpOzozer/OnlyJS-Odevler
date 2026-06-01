import BootstrapButton from "react-bootstrap/Button";
import "./button.css";

function Button({
  children,
  onClick,
}) {
  return (
    <BootstrapButton
      className="button"
      variant="success"
      onClick={onClick}
    >
      {children}
    </BootstrapButton>
  );
}

export default Button;