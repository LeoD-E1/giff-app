import { useState } from "react";
import { GiphyContext } from "./GiphyContext";
import { getGif } from "../helpers/getGif";

const GiphyState = (props) => {
  const [giphies, setGiphies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const searchCategory = async (cat = "hunter x hunter") => {
    setHistory([cat, ...history]);
    setLoading(true);
    const gifs = await getGif(cat);
    setGiphies([...gifs]);
    setLoading(false);
  };

  const deleteCategory = (id) => {
    setGiphies([...giphies.filter((g) => g.id !== id)]);
  };

  return (
    <GiphyContext.Provider
      value={{
        history,
        loading,
        searchCategory,
        deleteCategory,
        giphies,
      }}
    >
      {props.children}
    </GiphyContext.Provider>
  );
};

export default GiphyState;
