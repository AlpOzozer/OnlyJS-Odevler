import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import App from './App';



function ListItems({ list, deleteByIndex }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li
          key={index}
          onClick={() => deleteByIndex(index)}
          style={{ cursor: "pointer" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListItems;