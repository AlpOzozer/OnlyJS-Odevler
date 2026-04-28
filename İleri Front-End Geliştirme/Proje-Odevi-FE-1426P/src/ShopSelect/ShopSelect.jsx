const shops = [
    {
        "id": 1,
        "name": "Migros"
    },
    {
        "id": 2,
        "name": "BİM"
    },
    {
        "id": 3,
        "name": "Sarıyer Market"
    }
]


function ShopSelect() {
    return (
        <>
            <form>
                <select>
                    {shops.map(shop =>
                    <option key={shop.id} value={shop.id}>
                        {shop.name}
                    </option>
                    )}
                </select>
            </form>
        </>
    )
}

export default ShopSelect;