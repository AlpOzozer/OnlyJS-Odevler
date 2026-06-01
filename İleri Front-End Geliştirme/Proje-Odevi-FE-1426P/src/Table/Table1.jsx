import { Table } from "react-bootstrap";
import DeleteButton from "../DeleteButton/DeleteButton";
import "./table1.css";

function Table1({ products = [], onRemoveProduct, onToggleBought }) {
  return (
    <Table className="table-1" striped bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ürün Adı</th>
          <th>Kategori</th>
          <th>Market</th>
          <th>Ürün Sil</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            onClick={() => onToggleBought(product.id)}
            style={{
              textDecoration: product.isBought ? "line-through" : "none",
              animation: product.isBought
                ? "bgAnimation 2s infinite alternate"
                : "none",
              cursor: "pointer",
              textDecorationColor: product.isBought ? "red" : "transparent",
            }}
          >
            <td>{product.id}</td>
            <td className="product-name">{product.name}</td>
            <td>{product.category}</td>
            <td>{product.shop}</td>
            <td
              onClick={(e) => {
                e.stopPropagation();
                onRemoveProduct(product.id);
              }}
            >
              <DeleteButton />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Table1;