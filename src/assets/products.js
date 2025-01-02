import casualShirt from './products/casual-shirt.jpg';
import slimPoloShirt from './products/slim-polo-shirt.jpg';
import chinoPants from './products/chino-pants.jpg';
import casualDenimJacket from './products/casual-denim-jacket.jpg';
import graphicTShirt from './products/graphic-tshirt.jpg';
import casualSneakers from './products/casual-sneakers.jpg';
import crewNeckTShirt from './products/crew-neck-tshirt.jpg';
import linenShirt from './products/linen-shirt.jpg';
import slimFitJeans from './products/slim-fit-jeans.jpg';
import leatherBelt from './products/classic-leather-belt.jpg';
import denimShorts from './products/denim-shorts.jpg';
import plaidShirt from './products/plaid-shirt.jpg';

// Imports for Formal Wear
import slimFitBlackSuit from './products/slim-fit-black-suit.jpg';
import whiteDressShirt from './products/white-dress-shirt.jpg';
import grayWoolBlazer from './products/gray-wool-blazer.jpg';
import blackOxfordShoes from './products/black-oxford-shoes.jpg';
import charcoalSuitPants from './products/charcoal-suit-pants.jpg';
import silkTie from './products/silk-tie.jpg';
import blueDressShirt from './products/blue-dress-shirt.jpg';
import brownLeatherBelt from './products/brown-leather-belt.jpg';
import blackSuitJacket from './products/black-suit-jacket.jpg';
import bowTie from './products/bow-tie.jpg';
import whitePocketSquare from './products/white-pocket-square.jpg';
import blackDressSocks from './products/black-dress-socks.jpg';

// Imports for Sportswear
import runningShoes from './products/running-shoes.jpg';
import sportsJacket from './products/sports-jacket.jpg';
import compressionTShirt from './products/compression-tshirt.jpg';
import gymShorts from './products/gym-shorts.jpg';

// Imports for Outerwear
import winterParka from './products/winter-parka.jpg';
import leatherBomber from './products/leather-bomber.jpg';
import trenchCoat from './products/trench-coat.jpg';
import rainJacket from './products/rain-jacket.jpg';

// Imports for Accessories
import sunglasses from './products/sunglasses.jpg';
import leatherWallet from './products/leather-wallet.jpg';
import cap from './products/cap.jpg';
import travelBackpack from './products/travel-backpack.jpg';

import newCasualShirt from "./products/new-casual-shirt.jpg";
import newFormalSuit from "./products/new-formal-suit.jpg";
import newSportsJacket from "./products/new-sports-jacket.jpg";
import newParkaJacket from "./products/new-parka-jacket.jpg";

