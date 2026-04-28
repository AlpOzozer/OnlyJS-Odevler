import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductNameInput from "./ProductNameInput/ProductNameInput";
import CategorySelect from './CategorySelect/CategorySelect';
import ShopSelect from "./ShopSelect/ShopSelect";


function App() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <ProductNameInput />
          </Col>
          <Col md={12}>
            <CategorySelect />
          </Col>
          <Col md={12}>
            <ShopSelect />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
