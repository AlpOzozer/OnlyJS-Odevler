import "../CategorySelect/category-select.css";
import Form from "react-bootstrap/Form";

const categories = [
    {
        id: 1,
        name: "Mobilya"
    },
    {
        id: 2,
        name: "Yemek"
    },
    {
        id: 3,
        name: "İçecek"
    }
];

function CategorySelect({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <Form.Select
      value={selectedCategory}
      onChange={(e) =>
        setSelectedCategory(e.target.value)
      }
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Form.Select>
  );
}

export default CategorySelect;