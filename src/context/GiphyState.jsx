import { useState } from "react";
import { GiphyContext } from "./GiphyContext";

const GiphyState = (props) => {
  const [giphies, setGiphies] = useState([]);

  const searchCategory = async (cat = "random") => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=PlyRZS4hEVLkW13CMcPJ9P8GLuIlVTMA&q=${cat}&limit=25&offset=0&rating=g&lang=en`
    );
    const data = await response.json();
    setGiphies(data.data);
  };

  return (
    <GiphyContext.Provider
      value={{
        searchCategory,
        giphies,
      }}
    >
      {props.children}
    </GiphyContext.Provider>
  );
};

export default GiphyState;
