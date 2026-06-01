import Form from "react-bootstrap/Form";

const shops = [
    {
        id: 1,
        name: "Migros"
    },
    {
        id: 2,
        name: "BİM"
    },
    {
        id: 3,
        name: "Sarıyer Market"
    }
];


function ShopSelect({
  shops,
  selectedShop,
  setSelectedShop,
}) {
  return (
    <Form.Select
      value={selectedShop}
      onChange={(e) => setSelectedShop(e.target.value)}
    >
      {shops.map((shop) => (
        <option key={shop} value={shop}>
          {shop}
        </option>
      ))}
    </Form.Select>
  );
}

export default ShopSelect;