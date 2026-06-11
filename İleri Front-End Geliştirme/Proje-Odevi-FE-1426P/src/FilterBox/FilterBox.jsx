import "./filter-box.css";

function FilterBox({
  query,
  setQuery,
  filteredShop,
  setFilteredShop,
  filteredCategory,
  setFilteredCategory,
  filteredStatus,
  setFilteredStatus,
}) {
  return (
    <>
      <h2>Filtreler</h2>

      <form>
        <label>Market</label>
        <select
          value={filteredShop}
          onChange={(e) => setFilteredShop(e.target.value)}
        >
          <option value="all">Tümü</option>
          <option value="Migros">Migros</option>
          <option value="BİM">BİM</option>
          <option value="A101">A101</option>
        </select>
      </form>

      <form>
        <label>Kategori</label>
        <select
          value={filteredCategory}
          onChange={(e) => setFilteredCategory(e.target.value)}
        >
          <option value="all">Tümü</option>
          <option value="Mobilya">Mobilya</option>
          <option value="Elektronik">Elektronik</option>
          <option value="Gıda">Gıda</option>
        </select>
      </form>

      <div>
        <input
          type="radio"
          name="status"
          value="all"
          checked={filteredStatus === "all"}
          onChange={(e) => setFilteredStatus(e.target.value)}
        />
        <label>Tümü</label>

        <input
          type="radio"
          name="status"
          value="bought"
          checked={filteredStatus === "bought"}
          onChange={(e) => setFilteredStatus(e.target.value)}
        />
        <label>Satın Alınanlar</label>

        <input
          type="radio"
          name="status"
          value="notBought"
          checked={filteredStatus === "notBought"}
          onChange={(e) => setFilteredStatus(e.target.value)}
        />
        <label>Satın Alınmayanlar</label>
      </div>

      <input
        type="text"
        placeholder="Ürün adı"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}

export default FilterBox;