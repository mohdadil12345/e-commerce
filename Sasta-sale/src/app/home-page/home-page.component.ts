import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {


  // products = [
  //   {
  //     "id": 1,
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "discount" : 20,
  //     "in_inventory" : true,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "rating": {
  //       "rate": 3.9,
  //       "count": 120
  //     },
    
  //   },
  //   {
  //     "id": 2,
  //     "title": "Mens Casual Premium Slim Fit T-Shirts ",
  //     "price": 220.3,
  //     "discount" : 30,
  //     "in_inventory" : false,
  //     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     "rating": {
  //       "rate": 4.1,
  //       "count": 259
  //     }
  //   },
  //   {
  //     "id": 3,
  //     "title": "Mens Cotton Jacket",
  //     "price": 550.99,
  //     "discount" : 200,
  //     "in_inventory" : false,
  //     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     "rating": {
  //       "rate": 4.7,
  //       "count": 500
  //     }
  //   },
  //   {
  //     "id": 4,
  //     "title": "Mens Casual Slim Fit",
  //     "price": 150.99,
  //     "discount" : 30,
  //     "in_inventory" : true,
  //     "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //     "rating": {
  //       "rate": 2.1,
  //       "count": 430
  //     }
  //   },
  //   {
  //     "id": 5,
  //     "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  //     "price": 695,
  //     "in_inventory" : false,
  //     "discount" : 200,
  //     "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  //     "category": "jewelery",
  //     "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  //     "rating": {
  //       "rate": 4.6,
  //       "count": 400
  //     }
  //   },
  //   {
  //     "id": 6,
  //     "title": "Solid Gold Petite Micropave ",
  //     "price": 1680,
  //     "in_inventory" : false,
  //     "discount" : 400,
  //     "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  //     "category": "jewelery",
  //     "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  //     "rating": {
  //       "rate": 4.0,
  //       "count": 70
  //     }
  //   },
  //   {
  //     "id": 7,
  //     "title": "White Gold Plated Princess",
  //     "price": 9999.99,
  //     "discount" : 900,
  //     "in_inventory" : true,
  //     "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  //     "category": "jewelery",
  //     "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  //     "rating": {
  //       "rate": 4.8,
  //       "count": 400
  //     }
  //   },
  //   {
  //     "id": 8,
  //     "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
  //     "price": 1000.99,
  //     "discount" : 200,
  //     "in_inventory" : true,
  //     "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  //     "category": "jewelery",
  //     "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  //     "rating": {
  //       "rate": 1.9,
  //       "count": 100
  //     }
  //   },
  //   {
  //     "id": 9,
  //     "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  //     "price": 6994,
  //     "discount" : 4500,
  //     "in_inventory" : false,
  //     "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  //     "rating": {
  //       "rate": 3.3,
  //       "count": 203
  //     }
  //   },
  //   {
  //     "id": 10,
  //     "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
  //     "price": 1209,
  //     "discount" : 300,
  //     "in_inventory" : false,
  //     "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  //     "rating": {
  //       "rate": 2.9,
  //       "count": 470
  //     }
  //   },
  //   {
  //     "id": 11,
  //     "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  //     "price": 9999,
  //     "in_inventory" : true,
  //     "discount" : 1000,
  //     "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  //     "rating": {
  //       "rate": 4.8,
  //       "count": 319
  //     }
  //   },
  //   {
  //     "id": 12,
  //     "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
  //     "price": 444,
  //     "in_inventory" : false,
  //     "discount" : 200,
  //     "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  //     "rating": {
  //       "rate": 4.8,
  //       "count": 400
  //     }
  //   },
  //   {
  //     "id": 13,
  //     "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
  //     "price": 599,
  //     "discount" : 199,
  //     "in_inventory" : true,
  //     "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  //     "rating": {
  //       "rate": 2.9,
  //       "count": 250
  //     }
  //   },
  //   {
  //     "id": 14,
  //     "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
  //     "price": 999.99,
  //     "discount" : 399,
  //     "in_inventory" : true,
  //     "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
  //     "category": "electronics",
  //     "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  //     "rating": {
  //       "rate": 2.2,
  //       "count": 140
  //     }
  //   },
  //   {
  //     "id": 15,
  //     "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  //     "price": 569.99,
  //     "discount" : 200,
  //     "in_inventory" : true,
  //     "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  //     "rating": {
  //       "rate": 2.6,
  //       "count": 235
  //     }
  //   },
  //   {
  //     "id": 16,
  //     "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  //     "price": 2999.95,
  //     "discount" : 200,
  //     "in_inventory" : true,
  //     "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  //     "rating": {
  //       "rate": 2.9,
  //       "count": 340
  //     }
  //   },
  //   {
  //     "id": 17,
  //     "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  //     "price": 3900.99,
  //     "discount" : 900,
  //     "in_inventory" : false,
  //     "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  //     "rating": {
  //       "rate": 3.8,
  //       "count": 679
  //     }
  //   },
  //   {
  //     "id": 18,
  //     "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
  //     "price": 9999.85,
  //     "discount" : 2000,
  //     "in_inventory" : true,
  //     "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  //     "rating": {
  //       "rate": 4.7,
  //       "count": 130
  //     }
  //   },
  //   {
  //     "id": 19,
  //     "title": "Opna Women's Short Sleeve Moisture",
  //     "price": 788.95,
  //     "discount" : 300,
  //     "in_inventory" : true,
  //     "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  //     "rating": {
  //       "rate": 4.5,
  //       "count": 146
  //     }
  //   },
  //   {
  //     "id": 20,
  //     "title": "DANVOUY Womens T Shirt Casual Cotton Short",
  //     "price": 1200.99,
  //     "discount" : 100,
  //     "in_inventory" : true,
  //     "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
  //     "category": "women's clothing",
  //     "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  //     "rating": {
  //       "rate": 3.6,
  //       "count": 145
  //     }
  //   }
  // ]


 products =  [
    {
      "_id": "6433c91e910d49beddc75ffb",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/d8c5f966d7da452c9b81c742474d45b6.jpg",
      "title": "Ensure Vanilla Powder Refill",
      "category": "topseller",
      "status": "box of 1 kg Powder",
      "strike": "₹300",
      "discount" : 20,
      "in_inventory" : true,
      "price": "₹272",
       "rating" : 4.5
    
    },
    {
      "_id": "6433c9c8910d49beddc75ffe",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/822a9692e491406d9addcb95003115cd.jpg",
      "title": "Ensure Chocolate Powder Refill",
      "category": "topseller",
      "status": "box of 400 gm Powder",
      "strike": "₹675",
      "discount" : 20,
        "in_inventory" : true,
        "rating" : 4.5,
      "price": "₹600"
      

    },
    {
      "_id": "6433c9dd910d49beddc76000",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e9wq9lditpjyyedleyqa.jpg",
      "title": "box of 400 gm Powder Powder Chocolate",
      "category": "topseller",
      "status": "box of 400 gm Powder",
      "strike": "₹680",
      "discount" : 20,
        "in_inventory" : true,
        "rating" : 4.5,
      "price": "₹639"
    },
    {
      "_id": "6433c9ec910d49beddc76002",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/rzk6dsfxjzr2cwnjrdlp.jpg",
      "title": "Ensure Plus Vanilla Refill",
      "category": "topseller",
      "status": "jar of 1 kg Powder",
      "strike": "₹1420",
      "discount" : 20,
      "rating" : 4.5,
      "in_inventory" : true,
      "price": "₹1349"
    },
    {
      "_id": "6433c9f8910d49beddc76004",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/3bb583c0e1bc462293c3fc35bd8477ea.jpg",
      "title": "Ensure Vanilla Powder Refill",
      "category": "topseller",
      "status": "box of 400 gm Powder",
      "strike": "₹615",
      "discount" : 20,
      "rating" : 4.5,
        "in_inventory" : false,
      "price": "₹584"
    },
    {
      "_id": "6433ca04910d49beddc76006",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tiidy63h42v68x6qnx4d.jpg",
      "title": "Ensure Vanilla Powder Refill",
      "category": "topseller",
      "status": "box of 400 gm Powder",
      "strike": "₹710",
      "discount" : 20,
      "rating" : 4.5,
        "in_inventory" : true,
      "price": "₹632"
    },
    {
      "_id": "6433ca36910d49beddc76008",
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/rncomc7jxfgkgda0k0qd.jpg",
      "title": "Pain Relief Combo of Healthtokri Electric...",
      "category": "combodeals",
      "status": "combo pack of 2 packs",
      "strike": "₹820",
      "discount" : 20,
      "rating" : 4.5,
        "in_inventory" : true,
      "price": "₹470"
    },
    {
      "_id": "6433ca4e910d49beddc7600a",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/uca5jm0uqfqpjoyydzh0.jpg",
      "title": "Tata 1mg Diabetes Care Combo Pack fo...",
      "category": "combodeals",
      "status": "pack of 4 bottles",
      "strike": "₹1580",
      "discount" : 20,
      "rating" : 4.5,
        "in_inventory" : false,
      "price": "₹663"
    },
    {
      "_id": "6433ca5e910d49beddc7600c",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/kig1l1egf5xcijweblix.jpg",
      "title": "Durex Pleasure pack (Extra Time Condo...",
      "category": "combodeals",
      "status": "combo pack of 2 packs",
      "strike": "₹989", "discount" : 20,
      "in_inventory" : true,
      "rating" : 4.5,
      "price": "₹764"
    },
    {
      "_id": "6433ca77910d49beddc7600e",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/pfqnfyojsqwtn6hrce32.jpg",
      "title": "Ensure Vanilla Powder Refill",
      "category": "combodeals",
      "status": "combo pack of 2 bottles",
      "strike": "combo pack of 2 bottles",
      "discount" : 20,
      "in_inventory" : true,
      "rating" : 4.5,
      "price": "₹204"
    },
    {
      "_id": "6433ca81910d49beddc76010",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tamf9xnrq7ncapgc04t6.jpg",
      "title": "Tata 1mg Women Care combo Pack for Dail...",
      "category": "combodeals",
      "status": "combo pack of 4 bottles",
      "strike": "₹1695",
      "discount" : 20,
        "in_inventory" : false,
        "rating" : 4.5,
      "price": "₹819"
    },
    {
      "_id": "6433ca8b910d49beddc76012",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg",
      "title": "Immunity Care Combo Of 1mg Panch Tulsi...",
      "category": "combodeals",
      "status": "combo pack of 2 packs",
      "strike": "₹335",
      "discount" : 20,
      "rating" : 4.5,
      "in_inventory" : true,
      "price": "₹265"
    },
    {
      "_id": "6433ca99910d49beddc76014",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/f9fbe0c6e4ae496c8876affeb25590a0.jpg",
      "title": "Combo Pack of HealthKart HK Vitals...",
      "category": "combodeals",
      "status": "box of 2 Combo packs",
      "strike": "₹1349",
      "discount" : 20,
      "rating" : 4.5,
      "in_inventory" : true,
      "price": "₹768"
    },
    {
      "_id": "6433caa3910d49beddc76016",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/hkivk33molknvlppjtkg.jpg",
      "title": "Revital Combo Pack of Revital H 30 Capsul...",
      "category": "combodeals",
      "status": "Combo pack of packs",
      "strike": "₹870",
      "in_inventory" : true,
      "rating" : 4.5,
      "discount" : 20,
      "price": "₹603"
    },
    {
      "_id": "6433caae910d49beddc76018",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c2sw0gi2dw4cwdf1ecjp.jpg",
      "title": "Accu-Chek Combo Pack of Active 50 Te...",
      "category": "combodeals",
      "status": "combo pack of 3 units",
      "strike": "₹1290",
      "rating" : 4.5,
      "discount" : 20,
        "in_inventory" : false,
      "price": "₹1141"
    },
    {
      "_id": "6433cab7910d49beddc7601a",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cr9a2p0evnuzwvw5ksp1.jpg",
      "title": "Acne Care Combo of Cetaphil Oily Skin...",
      "category": "combodeals",
      "status": "combo pack of 2 Packs",
      "strike": "₹820",
      "in_inventory" : true,
      "discount" : 20,
      "rating" : 4.5,
      "price": "₹687"
    },
    {
      "_id": "6433cac4910d49beddc7601c",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/elqz2hzfzkt4dy105wyl.jpg",
      "title": "Combo Pack of Sri Sri Tattva Shakti Drop...",
      "category": "combodeals",
      "status": "combo pack of 2 bottles",
      "strike": "₹445",
     "discount" : 20,
     "rating" : 4.5,
      "in_inventory" : true,
      "price": "₹213"
    },
    {
      "_id": "6433cace910d49beddc7601e",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/dqrcisvemf943pxdlbkk.jpg",
      "title": "Tata 1mg Weight Management Comb...",
      "category": "combodeals",
      "status": "combo pack of 4 bottles",
      "strike": "₹1560",
      "discount" : 20,
      "in_inventory" : false,
      "rating" : 4.5,
      "price": "₹748"
    },
    {
      "_id": "6433cada910d49beddc76020",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qutzgli859zoj0lfcoix.jpg",
      "title": "Tata 1mg Elderly Care Combo for Eye &...",
      "category": "combodeals",
      "status": "combo pack of 4 bottles",
      "strike": "₹1975",
       "discount" : 20,
       "rating" : 4.5,
        "in_inventory" : false,
      "price": "₹858"
    },
    {
      "_id": "6433d966b0c8204672bc4ad2",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/rodhh7c6rq7bdzkrwzct.jpg",
      "title": "Dabar Organic Honey",
      "category": "spotlight",
      "status": "jar of 300 gm Paste",
      "strike": "₹669",
      "discount" : 20,
      "rating" : 4.5,
      "in_inventory" : true,
      "price": "₹545"
      
    },
    {
      "_id": "6433d973b0c8204672bc4ad4",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/94a8244e920d46ab86a1018bf8a6e7e7.jpg",
      "title": "Kapiva Diafree Juice",
      "category": "spotlight",
      "status": "bottle of 1 Ltr Juice",
      "strike": "₹820",
      "in_inventory" : true,
      "discount" : 20,
      "rating" : 4.5,
      "price": "₹470"
    },
    {
      "_id": "6433d980b0c8204672bc4ad6",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/a5ois8zpmzqzjvsd8n42.jpg",
      "title": "Pain Relief Combo of Healthtokri Electric...",
      "category": "spotlight",
      "status": "combo pack of 2 packs",
      "strike": "₹920",
      "discount" : 20,
      "in_inventory" : false,
      "price": "₹470",
      "rating" : 4.5,

    },
    {
      "_id": "6433d98bb0c8204672bc4ad8",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/vbwb445sjztpxvgxfogv.jpg",
      "title": "Anti-oxidants Combo of Organic I",
      "category": "spotlight",
      "status": "combo pack of 2 packs",
      "strike": "₹820",
     "discount" : 20,
        "in_inventory" : false,
      "price": "₹545",
      "rating" : 4.5,
    },
    {
      "_id": "6433d9b6b0c8204672bc4ada",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/rgfime0rzlrv0pljx3wm.jpg",
      "title": "Ensure Vanilla Powder Refill",
      "category": "spotlight",
      "status": "combo pack of 2 bottles",
      "strike": "₹920",
      "in_inventory" : true,
      "rating" : 4.5,
      "discount" : 20,
      "price": "₹204"
    },
    {
      "_id": "6433d9d5b0c8204672bc4adc",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tiidy63h42v68x6qnx4d.jpg",
      "title": "Tata 1mg Women Care combo Pack for Dail...",
      "category": "spotlight",
      "status": "combo pack of 4 bottles",
      "strike": "₹520",
      "discount" : 20,
      "rating" : 4.5,
      "in_inventory" : false,
      "price": "₹419"
    },
    {
      "_id": "6433d9e2b0c8204672bc4ade",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/xn1ju0ffqdyuj5w9ou2b.jpg",
      "title": "Immunity Care Combo Of 1mg Panch Tulsi...",
      "category": "spotlight",
      "status": "combo pack of 2 packs",
      "strike": "₹820",
      "discount" : 20,
      "in_inventory" : true,
      "rating" : 4.5,
      "price": "₹465"
    },
    {
      "_id": "6433d9ebb0c8204672bc4ae0",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/kkjgqmpgejvp6bpj3t1j.jpg",
      "title": "Combo Pack of HealthKart HK Vitals...",
      "category": "spotlight",
      "status": "box of 2 Combo packs",
      "strike": "₹820",
      "discount" : 20,
      "rating" : 4.5,
      "in_inventory" : true,
      "price": "₹568"
    },
    {
      "_id": "6433da28b0c8204672bc4ae2",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/eb0faa81e9734271bd4e2753cae19788.jpg",
      "title": "Tata 1mg Compressor Nebulizer",
      "category": "trendingnow",
      "status": "box of 1 unit",
      "strike": "₹1630",
      "discount" : 20,
      "rating" : 4.5,
      "in_inventory" : false,
      "price": "₹1419"
    },
    {
      "_id": "6433da30b0c8204672bc4ae4",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/sebt72otrs6a2gnqfpcb.jpg",
      "title": "Protinex Health and Nutritional Drink Tast..",
      "category": "trendingnow",
      "status": "Tin of 250 gm Powder",
      "strike": "₹399",
      "in_inventory" : true,
      "discount" : 20,
      "rating" : 4.5,
      "price": "₹371"
    },
    {
      "_id": "6433da37b0c8204672bc4ae6",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/bpgstknem0udqzp9p4dm.jpg",
      "title": "Sugar Free Gold Low Caloris Sweetener",
      "category": "trendingnow",
      "status": "bottle of 500 pellets",
      "strike": "₹285", "discount" : 20,
      "rating" : 4.5,
      "in_inventory" : false,
      "price": "₹271"
    },
    {
      "_id": "6433da3fb0c8204672bc4ae8",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/40bf2549bd364ee28d65860850ee1e6f.jpg",
      "title": "Tata 1mg Tejasya Triphala Capsule...",
      "category": "trendingnow",
      "status": "bottle of 60 capsules",
      "strike": "₹345",
      "rating" : 4.5,
      "discount" : 20,
      "in_inventory" : true,
      "price": "₹166"
    },
    {
      "_id": "6433da47b0c8204672bc4aea",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/wb4ndsavl7ixslwyohbi.jpg",
      "title": "Vicks Vaporub",
      "category": "trendingnow",
      "status": "bottle of 50gm Balm",
      "strike": "₹155",
      "in_inventory" : false,
      "rating" : 4.5,
      "discount" : 20,
      "price": "₹145"
    },
    {
      "_id": "6433da4fb0c8204672bc4aec",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/r33qnfrme9xfozrw5gwk.jpg",
      "title": "Perfectil Skin, Hair, Nail Supplement Tablet",
      "category": "trendingnow",
      "status": "strip of 30 tablet",
      "strike": "₹625",
      "in_inventory" : false,
      "rating" : 4.5,
      "discount" : 20,
      "price": "₹438"
    },
    {
      "_id": "6433da58b0c8204672bc4aee",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ibcufhk27uqhpgy9kfcg.jpg",
      "title": "Zincovit Tablet",
      "category": "trendingnow",
      "status": "strip of 15 tablets",
      "strike": "₹105",
      "in_inventory" : true,
      "rating" : 4.5,
      "discount" : 20,
      "price": "₹90"
    },
    {
      "_id": "6433da60b0c8204672bc4af0",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/huamtvxifr3gyeeg0rrg.jpg",
      "title": "Supradyn Daily Multivitamin Tablet wi...",
      "category": "trendingnow",
      "status": "strip of 15 tablets",
      "strike": "₹54.9",
      "in_inventory" : false,
      "discount" : 20,
      "rating" : 4.5,
      "price": "₹51"
    },

    {
      "_id": "6433da74b0c8204672bc4af4",
      "image": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/hruygy5lw0ivyqenv9ev.jpg",
      "title": "Seacod Cod Liver Oil Capsule",
      "category": "trendingnow",
      "status": "bottle of 110 soft gelatin...",
      "strike": "₹352.98",
      "discount" : 20,
      "rating" : 4.5,
      "price": "₹282",
      "in_inventory" : true,
    }
  ]

discount : number = 0

  totalprodCount : number = this.products.length
  totalproducinStock  = this.products.filter(ele => ele.in_inventory == true).length
  prodssoutofstoc = this.products.filter(ele => ele.in_inventory == false).length
  


  constructor () {

    // this.discount = ((this.products.strike - this.products.price) / this.products.strike) * 100;
  }

  








}
