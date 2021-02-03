import React from "react";
import BannerHome from "../../img/banner.jpg";

import "./Home.css";

import Products from "../Products/Products";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="banner-home">
          <img className="home-img" src={BannerHome} alt="" />
        </div>
      
        <div className="home-row">
          <div className="col-lg-3 col-sm-3 col-md-6">
            <Products
              id="123"
              title="The lord of the rings"
              price={110.99}
              description="Este é um livro"
              image="https://images-na.ssl-images-amazon.com/images/G/32/OHL/2020/Garage/Tools/GW/XCM_Manual_ORIGIN_1237750_1254767_BR_br_gw_pd_br_pt_3223940_379x304_1X_pt_BR._SY304_CB407932597_.jpg"
              author="Autor x"
            />
          </div>
          <div className="col-lg-3 col-sm-3 col-md-6">
            <Products
              id="321"
              title="Hobbit"
              price={110.99}
              description="Este é um livro"
              image="https://images-na.ssl-images-amazon.com/images/G/32/OHL/2020/Garage/Tools/GW/XCM_Manual_ORIGIN_1237750_1254767_BR_br_gw_pd_br_pt_3223940_379x304_1X_pt_BR._SY304_CB407932597_.jpg"
              author="Autor x"
            />
          </div>
          <div className="col-lg-3 col-sm-3 col-md-6">
            <Products
              id="4"
              title="Harry potter"
              price={110.99}
              description="Este é um livro"
              image="https://images-na.ssl-images-amazon.com/images/G/32/OHL/2020/Garage/Tools/GW/XCM_Manual_ORIGIN_1237750_1254767_BR_br_gw_pd_br_pt_3223940_379x304_1X_pt_BR._SY304_CB407932597_.jpg"
              author="Autor x"
            />
          </div>
          
        </div>
        <div className="home-row">
            <div className="col-lg-3 col-sm-3 col-md-6">
              <Products
                id="1"
                title="Os Cavaleiros do Zodiaco"
                price={110.99}
                description="Este é um livro"
                image="https://images-na.ssl-images-amazon.com/images/G/32/OHL/2020/Garage/Tools/GW/XCM_Manual_ORIGIN_1237750_1254767_BR_br_gw_pd_br_pt_3223940_379x304_1X_pt_BR._SY304_CB407932597_.jpg"
                author="Autor x"

              />
            </div>
            <div className="col-lg-3 col-sm-3 col-md-6">
              <Products
                id="2"
                title="The Poet"
                price={110.99}
                description="Este é um livro"
                image="https://images-na.ssl-images-amazon.com/images/G/32/OHL/2020/Garage/Tools/GW/XCM_Manual_ORIGIN_1237750_1254767_BR_br_gw_pd_br_pt_3223940_379x304_1X_pt_BR._SY304_CB407932597_.jpg"
                author="Autor x"
              />
            </div>
            <div className="col-lg-3 col-sm-3 col-md-6">
              <Products
                id="3"
                title="The Children"
                price={110.99}
                description="Este é um livro"
                image="https://images-na.ssl-images-amazon.com/images/G/32/OHL/2020/Garage/Tools/GW/XCM_Manual_ORIGIN_1237750_1254767_BR_br_gw_pd_br_pt_3223940_379x304_1X_pt_BR._SY304_CB407932597_.jpg"
                author="Autor x"
              />
            </div>
            
          </div>
          
      </div>
      
    </>
  );
}
