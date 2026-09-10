// Campo de búsqueda para filtrar videojuegos desde la API.
export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      className="card"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <label htmlFor="search">Search game</label>
      <input
        id="search"
        type="search"
        value={value}
        placeholder="Type a game name"
        onChange={(event) => onChange(event.target.value)}
      />
    </form>
  );
}
