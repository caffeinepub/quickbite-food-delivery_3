import type { Restaurant } from "../types";

export const RESTAURANTS: Restaurant[] = [
  {
    id: "spice-garden",
    name: "Spice Garden",
    cuisine: "North Indian",
    cuisineTag: "Indian",
    rating: 4.6,
    reviewCount: 1243,
    deliveryTime: "30–45 min",
    deliveryFee: 2.99,
    minOrder: 15,
    image: "/assets/generated/restaurant-spice-garden.dim_600x400.jpg",
    address: "4521 Curry Lane, San Jose, CA 95110",
    description:
      "Authentic North Indian cuisine with aromatic biryanis, rich curries, and fresh-baked naan. Every dish crafted with house-ground spices.",
    isOpen: true,
    promoted: true,
    categories: [
      {
        name: "Appetizers",
        items: [
          {
            id: "sg-1",
            name: "Samosa Chaat",
            description:
              "Crispy samosas topped with tangy tamarind chutney, mint, and yogurt",
            price: 9.99,
            category: "Appetizers",
            isVeg: true,
            popular: true,
          },
          {
            id: "sg-2",
            name: "Chicken Tikka",
            description:
              "Tender chicken marinated in yogurt and spices, grilled in tandoor oven",
            price: 14.99,
            category: "Appetizers",
            popular: true,
            spicy: true,
          },
          {
            id: "sg-3",
            name: "Paneer Tikka",
            description:
              "Char-grilled cottage cheese with bell peppers and onions",
            price: 13.99,
            category: "Appetizers",
            isVeg: true,
          },
          {
            id: "sg-4",
            name: "Aloo Papdi Chaat",
            description:
              "Crispy papdi with spiced potatoes, chickpeas, yogurt, and chutneys",
            price: 8.99,
            category: "Appetizers",
            isVeg: true,
          },
        ],
      },
      {
        name: "Curry & Gravies",
        items: [
          {
            id: "sg-5",
            name: "Butter Chicken",
            description:
              "Succulent chicken in a velvety tomato-cream sauce with aromatic spices",
            price: 18.99,
            category: "Curry & Gravies",
            popular: true,
          },
          {
            id: "sg-6",
            name: "Lamb Rogan Josh",
            description:
              "Slow-cooked lamb in a bold Kashmiri spice blend with whole aromatics",
            price: 21.99,
            category: "Curry & Gravies",
            spicy: true,
          },
          {
            id: "sg-7",
            name: "Palak Paneer",
            description:
              "Creamy spinach curry with cubes of fresh paneer cheese",
            price: 16.99,
            category: "Curry & Gravies",
            isVeg: true,
          },
          {
            id: "sg-8",
            name: "Dal Makhani",
            description:
              "Black lentils slow-cooked overnight with butter and cream",
            price: 14.99,
            category: "Curry & Gravies",
            isVeg: true,
            popular: true,
          },
        ],
      },
      {
        name: "Biryani & Rice",
        items: [
          {
            id: "sg-9",
            name: "Hyderabadi Chicken Biryani",
            description:
              "Fragrant basmati rice layered with marinated chicken, saffron, and fried onions",
            price: 22.99,
            category: "Biryani & Rice",
            popular: true,
            spicy: true,
          },
          {
            id: "sg-10",
            name: "Vegetable Biryani",
            description:
              "Aromatic basmati rice with seasonal vegetables and whole spices",
            price: 17.99,
            category: "Biryani & Rice",
            isVeg: true,
          },
          {
            id: "sg-11",
            name: "Lamb Biryani",
            description:
              "Slow-dum cooked tender lamb with saffron basmati and caramelized onions",
            price: 24.99,
            category: "Biryani & Rice",
          },
        ],
      },
      {
        name: "Breads & Sides",
        items: [
          {
            id: "sg-12",
            name: "Garlic Naan",
            description:
              "Soft leavened bread brushed with garlic butter, baked in tandoor",
            price: 4.99,
            category: "Breads & Sides",
            isVeg: true,
          },
          {
            id: "sg-13",
            name: "Paratha Basket",
            description:
              "Assortment of three whole-wheat stuffed parathas with pickle and yogurt",
            price: 8.99,
            category: "Breads & Sides",
            isVeg: true,
          },
          {
            id: "sg-14",
            name: "Raita",
            description: "Cooling yogurt with cucumber, cumin, and fresh herbs",
            price: 3.99,
            category: "Breads & Sides",
            isVeg: true,
          },
        ],
      },
    ],
  },
  {
    id: "pizza-roma",
    name: "Pizza Roma",
    cuisine: "Italian",
    cuisineTag: "Italian",
    rating: 4.4,
    reviewCount: 876,
    deliveryTime: "25–35 min",
    deliveryFee: 1.99,
    minOrder: 12,
    image: "/assets/generated/restaurant-pizza-roma.dim_600x400.jpg",
    address: "1802 Via Roma, San Francisco, CA 94107",
    description:
      "Neapolitan-style pizzas with a 72-hour fermented dough, San Marzano tomatoes, and fior di latte mozzarella. Homemade pasta made fresh daily.",
    isOpen: true,
    categories: [
      {
        name: "Pizzas",
        items: [
          {
            id: "pr-1",
            name: "Margherita DOP",
            description:
              "San Marzano tomato, fior di latte, fresh basil, extra virgin olive oil",
            price: 17.99,
            category: "Pizzas",
            isVeg: true,
            popular: true,
          },
          {
            id: "pr-2",
            name: "Diavola",
            description:
              "Spicy Calabrian salami, tomato, mozzarella, chili oil",
            price: 19.99,
            category: "Pizzas",
            spicy: true,
            popular: true,
          },
          {
            id: "pr-3",
            name: "Quattro Formaggi",
            description:
              "Mozzarella, gorgonzola, fontina, and parmigiano reggiano",
            price: 21.99,
            category: "Pizzas",
            isVeg: true,
          },
          {
            id: "pr-4",
            name: "Prosciutto e Rucola",
            description:
              "San Daniele prosciutto, arugula, shaved parmigiano, cherry tomatoes",
            price: 23.99,
            category: "Pizzas",
          },
        ],
      },
      {
        name: "Pasta",
        items: [
          {
            id: "pr-5",
            name: "Cacio e Pepe",
            description:
              "Tonnarelli pasta with Pecorino Romano, Parmigiano, and black pepper",
            price: 18.99,
            category: "Pasta",
            isVeg: true,
            popular: true,
          },
          {
            id: "pr-6",
            name: "Tagliatelle al Ragù",
            description:
              "Hand-rolled pasta with slow-braised beef and pork Bolognese sauce",
            price: 22.99,
            category: "Pasta",
            popular: true,
          },
          {
            id: "pr-7",
            name: "Spaghetti alle Vongole",
            description:
              "Clams, white wine, garlic, parsley, chili, extra virgin olive oil",
            price: 24.99,
            category: "Pasta",
          },
        ],
      },
      {
        name: "Antipasti",
        items: [
          {
            id: "pr-8",
            name: "Bruschetta al Pomodoro",
            description:
              "Grilled sourdough with marinated heirloom tomatoes, basil, and garlic",
            price: 9.99,
            category: "Antipasti",
            isVeg: true,
          },
          {
            id: "pr-9",
            name: "Burrata e Prosciutto",
            description:
              "Creamy burrata, San Daniele prosciutto, cherry tomatoes, aged balsamic",
            price: 16.99,
            category: "Antipasti",
            popular: true,
          },
          {
            id: "pr-10",
            name: "Arancini",
            description:
              "Crispy saffron risotto balls stuffed with ragù and mozzarella",
            price: 12.99,
            category: "Antipasti",
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            id: "pr-11",
            name: "Tiramisu",
            description:
              "Classic espresso-soaked ladyfingers with mascarpone cream and cocoa",
            price: 8.99,
            category: "Desserts",
            isVeg: true,
            popular: true,
          },
          {
            id: "pr-12",
            name: "Panna Cotta",
            description:
              "Silky vanilla panna cotta with seasonal berry compote",
            price: 7.99,
            category: "Desserts",
            isVeg: true,
          },
        ],
      },
    ],
  },
  {
    id: "dragon-palace",
    name: "Dragon Palace",
    cuisine: "Chinese",
    cuisineTag: "Chinese",
    rating: 4.3,
    reviewCount: 654,
    deliveryTime: "35–50 min",
    deliveryFee: 2.49,
    minOrder: 18,
    image: "/assets/generated/restaurant-dragon-palace.dim_600x400.jpg",
    address: "888 Jade Street, Oakland, CA 94612",
    description:
      "Authentic Cantonese and Sichuan cuisine. From delicate dim sum to fiery mapo tofu, experience China's rich regional flavors.",
    isOpen: true,
    categories: [
      {
        name: "Dim Sum",
        items: [
          {
            id: "dp-1",
            name: "Har Gow (Shrimp Dumplings)",
            description:
              "Delicate steamed crystal dumplings filled with whole shrimp",
            price: 10.99,
            category: "Dim Sum",
            popular: true,
          },
          {
            id: "dp-2",
            name: "Siu Mai",
            description: "Pork and shrimp open-face dumplings with tobiko",
            price: 10.99,
            category: "Dim Sum",
            popular: true,
          },
          {
            id: "dp-3",
            name: "Char Siu Bao",
            description: "Fluffy steamed buns filled with sweet BBQ pork",
            price: 9.99,
            category: "Dim Sum",
          },
          {
            id: "dp-4",
            name: "Turnip Cake (Lo Bak Go)",
            description: "Pan-fried radish cake with XO sauce",
            price: 8.99,
            category: "Dim Sum",
            isVeg: true,
          },
        ],
      },
      {
        name: "Main Dishes",
        items: [
          {
            id: "dp-5",
            name: "Mapo Tofu",
            description:
              "Silken tofu in a fiery Sichuan peppercorn and doubanjiang sauce",
            price: 15.99,
            category: "Main Dishes",
            spicy: true,
            popular: true,
            isVeg: true,
          },
          {
            id: "dp-6",
            name: "Kung Pao Chicken",
            description:
              "Diced chicken with peanuts, dried chilies, and Sichuan peppercorns",
            price: 18.99,
            category: "Main Dishes",
            spicy: true,
            popular: true,
          },
          {
            id: "dp-7",
            name: "Peking Duck (Half)",
            description:
              "Lacquered crispy duck served with steamed pancakes, hoisin, and scallion",
            price: 34.99,
            category: "Main Dishes",
          },
          {
            id: "dp-8",
            name: "Steamed Whole Fish",
            description:
              "Fresh sea bass steamed Cantonese style with ginger, scallion, and soy",
            price: 28.99,
            category: "Main Dishes",
          },
        ],
      },
      {
        name: "Rice & Noodles",
        items: [
          {
            id: "dp-9",
            name: "Yangzhou Fried Rice",
            description:
              "Wok-tossed jasmine rice with shrimp, char siu pork, egg, and vegetables",
            price: 13.99,
            category: "Rice & Noodles",
            popular: true,
          },
          {
            id: "dp-10",
            name: "Dan Dan Noodles",
            description:
              "Sichuan chili oil noodles with ground pork, tahini, and Sichuan pepper",
            price: 14.99,
            category: "Rice & Noodles",
            spicy: true,
          },
          {
            id: "dp-11",
            name: "Beef Chow Fun",
            description:
              "Wok-fried flat rice noodles with tender beef and bean sprouts",
            price: 16.99,
            category: "Rice & Noodles",
          },
        ],
      },
    ],
  },
  {
    id: "taco-fiesta",
    name: "Taco Fiesta",
    cuisine: "Mexican",
    cuisineTag: "Mexican",
    rating: 4.5,
    reviewCount: 989,
    deliveryTime: "20–30 min",
    deliveryFee: 1.49,
    minOrder: 10,
    image: "/assets/generated/restaurant-taco-fiesta.dim_600x400.jpg",
    address: "305 Aztec Ave, Austin, TX 78701",
    description:
      "Street-inspired Mexican food made with family recipes. Fresh tortillas pressed daily, slow-braised meats, and house-made salsas with real heat.",
    isOpen: true,
    promoted: true,
    categories: [
      {
        name: "Tacos",
        items: [
          {
            id: "tf-1",
            name: "Tacos al Pastor (3)",
            description:
              "Marinated pork from the trompo with pineapple, onion, and cilantro",
            price: 13.99,
            category: "Tacos",
            popular: true,
            spicy: true,
          },
          {
            id: "tf-2",
            name: "Birria Tacos (3)",
            description:
              "Slow-braised beef birria in consommé with cheese, onion, and cilantro",
            price: 16.99,
            category: "Tacos",
            popular: true,
          },
          {
            id: "tf-3",
            name: "Fish Tacos (3)",
            description:
              "Beer-battered tilapia with cabbage slaw, chipotle crema, and pico",
            price: 14.99,
            category: "Tacos",
          },
          {
            id: "tf-4",
            name: "Veggie Tacos (3)",
            description:
              "Roasted cauliflower, black bean, avocado, pickled jalapeño",
            price: 12.99,
            category: "Tacos",
            isVeg: true,
          },
        ],
      },
      {
        name: "Burritos & Bowls",
        items: [
          {
            id: "tf-5",
            name: "Carne Asada Burrito",
            description:
              "Grilled skirt steak, rice, black beans, cheese, guac, sour cream",
            price: 15.99,
            category: "Burritos & Bowls",
            popular: true,
          },
          {
            id: "tf-6",
            name: "Chicken Burrito Bowl",
            description:
              "Adobo-grilled chicken over cilantro-lime rice with all the fixings",
            price: 13.99,
            category: "Burritos & Bowls",
          },
          {
            id: "tf-7",
            name: "Veggie Burrito Bowl",
            description:
              "Fajita vegetables, black beans, rice, guacamole, pico de gallo",
            price: 12.99,
            category: "Burritos & Bowls",
            isVeg: true,
          },
        ],
      },
      {
        name: "Sides & Dips",
        items: [
          {
            id: "tf-8",
            name: "Chips & Guacamole",
            description:
              "House-made tortilla chips with fresh-smashed avocado guacamole",
            price: 8.99,
            category: "Sides & Dips",
            isVeg: true,
            popular: true,
          },
          {
            id: "tf-9",
            name: "Queso Fundido",
            description:
              "Melted Chihuahua cheese with roasted poblano peppers and tortillas",
            price: 9.99,
            category: "Sides & Dips",
            isVeg: true,
          },
          {
            id: "tf-10",
            name: "Elotes",
            description:
              "Mexican street corn with cotija, chili powder, lime, and crema",
            price: 6.99,
            category: "Sides & Dips",
            isVeg: true,
          },
        ],
      },
    ],
  },
  {
    id: "burger-joint",
    name: "Burger Joint",
    cuisine: "American",
    cuisineTag: "Fast Food",
    rating: 4.2,
    reviewCount: 1567,
    deliveryTime: "15–25 min",
    deliveryFee: 0.99,
    minOrder: 8,
    image: "/assets/generated/restaurant-burger-joint.dim_600x400.jpg",
    address: "77 Griddle Ave, Chicago, IL 60601",
    description:
      "Smash burgers, crispy chicken sandwiches, and hand-cut fries. Dry-aged beef blends, house-made sauces, and the best milkshakes in the city.",
    isOpen: true,
    categories: [
      {
        name: "Signature Burgers",
        items: [
          {
            id: "bj-1",
            name: "The Classic Double Smash",
            description:
              "Two smash patties, American cheese, secret sauce, pickles, onion on a brioche bun",
            price: 13.99,
            category: "Signature Burgers",
            popular: true,
          },
          {
            id: "bj-2",
            name: "Bacon BBQ Meltdown",
            description:
              "Dry-aged beef, thick-cut bacon, cheddar, BBQ sauce, crispy onion rings",
            price: 16.99,
            category: "Signature Burgers",
            popular: true,
          },
          {
            id: "bj-3",
            name: "Jalapeño Inferno",
            description:
              "Double patty, pepper jack, fresh jalapeños, ghost pepper sauce, and sriracha mayo",
            price: 15.99,
            category: "Signature Burgers",
            spicy: true,
          },
          {
            id: "bj-4",
            name: "Mushroom Swiss Melt",
            description:
              "Single patty with sautéed mushrooms, gruyère, truffle aioli, and arugula",
            price: 14.99,
            category: "Signature Burgers",
          },
        ],
      },
      {
        name: "Chicken Sandwiches",
        items: [
          {
            id: "bj-5",
            name: "Nashville Hot Chicken",
            description:
              "Extra-crispy fried chicken drenched in hot cayenne paste, slaw, pickles",
            price: 14.99,
            category: "Chicken Sandwiches",
            popular: true,
            spicy: true,
          },
          {
            id: "bj-6",
            name: "Crispy Ranch Chicken",
            description:
              "Buttermilk fried chicken, ranch slaw, dill pickles, and buttered brioche",
            price: 13.99,
            category: "Chicken Sandwiches",
          },
        ],
      },
      {
        name: "Sides & Shakes",
        items: [
          {
            id: "bj-7",
            name: "Hand-Cut Fries",
            description:
              "Double-fried Kennebec potatoes seasoned with house spice blend",
            price: 5.99,
            category: "Sides & Shakes",
            isVeg: true,
            popular: true,
          },
          {
            id: "bj-8",
            name: "Onion Rings",
            description:
              "Beer-battered thick-cut onion rings with comeback sauce",
            price: 6.99,
            category: "Sides & Shakes",
            isVeg: true,
          },
          {
            id: "bj-9",
            name: "Classic Milkshake",
            description:
              "Thick hand-spun shakes in vanilla, chocolate, or strawberry",
            price: 7.99,
            category: "Sides & Shakes",
            isVeg: true,
          },
          {
            id: "bj-10",
            name: "Loaded Chili Fries",
            description:
              "Hand-cut fries topped with beef chili, cheddar, sour cream, jalapeños",
            price: 9.99,
            category: "Sides & Shakes",
          },
        ],
      },
    ],
  },
  {
    id: "sushi-zen",
    name: "Sushi Zen",
    cuisine: "Japanese",
    cuisineTag: "Japanese",
    rating: 4.7,
    reviewCount: 734,
    deliveryTime: "40–55 min",
    deliveryFee: 3.99,
    minOrder: 25,
    image: "/assets/generated/restaurant-sushi-zen.dim_600x400.jpg",
    address: "1200 Sakura Blvd, Seattle, WA 98101",
    description:
      "Omakase-inspired delivery. Chef-grade bluefin tuna, live-catch salmon, and uni flown in daily. Nigiri, premium rolls, and hot dishes for the discerning palate.",
    isOpen: true,
    promoted: true,
    categories: [
      {
        name: "Nigiri & Sashimi",
        items: [
          {
            id: "sz-1",
            name: "Bluefin Tuna Nigiri (2pc)",
            description: "Premium otoro and akami cuts, nikiri soy glaze",
            price: 16.99,
            category: "Nigiri & Sashimi",
            popular: true,
          },
          {
            id: "sz-2",
            name: "Salmon Sashimi (5pc)",
            description:
              "Atlantic live-catch salmon, thinly sliced, with ponzu",
            price: 18.99,
            category: "Nigiri & Sashimi",
            popular: true,
          },
          {
            id: "sz-3",
            name: "Omakase Nigiri Set (8pc)",
            description:
              "Chef's selection of seasonal fish over seasoned sushi rice",
            price: 44.99,
            category: "Nigiri & Sashimi",
            popular: true,
          },
        ],
      },
      {
        name: "Signature Rolls",
        items: [
          {
            id: "sz-4",
            name: "Dragon Roll",
            description:
              "Shrimp tempura inside, avocado on top, unagi sauce, sesame seeds",
            price: 19.99,
            category: "Signature Rolls",
            popular: true,
          },
          {
            id: "sz-5",
            name: "Spicy Tuna Crunch",
            description:
              "Spicy tuna, cucumber, topped with crispy tempura flakes and sriracha",
            price: 17.99,
            category: "Signature Rolls",
            spicy: true,
          },
          {
            id: "sz-6",
            name: "Rainbow Roll",
            description:
              "California roll topped with assorted sashimi in a colorful array",
            price: 22.99,
            category: "Signature Rolls",
          },
        ],
      },
      {
        name: "Hot Dishes",
        items: [
          {
            id: "sz-7",
            name: "Wagyu Gyoza (6pc)",
            description:
              "Pan-seared dumplings filled with A5 Wagyu beef and truffle",
            price: 16.99,
            category: "Hot Dishes",
            popular: true,
          },
          {
            id: "sz-8",
            name: "Tonkotsu Ramen",
            description:
              "Rich 12-hour pork bone broth, chashu, soft egg, nori, and bamboo shoots",
            price: 21.99,
            category: "Hot Dishes",
            popular: true,
          },
          {
            id: "sz-9",
            name: "Miso Black Cod",
            description:
              "Nobu-style miso-marinated black cod with pickled ginger and yuzu",
            price: 34.99,
            category: "Hot Dishes",
          },
        ],
      },
    ],
  },
];

export const CUISINE_TAGS = [
  "All",
  "Indian",
  "Italian",
  "Chinese",
  "Mexican",
  "Fast Food",
  "Japanese",
];
