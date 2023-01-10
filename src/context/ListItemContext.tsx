import React from "react";

interface IContext {
    listItemsp: any,
    listOfPokemons: any
}

const obj: IContext = { listItemsp: '', listOfPokemons: '' }

const ListItemsContext = React.createContext(obj);

export const ListItemsProvider = ListItemsContext.Provider;

export default ListItemsContext;
