import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import { Outlet } from "react-router-dom";

function Navbar({ searchData }) {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">
          <Logo />
        </Link>
        <Search placeholder="Search a song of your choice" searchData={searchData} />
        <Button>Give Feedback</Button>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;