const products = {
  casualWear: [
    {
      id: 1,
      name: "Classic Casual Shirt",
      description: "A timeless casual shirt made with high-quality cotton for ultimate comfort.",
      details: "Crafted with premium cotton fabric, this Classic Casual Shirt ensures breathability and style. The relaxed fit allows for maximum comfort, making it perfect for both daily wear and casual outings. Available in various sizes and colors to suit your personal style.",
      price: 29.99,
      category: "Casual Wear",
      image: casualShirt,
      type: "shirt"
    },
    {
      id: 2,
      name: "Slim Fit Polo Shirt",
      description: "A slim fit polo shirt perfect for both casual and semi-formal occasions.",
      details: "This Slim Fit Polo Shirt is designed for versatility and elegance. Made with a blend of cotton and polyester, it offers a soft feel and durability. The slim-fit design hugs your body, providing a modern look that works well in casual and semi-formal settings.",
      price: 39.99,
      category: "Casual Wear",
      image: slimPoloShirt,
      type: "shirt"
    },
    {
      id: 3,
      name: "Chino Pants",
      description: "Comfortable chino pants designed for daily wear, combining style and comfort.",
      details: "These Chino Pants are made with stretchable, breathable fabric to ensure all-day comfort. With a tailored fit and timeless style, they are an ideal choice for both work and casual settings. Available in multiple shades to pair perfectly with your wardrobe.",
      price: 49.99,
      category: "Casual Wear",
      image: chinoPants,
      type: "pant"
    },
    {
      id: 4,
      name: "Casual Denim Jacket",
      description: "A versatile denim jacket that pairs well with both jeans and chinos.",
      details: "A wardrobe staple, this Casual Denim Jacket features a rugged yet stylish look. Made with durable denim fabric, it offers long-lasting wear and can be layered over shirts or sweaters for added warmth and fashion.",
      price: 79.99,
      category: "Casual Wear",
      image: casualDenimJacket,
      type: "jacket",
    },
    {
      id: 5,
      name: "Graphic T-Shirt",
      description: "Show off your unique style with this printed graphic t-shirt made of soft cotton.",
      details: "This Graphic T-Shirt features a vibrant and trendy print that reflects your personality. Designed with high-quality cotton fabric, it ensures a soft touch and a comfortable fit. Perfect for casual outings and social gatherings.",
      price: 19.99,
      category: "Casual Wear",
      image: graphicTShirt,
      type: "shirt"
    },
    {
      id: 6,
      name: "Casual Sneakers",
      description: "Stylish and comfortable sneakers for all-day wear.",
      details: "These Casual Sneakers combine fashion with functionality. Made with breathable materials and cushioned soles, they provide exceptional comfort. Their minimalist design makes them suitable for a wide range of outfits and occasions.",
      price: 59.99,
      category: "Casual Wear",
      image: casualSneakers,
      type: "shoes",
    },
    {
      id: 7,
      name: "Basic Crew Neck T-Shirt",
      description: "An essential wardrobe item, a simple crew neck t-shirt made with soft cotton.",
      details: "This Basic Crew Neck T-Shirt is an essential piece for any wardrobe. It features a classic design, superior comfort, and unmatched versatility. Perfect for layering or wearing alone, it’s a must-have for everyday wear.",
      price: 14.99,
      category: "Casual Wear",
      image: crewNeckTShirt,
      type: "shirt"
    },
    {
      id: 8,
      name: "Linen Button-Up Shirt",
      description: "Lightweight linen shirt ideal for warm weather and casual occasions.",
      details: "Stay cool and stylish with this Linen Button-Up Shirt. Its breathable linen fabric is perfect for summer days and warm evenings. The classic button-up design adds a touch of sophistication to your casual look.",
      price: 49.99,
      category: "Casual Wear",
      image: linenShirt,
      type: "shirt"
    },
    {
      id: 9,
      name: "Slim Fit Jeans",
      description: "Modern and trendy slim fit jeans for a sleek and stylish look.",
      details: "These Slim Fit Jeans are tailored for a contemporary look and feel. Made with stretchable denim, they offer both comfort and durability. Pair them with shirts or jackets for a polished yet relaxed outfit.",
      price: 59.99,
      category: "Casual Wear",
      image: slimFitJeans,
      type: "pant"
    },
    {
      id: 10,
      name: "Classic Leather Belt",
      description: "A durable and stylish leather belt to complete any casual outfit.",
      details: "Made with genuine leather, this Classic Leather Belt is both stylish and durable. The sleek buckle design adds a sophisticated touch to your outfit, making it a perfect accessory for casual and semi-formal wear.",
      price: 29.99,
      category: "Casual Wear",
      image: leatherBelt, 
      type: "belt"
    },
    {
      id: 11,
      name: "Denim Shorts",
      description: "Casual denim shorts perfect for a laid-back summer look.",
      details: "These Denim Shorts are designed for ultimate comfort and style. Featuring a modern cut and durable fabric, they are perfect for summer outings or relaxed weekends.",
      price: 39.99,
      category: "Casual Wear",
      image: denimShorts,
      type: "short"
    },
    {
      id: 12,
      name: "Plaid Shirt",
      description: "A stylish plaid shirt made from soft fabric, perfect for casual outings.",
      details: "This Plaid Shirt combines classic patterns with a modern fit. The soft fabric ensures all-day comfort, making it a great choice for casual occasions and layering during cooler weather.",
      price: 34.99,
      category: "Casual Wear",
      image: plaidShirt,
      type: "shirt"
    }
  ], formalWear: [
    {
        id: 1,
        name: "Slim Fit Black Suit",
        description: "A sleek black suit tailored to perfection for formal events.",
        price: 199.99,
        category: "Formal Wear",
        image: slimFitBlackSuit,
        details: "This slim fit black suit is made from high-quality fabric, ensuring a polished look for any formal occasion. The suit features a two-button closure, notch lapels, and a tailored silhouette. Pair it with a crisp white shirt and a silk tie for a complete ensemble.",
        type: "suit"
    },
    {
        id: 2,
        name: "White Dress Shirt",
        description: "A classic white dress shirt that complements any suit, made of fine cotton.",
        price: 49.99,
        category: "Formal Wear",
        image: whiteDressShirt,
        details: "The white dress shirt is crafted from 100% cotton for breathability and comfort. Its versatile design includes a pointed collar and buttoned cuffs, making it suitable for business meetings and formal events alike.",
        type: "shirt"
    },
    {
        id: 3,
        name: "Gray Wool Blazer",
        description: "A high-quality wool blazer for formal occasions and business settings.",
        price: 139.99,
        category: "Formal Wear",
        image: grayWoolBlazer,
        details: "This gray wool blazer offers a perfect blend of style and functionality. Featuring a tailored fit, notched lapels, and a single-breasted design, it is ideal for professional and semi-formal gatherings.",
        type: "blazer",
    },
    {
        id: 4,
        name: "Black Oxford Shoes",
        description: "Elegant black leather oxford shoes perfect for formal events.",
        price: 89.99,
        category: "Formal Wear",
        image: blackOxfordShoes,
        details: "Made from genuine leather, these black Oxford shoes feature a sleek design with closed lacing for a sophisticated look. The cushioned insole ensures comfort for long hours of wear.",
        type: "shoes"
    },
    {
        id: 5,
        name: "Charcoal Suit Pants",
        description: "Classic charcoal suit pants that pair perfectly with any blazer.",
        price: 79.99,
        category: "Formal Wear",
        image: charcoalSuitPants,
        details: "These charcoal suit pants are designed for a slim, tailored fit. Made from wrinkle-resistant fabric, they feature a flat front and a hook-and-bar closure, making them a staple for any formal wardrobe.",
        type: "pant"
    },
    {
        id: 6,
        name: "Silk Tie",
        description: "A luxurious silk tie to add a touch of sophistication to your outfit.",
        price: 29.99,
        category: "Formal Wear",
        image: silkTie,
        details: "Crafted from 100% silk, this tie features a smooth texture and vibrant color. Its classic width makes it suitable for various occasions, from weddings to corporate meetings.",
        type: "tie"
    },
    {
        id: 7,
        name: "Blue Dress Shirt",
        description: "A classic blue dress shirt designed for business and formal events.",
        price: 49.99,
        category: "Formal Wear",
        image: blueDressShirt,
        details: "The blue dress shirt is tailored for a slim fit and is made from breathable cotton fabric. It includes a spread collar and adjustable cuffs, offering both style and comfort.",
        type: "shirt"
    },
    {
        id: 8,
        name: "Brown Leather Belt",
        description: "A versatile brown leather belt to match with any formal outfit.",
        price: 39.99,
        category: "Formal Wear",
        image: brownLeatherBelt,
        details: "This brown leather belt is crafted from genuine leather and features a polished metal buckle. Its versatile design complements a variety of formal and semi-formal outfits.",
        type: "belt"
    },
    {
        id: 9,
        name: "Black Suit Jacket",
        description: "A stylish black suit jacket tailored for formal events and office wear.",
        price: 129.99,
        category: "Formal Wear",
        image: blackSuitJacket,
        details: "This black suit jacket is tailored to perfection, featuring a single-breasted design with a notch lapel. It is fully lined and made from premium fabric for a refined look.",
        type: "jacket"
    },
    {
        id: 10,
        name: "Bow Tie",
        description: "A classic bow tie made from premium fabric for formal occasions.",
        price: 19.99,
        category: "Formal Wear",
        image: bowTie,
        details: "This classic bow tie is pre-tied for convenience and features an adjustable strap for a perfect fit. Made from high-quality fabric, it adds a touch of elegance to any formal attire.",
        type: "tie"
    },
    {
        id: 11,
        name: "White Pocket Square",
        description: "A crisp white pocket square to add an elegant touch to your suit.",
        price: 9.99,
        category: "Formal Wear",
        image: whitePocketSquare,
        details: "This white pocket square is made from smooth, high-quality fabric. Its simple yet elegant design makes it a versatile accessory for formal and semi-formal occasions.",
        type: "pocketsquare"
    },
    {
        id: 12,
        name: "Black Dress Socks",
        description: "Comfortable and breathable black dress socks to pair with your formal wear.",
        price: 12.99,
        category: "Formal Wear",
        image: blackDressSocks,
        details: "These black dress socks are made from a soft cotton blend with reinforced toes and heels for durability. The breathable fabric ensures all-day comfort.",
        type: "sock"
    }
  ],sportswear: [
    {
        id: 1,
        name: "Running Shoes",
        description: "High-performance running shoes designed for comfort and speed.",
        price: 89.99,
        category: "Sportswear",
        image: runningShoes,
        details: "These running shoes feature a cushioned sole for maximum comfort and support, ensuring optimal performance during long runs and intense workouts. Made with breathable mesh material to keep your feet cool and dry.",
        type: "shoe"
    },
    {
        id: 2,
        name: "Sports Jacket",
        description: "A lightweight sports jacket for comfort and breathability during workouts.",
        price: 79.99,
        category: "Sportswear",
        image: sportsJacket,
        details: "This sports jacket is made from moisture-wicking fabric and features a zip-up front for easy wear. Ideal for jogging, gym sessions, or casual wear.",
        type: "jacket"
    },
    {
        id: 3,
        name: "Compression T-Shirt",
        description: "A tight-fitting compression t-shirt designed to support muscles during exercise.",
        price: 29.99,
        category: "Sportswear",
        image: compressionTShirt,
        details: "This compression t-shirt improves blood circulation and reduces muscle fatigue. It is made from stretchy, durable material that conforms to your body for a secure fit.",
        type: "shirt"
    },
    {
        id: 4,
        name: "Gym Shorts",
        description: "Comfortable gym shorts for maximum flexibility and comfort during exercise.",
        price: 29.99,
        category: "Sportswear",
        image: gymShorts,
        details: "These gym shorts are made from lightweight, breathable fabric, providing full range of motion and comfort for all types of workouts.",
        type: "short"
    }
], outerwear: [
    {
        id: 1,
        name: "Winter Parka Jacket",
        description: "A durable parka jacket that keeps you warm and comfortable in cold weather.",
        price: 149.99,
        category: "Outerwear",
        image: winterParka,
        details: "This winter parka jacket features a water-resistant shell, insulated lining, and a fur-trimmed hood for added warmth. Perfect for extreme cold conditions.",
        type: "jacket"
    },
    {
        id: 2,
        name: "Leather Bomber Jacket",
        description: "A classic bomber jacket made with premium leather for a sleek look.",
        price: 199.99,
        category: "Outerwear",
        image: leatherBomber,
        details: "This leather bomber jacket boasts a timeless design with a ribbed collar, cuffs, and hem. The soft leather exterior and smooth inner lining offer style and comfort.",
        type: "jacket"
    },
    {
        id: 3,
        name: "Trench Coat",
        description: "A stylish trench coat that offers both protection and elegance.",
        price: 129.99,
        category: "Outerwear",
        image: trenchCoat,
        details: "This trench coat is crafted from water-resistant material and features a belted waist and double-breasted design, making it both functional and fashionable.",
        type: "coat"
    },
    {
        id: 4,
        name: "Rain Jacket",
        description: "A lightweight rain jacket to keep you dry and comfortable during rainy weather.",
        price: 69.99,
        category: "Outerwear",
        image: rainJacket,
        details: "This rain jacket is made from waterproof material with sealed seams to keep you dry. Its lightweight construction ensures ease of movement and packability.",
        type: "jacket"
    }
], accessories: [
    {
        id: 1,
        name: "Sunglasses",
        description: "Trendy sunglasses to protect your eyes while keeping you stylish.",
        price: 19.99,
        category: "Accessories",
        image: sunglasses,
        details: "These sunglasses offer UV protection and feature a lightweight frame for all-day comfort. Available in a variety of stylish designs.", 
        type: "sunglasse"
    },
    {
        id: 2,
        name: "Leather Wallet",
        description: "A premium leather wallet with ample space for your cards and cash.",
        price: 39.99,
        category: "Accessories",
        image: leatherWallet,
        details: "This leather wallet is crafted from high-quality material, offering multiple compartments for organization. Its slim design fits comfortably in your pocket.",
        type: "wallet"
    },
    {
        id: 3,
        name: "Cap",
        description: "A trendy cap to complete your casual look.",
        price: 19.99,
        category: "Accessories",
        image: cap,
        details: "This cap is made from durable cotton material and features an adjustable strap for a comfortable fit. Perfect for casual outings and sports.",
        type: "cap"
    },
    {
        id: 4,
        name: "Travel Backpack",
        description: "A durable backpack perfect for travel and daily use.",
        price: 59.99,
        category: "Accessories",
        image: travelBackpack,
        details: "This travel backpack is designed with multiple compartments for organization and a padded back panel for comfort. Made from water-resistant material.",
        type: "backpack"
    }
  ], newProducts: [
    {
      id: 1,
      name: "Classic Casual Shirt",
      description: "A timeless casual shirt made with high-quality cotton for ultimate comfort.",
      price: 29.99,
      category: "Casual Wear",
      image: newCasualShirt, 
      details: "A timeless casual shirt made with high-quality cotton for ultimate comfort. Perfect for everyday wear, this shirt features a modern cut, button-down collar, and versatile design that pairs well with jeans or chinos. Available in multiple colors to suit your style.",
      type: "shirt"
    },
    {
      id: 2,
      name: "Formal Slim-Fit Suit",
      description: "A sleek, slim-fit suit designed for elegance and sophistication.",
      price: 199.99,
      category: "Formal Wear",
      image: newFormalSuit,
      details: "A sleek, slim-fit suit designed for elegance and sophistication. Crafted with premium fabric, this suit includes a tailored blazer and matching trousers, making it an excellent choice for business meetings, formal occasions, or special events. Available in classic black and navy blue.",
      type: "suit"
    },
    {
      id: 3,
      name: "Performance Sports Jacket",
      description: "Stay active and stylish with this lightweight, breathable sports jacket.",
      price: 89.99,
      category: "Sportswear",
      image: newSportsJacket,
      details:  "Stay active and stylish with this lightweight, breathable sports jacket. Designed for maximum comfort during workouts or outdoor activities, it features moisture-wicking material, zippered pockets, and a modern athletic fit. Ideal for running, hiking, or casual sports outings.",
      type: "jacket"
    },
    {
      id: 4,
      name: "Winter Parka Jacket",
      description: "A durable parka jacket that keeps you warm and comfortable in cold weather.",
      price: 149.99,
      category: "Outerwear",
      image: newParkaJacket,
      details: "A durable parka jacket that keeps you warm and comfortable in cold weather. Made with insulated material and a water-resistant outer layer, it features a fur-lined hood, deep pockets, and adjustable cuffs for added protection against the elements. Perfect for harsh winters and outdoor adventures.",
      type: "jacket"
    },
  ]
};

export default products;