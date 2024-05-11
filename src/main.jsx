import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <NextUIProvider>
        <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          </AuthProvider>
        </HelmetProvider>
      </NextUIProvider>
    
  </React.StrictMode>
);
