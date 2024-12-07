import { useQuery } from "@tanstack/react-query";

function FetchRecipe() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`).then(
        (res) => res.json()
      ),
  });

  return [isLoading, error, data];
}

export default FetchRecipe;
