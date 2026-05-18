import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";

function Table1({ products = [] }) {
  const [productsState, setProductsState] = useState(products);

  useEffect(() => {
    setProductsState(products);
  }, [products]);

  const handleIsBought = (id) => {
    const prevProducts = productsState.map((product) => {
      if (product.id === id) {
        return { ...product, isBought: !product.isBought };
      }
      return product;
    });

    setProductsState(prevProducts);
  };

  return (
    <Table className="table-1" striped bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ürün Adı</th>
          <th>Kategori</th>
          <th>Market</th>
        </tr>
      </thead>

      <tbody>
        {productsState.map((product) => (
          <tr
            key={product.id}
            onClick={() => handleIsBought(product.id)}
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Table1;