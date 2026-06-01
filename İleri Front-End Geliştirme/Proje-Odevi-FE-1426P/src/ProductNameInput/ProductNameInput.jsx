import Form from "react-bootstrap/Form";
import "./product-name-input.css";

function ProductNameInput({ input, setInput }) {
  return (
    <Form.Control
      className="productNameInput"
      type="text"
      placeholder="Ürün adı"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}

export default ProductNameInput;