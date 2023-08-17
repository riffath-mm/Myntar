import React, { useEffect } from "react";
import ProductModule from "../Components/Module/ProductModule";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import "./Product.css";

const Product = () => {
    const [productttt, setProductttt] = useState([]);

    useEffect(() => {
        // debugger;

        // ProductModule.getProduct = (response)=>
        ProductModule.getProduct((response) => {
            if (response.status === "success") {
                setProductttt(response.data);
                console.log(response.data);
            } else {
                console.log("error");
            }
        });
    }, []);
    return (
        <div className="pppp">
            {productttt.map((item) => {
                return (
                    <Card className="Product">
                        <CardContent>
                            <Typography>{item.id}</Typography>
                            <Typography>{item.title}</Typography>
                            <Typography>{item.body}</Typography>
                            <img
                                src={
                                    "https://source.unsplash.com/random?house,cars&$"
                                }
                                alt="Paella dish"
                                width="350px"
                                height="350px"
                            />
                        </CardContent>
                        <Button sx={{ marginLeft: "50px" }}>Add To Cart</Button>
                    </Card>
                );
            })}
        </div>
    );
};

export default Product;
