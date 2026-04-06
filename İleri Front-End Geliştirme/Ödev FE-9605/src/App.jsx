import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListItems from './ListItems';


function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setToDos] = useState([]);
  console.log(todoInput);


  return (
    <Container>
      <Row>
        <Col>
          <form>
            <label>Hedef</label>
              <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button variant="success" onClick={addInput}>
            Ekle
          </Button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
