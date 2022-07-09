export const getGif = async (cat) => {
  const API_KEY = "PlyRZS4hEVLkW13CMcPJ9P8GLuIlVTMA";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${cat}&limit=${100}&offset=0&rating=g&lang=en`;
  try {
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.original.url,
    }));
    return gifs;
  } catch (error) {
    console.log(error);
  }
};
