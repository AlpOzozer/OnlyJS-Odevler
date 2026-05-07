function ProductNameInput({
    input,
    setInput
}) {

    return (
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ürün gir..."
        />
    );
}

export default ProductNameInput;