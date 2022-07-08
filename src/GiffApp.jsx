import { useContext, useEffect } from "react";
import Home from "./pages/Home";
import { GiphyContext } from "./context/GiphyContext";

const GiffApp = () => {
  const { searchCategory } = useContext(GiphyContext);

  useEffect(() => {
    searchCategory();
  }, []);

  return <Home />;
};

export default GiffApp;
