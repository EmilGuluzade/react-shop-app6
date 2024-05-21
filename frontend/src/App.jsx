import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./config/config";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setData] = useState([]);
    const router = createBrowserRouter(ROUTES);
    const [basket, setBasket] = useState( localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setData([...res.data]);
      console.log(res.data)
    });
  }, [data]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function deleteFromBasket(id) {
    let target = basket.find((x) => x._id == id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= target.price;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((x) => x._id != id)]);
    }
  }

  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id == id);

    if (!basketItem) {
      let target = data.find((x) => x._id == id);
    
      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
    } else {
      basketItem.count += 1;
      basketItem.totalPrice += basketItem.price;
      setBasket([...basket]);
    }
  }


    const contextData = {
      data, setData, loading, setLoading, error, setError, addToBasket, deleteFromBasket, basket, setBasket,
    }

    return (
        <>
        <MainContext.Provider value={contextData}>
                <HelmetProvider>
                    <RouterProvider router={router} />
                </HelmetProvider>
            </MainContext.Provider>
        </>
    );
}

export default App;
