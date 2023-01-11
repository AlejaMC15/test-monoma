import React from "react";

interface IContext {
    listItemsp: any,
    listOfPokemons: any,
    GetListItems: any,
    GetListUrl: any
}

const obj: IContext = { listItemsp: '', listOfPokemons: '', GetListItems: [], GetListUrl: [] };

const ListItemsContext = React.createContext(obj);

export const ListItemsProvider = ListItemsContext.Provider;

export default ListItemsContext;
