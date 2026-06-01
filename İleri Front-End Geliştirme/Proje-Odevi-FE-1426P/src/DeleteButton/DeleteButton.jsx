import "./delete-button.css";

function DeleteButton() {
    return(
        <>
        <button className="deleteButton" onClick={() => handleRemoveProduct(index)}>Ürün Sil</button>
        </>
    )
}

export default DeleteButton;