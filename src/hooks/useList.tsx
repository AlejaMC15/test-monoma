import { useEffect, useState } from "react";
import { ListItems, ListUrl } from "../services/Services";

export const UseList: any = () => {
  const [listItems, setListItems] = useState();
  const [listOfPokemons, setListOfPokemons] = useState();
  const [loadPokes, setLoadPokes] = useState(false);

  const getListItems = async () => {
    try {
      const data = await ListItems();
      setListItems(data);
      setLoadPokes(true);
    } catch (err) {
      console.log(err);
    }
  };

  const getUrlItems = async () => {
    try {
      const data = await ListUrl(ListItems.results);
      setListOfPokemons(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getListItems();
  }, []);

  useEffect(() => {
    getUrlItems();
  }, [listItems, loadPokes]);

  return {
    listItems,
    listOfPokemons,
    getListItems
  };
};
