function ProductNameInput({
    input,
    setInput
}) {

    return (
        <input
            className="productNameInput"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ürün Adı"
        />
    );
}

export default ProductNameInput;