import Nav from "@components/Nav";
import SearchBar from "@components/search";

function Search() {
  return (
    <main>
      <Nav />
      <h1 className="text-5xl text-center underline p-10">RECHERCHE</h1>
      <SearchBar />
    </main>
  );
}

export default Search;
