import Image from "next/image";
import Logo from "public/image/logo.svg";
import Illustration from "public/image/illustration.svg";
import React from "react";
import { useState } from "react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("");
  };

  return (
    <div className="container font-['Poppins']">
      <div className="flex flex-col lg:flex-row min-h-screen w-screen bg-white">
        <div className="w-full lg:w-1/2 flex flex-col pt-16 pb-0 bg-no-repeat bg-cover bg-center bg-gradient-to-b from-[#DEC9FF]">
          <Image
            className="float-none pl-16 pb-0"
            width="260"
            src={Logo}
            alt="logo"
          />
          <Image
            className="float-none w-[680px]"
            src={Illustration}
            alt="banner-illustration"
          />
        </div>
        <div className="w-full lg:w-1/2 py-[9rem] px-[7rem]">
          <h2 className="text-2xl mb-4 font-bold">Daftar</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="p-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Nama Lengkap
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nama Lengkap"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="p-1">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Contoh: johndee@gmail.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="p-1">
              <label className="block text-sm font-medium text-gray-700">
                Nomor Telepon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+62"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="p-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Buat Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Buat Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#7126B5] py-3 text-center text-white"
              >
                Daftar
              </button>
            </div>

            <div className="mt-8 flex justify-center items-center">
              <p className="font-normal text-sm">
                Sudah punya akun?{" "}
                <a href="#" className="font-bold text-sm text-[#7126B5]">
                  Masuk di sini
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
