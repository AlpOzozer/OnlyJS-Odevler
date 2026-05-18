import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import ProductNameInput from './ProductNameInput/ProductNameInput';
import CategorySelect from './CategorySelect/CategorySelect';
import ShopSelect from './ShopSelect/ShopSelect';
import Button from './Button/Button';
import Table from 'react-bootstrap/Table';
import "../src/style.css";
import Table1 from './Table/Table1';


function App() {

    const [products, setProducts] = useState([]);

    const [input, setInput] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("Mobilya");

    const [selectedShop, setSelectedShop] = useState("Migros");

    console.log(products);
    const handleAddProduct = () => {

        if (!input.trim()) return;

        const newProduct = {
            id: nanoid(),
            name: input,
            category: selectedCategory,
            shop: selectedShop,
            isBought: false
        };

        setProducts(prev => [...prev, newProduct]);

        setInput("");
    };

    return (
        <>
            <Container className="container">
                <Row>
                    <Col md={12}>
                        <ProductNameInput
                            input={input}
                            setInput={setInput}
                        />
                    </Col>
                    <Col md={12}>
                        <label className="label">Kategori Seç</label>
                    </Col>
                    <Col md={12}>
                        <CategorySelect selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    </Col>
                    <Col md={12}>
                        <label className="label">Market Seç</label>
                    </Col>
                    <Col md={12}>
                        <ShopSelect selectedShop={selectedShop} setSelectedShop={setSelectedShop} />
                    </Col>
                    <Col md={12}>
                        <Button
                            text="Ürün Ekle"
                            onClick={handleAddProduct}
                        />
                    </Col>
                    <Col md={12}>
                        <Table1 products={products}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;