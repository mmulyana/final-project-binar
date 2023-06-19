import React from "react";
import { SecondaryLayout } from "@/component/Layout";
import Account from "./account.js";

function ProfileCard() {
  return (
    <SecondaryLayout>
      <Account />
      <div className="flex items-center justify-center  h-screen">
        <div
          className="bg-white p-8 rounded-lg shadow-md"
          style={{ width: "518px", height: "462px", marginLeft: "24px" }}
        >
          <h2 className="text-2xl font-bold mb-4">Ubah Data Profil</h2>
          <div className="flex items-center justify-center bg-purple-500 rounded-tl-lg h-12 mb-4">
            <p className="text-white font-bold">Data Diri</p>
          </div>
          <div className="mb-4">
            <p className="text-blue-500 mb-1 font-bold">Nama Lengkap</p>
            <input
              type="text"
              className="w-full p-2 border border-gray-500 rounded"
            />
          </div>
          <div className="mb-4">
            <p className="text-blue-500 mb-1 font-bold">Nomor Telepon</p>
            <input
              type="text"
              className="w-full p-2 border border-gray-500 rounded"
            />
          </div>
          <div className="mb-4">
            <p className="text-blue-500 mb-1 font-bold">Email</p>
            <input
              type="text"
              className="w-full p-2 border border-gray-500 rounded"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-purple-900 text-white py-2 px-4 rounded">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default ProfileCard;
