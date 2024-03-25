import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


  loading =  false


// products : any = 
// [
  
//   {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c33"
//   },
//   "id": 5,
//   "title": "Chest of Drawers",
//   "price": 199.99,
//   "category": "Furniture",
//   "rating": 4.4,
//   "numVotes": 85,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FChest%20of%20Drawers.avif?alt=media&token=3fa270f6-ad18-4e2c-8baf-7fe3d06dd699",
//   "description": "Spacious drawers for your storage needs."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c38"
//   },
//   "id": 10,
//   "title": "Side Table",
//   "price": 49.99,
//   "category": "Furniture",
//   "rating": 4.1,
//   "numVotes": 60,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FSide%20Table.jpg?alt=media&token=36d7a680-2b80-473c-a197-7fc310ad95d2",
//   "description": "Convenient side table for your living space."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c3b"
//   },
//   "id": 13,
//   "title": "In-Ear Bluetooth Earbuds",
//   "price": 79.99,
//   "category": "Headphones",
//   "rating": 4.2,
//   "numVotes": 95,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FIn-Ear%20Bluetooth%20Earbuds.jpg?alt=media&token=6e36e9cf-4997-4dee-b7c7-6eba7eec19b0",
//   "description": "Compact and wireless earbuds for active lifestyles."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c42"
//   },
//   "id": 20,
//   "title": "Sweat-Proof Sports Earphones",
//   "price": 49.99,
//   "category": "Headphones",
//   "rating": 4,
//   "numVotes": 60,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FSweat-Proof%20Sports%20Earphones.webp?alt=media&token=6ff0774a-dbc2-4f32-a8d3-f4d800f47b15",
//   "description": "Stay motivated during workouts with these earphones."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c44"
//   },
//   "id": 22,
//   "title": "Casual Sneakers",
//   "price": 59.99,
//   "category": "Shoes",
//   "rating": 4.4,
//   "numVotes": 120,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FCasual%20Sneakers.jpg?alt=media&token=c4954e3f-bf17-4966-8abd-a07462248e9b&_gl=1*i5psn5*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjEwNC42MC4wLjA.",
//   "description": "Stylish sneakers for everyday wear."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c48"
//   },
//   "id": 26,
//   "title": "Slip-On Shoes",
//   "price": 69.99,
//   "category": "Shoes",
//   "rating": 4.2,
//   "numVotes": 95,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FSlip-On%20Shoes.jpg?alt=media&token=d34af180-455e-4d38-9b7d-e1221b762eab&_gl=1*1fpvj0w*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjI0MS42MC4wLjA.",
//   "description": "Convenient slip-on shoes for easy wear."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c4a"
//   },
//   "id": 28,
//   "title": "Work Boots",
//   "price": 109.99,
//   "category": "Shoes",
//   "rating": 4.4,
//   "numVotes": 120,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWork%20Boots.jpg?alt=media&token=3d4af9ba-12dd-4b77-8b23-558cdb44d7a7&_gl=1*1bpvyfd*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjMyOC42MC4wLjA.",
//   "description": "Sturdy work boots for demanding jobs."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c4b"
//   },
//   "id": 29,
//   "title": "Cycling Shoes",
//   "price": 79.99,
//   "category": "Shoes",
//   "rating": 4.1,
//   "numVotes": 70,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FCycling%20Shoes.jpg?alt=media&token=bc123de4-dd94-47e6-9fe4-603c862af5c3&_gl=1*1p5ktjh*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjM2NC4yNC4wLjA.",
//   "description": "Optimized for cycling performance."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c4d"
//   },
//   "id": 31,
//   "title": "Leather Backpack",
//   "price": 99.99,
//   "category": "Bags",
//   "rating": 4.5,
//   "numVotes": 120,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FLeather%20Backpack.jpg?alt=media&token=ea226df8-2878-4215-9ad2-4d1e3883f067&_gl=1*fveiql*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjQ0My45LjAuMA..",
//   "description": "Stylish leather backpack for everyday use."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c4e"
//   },
//   "id": 32,
//   "title": "Travel Duffel Bag",
//   "price": 79.99,
//   "category": "Bags",
//   "rating": 4.2,
//   "numVotes": 95,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FTravel-Duffel-Bag.jpeg?alt=media&token=243b9595-7190-4654-8713-53a1d16b39cf&_gl=1*km8zrr*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjUwNi44LjAuMA..",
//   "description": "Spacious duffel bag for your travel needs."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c4f"
//   },
//   "id": 33,
//   "title": "Messenger Bag",
//   "price": 69.99,
//   "category": "Bags",
//   "rating": 4.4,
//   "numVotes": 85,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FMessenger-Bag.jpeg?alt=media&token=51cf6a13-e5f7-4c22-9a9d-8e58eed030a9&_gl=1*du62ef*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjU0MS42MC4wLjA.",
//   "description": "Versatile messenger bag for work and leisure."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c53"
//   },
//   "id": 37,
//   "title": "Handbag",
//   "price": 59.99,
//   "category": "Bags",
//   "rating": 4.3,
//   "numVotes": 75,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FHandbag.jpeg?alt=media&token=dff1fc7d-24fd-4075-9bdb-850a0fee4737&_gl=1*jcrdpw*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjY2Ni42MC4wLjA.",
//   "description": "Elegant handbag for special occasions."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c56"
//   },
//   "id": 40,
//   "title": "Camera Bag",
//   "price": 79.99,
//   "category": "Bags",
//   "rating": 4.1,
//   "numVotes": 70,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FCamera-Bag.jpeg?alt=media&token=7facb474-b1df-4850-a045-366649b0352e&_gl=1*mtvg6d*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0Mjc3My4xNS4wLjA.",
//   "description": "Protect your camera gear with this specialized bag."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c58"
//   },
//   "id": 42,
//   "title": "15-inch Gaming Laptop",
//   "price": 1499.99,
//   "category": "Laptops",
//   "rating": 4.5,
//   "numVotes": 150,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F15-inch%20Gaming%20Laptop.jpeg?alt=media&token=a19ae35e-5391-419e-bb06-a781ba4a346d",
//   "description": "High-performance gaming laptop for immersive gameplay."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c5c"
//   },
//   "id": 46,
//   "title": "13-inch Chromebook",
//   "price": 399.99,
//   "category": "Laptops",
//   "rating": 4.1,
//   "numVotes": 70,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F13-inch%20Chromebook.jpeg?alt=media&token=67966d8e-71bb-4e79-b9b0-e662d8bba640",
//   "description": "Affordable Chromebook for web browsing and productivity."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c66"
//   },
//   "id": 56,
//   "title": "The Hobbit",
//   "price": 13.99,
//   "category": "Books",
//   "rating": 4.8,
//   "numVotes": 210,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FThe%20Hobbit.jpeg?alt=media&token=2f826827-1e99-4d67-88bc-737d0369da61&_gl=1*1w8fz58*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE1MTEzOC44LjEuMTY5NjE1MTY4NC42MC4wLjA.",
//   "description": "J.R.R. Tolkien's epic fantasy adventure."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c6a"
//   },
//   "id": 60,
//   "title": "Harry Potter and the Sorcerer's Stone",
//   "price": 14.99,
//   "category": "Books",
//   "rating": 4.9,
//   "numVotes": 250,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FHarry%20Potter%20and%20the%20Sorcerer's%20Stone.jpeg?alt=media&token=86bd03e6-262d-4ff8-b372-35d5a24c0563&_gl=1*1boolqp*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE1MTEzOC44LjEuMTY5NjE1MTM1MC42MC4wLjA.",
//   "description": "J.K. Rowling's beloved tale of a young wizard."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c30"
//   },
//   "id": 2,
//   "title": "Leather Sofa Set",
//   "price": 699.99,
//   "category": "Furniture",
//   "rating": 4.2,
//   "numVotes": 95,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FLeather%20Sofa.jpg?alt=media&token=23982c30-dc93-4536-99f5-8fdce276de57",
//   "description": "Luxurious leather sofa set for your living room."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c31"
//   },
//   "id": 3,
//   "title": "Bookshelf",
//   "price": 149.99,
//   "category": "Furniture",
//   "rating": 4.8,
//   "numVotes": 210,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FBookshelf.jpg?alt=media&token=2468f964-5185-4f08-9f34-8bd4be971ebc",
//   "description": "Sturdy bookshelf for organizing your books."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c34"
//   },
//   "id": 6,
//   "title": "Coffee Table",
//   "price": 79.99,
//   "category": "Furniture",
//   "rating": 3,
//   "numVotes": 70,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FCoffee%20Table.jpg?alt=media&token=b2ca30f4-553a-4974-beeb-ff1e0bf25c2e",
//   "description": "Simple and elegant coffee table."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c35"
//   },
//   "id": 7,
//   "title": "Wardrobe",
//   "price": 349.99,
//   "category": "Furniture",
//   "rating": 4.7,
//   "numVotes": 180,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWardrobe.jpg?alt=media&token=89cac6ed-e31b-49c0-aeae-43665ae342cf",
//   "description": "Spacious wardrobe for your clothes."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c36"
//   },
//   "id": 8,
//   "title": "Study Desk",
//   "price": 129.99,
//   "category": "Furniture",
//   "rating": 2.3,
//   "numVotes": 120,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FStudy%20Desk.jpg?alt=media&token=f94ab811-1eb4-4c03-80c8-8194ef32abe2",
//   "description": "Compact study desk for your workspace."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c39"
//   },
//   "id": 11,
//   "title": "Wireless Over-Ear Headphones",
//   "price": 129.99,
//   "category": "Headphones",
//   "rating": 4.4,
//   "numVotes": 150,
//   "image": [
//     "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWireless%20Over-Ear%20Headphones%20pink.png?alt=media&token=7b93b15d-937b-4af3-a4fa-dd2d35e0a40c",
//     "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWireless%20Over-Ear%20Headphones%20silver.png?alt=media&token=7092fba8-3c9a-47c2-b812-87c8341c3784",
//     "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWireless%20Over-Ear%20Headphones%20blue.png?alt=media&token=380fa069-2620-47df-828a-a1b4c9092e0e",
//     "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWireless%20Over-Ear%20Headphones%20gray.png?alt=media&token=dc5e1a90-59c0-44bc-872e-171db25cdde4",
//     "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWireless%20Over-Ear%20Headphones%20green.png?alt=media&token=cb24f75c-c0fd-41e4-a878-b721a1412b4a"
//   ],
//   "description": "High-quality wireless headphones for immersive sound."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c3d"
//   },
//   "id": 15,
//   "title": "Sport Wireless Earphones",
//   "price": 59.99,
//   "category": "Headphones",
//   "rating": 2.3,
//   "numVotes": 85,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FSport%20Wireless%20Earphones.avif?alt=media&token=31b92882-e91e-493d-9ca0-684a8a067e4b",
//   "description": "Perfect for workouts and outdoor activities."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c3e"
//   },
//   "id": 16,
//   "title": "High-End Studio Headphones",
//   "price": 199.99,
//   "category": "Headphones",
//   "rating": 4.8,
//   "numVotes": 210,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FHigh-End%20Studio%20Headphones.jpg?alt=media&token=435b8375-2d11-4cdc-9c6a-a6134626d2ed",
//   "description": "Professional-grade headphones for audio enthusiasts."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c43"
//   },
//   "id": 21,
//   "title": "Running Shoes",
//   "price": 79.99,
//   "category": "Shoes",
//   "rating": 4.6,
//   "numVotes": 150,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FRunning%20Shoes.jpg?alt=media&token=d9a6e6a9-a82c-4537-a74c-503807f21657&_gl=1*1gorahk*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MTk4Mi40Ny4wLjA.",
//   "description": "Comfortable running shoes for athletes."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c45"
//   },
//   "id": 23,
//   "title": "Hiking Boots",
//   "price": 129.99,
//   "category": "Shoes",
//   "rating": 4.8,
//   "numVotes": 210,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FHiking%20Boots.jpg?alt=media&token=a056c383-a551-41e7-8194-8919a59e12b9&_gl=1*a34z23*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjE0MC4yNC4wLjA.",
//   "description": "Durable hiking boots for outdoor adventures."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c46"
//   },
//   "id": 24,
//   "title": "Dress Shoes",
//   "price": 89.99,
//   "category": "Shoes",
//   "rating": 4.3,
//   "numVotes": 85,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FDress%20Shoes.jpg?alt=media&token=13fd3709-7dd9-4a8b-adb9-b9067f835b52&_gl=1*hh8hcp*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjE3NS42MC4wLjA.",
//   "description": "Elegant dress shoes for formal occasions."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c50"
//   },
//   "id": 34,
//   "title": "Tote Bag",
//   "price": 49.99,
//   "category": "Bags",
//   "rating": 4,
//   "numVotes": 60,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FTote-Bag.jpeg?alt=media&token=8e06118d-1369-4a5c-adb7-b67373cf3fa5&_gl=1*1wgwbkt*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjU3My4yOC4wLjA.",
//   "description": "Simple and spacious tote bag for shopping."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c59"
//   },
//   "id": 43,
//   "title": "14-inch Business Laptop",
//   "price": 1299.99,
//   "category": "Laptops",
//   "rating": 4.4,
//   "numVotes": 95,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F14-inch%20Business%20Laptop.jpeg?alt=media&token=98ffc476-36aa-453f-ae39-d61d9c2d17cb",
//   "description": "Sleek and reliable laptop for business professionals."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c5a"
//   },
//   "id": 44,
//   "title": "17-inch Entertainment Laptop",
//   "price": 1399.99,
//   "category": "Laptops",
//   "rating": 4.3,
//   "numVotes": 85,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F17-inch%20Entertainment%20Laptop.jpeg?alt=media&token=05f6ce06-3897-4685-8221-73d3148357de",
//   "description": "Big-screen laptop for entertainment enthusiasts."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c60"
//   },
//   "id": 50,
//   "title": "15-inch MacBook Pro",
//   "price": 1799.99,
//   "category": "Laptops",
//   "rating": 4.9,
//   "numVotes": 250,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F15-inch%20MacBook%20Pro.jpeg?alt=media&token=0aaa3ff6-bad5-4dbf-abc4-b24416c0ac39",
//   "description": "Apple's flagship laptop for creative work and productivity."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c63"
//   },
//   "id": 53,
//   "title": "1984",
//   "price": 9.99,
//   "category": "Books",
//   "rating": 4.4,
//   "numVotes": 95,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F1984.jpeg?alt=media&token=33840d0b-e7d6-4286-8b8a-8fc66e528004&_gl=1*1wn9fsm*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE1MTEzOC44LjEuMTY5NjE1MTg2MS41NC4wLjA.",
//   "description": "George Orwell's dystopian masterpiece."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c68"
//   },
//   "id": 58,
//   "title": "The Shining",
//   "price": 12.99,
//   "category": "Books",
//   "rating": 4.4,
//   "numVotes": 130,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FThe%20Shining.jpeg?alt=media&token=553367e8-5670-4262-9ac3-1c3c17364d2a&_gl=1*1gk6v9v*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE1MTEzOC44LjEuMTY5NjE1MTU4NC4yLjAuMA..",
//   "description": "Stephen King's classic horror novel set in the Overlook Hotel."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c69"
//   },
//   "id": 59,
//   "title": "The Da Vinci Code",
//   "price": 11.99,
//   "category": "Books",
//   "rating": 4.2,
//   "numVotes": 110,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FThe%20Da%20Vinci%20Code.jpeg?alt=media&token=e1f19c16-bfe5-43e7-8652-eb6cd27fd565&_gl=1*d7owng*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE1MTEzOC44LjEuMTY5NjE1MTU0Mi40NC4wLjA.",
//   "description": "Dan Brown's thrilling mystery."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c3c"
//   },
//   "id": 14,
//   "title": "Gaming Headset with Mic",
//   "price": 79.99,
//   "category": "Headphones",
//   "rating": 4.1,
//   "numVotes": 70,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FGaming%20Headset%20with%20Mic.jpg?alt=media&token=f3100875-6928-4f89-9c9d-25039bed2330",
//   "description": "Immerse yourself in the gaming world with this headset."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c3f"
//   },
//   "id": 17,
//   "title": "Wireless Gaming Headset",
//   "price": 129.99,
//   "category": "Headphones",
//   "rating": 4.5,
//   "numVotes": 120,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWireless%20Gaming%20Headset.jpg?alt=media&token=b798789f-8cf5-4af2-9586-648e4e18aa33",
//   "description": "Lag-free gaming audio with this wireless headset."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c40"
//   },
//   "id": 18,
//   "title": "In-Ear Noise-Canceling Earbuds",
//   "price": 89.99,
//   "category": "Headphones",
//   "rating": 3.7,
//   "numVotes": 105,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FIn-Ear%20Noise-Canceling%20Earbuds.webp?alt=media&token=e6533c22-a223-4514-bae7-c6ff38cb2cf7",
//   "description": "Block out distractions with these noise-canceling earbuds."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c4c"
//   },
//   "id": 30,
//   "title": "Beach Sandals",
//   "price": 29.99,
//   "category": "Shoes",
//   "rating": 4,
//   "numVotes": 60,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FBeach%20Sandals.jpg?alt=media&token=ce351e31-2fb2-48a0-93a4-3c4b65e27f97&_gl=1*qwulvz*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjM5Mi42MC4wLjA.",
//   "description": "Casual sandals for beach days."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c51"
//   },
//   "id": 35,
//   "title": "Rolling Suitcase",
//   "price": 129.99,
//   "category": "Bags",
//   "rating": 4.6,
//   "numVotes": 150,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FRolling-Suitcase.jpeg?alt=media&token=35229f74-88bf-4787-b2f3-f12cfd4bef5c&_gl=1*r1mff*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjYwNi42MC4wLjA.",
//   "description": "Durable rolling suitcase for travel convenience."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c52"
//   },
//   "id": 36,
//   "title": "Gym Duffel Bag",
//   "price": 39.99,
//   "category": "Bags",
//   "rating": 3.9,
//   "numVotes": 45,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FGym-Duffel-Bag.jpeg?alt=media&token=6578fa1a-0b43-4aff-ba65-a7e7da9ae94f&_gl=1*13c8a2k*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjYzNS4zMS4wLjA.",
//   "description": "Compact gym duffel bag for your workout gear."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c55"
//   },
//   "id": 39,
//   "title": "Beach Tote",
//   "price": 29.99,
//   "category": "Bags",
//   "rating": 3.8,
//   "numVotes": 35,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FBeach-Tote.jpeg?alt=media&token=32da085d-86a0-47c3-b3d1-f77a4b8dd515&_gl=1*bjfmj5*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0Mjc0OS4zOS4wLjA.",
//   "description": "Colorful beach tote for sunny days."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c57"
//   },
//   "id": 41,
//   "title": "13-inch Ultrabook Laptop",
//   "price": 999.99,
//   "category": "Laptops",
//   "rating": 4.6,
//   "numVotes": 120,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F13-inch%20Ultrabook%20Laptop.jpeg?alt=media&token=8de089fb-d59d-4ced-bcec-15573fd58752",
//   "description": "Powerful and lightweight laptop for on-the-go professionals."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c5d"
//   },
//   "id": 47,
//   "title": "16-inch Content Creator Laptop",
//   "price": 1799.99,
//   "category": "Laptops",
//   "rating": 4.8,
//   "numVotes": 210,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F16-inch%20Content%20Creator%20Laptop.jpeg?alt=media&token=c47205ea-7257-4b22-835a-69786f088ab6",
//   "description": "Ideal laptop for creative professionals and video editing."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c5e"
//   },
//   "id": 48,
//   "title": "15-inch Student Laptop",
//   "price": 699.99,
//   "category": "Laptops",
//   "rating": 4.2,
//   "numVotes": 105,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F15-inch%20Student%20Laptop.jpeg?alt=media&token=7641ab90-c719-4b15-81ee-0c708ef47136",
//   "description": "Budget-friendly laptop for students and coursework."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c64"
//   },
//   "id": 54,
//   "title": "The Catcher in the Rye",
//   "price": 11.99,
//   "category": "Books",
//   "rating": 4.3,
//   "numVotes": 85,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FThe%20Catcher%20in%20the%20Rye.jpeg?alt=media&token=3b517d8e-741a-42cc-bda2-6dd518f4a8b8&_gl=1*1vn38qf*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE1MTEzOC44LjEuMTY5NjE1MTc3Ny42MC4wLjA.",
//   "description": "J.D. Salinger's coming-of-age novel."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c65"
//   },
//   "id": 55,
//   "title": "Pride and Prejudice",
//   "price": 8.99,
//   "category": "Books",
//   "rating": 4.7,
//   "numVotes": 180,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FPride%20and%20Prejudice.jpeg?alt=media&token=d87ea67c-ad1f-41e2-b105-521d467938b4&_gl=1*4ucvoy*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE1MTEzOC44LjEuMTY5NjE1MTcyNy4xNy4wLjA.",
//   "description": "Jane Austen's timeless classic of love and society."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c32"
//   },
//   "id": 4,
//   "title": "Bed Frame",
//   "price": 249.99,
//   "category": "Furniture",
//   "rating": 4.6,
//   "numVotes": 150,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FBed%20frome.jpg?alt=media&token=c9a7a1f5-8572-49ff-9603-bc2c748059c3",
//   "description": "Comfortable bed frame for a good night's sleep."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c37"
//   },
//   "id": 9,
//   "title": "Recliner Chair",
//   "price": 299.99,
//   "category": "Furniture",
//   "rating": 4.5,
//   "numVotes": 105,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FRecliner%20Chair.jpg?alt=media&token=23425ea7-d4bd-42eb-931f-5e9eee3236f7",
//   "description": "Comfortable recliner chair for relaxation."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c3a"
//   },
//   "id": 12,
//   "title": "Noise-Canceling On-Ear Headphones",
//   "price": 149.99,
//   "category": "Headphones",
//   "rating": 3.6,
//   "numVotes": 180,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FNoise-Canceling%20On-Ear%20Headphones.webp?alt=media&token=5055f553-cfb4-4669-8edf-f79399419d20",
//   "description": "Enjoy your music with peace and quiet."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c41"
//   },
//   "id": 19,
//   "title": "On-Ear DJ Headphones",
//   "price": 99.99,
//   "category": "Headphones",
//   "rating": 4.4,
//   "numVotes": 120,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FOn-Ear%20DJ%20Headphones.jpg?alt=media&token=2327b41b-ce2a-485d-bed7-05be5a4814fd",
//   "description": "Designed for DJs and music professionals."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c47"
//   },
//   "id": 25,
//   "title": "Basketball Sneakers",
//   "price": 119.99,
//   "category": "Shoes",
//   "rating": 4.5,
//   "numVotes": 105,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FBasketball%20Sneakers.jpg?alt=media&token=193bda67-3cfc-4f4d-9f18-b04df7b39883&_gl=1*9mj38w*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjIxMC4yNS4wLjA.",
//   "description": "High-performance basketball sneakers."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c49"
//   },
//   "id": 27,
//   "title": "Trail Running Shoes",
//   "price": 89.99,
//   "category": "Shoes",
//   "rating": 4.7,
//   "numVotes": 180,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FTrail%20Running%20Shoes.jpg?alt=media&token=09862e63-0ddf-4357-9f6a-d4a93415b8c8&_gl=1*7c853i*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjI4NC4xNy4wLjA.",
//   "description": "Perfect for off-road running and hiking."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c54"
//   },
//   "id": 38,
//   "title": "Laptop Backpack",
//   "price": 89.99,
//   "category": "Bags",
//   "rating": 4.7,
//   "numVotes": 180,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FLaptop-Backpack.jpeg?alt=media&token=d08de003-b188-40b7-8983-71f167cd9a95&_gl=1*hy8pbr*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE0MTM0NC43LjEuMTY5NjE0MjcxOS43LjAuMA..",
//   "description": "Functional backpack with a laptop compartment."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c5b"
//   },
//   "id": 45,
//   "title": "12-inch 2-in-1 Convertible Laptop",
//   "price": 799.99,
//   "category": "Laptops",
//   "rating": 4.7,
//   "numVotes": 180,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F12-inch%202-in-1%20Convertible%20Laptop.jpeg?alt=media&token=2ee7eb85-c7ab-4ef7-9dcb-afa59b4d3243",
//   "description": "Versatile 2-in-1 laptop with touchscreen capability."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c5f"
//   },
//   "id": 49,
//   "title": "14-inch Thin and Light Laptop",
//   "price": 1099.99,
//   "category": "Laptops",
//   "rating": 4.4,
//   "numVotes": 120,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2F14-inch%20Thin%20and%20Light%20Laptop.jpeg?alt=media&token=cdb64a2e-af6b-4d0f-927c-408545358d08",
//   "description": "Slim and powerful laptop for professionals on the move."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c61"
//   },
//   "id": 51,
//   "title": "The Great Gatsby",
//   "price": 12.99,
//   "category": "Books",
//   "rating": 4.5,
//   "numVotes": 120,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FThe%20Great%20Gatsby.jpeg?alt=media&token=6671df4c-9667-4e05-a318-655bed2c774a&_gl=1*1vj05u2*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE1MTEzOC44LjEuMTY5NjE1MjAwNy44LjAuMA..",
//   "description": "F. Scott Fitzgerald's classic novel about the American Dream."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c62"
//   },
//   "id": 52,
//   "title": "To Kill a Mockingbird",
//   "price": 10.99,
//   "category": "Books",
//   "rating": 4.6,
//   "numVotes": 150,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FTo%20Kill%20a%20Mockingbird.jpeg?alt=media&token=0cd4b3d1-213b-45d0-81fc-c5c05a2f60f7&_gl=1*1dyz3d8*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE1MTEzOC44LjEuMTY5NjE1MTk1NS42MC4wLjA.",
//   "description": "Harper Lee's powerful exploration of racial injustice in the South."
// },
// {
//   "_id": {
//     "$oid": "65ee10e785c1c00d46670c67"
//   },
//   "id": 57,
//   "title": "The Alchemist",
//   "price": 9.99,
//   "category": "Books",
//   "rating": 4.6,
//   "numVotes": 160,
//   "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FThe%20Alchemist.jpeg?alt=media&token=815adbb4-1bdb-4b3a-a519-58d2e1b6ae81&_gl=1*1oa8zk6*_ga*OTM3ODI3MTgyLjE2OTU3OTQ1MTI.*_ga_CW55HF8NVT*MTY5NjE1MTEzOC44LjEuMTY5NjE1MTYzNS4xNC4wLjA.",
//   "description": "Paulo Coelho's philosophical novel about destiny."
// }]



  // api =  "https://e-commerce-backend-crh2.onrender.com/products"
  api =  "https://fivemg-backend.onrender.com/products"



  constructor (private http : HttpClient,  router : Router ) {}
  
  
  products: any = []; 
  
  ngOnInit(): void {
    this.fetchingdata();
  }
  
  fetchingdata () {
     return this.http.get(this.api).subscribe(data => {
      // console.log(data)
      this.products = data 
      this.loading = false
     })
  }
  
  

  
}
