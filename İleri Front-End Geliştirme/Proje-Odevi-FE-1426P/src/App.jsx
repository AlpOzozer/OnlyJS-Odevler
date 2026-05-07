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

function App() {

    const [products, setProducts] = useState([]);

    const [input, setInput] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("Mobilya");

    const [selectedShop, setSelectedShop] = useState("Migros");

    const handleAddProduct = () => {

        if (!input.trim()) return;

        const newProduct = {
            id: nanoid(),
            name: input,
            category: selectedCategory,
            shop: selectedShop
        };

        setProducts(prev => [...prev, newProduct]);

        setInput("");
    };

    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <ProductNameInput
                            input={input}
                            setInput={setInput}
                        />
                    </Col>
                    <Col md={12}>
                        <CategorySelect selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
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
                        <ul>
                            {products.map(product => (
                                <li key={product.id}>
                                    {product.name}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;