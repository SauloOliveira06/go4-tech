import React, { useState } from "react";
import "@coreui/coreui";
import './Header.css';

import {
  CNavbar,
  CToggler,
  CNavbarBrand,
  CCollapse,
  CNavbarNav,
  CNavLink,
  CForm,
  CInput,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem
} from "@coreui/react";
import { useStateValue } from "../../stateProvider";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [{ favorite }, dispatch] = useStateValue();

  console.log("My favorite count", favorite);

  return (
    <div>
      <CNavbar expandable="sm" color="dark">
        <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
        <CNavbarBrand>MyBooks</CNavbarBrand>
        <CCollapse show={isOpen} navbar>
          <CNavbarNav>
            <CNavLink to="/">Home</CNavLink>
            <CNavLink>Book List</CNavLink>
            <CNavLink to="/favorites">
              My Favorites{" "}
              <span className="header_product_counter">
                <strong id="favorite-length">{favorite?.length}</strong>
              </span>
            </CNavLink>
          </CNavbarNav>
          <CNavbarNav className="ml-auto">
            <CForm inline>
              <CInput className="mr-sm-2" placeholder="Search" size="sm" />
              <CButton color="light" className="my-2 my-sm-0" type="submit">
                Search
              </CButton>
            </CForm>
            
            <CNavLink to="/login">Sign in</CNavLink>
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
    </div>
  );
}
