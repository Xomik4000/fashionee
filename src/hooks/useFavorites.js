import { LS_KEYS } from "../constants";
import useLocalStorage from "./useLocalStorage";

function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage(LS_KEYS.FAVORITES, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return {
    favorites,
    toggleFavorite,
  };
}

export default useFavorites;