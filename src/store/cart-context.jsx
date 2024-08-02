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
        (itemInItem) => itemInItem.productName === action.payload.productName
      );

      if (itemIndex !== -1) {
        // si le produit est deja dans le panier que sa quantite est minimum a 1
        const existingItem = state.items[itemIndex];
        const updatedQuantity = existingItem.quantity++;
        // check si item.quantity =10
        if (updatedQuantity > 10) {
          alert(
            "Vous ne pouvez pas ajouter plus de 10 articles pour ce produit !"
          );
          return state;
        }

        return {
          ...state,
          items: [
            ...state.items.slice(0, itemIndex),
            {
              ...existingItem,
              quantity: updatedQuantity,
            },
            ...state.items.slice(itemIndex + 1),
          ],
        }; // return la valeur de state et la copie si on ajoute une nouvelle propriete dans le useReducer a cote de items[] pour ne pas executer le reste du code et
      }

      // AJOUTE UN ITEM DANS LE TABLEAU PANIER D ITEMS
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
  }
}

export default function CartProvider({ children }) {
  //reducer
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const contextValue = {
    items: state.items,
    addItem: (item) => {
      dispatch({ type: "ADD_ITEM", payload: item });
    },
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
