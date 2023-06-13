import { useState } from "react";

const selectclass = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceSelect = (price) => {
    setSelectedPrice(price);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`cursor-pointer flex justify-between w-96 bg-gray-200 p-6 rounded-lg ${
          selectedPrice === "Termurah" ? "bg-red-400 text-white" : ""
        }`}
        onClick={() => handlePriceSelect("Termurah")}
      >
        <div>
          <p className="font-bold">Termurah</p>
        </div>
        <div
          className={`text-gray-700 ${
            selectedPrice === "Termurah" ? "text-white" : ""
          }`}
        >
          {selectedPrice === "Termurah" ? (
            <select className="mt-2 bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500">
              <option value="Rp. 1.400.000">Rp. 700.000</option>
              <option value="Rp. 1.800.000">Rp. 1.400.000</option>
              <option value="Rp. 2.200.000">Rp. 2.000.000</option>
            </select>
          ) : (
            <p className="font-bold">Mulai dari Rp. 700.000</p>
          )}
        </div>
      </div>
      <div
        className={`cursor-pointer flex justify-between w-96 bg-gray-200 p-6 rounded-lg ml-6 ${
          selectedPrice === "Tercepat" ? "bg-green-400 text-white" : ""
        }`}
        onClick={() => handlePriceSelect("Tercepat")}
      >
        <div>
          <p className="font-bold">Tercepat</p>
        </div>
        <div
          className={`text-gray-700 ${
            selectedPrice === "Tercepat" ? "text-white" : ""
          }`}
        >
          {selectedPrice === "Tercepat" ? (
            <select className="mt-2 bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500">
              <option value="Rp. 1.400.000">Rp. 1.400.000</option>
              <option value="Rp. 1.800.000">Rp. 1.800.000</option>
              <option value="Rp. 2.200.000">Rp. 2.200.000</option>
            </select>
          ) : (
            <p className="font-bold">Mulai dari Rp. 1.400.000</p>
          )}
        </div>
      </div>
      <div
        className={`cursor-pointer flex justify-between w-96 bg-gray-200 p-6 rounded-lg ml-6 ${
          selectedPrice === "Terbaik" ? "bg-purple-400 text-white" : ""
        }`}
        onClick={() => handlePriceSelect("Terbaik")}
      >
        <div>
          <p className="font-bold">Terbaik</p>
        </div>
        <div
          className={`text-gray-700 ${
            selectedPrice === "Terbaik" ? "text-white" : ""
          }`}
        >
          {selectedPrice === "Terbaik" ? (
            <select className="mt-2 bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500">
              <option value="Rp. 1.400.000">Rp. 2.000.000</option>
              <option value="Rp. 1.800.000">Rp. 2.400.000</option>
              <option value="Rp. 2.200.000">Rp. 3.000.000</option>
            </select>
          ) : (
            <p className="font-bold">Mulai dari Rp. 2.000.000</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default selectclass;
