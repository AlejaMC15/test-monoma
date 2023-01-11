import axios from "axios";
import { useState } from "react";

export const Services: any = () => {
  const [listItemsp, setListItemsp] = useState();
  const [listOfPokemons, setListOfPokemons] = useState();


  const GetListItems = async () => {

    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10')
      .then(function (data: any) {
        // handle success
        setListItemsp(data)
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const GetListUrl = async (listItemsp: any) => {
    try {
      const requests = listItemsp !== undefined && listItemsp.data.results.map((item: any) => fetch(item.url));
      const responses = await Promise.all(requests);
      const dataApi: any = await Promise.all(responses?.map((resp) => resp.json()));
      return setListOfPokemons(dataApi);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    listItemsp,
    listOfPokemons,
    GetListItems,
    GetListUrl
  }
}