import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { withTheme } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Pages/Product";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import myntra from "../Images/myntra.jpg";

const pages = [
    {
        name: "Men",
        link: "/men",
    },
    {
        name: "Women",
        link: "/women",
    },
    {
        name: "KIDS",
        link: "/kids",
    },
    {
        name: "Home & LIVINg",
        link: "/homeAndLiving",
    },
    {
        name: "Beauty",
        link: "/beauty",
    },
    {
        name: "Studio",
        link: "/studio",
    },

    // ["MEN", "WOMEN", "KIDS", "HOME & LIVING", "BEAUTY", "STUDIO"];
];

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Practices() {
    const [Searchvalue, setSearchValue] = useState("");

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    textDecoration: "none",
                    listStyle: "none",
                    // color: "inherit",
                    boxShadow: "4px 4px 4px 4px rgb(181, 180, 180)",
                    fontSize: "10px",
                    position: "sticky",
                    top: 1,
                }}
            >
                <img
                    src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200"
                    width="50px"
                />
                {pages.map((item) => {
                    return (
                        <>
                            <Link to={item.link}>
                                <h1>{item.name}</h1>
                            </Link>
                        </>
                    );
                })}
                <SearchIcon
                    style={{
                        height: "40px",
                        marginTop: "10px",
                        backgroundColor: "#f5f5f6",
                    }}
                />

                <input
                    style={{
                        height: "40px",
                        // flex: "1",
                        marginTop: "10px",
                        backgroundColor: "#f5f5f6",
                        border: " 1px solid #f5f5f6",
                        padding: "5px",
                    }}
                    type="search"
                    placeholder="Search for product,brand and more"
                    value={Searchvalue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <div
                    style={{ display: "flex", gap: "20px", marginTop: "10px" }}
                >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Person2OutlinedIcon />
                        <span>Profile</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <ShoppingBagOutlinedIcon />
                        <span>Bag</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <FavoriteBorderOutlinedIcon />
                        <span>Wishlist</span>
                    </div>
                </div>
            </div>
            <Product />
        </>
    );
}
export default Practices;
