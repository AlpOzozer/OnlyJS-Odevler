const categories = [
    {
        "id": 1,
        "name": "Mobilya",
    },
    {
        "id": 2,
        "name": "Yemek"
    },
    {
        "id": 3,
        "name": "İçecek"
    },
]

function CategorySelect() {

    
    return (
        <>
            <form>
                <select>
                    {categories.map(category =>
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                    )}
                </select>
            </form>
        </>
    )
}

export default CategorySelect;