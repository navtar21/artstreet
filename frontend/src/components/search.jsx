import { Link } from "react-router-dom";

function SearchBar() {
  return (
    <form action="search">
      <div className=" flex flex-row justify-center">
        <input
          className="bg-gray-200 h-10 w-1/3 pl-5 rounded-tl-full rounded-bl-full text-m focus:outline-none text-darkBlue"
          type="search"
          name="search"
          placeholder="Rechercher"
        />
        <Link to="/*">
          <button
            type="button"
            className="bg-gray-200 flex justify-center w-10 rounded-tr-full rounded-br-full"
          >
            <img
              src="../src/assets/loupe.png"
              alt="icon recherche"
              className=""
            />
          </button>
        </Link>
      </div>
    </form>
  );
}

export default SearchBar;
