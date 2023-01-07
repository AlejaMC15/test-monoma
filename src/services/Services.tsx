export const ListItems: any = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=10&limit=50");
    const data = response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const ListUrl: any = async (listItems: any) => {
  try {
    const requests = listItems?.map((item: any) => fetch(item.url));
    const responses = await Promise.all(requests);
    const dataApi = await Promise.all(responses?.map((resp) => resp.json()));
    return dataApi;
  } catch (e) {
    console.log(e);
  }
};