import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const MediaQuery = dynamic(() => import("react-responsive"), { ssr: false });

const Footer = () => {
  return (
    <footer style={{ marginTop: "100px" }}>
      {/* Media query untuk lebar layar lebih dari atau sama dengan 786px */}
      <MediaQuery minWidth={786}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 md:mt-0 ml-auto">
          {/* Card 1 */}
          <div className="flex flex-col ml-10">
            <h4 className="text-lg font-bold mb-4">Tripp</h4>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">Perusahaan</h4>
            <ul className="list-none">
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer mb-4">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer mb-4">
                  Karier
                </button>
              </li>
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer mb-4">
                  Tentang Kami
                </button>
              </li>
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer">
                  Partner
                </button>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col ">
            <h4 className="text-lg font-bold mb-4">Dukungan</h4>
            <ul className="list-none">
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer mb-4">
                  Pusat Bantuan
                </button>
              </li>
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer">
                  Kebijakan Privasi
                </button>
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">Hubung Kami</h4>

            <div className="flex">
              <button
                className="mr-4"
                style={{ width: "45px", height: "45px" }}
              >
                <img
                  src="/icon/facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </button>

              <button
                className="mr-4"
                style={{ width: "45px", height: "45px" }}
              >
                <img
                  src="/icon/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </button>

              <button
                className="mr-4"
                style={{ width: "45px", height: "45px" }}
              >
                <img
                  src="/icon/twitter.svg"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </button>

              <button style={{ width: "45px", height: "45px" }}>
                <img
                  src="/icon/whatsapp.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* Akhir Card 4 */}
        </div>

        {/* copyrighted */}

        <div className="tahun reserved">
          <hr className="border-gray-300 mb-8" />
          <p className="text-center mt-8 text-gray-600">
            &copy; 2023 All rights reserved
          </p>
        </div>
      </MediaQuery>

      {/* Media query untuk lebar layar kurang dari 786px */}
      <MediaQuery maxWidth={786}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 md:mt-0 ml-auto">
          {/* Card 1 */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">Tripp</h4>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">Perusahaan</h4>
            <ul className="list-none">
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer mb-4">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer mb-4">
                  Karier
                </button>
              </li>
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer mb-4">
                  Tentang Kami
                </button>
              </li>
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer">
                  Partner
                </button>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col ">
            <h4 className="text-lg font-bold mb-4">Dukungan</h4>
            <ul className="list-none">
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer mb-4">
                  Pusat Bantuan
                </button>
              </li>
              <li>
                <button className="text-gray-500 font-medium bg-transparent border-none cursor-pointer">
                  Kebijakan Privasi
                </button>
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">Hubung Kami</h4>

            <div className="flex">
              <button
                className="mr-4"
                style={{ width: "45px", height: "45px" }}
              >
                <img
                  src="/icon/facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </button>

              <button
                className="mr-4"
                style={{ width: "45px", height: "45px" }}
              >
                <img
                  src="/icon/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </button>

              <button
                className="mr-4"
                style={{ width: "45px", height: "45px" }}
              >
                <img
                  src="/icon/twitter.svg"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </button>

              <button style={{ width: "45px", height: "45px" }}>
                <img
                  src="/icon/whatsapp.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* Akhir Card 4 */}
        </div>

        {/* copyrighted */}

        <div className="tahun reserved">
          <hr className="border-gray-300 mb-8" />
          <p className="text-center mt-8 text-gray-600">
            &copy; 2023 All rights reserved
          </p>
        </div>
      </MediaQuery>
    </footer>
  );
};

export default Footer;
