import Button from "../components/Button/Button";
import Item from "../components/Item/Item";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { readPrice } from "../util/readPrice";
import { CartContext } from "../store/cart-context";
export default function Shop() {
  // PAGE DU PANIER englobe les elements du panier dans le composant  ITEM
  // State

  const { items } = useContext(CartContext); // affiche les elements de la propriete items[]

  return (
    <div className="bg-gray-apple">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-semibold pt-10 text-5xl text-center">
          Le montant total de votre Panier est de{" "}
          {readPrice(
            items.reduce((acc, item) => acc + item.price * item.quantity, 0)
          )}{" "}
          €.
        </h1>
        {/* One items min */}
        {items.length !== 0 && (
          <div className="flex justify-center mt-10">
            <Button>Valider la commande</Button>
          </div>
        )}

        {/* 0 items yet */}
        {items.length === 0 && (
          <div className="flex justify-center mt-10">
            <div className="text-center">
              <div className="text-3xl font-semibold">
                Votre panier est vide
              </div>
              <div className="mt-5">
                Vous n'avez pas encore choisi d'articles.
              </div>
              <div className="mt-5">
                <Link to="/">
                  <Button>Continuer mes achats</Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Items */}
        {items.map((item, index) => (
          <Item item={item} key={index} />
        ))}

        {/* Total */}
        <div className="border-t mt-10">
          <div className="flex justify-between gap-5 p-10">
            <div className="w-[25%]"></div>
            <div className="w-full">
              <div className="w-full flex justify-between text-lg font-light">
                <div>
                  <div>Sous-total</div>
                  <div className="mt-1">Livraison</div>
                </div>
                <div className="text-right">
                  <div>
                    {readPrice(
                      items.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                    )}{" "}
                    €
                  </div>
                  <div>GRATUIT</div>
                </div>
              </div>
              <div className="border-t mt-5 flex justify-between text-xl pt-5">
                <div className="font-semibold">Total</div>
                <div className="text-right">
                  <div>
                    {readPrice(
                      items.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                    )}{" "}
                    €
                  </div>
                  <div className="text-gray-500 text-sm">
                    TVA de 0 € incluse
                  </div>
                </div>
              </div>
              {items.length !== 0 && (
                <div className="flex justify-end mt-10">
                  <Button large>Valider la commande</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
