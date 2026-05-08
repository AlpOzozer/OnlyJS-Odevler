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
    selectedCategory,
    setSelectedCategory
}) {

    return (
        <select
            className="select"
            value={selectedCategory}
            onChange={(e) =>
                setSelectedCategory(e.target.value)
            }
        >
            {categories.map(category => (
                <option
                    key={category.id}
                    value={category.name}
                >
                    {category.name}
                </option>

            ))}
        </select>
    );
}

export default CategorySelect;