import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListItems from './ListItems';
import "../src/ListItems.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setToDos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (todoInput.trim() === "") return;

    setToDos([...todos, todoInput]);
    setTodoInput("");
  };

  const deleteByIndex = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setToDos(updatedTodos);
  };

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleAddTodo}>
            <label>Hedef</label>
            <input
              type="text"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <Button variant="success" type="submit">
              Ekle
            </Button>
          </form>
        </Col>

        <Col>
          <ListItems list={todos} deleteByIndex={deleteByIndex} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;