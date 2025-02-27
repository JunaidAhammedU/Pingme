import { useState } from "react";

const GifSearch = ({
  onSelectGif,
}: {
  onSelectGif: (gifUrl: string) => void;
}) => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState<string[]>([]);

  const fetchGifs = async (query: string) => {
    const API_KEY = " AIzaSyBv7GmTI5Y2LradpV2px4117V6PPfDG-KA"; // Replace with your API key
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10`
    );
    const { data } = await res.json();
    setGifs(data.map((gif: any) => gif.images.fixed_height.url));
  };

  return (
    <div className="p-4 border rounded-md">
      <input
        type="text"
        placeholder="Search GIFs..."
        className="border p-2 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="mt-2 p-2 bg-blue-500 text-white rounded-md"
        onClick={() => fetchGifs(search)}
      >
        Search
      </button>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {gifs.map((gif, index) => (
          <img
            key={index}
            src={gif}
            alt="gif"
            className="w-full h-auto cursor-pointer"
            onClick={() => onSelectGif(gif)}
          />
        ))}
      </div>
    </div>
  );
};

export default GifSearch;
