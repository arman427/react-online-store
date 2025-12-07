const products = [
   {
      id: 1,
      name: 'Ноутбук HUAWEI MateBook D16',
      price: 40999,
      imageUrl: '/images/nqqo5xd97cac3et_aa5d0d8e.jpg.webp',
      category: 'Ноутбуки'
   },
   {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 Late',
      price: 67999,
      imageUrl: '/images/Без названия.jpg',
      category: 'Ноутбуки'
   },
   {
      id: 3,
      name: 'Ноутбук Apple MacBook Air 13 M1',
      price: 67999,
      imageUrl: '/images/m81v5q95st0t402nrsirtfta207sta2n.jpg',
      category: 'Ноутбуки'
   },
   {
      id: 4,
      name: 'Ноутбук HUAWEI MateBook D14',
      price: 50999,
      imageUrl: '/images/13.webp',
      category: 'Ноутбуки'
   },
   {
      id: 5,
      name: 'Ноутбук HONOR MagicBook Pro 16 Ultra',
      price: 115999,
      imageUrl: '/images/400324377bb.avif',
      category: 'Ноутбуки'
   },
   {
      id: 6,
      name: 'Samsung S24 Ultra',
      price: 76299,
      imageUrl: '/images/s24.jpg',
      category: 'Телефоны'
   },
   {
      id: 7,
      name: 'Samsung S25 Ultra',
      price: 125990,
      imageUrl: '/images/s25.jpg',
      category: 'Телефоны'
   },
   {
      id: 8,
      name: 'Vivo X200 Ultra 256 ГБ',
      price: 149999,
      imageUrl: '/images/vivo200.jpg',
      category: 'Телефоны'
   },
   {
      id: 9,
      name: 'Xiaomi 15 Ultra 512 ГБ',
      price: 104999,
      imageUrl: '/images/x15u.avif',
      category: 'Телефоны'
   },
   {
      id: 10,
      name: 'iPhone 16 Pro Max 256 ГБ',
      price: 131499,
      imageUrl: '/images/iphone16pm.jpg.webp',
      category: 'Телефоны'
   },
   {
      id: 11,
      name: 'iPhone 17 Pro Max 256 ГБ',
      price: 155999,
      imageUrl: '/images/iphone17pm.jpg.webp',
      category: 'Телефоны'
   },
   {
      id: 12,
      name: 'Телевизор Hisense 55E7Q PRO',
      price: 42999,
      imageUrl: '/images/hisense.avif',
      category: 'Телевизоры'
   },
   {
      id: 13,
      name: 'Телевизор Hisense 65E7Q',
      price: 62999,
      imageUrl: '/images/hisense2.avif',
      category: 'Телевизоры'
   },
   {
      id: 14,
      name: 'Телевизор QD-Mini LED TCL 115X955',
      price: 1817999,
      imageUrl: '/images/qd-mini.avif',
      category: 'Телевизоры'
   },
   {
      id: 15,
      name: 'Телевизор LG OLED77G3RLA',
      price: 249999,
      imageUrl: '/images/lg.avif',
      category: 'Телевизоры'
   },
   {
      id: 16,
      name: 'Телевизор Toshiba 100Z670NE',
      price: 247999,
      imageUrl: '/images/toshiba_tele.webp',
      category: 'Телевизоры'
   },
   {
      id: 17,
      name: 'Телевизор Samsung UE98DU9000UXRU',
      price: 223224,
      imageUrl: '/images/samsa.avif',
      category: 'Телевизоры'
   },
   {
      id: 18,
      name: 'Телевизор Samsung QE65S95DAUXRU',
      price: 202749,
      imageUrl: '/images/samsa2.avif',
      category: 'Телевизоры'
   },
   {
      id: 19,
      name: 'Телевизор Haier 75 Mini LED',
      price: 177999,
      imageUrl: '/images/haier.avif',
      category: 'Телевизоры'
   },
   {
      id: 20,
      name: 'Телевизор Haier 75 Mini LED',
      price: 177999,
      imageUrl: '/images/haier.avif',
      category: 'Телевизоры'
   },
   {
      id: 21,
      name: 'Телевизор Dreame Aura Mini LED 4K TV',
      price: 172999,
      imageUrl: '/images/aura_tele.webp',
      category: 'Телевизоры'
   },
   {
      id: 22,
      name: 'Игровая консоль PlayStation 5 Slim',
      price: 62999,
      imageUrl: '/images/ps5.jpg.webp',
      category: 'Консоли'
   },
   {
      id: 23,
      name: 'Игровая консоль PlayStation 5 Pro',
      price: 92999,
      imageUrl: '/images/ps5pro.jpg.webp',
      category: 'Консоли'
   },
   {
      id: 24,
      name: 'Холодильник Gorenje NRK6202AW4 белый',
      price: 47999,
      imageUrl: '/images/gorenje.avif',
      category: 'Холодильники'
   },
   {
      id: 25,
      name: 'Холодильник Hisense RB434N4BCE2',
      price: 47999,
      imageUrl: '/images/hisense_holod.avif',
      category: 'Холодильники'
   },
   {
      id: 26,
      name: 'Холодильник Beko B5RCNK403ZX BIO',
      price: 47999,
      imageUrl: '/images/beko.avif',
      category: 'Холодильники'
   },
   {
      id: 27,
      name: 'Холодильник Gorenje NRK6202AXL4 серебристый',
      price: 54999,
      imageUrl: '/images/gorenje_holod.avif',
      category: 'Холодильники'
   },
   {
      id: 28,
      name: 'Холодильник Indesit ITS 4180 W белый',
      price: 31999,
      imageUrl: '/images/indesit.avif',
      category: 'Холодильники'
   },
   {
      id: 29,
      name: 'Видеокарта Palit GeForce RTX 4060 Dual',
      price: 35499,
      imageUrl: '/images/rtx4060.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 30,
      name: 'Видеокарта GIGABYTE GeForce RTX 4060 EAGLE OC',
      price: 37499,
      imageUrl: '/images/rtx4060_eagle.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 31,
      name: 'Видеокарта MSI GeForce RTX 4070 VENTUS 3X E OC',
      price: 51999,
      imageUrl: '/images/rtx4070.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 32,
      name: 'Видеокарта GIGABYTE GeForce RTX 4070 SUPER WINDFORCE OC',
      price: 56799,
      imageUrl: '/images/rtx4070_giga.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 33,
      name: 'Видеокарта GIGABYTE GeForce RTX 4070 Ti SUPER GAMING',
      price: 79999,
      imageUrl: '/images/rtx4070ti_giga.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 34,
      name: 'Видеокарта Palit GeForce RTX 4080 SUPER Infinity 3 OC',
      price: 84999,
      imageUrl: '/images/rtx4080s.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 35,
      name: 'Видеокарта MSI GeForce RTX 4090 GAMING X TRIO',
      price: 239999,
      imageUrl: '/images/rtx4090_msi.png.webp',
      category: 'Видеокарты'
   },
   {
      id: 36,
      name: 'Видеокарта Palit GeForce RTX 4090 GameRock',
      price: 188999,
      imageUrl: '/images/rtx4090_palit.png.webp',
      category: 'Видеокарты'
   },
   {
      id: 37,
      name: 'Видеокарта ASUS GeForce RTX 4090 TUF Gaming OG OC Edition',
      price: 249999,
      imageUrl: '/images/rtx4090_asus.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 38,
      name: 'Видеокарта Palit GeForce RTX 5060 Dual',
      price: 33999,
      imageUrl: '/images/rtx5060_palit.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 39,
      name: 'Видеокарта Palit GeForce RTX 5060 Ti Infinity 3',
      price: 51999,
      imageUrl: '/images/rtx5060Ti.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 40,
      name: 'Видеокарта Palit GeForce RTX 5070 Infinity 3',
      price: 63999,
      imageUrl: '/images/rtx5070.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 41,
      name: 'Видеокарта Palit GeForce RTX 5070 Ti GamingPro',
      price: 99999,
      imageUrl: '/images/rtx5070Ti.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 42,
      name: 'Видеокарта Palit GeForce RTX 5080 GamingPro',
      price: 124999,
      imageUrl: '/images/rtx5080.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 43,
      name: 'Видеокарта Palit GeForce RTX 5090 GameRock',
      price: 289999,
      imageUrl: '/images/rtx5090_palit.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 44,
      name: 'Видеокарта ASUS GeForce RTX 5090 ROG Astral OC Edition',
      price: 419999,
      imageUrl: '/images/rtx5090_asus.jpg.webp',
      category: 'Видеокарты'
   },
   {
      id: 45,
      name: 'Процессор AMD Ryzen 5 5600 OEM',
      price: 11999,
      imageUrl: '/images/5600.jpg.webp',
      category: 'Процессоры'
   },
   {
      id: 46,
      name: 'Процессор AMD Ryzen 5 5600X OEM',
      price: 12299,
      imageUrl: '/images/5600x.jpg.webp',
      category: 'Процессоры'
   },
   {
      id: 47,
      name: 'Процессор Intel Core i5-12400F OEM',
      price: 13299,
      imageUrl: '/images/12400F.jpg.webp',
      category: 'Процессоры'
   },
   {
      id: 48,
      name: 'Процессор AMD Ryzen 5 7500F OEM',
      price: 15999,
      imageUrl: '/images/7500f.jpg.webp',
      category: 'Процессоры'
   },
   {
      id: 49,
      name: 'Процессор AMD Ryzen 7 7700 OEM',
      price: 23999,
      imageUrl: '/images/7700.jpg.webp',
      category: 'Процессоры'
   },
   {
      id: 50,
      name: 'Процессор AMD Ryzen 7 7800X3D OEM',
      price: 38999,
      imageUrl: '/images/7800x3d.jpg.webp',
      category: 'Процессоры'
   },
   {
      id: 51,
      name: 'Процессор AMD Ryzen 7 9800X3D OEM',
      price: 52999,
      imageUrl: '/images/9800x3d.jpg.webp',
      category: 'Процессоры'
   },
   {
      id: 52,
      name: 'Процессор AMD Ryzen 9 9950X3D OEM',
      price: 73499,
      imageUrl: '/images/9950x3d.jpg.webp',
      category: 'Процессоры'
   },
   {
      id: 53,
      name: 'Оперативная память Kingston FURY Beast Black 16 ГБ DDR4',
      price: 14299,
      imageUrl: '/images/16gb.jpg.webp',
      category: 'Оперативная память'
   },
   {
      id: 54,
      name: 'Оперативная память Kingston FURY Beast Black 32 ГБ DDR4',
      price: 26399,
      imageUrl: '/images/32gb.jpg.webp',
      category: 'Оперативная память'
   },
   {
      id: 55,
      name: 'Оперативная память Kingston FURY Beast Black 16 ГБ DDR5',
      price: 26399,
      imageUrl: '/images/16-ddr5jpg.webp',
      category: 'Оперативная память'
   },
   {
      id: 56,
      name: 'Оперативная память Kingston FURY Beast Black 32 ГБ DDR5',
      price: 42799,
      imageUrl: '/images/32-ddr5jpg.webp',
      category: 'Оперативная память'
   },
   {
      id: 57,
      name: 'Блок питания Cougar GEX850',
      price: 9999,
      imageUrl: '/images/cougarjpg.webp',
      category: 'Блоки питания'
   },
   {
      id: 57,
      name: 'Блок питания MSI MPG A850G PCIE5',
      price: 14999,
      imageUrl: '/images/msi.jpg.webp',
      category: 'Блоки питания'
   },
   {
      id: 58,
      name: 'Блок питания MONTECH TITAN GOLD 850',
      price: 16199,
      imageUrl: '/images/montechjpg.webp',
      category: 'Блоки питания'
   },
   {
      id: 59,
      name: '500 ГБ 2.5" SATA накопитель Samsung 870 EVO',
      price: 10499,
      imageUrl: '/images/sata1.jpg.webp',
      category: 'SATA накопители'
   },
   {
      id: 60,
      name: '1000 ГБ M.2 NVMe накопитель Kingston NV3',
      price: 10999,
      imageUrl: '/images/m2-2.jpg.webp',
      category: 'M.2 накопители'
   },
   {
      id: 61,
      name: '1000 ГБ M.2 NVMe накопитель Samsung 990 PRO',
      price: 17699,
      imageUrl: '/images/m2-1.jpg.webp',
      category: 'M.2 накопители'
   },
   {
      id: 62,
      name: '2000 ГБ M.2 NVMe накопитель Samsung 990 PRO',
      price: 24999,
      imageUrl: '/images/m2-3.jpg.webp',
      category: 'M.2 накопители'
   },
];

export default products;