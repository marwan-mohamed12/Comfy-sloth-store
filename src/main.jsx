import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";

// dev-n1p4fut4cfg013w1.us.auth0.com
//219DSAqJXapkK1NHnrzXsZl7LGiteEdR

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-n1p4fut4cfg013w1.us.auth0.com"
            clientId="219DSAqJXapkK1NHnrzXsZl7LGiteEdR"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <UserProvider>
                <ProductsProvider>
                    <FilterProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </FilterProvider>
                </ProductsProvider>
            </UserProvider>
        </Auth0Provider>
    </React.StrictMode>
);
