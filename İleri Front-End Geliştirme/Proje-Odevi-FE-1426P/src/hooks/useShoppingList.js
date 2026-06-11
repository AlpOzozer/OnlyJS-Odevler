import { useState, useEffect, useRef, useMemo } from "react";
import JSConfetti from "js-confetti";

export function useShoppingList() {
  const [products, setProducts] = useState([]);

  const [query, setQuery] = useState("");
  const [filteredShop, setFilteredShop] = useState("all");
  const [filteredCategory, setFilteredCategory] = useState("all");
  const [filteredStatus, setFilteredStatus] = useState("all");

  const prevAllBoughtRef = useRef(false);
  const lastActionRef = useRef(null);

  function addProduct({ name, category, shop }) {
    if (name.trim() === "") return;

    const newProduct = {
      id: crypto.randomUUID(),
      name,
      category,
      shop,
      isBought: false,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }

  function removeProduct(id) {
    lastActionRef.current = "remove";

    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }

  function toggleBought(id) {
    lastActionRef.current = "toggle";

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isBought: !product.isBought }
          : product
      )
    );
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(query.toLowerCase());

      const shopMatch =
        filteredShop === "all" || product.shop === filteredShop;

      const categoryMatch =
        filteredCategory === "all" ||
        product.category === filteredCategory;

      const statusMatch =
        filteredStatus === "all" ||
        (filteredStatus === "bought" && product.isBought) ||
        (filteredStatus === "notBought" && !product.isBought);

      return nameMatch && shopMatch && categoryMatch && statusMatch;
    });
  }, [products, query, filteredShop, filteredCategory, filteredStatus]);

  useEffect(() => {
    if (products.length === 0) {
      prevAllBoughtRef.current = false;
      return;
    }

    const allBought = products.every((product) => product.isBought);

    if (
      allBought &&
      !prevAllBoughtRef.current &&
      lastActionRef.current === "toggle"
    ) {
      alert("Alışveriş Tamamlandı");
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }

    prevAllBoughtRef.current = allBought;
  }, [products]);

  return {
    products,
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
  };
}