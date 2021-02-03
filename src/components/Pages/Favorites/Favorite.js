import React from "react";

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

import { useStateValue } from "../../../stateProvider";
import FavoriteBook from './FavoriteBook';

export default function Favorite() {

  const [{favorite}] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          {
            favorite.length === 0 ? (
            
            <div>
              <h2>You don't still have favorite books!</h2>
            
            </div>
            ) : (
              <div>
                <h2 className="shoppingfavoritetitle">Favorites</h2>
                {
                  favorite.map(item => (
                    <FavoriteBook 
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      description={item.description}
                      image={item.image}
                      author={item.author}
                    />
                  ))
                }
              </div>
            )
          }
          

        </div>
        {/* <div className="checkout_right">
          <Subtotal />
        </div> */}
      </div>
      <Footer />
    </>
  );
}
