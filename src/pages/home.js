import React from "react";
import AirAsia from "public/image/AirAsia.png";
import BatikAir from "public/image/BatikAir.png";
import Garuda from "public/image/Garuda.png";
import jal from "public/image/jal.png";
import LionAir from "public/image/LionAir.png";
import Lufthansa from "public/image/Lufthansa.png";
import Qatar from "public/image/Qatar.png";

export default function home() {
  return (
    <div className="bg-gray-100">
      <div className="">
        <h1 className="text-center font-bold mt-10">Partner Maskapai</h1>
        <p className="text-center mt-5 mb-5">
          Kerjasama kami dengan maskapai penerbangan di seluruh dunia
          memungkinkan kami mengantar Anda ke tujuan impian Anda, tak peduli di
          mana itu berada!
        </p>

        <div className="flex items-center gap-[150px]">
          <img src="/image/Garuda.png" alt="Garuda" />

          <img src="/image/LionAir.png" alt="LionAir" />

          <img src="/image/BatikAir.png" alt="BatikAir" />

          <img src="/image/AirAsia.png" alt="AirAsia" />
        </div>

        <div className="flex items-center gap-[100px]">
          <img src="/image/Qatar.png" alt="Qatar" />

          <img src="/image/jal.png" alt="Japan" />

          <img src="/image/Lufthansa.png" alt="Lufthansa" />
        </div>
      </div>
    </div>
  );
}
