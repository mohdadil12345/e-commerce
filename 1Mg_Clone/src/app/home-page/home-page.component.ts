import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {



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

  



   health_concerns = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
      name: "Diabetes Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
      name: "Cardiac Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png",
      name: "Stomach Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png",
      name: "Liver Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png",
      name: "Bone, Joint & Muscle Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png",
      name: "Kidney Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png",
      name: "Derma Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png",
      name: "Respiratory Care",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png",
      name: "Eye Care",
    },
  ];


  Featured_Brands = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/83191a9e-18f2-4eef-9118-b3caa90e4590.png",
      name: "Veet",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/9fd34e54-f6a3-4f15-916c-07ca0e6a94a8.png",
      name: "Colgate",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/db5371fa-b446-4e04-b342-5044a9f1ad2f.png",
      name: "Zandu",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/21dcb5bd-a5d1-4ce6-932a-f5bb376a23fe.png",
      name: "Protiex",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/3630d9e4-0e2f-4be7-b1ba-0d0674ddd736.png",
      name: "mCaffeine",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/33efbce4-e766-48cf-a3f3-e710da832c7c.png",
      name: "Medtech",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/0ce2c32d-22ae-4a4f-8e1c-e615e13bee66.png",
      name: "contour",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/8b77c71c-4e7b-48c5-94d6-811748118d10.png",
      name: "Tejasya Ayurveda",
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a307b427-631d-436b-bdfc-4a221836588d.png",
      name: "TATA 1mg Health Products",
    },
  ];



}
