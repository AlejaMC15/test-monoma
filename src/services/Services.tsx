import axios from "axios";
import { useState } from "react";

export const Services: any = () => {
  const [listItemsp, setListItemsp] = useState();
  const [listOfPokemons, setListOfPokemons] = useState();
  const [load, setLoad] = useState(false);

  const GetListItems = async () => {
    try {
      setLoad(true)
      const response: any = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10');
      return setListItemsp(response)
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoad(false)
    }
  };

  const GetListUrl = async (listItemsp: any) => {
    try {
      setLoad(true)
      const requests = listItemsp !== undefined && listItemsp.data.results.map((item: any) => fetch(item.url));
      const responses = await Promise.all(requests);
      const dataApi: any = await Promise.all(responses?.map((resp) => resp.json()));
      return setListOfPokemons(dataApi);
    } catch (e) {
      console.log(e);
    } finally {
      setLoad(false)
    }
  }

  return {
    listItemsp,
    listOfPokemons,
    GetListItems,
    GetListUrl,
    load
  }
}