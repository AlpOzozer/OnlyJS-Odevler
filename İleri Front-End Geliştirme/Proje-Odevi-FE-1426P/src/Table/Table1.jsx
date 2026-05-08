import { Table } from "react-bootstrap";

function Table1({ products }) {
    return (
        <>
        <Table className="table-1" striped bordered>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Ürün Adı</th>
                                        <th>Kategori</th>
                                        <th>Market</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.category}</td>
                                            <td>{product.shop}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
        </>
    )
}

export default Table1;