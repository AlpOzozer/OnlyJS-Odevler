import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [todoInput, setTodoInput] = useState("");

  return (
    <Container>
      <Row>
        <Col>
          <form>
            <label>Hedef</label>
              <input type="text" value={todoInput} onChange="setTodoInput()" />
              <Button variant="success">Ekle</Button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
