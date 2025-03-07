import { Link } from "react-router-dom";
import { CartContext } from "../../store/cart-context";
import { useContext } from "react";
export default function Header() {
  // const { items } = useContext(CartContext);

  return (
    <CartContext.Consumer>
      {({ items }) => (
        <header className="bg-gray-apple p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/">
              <div>
                <img src="./assets/logo.png" alt="Apple" className="w-5" />
              </div>
            </Link>
            <div>Store</div>
            <div>Mac</div>
            <div>iPad</div>
            <div>iPhone</div>
            <div>Watch</div>
            <div>AirPods</div>
            <div>TV & Maison</div>
            <div>Divertissement</div>
            <div>Accessoires</div>
            <div>Assistance</div>
            <Link to="/shop">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="44px"
                  viewBox="0 0 15 44"
                >
                  <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                </svg>
              </div>
            </Link>
            <Link to="/shop">
              <div className="relative">
                <svg
                  height="44"
                  viewBox="0 0 14 44"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                </svg>
                <div className="bottom-1 -right-3 bg-black w-5 h-5 absolute text-white text-xs rounded-full flex items-center justify-center">
                  {items.reduce((acc, item) => acc + item.quantity, 0)}
                </div>
              </div>
            </Link>
          </div>
        </header>
      )}
    </CartContext.Consumer>
  );
}
