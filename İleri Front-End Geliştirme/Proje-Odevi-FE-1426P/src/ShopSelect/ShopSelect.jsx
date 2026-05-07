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
    selectedShop,
    setSelectedShop
}) {

    return (
        <select
            value={selectedShop}
            onChange={(e) =>
                setSelectedShop(e.target.value)
            }
        >

            {shops.map(shop => (

                <option
                    key={shop.id}
                    value={shop.name}
                >
                    {shop.name}
                </option>

            ))}
        </select>
    );
}

export default ShopSelect;