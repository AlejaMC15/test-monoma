import React from "react";

interface IContext {
    listItems: any,
    listOfPokemons: any,
    getListItems: any
}

const obj: IContext = { listItems: '', listOfPokemons: '', getListItems: '' }

const ListItemsContext = React.createContext(obj);

export const ListItemsProvider = ListItemsContext.Provider;

export default ListItemsContext;
