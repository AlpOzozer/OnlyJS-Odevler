import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListItems from './ListItems';
import "../src/ListItems.css";
import "../src/App.css";

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
        <Col className="col-12">
          <form className="form" onSubmit={handleAddTodo}>
            <label className="label">Hedef</label>
            <input
              type="text"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <Button className="button" variant="success" type="submit">
              Ekle
            </Button>
          </form>
        </Col>
        <Col className="col-12">
          <ListItems list={todos} deleteByIndex={deleteByIndex} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;