import { MoviesIndex } from "./MoviesIndex";

export function SearchBar() {
  return (
    <div className="search-wrapper p-2" search-wrapper>
      <input
        type="text"
        name="search"
        aria-label="search movies"
        placeholder="Search any movies..."
        className="search-field"
        autocomplete="off"
        search-field
      />
      <img
        src="https://raw.githubusercontent.com/Shivam171/Tvflix/main/assets/images/search.png"
        alt="search"
        className="leading-icon"
        width="24"
        height="24"
      />
    </div>
  );
}
