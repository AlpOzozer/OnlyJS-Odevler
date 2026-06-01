import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import ProductNameInput from './ProductNameInput/ProductNameInput';
import CategorySelect from './CategorySelect/CategorySelect';
import ShopSelect from './ShopSelect/ShopSelect';
import Button from './Button/Button';
import DeleteButton from './DeleteButton/DeleteButton';
import Table from 'react-bootstrap/Table';
import Table1 from './Table/Table1';




const categories = [
  "Mobilya",
  "Elektronik",
  "Gıda"
];

const shops = [
  "Migros",
  "BİM",
  "A101"
];

function App() {
  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("Mobilya");

  const [selectedShop, setSelectedShop] =
    useState("Migros");

  const prevAllBoughtRef = useRef(false);
  const lastActionRef = useRef(null);


  function handleAddProduct() {
    if (productName.trim() === "") return;

    const newProduct = {
      id: crypto.randomUUID(),
      name: productName,
      category: selectedCategory,
      shop: selectedShop,
      isBought: false,
    };

    setProducts((prevProducts) => [
      ...prevProducts,
      newProduct,
    ]);

    setProductName("");
  }

  function handleRemoveProduct(id) {
  lastActionRef.current = "remove";

  setProducts((prevProducts) =>
    prevProducts.filter(
      (product) => product.id !== id
    )
  );
}

function handleToggleBought(id) {
  lastActionRef.current = "toggle";

  setProducts((prevProducts) =>
    prevProducts.map((product) =>
      product.id === id
        ? {
            ...product,
            isBought: !product.isBought,
          }
        : product
    )
  );
}


useEffect(() => {
  if (products.length === 0) {
    prevAllBoughtRef.current = false;
    return;
  }

  const allBought = products.every(
    product => product.isBought
  );

  if (
    allBought &&
    !prevAllBoughtRef.current &&
    lastActionRef.current === "toggle"
  ) {
    alert("Alışveriş Tamamlandı");
  }

  prevAllBoughtRef.current = allBought;
}, [products]);


  return (
    <div style={{ padding: "20px" }}>
      <h1>Alışveriş Listesi</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >

        <ProductNameInput
         placeholder="Ürün adı"
         input={productName}
         setInput={setProductName}
/>

        <CategorySelect
        categories={categories}
         selectedCategory={selectedCategory}
         setSelectedCategory={setSelectedCategory}
          />
          
        <ShopSelect
        shops={shops}
        selectedShop={selectedShop}
        setSelectedShop={setSelectedShop}
        />
        
        <Button onClick={handleAddProduct}>
          Ürün Ekle
        </Button>
      </div>
      
      <Table1
        products={products}
         
        onRemoveProduct={handleRemoveProduct}
        onToggleBought={handleToggleBought}
      />
    </div>
  );
}

export default App;