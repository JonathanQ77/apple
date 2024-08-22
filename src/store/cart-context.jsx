// context

import { createContext, useReducer } from "react";

export const CartContext = createContext({
  // pour autocompletion a l appel dans composant
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  deleteItem: () => {},
});

// FONCTIONS DU REDUCER (METHODE D UTILISATION DU CONTEXT A PRIORISER)
// state = etat actuel de lelement
// action = l'action que l'on souhaite faire
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const itemIndex = state.items.findIndex(
        (itemInItem) => itemInItem.productName === action.payload.productName // item du tableau dans state egale a la valeur du payload dans le dispatch
      );

      if (itemIndex !== -1) {
        // si le produit est deja dans le panier nous mettons  sa quantite minimum a 1
        const existingItem = state.items[itemIndex]; // recupere  l element en cours avec son index
        const updatedQuantity = existingItem.quantity++;
        // check si item.quantity =10
        if (updatedQuantity > 10) {
          alert(
            "Vous ne pouvez pas ajouter plus de 10 articles pour ce produit !"
          );
          return state;
        }

        // apres verification de la quantite nous retournons la valeur de tout le state et changons la valeur de items
        return {
          ...state,
          items: [
            ...state.items.slice(0, itemIndex), // decoupe et recupere tout les elements a lindex cible depuis lindex 0 jusqua lindex cible
            // recupere index 0,1,2
            {
              // ajout de l"element stocker dans l index existingItem et mise a jour de sa quantiter en creant la propriete : quantity
              ...existingItem, // recupere element existant donc lindex actuel 3
              quantity: updatedQuantity,
            },
            ...state.items.slice(itemIndex + 1), // on copie le reste des elements a lendroit de  lindex +1 de lelement
            // donc -> recupere a partir de lelement en cours de l lindex +1 recup a partir de lindex 4
          ],
        }; // return la valeur de state et la copie si on ajoute une nouvelle propriete dans le useReducer a cote de items[] pour ne pas executer le reste du code et
      }

      // AJOUTE UN ITEM DANS LE TABLEAU PANIER D ITEMS si AUCUNS ITEMS DANS LE PANIER
      return {
        ...state, // recupere les valeurs de state qui contient notre objet avec les 4 valeurs
        items: [...state.items, { ...action.payload, quantity: 1 }], // On ajoute a items la valeur actuel dans state le tableau items
        // et on ajoute les 4 props presentes dans payload et la quantite de defaut a 1
      };

    case "UPDATE_QUANTITY":
      const itemIndex2 = state.items.findIndex(
        (itemInItem) => itemInItem.productName === action.payload.productName // item du tableau dans state egale a la valeur du payload dans le dispatch
      );

      if (itemIndex2 !== -1) {
        // si le produit est deja dans le panier nous mettons  sa quantite minimum a 1

        // check si item.quantity =10
        if (action.payload.quantity > 10) {
          alert(
            "Vous ne pouvez pas ajouter plus de 10 articles pour ce produit !"
          );
          return state;
        }
        const newItems = [...state.items]; // stock dans newItems la valeur du state des 4 valeurs
        newItems[itemIndex2].quantity = Number(action.payload.quantity); // recupere la nouvelle valeur du payload qui recupere les valeurs
        // qui sont appeler dans le composant Item qui appelle la fonction updateQuantity sous forme de NUMBER VIA NUMBER()
        return { ...state, items: newItems }; // retourne la valeur de state et la nouvelle valeur de items qui stock newItems qui change uniquement la quantite
      }

      return state; // si nous changons la quantite dun produit non present sur le panier on return le state par securite
    case "DELETE_ITEM":
      const itemIndex3 = state.items.findIndex(
        (itemInItem) => itemInItem.productName === action.payload.productName
      );
      if (itemIndex3 !== -1) {
        const newItems = [...state.items];
        newItems.splice(itemIndex3, 1);
        return { ...state, items: newItems };
      }
      return state;
  }
}
export default function CartProvider({ children }) {
  //reducer creer items pour valeur [] dans le reducer
  // grace au dispatch type ADD ITEM et payload: (valeur = valeur fonction flecher) NOUS ACCEDONS AU CASE CORRESPONDANT la data ce stock dans payload
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const contextValue = {
    items: state.items,
    addItem: (item) => {
      // item stock les valeurs appeler dans les props dans home productname , price etc..
      dispatch({ type: "ADD_ITEM", payload: item });
    },
    updateQuantity: (productName, quantity) => {
      dispatch({ type: "UPDATE_QUANTITY", payload: { productName, quantity } }); // stock dans le payload product name et quantity
    },
    deleteItem: (productName) => {
      dispatch({ type: "DELETE_ITEM", payload: { productName } });
    },
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
