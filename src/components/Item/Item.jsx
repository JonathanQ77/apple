import { useContext } from "react";
import { readPrice } from "../../util/readPrice";
import { CartContext } from "../../store/cart-context";

export default function Item({ item }) {
  // PRODUIT DU PANIER
  const { updateQuantity, deleteItem } = useContext(CartContext);
  return (
    <div className="border-t mt-10" key={item.productName}>
      {/* <div className="text-center">
                        Aucun élément pour le moment
                    </div> */}
      <div className="p-10 flex gap-5">
        {/* Photo */}
        <div className="w-[25%]">
          <img src={item.cartImage} alt={item.productName} />
        </div>
        <div className="w-full">
          {/* Details */}
          <div className="flex justify-between gap-4 text-2xl w-full">
            {/* Product */}
            <h2 className="font-semibold">{item.productName}</h2>

            {/* Quantity */}
            <div>
              <select
                name="quantity"
                className="bg-transparent"
                defaultValue={item.quantity}
                onChange={(e) => {
                  updateQuantity(item.productName, e.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            {/* Price */}
            <div className="text-right w-[30%]">
              <h3 className="font-semibold">
                {readPrice(item.price * item.quantity)} €
              </h3>
              <div className="text-gray-500 text-sm">
                <div className="mb-1">
                  Rémunération pour copie privée incluse de 14,00 €
                </div>
                <div>Dont éco-participation: 0,04 €</div>
              </div>
              <div
                className="text-blue-500 mt-3 text-base inline-block hover:text-blue-800 cursor-pointer"
                onClick={() => {
                  deleteItem(item.productName);
                }}
              >
                Supprimer
              </div>
            </div>
          </div>
          <div className="border-t mt-9 pt-9">
            {/* Apple care plus */}
            <div className="flex gap-3">
              <div className="pt-1">
                <img
                  src="/assets/apple-care.png"
                  alt="apple"
                  className="w-[18px]"
                />
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-[17px] font-semibold">
                    AppleCare+ pour {item.productName}
                  </div>
                  <div className="text-gray-500 text-sm">
                    Inscription automatique avec votre matériel Apple.
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    Inclut la taxe sur les primes d’assurance au taux
                    applicable.
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[17px] font-semibold">Offert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
