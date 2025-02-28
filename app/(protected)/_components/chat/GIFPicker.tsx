import { useState, useEffect } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { SkeletonCard } from "@/components/common/Skelton";

const GifPicker = ({ onSelect }: { onSelect: (url: string) => void }) => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = "9dDueYYMxIpzBMLG1ZCjUer1oqHpMXAE";

  useEffect(() => {
    fetchTrendingGifs();
  }, []);

  const fetchTrendingGifs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=15`
      );
      setGifs(res.data.data);
    } catch (error) {
      console.error("Error fetching trending GIFs:", error);
    }
    setLoading(false);
  };

  const fetchGifs = async () => {
    if (!search.trim()) {
      fetchTrendingGifs();
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=15`
      );
      setGifs(res.data.data);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchGifs();
  };

  return (
    <div className="gif-picker w-full h-full flex flex-col">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search GIFs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#2b2d31] text-gray-200 rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6b8afd] transition-all"
          />
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </form>

      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="grid grid-cols-2 gap-2 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <AnimatePresence>
              {gifs.map((gif) => (
                <motion.div
                  key={gif.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => onSelect(gif.images.fixed_height.url)}
                >
                  <img
                    src={gif.images.fixed_height.url}
                    alt={gif.title}
                    className="w-full h-[100px] object-cover rounded-lg transition-transform duration-200 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {!loading && gifs.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <p>No GIFs found</p>
            <button
              onClick={fetchTrendingGifs}
              className="mt-2 text-[#6b8afd] hover:underline"
            >
              Show trending GIFs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GifPicker;
