import React from "react";
import axios from "axios";
class ProductModule {
    getProduct = (callback) => {
        console.log(callback);
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);

                callback({ status: "success", data: response.data });
            })

            .catch((error) => {
                console.log(error);
            });
    };
}

export default new ProductModule();
