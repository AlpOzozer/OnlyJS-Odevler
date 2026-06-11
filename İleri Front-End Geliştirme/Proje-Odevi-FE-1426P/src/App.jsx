import { useState } from 'react';
import ProductNameInput from './ProductNameInput/ProductNameInput';
import CategorySelect from './CategorySelect/CategorySelect';
import ShopSelect from './ShopSelect/ShopSelect';
import Button from './Button/Button';
import Table1 from './Table/Table1';
import FilterBox from "./FilterBox/FilterBox";
import { categories, shops } from './constants';
import { useShoppingList } from './hooks/useShoppingList';

function App() {
  const {
    filteredProducts,
    addProduct,
    removeProduct,
    toggleBought,

    query,
    setQuery,
    filteredShop,
    setFilteredShop,
    filteredCategory,
    setFilteredCategory,
    filteredStatus,
    setFilteredStatus,
  } = useShoppingList();

  const [productName, setProductName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Mobilya");
  const [selectedShop, setSelectedShop] = useState("Migros");

  function handleAddProduct() {
    addProduct({
      name: productName,
      category: selectedCategory,
      shop: selectedShop,
    });
    setProductName("");
  }

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

        <Button onClick={handleAddProduct}>Ürün Ekle</Button>
      </div>
      <div>
         <FilterBox
        query={query}
        setQuery={setQuery}
        filteredShop={filteredShop}
        setFilteredShop={setFilteredShop}
        filteredCategory={filteredCategory}
        setFilteredCategory={setFilteredCategory}
        filteredStatus={filteredStatus}
        setFilteredStatus={setFilteredStatus}
      />

      <Table1
        products={filteredProducts}
        onRemoveProduct={removeProduct}
        onToggleBought={toggleBought}
      />
      </div>
    </div>
  );
}

export default App;
