import useLocalStorage from './useLocalStorage';
import { TransactionsCardProps } from '../components/molecules/TransactionsCard/TransactionsCard';

const useFavs = () => {
  const [storedFavs, setStoredFavs] = useLocalStorage('favorits', [{}]);

  const updateLocalStorage = (isFaved: boolean, newFav: TransactionsCardProps) => {
    const newFavs = storedFavs.slice();

    if (!isFaved) {
      newFavs.push(newFav);
      setStoredFavs(newFavs);
    } else {
      const filteredData = newFavs.filter((cur: any) => cur.id !== newFav.id);
      setStoredFavs(filteredData);
    }
  };

  return [storedFavs, updateLocalStorage];
};

export default useFavs;
