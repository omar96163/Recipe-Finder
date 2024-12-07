import { Link } from "react-router-dom";
import FetchRecipe from "./FetchRecipe";

function HomePage() {
  const [isLoading, error, data] = FetchRecipe();

  if (isLoading) return <p>waiting ...</p>;
  if (error) return <p>something wrong</p>;
  if (data)
    return (
      <div className="p-6 bg-slate-300">
        <h1 className="h-0 gap-10 rounded-full lg:text-3xl sm:text-base font-bold mb-5 text-slate-600 flex items-center justify-end flex-row-reverse bg-white p-10 ">
          <dir className="ml-auto flex gap-5">
            <input
              className="text-base bg-slate-300 rounded-full font-thin px-4 py-2"
              type="search"
              placeholder="Search With Category"
              name="search"
            />
            <button
              className="text-base bg-slate-800 rounded-full text-white font-thin px-4 py-2 hover:text-slate-800 hover:bg-slate-200"
              type="button"
            >
              Search
            </button>
          </dir>
          Recipe Collection
          <img
            className="w-28 "
            src="images\recipes logo.jpg"
            alt="recipes logo"
          />
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {data.categories.map((item) => (
            <Link to={`/recipe/${item.idCategory}`} key={item.idCategory}>
              <div className="bg-white border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:ring hover:ring-slate-600">
                <img
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2 text-slate-600 ">
                    {item.strCategory}
                  </h2>
                  <p className="text-sm text-gray-600">
                    likes : <i className="text-green-600 ">{item.idCategory}</i>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
}

export default HomePage;
