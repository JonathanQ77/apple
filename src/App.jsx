import { Suspense, lazy, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import CartProvider from "./store/cart-context";
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  // const [items, setItems] = useState([]);
  // const contextValue = {
  //   items,
  //   addItem: (item) => {
  //     // pour changer la quantite dun produit en panier
  //     //check si item.productName exist alors on increment la quantite sinon on met  la quantite a 1
  //     const itemIndex = items.findIndex(
  //       (itemInItem) => itemInItem.productName === item.productName
  //     );
  //     // si le produit est deja dans le panier que sa quantite est minimum a 1
  //     if (itemIndex !== -1) {
  //       // check si item.quantity =10
  //       if (items[itemIndex].quantity === 10) {
  //         alert(
  //           "Vous ne pouvez pas ajouter plus de 10 articles pour ce produit !"
  //         );
  //         return;
  //       }
  //       const newItem = [...items];
  //       newItem[itemIndex].quantity++; // valeur du panier a lindex du produit ajoute 1 a la quantite
  //       setItems(newItem);
  //       return; // return pour ne pas executer le reste du code
  //     }
  //     // si le produit nest pas dans le panier je copie la derniere valeur du state et je creer la propriete quantity dans items du context
  //     setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  //   },
  //   //mettre a jour la quantite dun produit
  //   updateQuantity: (productName, quantity) => {
  //     //check si larticle existe dans le panier
  //     const itemIndex = items.findIndex(
  //       (itemInItem) => itemInItem.productName === productName
  //     );

  //     if (itemIndex !== -1) {
  //       // item existe
  //       if (quantity > 10) {
  //         alert("Vous ne pouvez pas ajouter plus de 10 articles");
  //         return;
  //       }
  //       const newItem = [...items];
  //       newItem[itemIndex].quantity = Number(quantity); // la quantite transformer en nombre
  //       setItems(newItem);
  //     }
  //   },
  //   deleteItem: (productName) => {
  //     const itemIndex = items.findIndex(
  //       (itemInItem) => itemInItem.productName === productName
  //     );
  //     if (itemIndex !== -1) {
  //       const newItems = [...items];
  //       newItems.splice(itemIndex, 1);
  //       setItems(newItems);
  //     }
  //   },
  // };
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
