import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 border-b-2 border-gray-300">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-pink-500"
              href="#pablo"
            >
              <img src="/logo.png" alt="Logo" className="h-10 w-auto mr-4" />
            </a>
            <button
              className=""
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="search relative flex items-center">
              <input
                type="text"
                placeholder="Cari Disini"
                className="h-12 w-full sm:w-auto left-0 sm:left-20 top-4 border border-gray-300 rounded-full px-6 py-3 bg-gray-200 text-black focus:outline-none focus:border-purple-500"
              />
              <span className="absolute right-0 pr-3">
                <span className="sr-only">Search</span>
                <svg
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="ml-auto">
              <button
                className="h-12 w-28 bg-purple-700 rounded-lg px-4 py-3 text-white font-bold flex items-center justify-center"
                style={{
                  borderRadius: "12px",
                }}
              >
                <svg
                  className="w-4 h-4 mr-2 text-white"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33301 14.1663L12.4997 9.99967L8.33301 5.83301"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 10H2.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Masuk</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
