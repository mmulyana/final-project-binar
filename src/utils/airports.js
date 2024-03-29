const airports = [
  {
    "name": "APT Pranoto Airport",
    "iata_code": "AAP",
    "city": "Samarinda",
    "country": "Indonesia"
  },
  {
    "name": "Abdul Rachman Saleh",
    "iata_code": "MLG",
    "city": "Malang",
    "country": "Indonesia"
  },
  {
    "name": "Achmad Yani",
    "iata_code": "SRG",
    "city": "Semarang",
    "country": "Indonesia"
  },
  {
    "name": "Adi Soemarmo",
    "iata_code": "SOC",
    "city": "Solo",
    "country": "Indonesia"
  },
  {
    "name": "Adi Sutjipto",
    "iata_code": "JOG",
    "city": "Yogyakarta",
    "country": "Indonesia"
  },
  {
    "name": "Betoambari",
    "iata_code": "BUW",
    "city": "Bau-Bau, Buton",
    "country": "Indonesia"
  },
  {
    "name": "Binaka",
    "iata_code": "GNS",
    "city": "Nias/Gunung Sitoli",
    "country": "Indonesia"
  },
  {
    "name": "Changi Intl",
    "iata_code": "SIN",
    "city": "Singapore",
    "country": "Singapore"
  },
  {
    "name": "Depati Amir",
    "iata_code": "PGK",
    "city": "Bangka / Pangkal Pinang",
    "country": "Indonesia"
  },
  {
    "name": "Domine Eduard Osok",
    "iata_code": "SOQ",
    "city": "Sorong",
    "country": "Indonesia"
  },
  {
    "name": "El Tari",
    "iata_code": "KOE",
    "city": "Kupang",
    "country": "Indonesia"
  },
  {
    "name": "Fatmawati Soekarno",
    "iata_code": "BKS",
    "city": "Bengkulu",
    "country": "Indonesia"
  },
  {
    "name": "Frans Kaisiepo",
    "iata_code": "BIK",
    "city": "Biak",
    "country": "Indonesia"
  },
  {
    "name": "Frans Seda/Wai Oti",
    "iata_code": "MOF",
    "city": "Maumere",
    "country": "Indonesia"
  },
  {
    "name": "Gusti Sjamsir Alam",
    "iata_code": "KBU",
    "city": "Kotabaru",
    "country": "Indonesia"
  },
  {
    "name": "H Hasan Aroeboesman",
    "iata_code": "ENE",
    "city": "Ende",
    "country": "Indonesia"
  },
  {
    "name": "H. Asan Airport",
    "iata_code": "SMQ",
    "city": "Sampit",
    "country": "Indonesia"
  },
  {
    "name": "H.A.S Hanandjoeddin Airport",
    "iata_code": "TJQ",
    "city": "Belitung / Tanjung Pandan",
    "country": "Indonesia"
  },
  {
    "name": "Halim Perdanakusuma International Airport",
    "iata_code": "HLP",
    "city": "Jakarta",
    "country": "Indonesia"
  },
  {
    "name": "Haluoleo",
    "iata_code": "KDI",
    "city": "Kendari",
    "country": "Indonesia"
  },
  {
    "name": "Hang Nadim",
    "iata_code": "BTH",
    "city": "Batam",
    "country": "Indonesia"
  },
  {
    "name": "Hasanuddin",
    "iata_code": "UPG",
    "city": "Makassar",
    "country": "Indonesia"
  },
  {
    "name": "Husein Sastranegara",
    "iata_code": "BDO",
    "city": "Bandung",
    "country": "Indonesia"
  },
  {
    "name": "Iskandar",
    "iata_code": "PKN",
    "city": "Pangkalan Bun",
    "country": "Indonesia"
  },
  {
    "name": "Jalaluddin",
    "iata_code": "GTO",
    "city": "Gorontalo",
    "country": "Indonesia"
  },
  {
    "name": "Juanda International Airport",
    "iata_code": "SUB",
    "city": "Surabaya",
    "country": "Indonesia"
  },
  {
    "name": "Juwata International Airport",
    "iata_code": "TRK",
    "city": "Tarakan",
    "country": "Indonesia"
  },
  {
    "name": "Kalimarau",
    "iata_code": "BEJ",
    "city": "Berau",
    "country": "Indonesia"
  },
  {
    "name": "Komodo",
    "iata_code": "LBJ",
    "city": "Labuan Bajo",
    "country": "Indonesia"
  },
  {
    "name": "Kuala Lumpur International Airport",
    "iata_code": "KUL",
    "city": "Kuala Lumpur",
    "country": "Malaysia"
  },
  {
    "name": "Kualanamu International Airport",
    "iata_code": "KNO",
    "city": "Medan",
    "country": "Indonesia"
  },
  {
    "name": "Lombok Praya International Airport",
    "iata_code": "LOP",
    "city": "Lombok",
    "country": "Indonesia"
  },
  {
    "name": "Minangkabau Intl",
    "iata_code": "PDG",
    "city": "Padang",
    "country": "Indonesia"
  },
  {
    "name": "Mopah",
    "iata_code": "MKQ",
    "city": "Merauke",
    "country": "Indonesia"
  },
  {
    "name": "Mozes Kilangin",
    "iata_code": "TIM",
    "city": "Timika",
    "country": "Indonesia"
  },
  {
    "name": "Muhammad Salahuddin",
    "iata_code": "BMU",
    "city": "Bima",
    "country": "Indonesia"
  },
  {
    "name": "Mutiara SIS Aljufri",
    "iata_code": "PLW",
    "city": "Palu",
    "country": "Indonesia"
  },
  {
    "name": "Nabire",
    "iata_code": "NBX",
    "city": "Nabire",
    "country": "Indonesia"
  },
  {
    "name": "Ngurah Rai International Airport",
    "iata_code": "DPS",
    "city": "Bali / Denpasar",
    "country": "Indonesia"
  },
  {
    "name": "Pattimura Airport",
    "iata_code": "AMQ",
    "city": "Ambon",
    "country": "Indonesia"
  },
  {
    "name": "Penang Intl",
    "iata_code": "PEN",
    "city": "Penang",
    "country": "Malaysia"
  },
  {
    "name": "Radin Inten II Airport",
    "iata_code": "TKG",
    "city": "Bandar Lampung",
    "country": "Indonesia"
  },
  {
    "name": "Rahadi Usman",
    "iata_code": "KTG",
    "city": "Ketapang",
    "country": "Indonesia"
  },
  {
    "name": "Raja Haji Fisabilillah International Airport",
    "iata_code": "TNJ",
    "city": "Bintan / Tanjung Pinang",
    "country": "Indonesia"
  },
  {
    "name": "Rendani",
    "iata_code": "MKW",
    "city": "Manokwari",
    "country": "Indonesia"
  },
  {
    "name": "Sam Ratulangi",
    "iata_code": "MDC",
    "city": "Manado",
    "country": "Indonesia"
  },
  {
    "name": "Sentani",
    "iata_code": "DJJ",
    "city": "Jayapura",
    "country": "Indonesia"
  },
  {
    "name": "Sepinggan",
    "iata_code": "BPN",
    "city": "Balikpapan",
    "country": "Indonesia"
  },
  {
    "name": "Soa",
    "iata_code": "BJW",
    "city": "Bajawa",
    "country": "Indonesia"
  },
  {
    "name": "Soekarno Hatta International Airport",
    "iata_code": "CGK",
    "city": "Jakarta",
    "country": "Indonesia"
  },
  {
    "name": "Sultan Babullah",
    "iata_code": "TTE",
    "city": "Ternate",
    "country": "Indonesia"
  },
  {
    "name": "Sultan Iskandarmuda",
    "iata_code": "BTJ",
    "city": "Banda Aceh",
    "country": "Indonesia"
  },
  {
    "name": "Sultan Mahmud Badaruddin II",
    "iata_code": "PLM",
    "city": "Palembang",
    "country": "Indonesia"
  },
  {
    "name": "Sultan Syarif Kasim II",
    "iata_code": "PKU",
    "city": "Pekanbaru",
    "country": "Indonesia"
  },
  {
    "name": "Sultan Thaha",
    "iata_code": "DJB",
    "city": "Jambi",
    "country": "Indonesia"
  },
  {
    "name": "Supadio",
    "iata_code": "PNK",
    "city": "Pontianak",
    "country": "Indonesia"
  },
  {
    "name": "Syamsudin Noor",
    "iata_code": "BDJ",
    "city": "Banjarmasin",
    "country": "Indonesia"
  },
  {
    "name": "Tambolaka Airport",
    "iata_code": "TMC",
    "city": "Waikabubak",
    "country": "Indonesia"
  },
  {
    "name": "Tjilik Riwut",
    "iata_code": "PKY",
    "city": "Palangkaraya",
    "country": "Indonesia"
  },
  {
    "name": "Wamena",
    "iata_code": "WMX",
    "city": "Wamena",
    "country": "Indonesia"
  },
  {
    "name": "Yogyakarta International Airport",
    "iata_code": "YIA",
    "city": "Yogyakarta",
    "country": "Indonesia"
  }
]

export default airports