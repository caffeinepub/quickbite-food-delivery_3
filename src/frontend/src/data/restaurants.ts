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
    deliveryFee: 29,
    minOrder: 199,
    image: "/assets/generated/restaurant-spice-garden.dim_600x400.jpg",
    address: "12 Hazratganj, Lucknow, UP 226001",
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
            price: 129,
            category: "Appetizers",
            isVeg: true,
            popular: true,
          },
          {
            id: "sg-2",
            name: "Chicken Tikka",
            description:
              "Tender chicken marinated in yogurt and spices, grilled in tandoor oven",
            price: 299,
            category: "Appetizers",
            popular: true,
            spicy: true,
          },
          {
            id: "sg-3",
            name: "Paneer Tikka",
            description:
              "Char-grilled cottage cheese with bell peppers and onions",
            price: 249,
            category: "Appetizers",
            isVeg: true,
          },
          {
            id: "sg-4",
            name: "Aloo Papdi Chaat",
            description:
              "Crispy papdi with spiced potatoes, chickpeas, yogurt, and chutneys",
            price: 99,
            category: "Appetizers",
            isVeg: true,
          },
          {
            id: "sg-15",
            name: "Seekh Kebab",
            description:
              "Minced lamb with garam masala, grilled on skewers in tandoor",
            price: 329,
            category: "Appetizers",
            spicy: true,
            popular: true,
          },
          {
            id: "sg-16",
            name: "Hara Bhara Kebab",
            description:
              "Pan-fried spinach, peas and potato patties with mint chutney",
            price: 199,
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
            price: 349,
            category: "Curry & Gravies",
            popular: true,
          },
          {
            id: "sg-6",
            name: "Lamb Rogan Josh",
            description:
              "Slow-cooked lamb in a bold Kashmiri spice blend with whole aromatics",
            price: 399,
            category: "Curry & Gravies",
            spicy: true,
          },
          {
            id: "sg-7",
            name: "Palak Paneer",
            description:
              "Creamy spinach curry with cubes of fresh paneer cheese",
            price: 299,
            category: "Curry & Gravies",
            isVeg: true,
          },
          {
            id: "sg-8",
            name: "Dal Makhani",
            description:
              "Black lentils slow-cooked overnight with butter and cream",
            price: 249,
            category: "Curry & Gravies",
            isVeg: true,
            popular: true,
          },
          {
            id: "sg-17",
            name: "Kadhai Chicken",
            description:
              "Chicken cooked in an iron wok with tomatoes, capsicum, and bold spices",
            price: 359,
            category: "Curry & Gravies",
            spicy: true,
            popular: true,
          },
          {
            id: "sg-18",
            name: "Shahi Paneer",
            description:
              "Paneer in a rich, creamy cashew-tomato gravy with saffron",
            price: 319,
            category: "Curry & Gravies",
            isVeg: true,
          },
          {
            id: "sg-19",
            name: "Mutton Keema",
            description:
              "Spiced minced mutton cooked with peas and aromatic whole spices",
            price: 389,
            category: "Curry & Gravies",
            spicy: true,
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
            price: 379,
            category: "Biryani & Rice",
            popular: true,
            spicy: true,
          },
          {
            id: "sg-10",
            name: "Vegetable Biryani",
            description:
              "Aromatic basmati rice with seasonal vegetables and whole spices",
            price: 279,
            category: "Biryani & Rice",
            isVeg: true,
          },
          {
            id: "sg-11",
            name: "Lamb Biryani",
            description:
              "Slow-dum cooked tender lamb with saffron basmati and caramelized onions",
            price: 449,
            category: "Biryani & Rice",
          },
          {
            id: "sg-20",
            name: "Paneer Biryani",
            description:
              "Dum-cooked basmati with spiced paneer, saffron, and caramelized onions",
            price: 319,
            category: "Biryani & Rice",
            isVeg: true,
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
            price: 59,
            category: "Breads & Sides",
            isVeg: true,
          },
          {
            id: "sg-13",
            name: "Paratha Basket",
            description:
              "Assortment of three whole-wheat stuffed parathas with pickle and yogurt",
            price: 149,
            category: "Breads & Sides",
            isVeg: true,
          },
          {
            id: "sg-14",
            name: "Raita",
            description: "Cooling yogurt with cucumber, cumin, and fresh herbs",
            price: 49,
            category: "Breads & Sides",
            isVeg: true,
          },
          {
            id: "sg-21",
            name: "Kulcha",
            description:
              "Soft tandoor-baked bread stuffed with spiced potato or onion",
            price: 69,
            category: "Breads & Sides",
            isVeg: true,
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            id: "sg-22",
            name: "Gulab Jamun",
            description:
              "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup",
            price: 99,
            category: "Desserts",
            isVeg: true,
            popular: true,
          },
          {
            id: "sg-23",
            name: "Kheer",
            description:
              "Slow-cooked rice pudding with saffron, cardamom, and pistachios",
            price: 119,
            category: "Desserts",
            isVeg: true,
          },
          {
            id: "sg-24",
            name: "Gajar Ka Halwa",
            description:
              "Classic carrot halwa cooked in ghee with milk, sugar, and dry fruits",
            price: 129,
            category: "Desserts",
            isVeg: true,
          },
        ],
      },
    ],
  },
  {
    id: "dakshin-express",
    name: "Dakshin Express",
    cuisine: "South Indian",
    cuisineTag: "Indian",
    rating: 4.5,
    reviewCount: 987,
    deliveryTime: "25–40 min",
    deliveryFee: 19,
    minOrder: 149,
    image: "/assets/generated/restaurant-dakshin-express.dim_600x400.jpg",
    address: "45 Aminabad Road, Lucknow, UP 226018",
    description:
      "Authentic South Indian flavors from Tamil Nadu, Kerala, and Karnataka. Crispy dosas, fluffy idlis, and fragrant chettinad curries made with stone-ground batters and freshly roasted spices.",
    isOpen: true,
    promoted: true,
    categories: [
      {
        name: "Dosas & Uttapam",
        items: [
          {
            id: "de-1",
            name: "Masala Dosa",
            description:
              "Crispy fermented rice crepe filled with spiced potato masala, served with sambar and three chutneys",
            price: 149,
            category: "Dosas & Uttapam",
            isVeg: true,
            popular: true,
          },
          {
            id: "de-2",
            name: "Rava Dosa",
            description:
              "Thin, lacy semolina dosa with cashews, green chillies, and ginger",
            price: 139,
            category: "Dosas & Uttapam",
            isVeg: true,
          },
          {
            id: "de-3",
            name: "Pesarattu",
            description:
              "Crispy green moong dal dosa with ginger-onion topping and ginger chutney",
            price: 129,
            category: "Dosas & Uttapam",
            isVeg: true,
          },
          {
            id: "de-4",
            name: "Onion Uttapam",
            description:
              "Thick, soft rice pancake topped with caramelized onions and green chillies",
            price: 129,
            category: "Dosas & Uttapam",
            isVeg: true,
          },
          {
            id: "de-5",
            name: "Cheese Dosa",
            description:
              "Extra-crispy dosa with melted cheese and spiced potato filling",
            price: 179,
            category: "Dosas & Uttapam",
            isVeg: true,
            popular: true,
          },
        ],
      },
      {
        name: "Idli & Vada",
        items: [
          {
            id: "de-6",
            name: "Idli Sambar (3 pcs)",
            description:
              "Steamed fermented rice cakes with lentil sambar and coconut chutney",
            price: 99,
            category: "Idli & Vada",
            isVeg: true,
            popular: true,
          },
          {
            id: "de-7",
            name: "Medu Vada (2 pcs)",
            description:
              "Crispy lentil doughnuts with sambar and coconut-coriander chutney",
            price: 89,
            category: "Idli & Vada",
            isVeg: true,
          },
          {
            id: "de-8",
            name: "Pongal",
            description:
              "Comforting rice and lentil porridge tempered with ghee, pepper, and cashews",
            price: 119,
            category: "Idli & Vada",
            isVeg: true,
          },
        ],
      },
      {
        name: "Rice & Biryani",
        items: [
          {
            id: "de-9",
            name: "Chettinad Chicken Biryani",
            description:
              "Aromatic Chettinad spiced chicken biryani with kalpasi and marathi mokku",
            price: 349,
            category: "Rice & Biryani",
            popular: true,
            spicy: true,
          },
          {
            id: "de-10",
            name: "Kerala Fish Curry with Rice",
            description:
              "Tangy raw mango fish curry in coconut milk served with steamed Kerala red rice",
            price: 329,
            category: "Rice & Biryani",
            spicy: true,
          },
          {
            id: "de-11",
            name: "Sambar Rice",
            description:
              "Fluffy white rice with hearty lentil-vegetable sambar and a dollop of ghee",
            price: 149,
            category: "Rice & Biryani",
            isVeg: true,
          },
          {
            id: "de-12",
            name: "Puliyodarai (Tamarind Rice)",
            description:
              "Tangy tamarind rice tempered with mustard, peanuts, and curry leaves",
            price: 139,
            category: "Rice & Biryani",
            isVeg: true,
          },
        ],
      },
      {
        name: "Curries",
        items: [
          {
            id: "de-13",
            name: "Chettinad Chicken Curry",
            description:
              "Fiery Chettinad masala with freshly ground black pepper, kalpasi, and bay leaf",
            price: 299,
            category: "Curries",
            spicy: true,
            popular: true,
          },
          {
            id: "de-14",
            name: "Kerala Prawn Moilee",
            description:
              "Delicate coconut milk prawn curry with turmeric, green chilli, and curry leaves",
            price: 369,
            category: "Curries",
          },
          {
            id: "de-15",
            name: "Avial",
            description:
              "Mixed vegetables in coconut-yogurt gravy tempered with coconut oil and curry leaves",
            price: 219,
            category: "Curries",
            isVeg: true,
          },
        ],
      },
      {
        name: "Desserts & Drinks",
        items: [
          {
            id: "de-16",
            name: "Payasam",
            description:
              "Kerala-style vermicelli pudding with coconut milk, jaggery, and cardamom",
            price: 109,
            category: "Desserts & Drinks",
            isVeg: true,
            popular: true,
          },
          {
            id: "de-17",
            name: "Filter Coffee",
            description:
              "Strong Coorg-blend decoction with frothy hot milk, served in a traditional davara set",
            price: 59,
            category: "Desserts & Drinks",
            isVeg: true,
          },
          {
            id: "de-18",
            name: "Buttermilk (Mor)",
            description:
              "Chilled, spiced chaas with ginger, curry leaves, and a pinch of asafoetida",
            price: 49,
            category: "Desserts & Drinks",
            isVeg: true,
          },
        ],
      },
    ],
  },
  {
    id: "rajwada-kitchen",
    name: "Rajwada Kitchen",
    cuisine: "Rajasthani",
    cuisineTag: "Indian",
    rating: 4.4,
    reviewCount: 712,
    deliveryTime: "35–50 min",
    deliveryFee: 25,
    minOrder: 199,
    image: "/assets/generated/restaurant-rajwada-kitchen.dim_600x400.jpg",
    address: "Near Ram Mandir, Civil Lines, Ayodhya, UP 224123",
    description:
      "Royal Rajasthani thalis and heritage recipes from the kitchens of Rajputana. Robust dal baati churma, laal maas, and ker sangri cooked in traditional clay pots.",
    isOpen: true,
    categories: [
      {
        name: "Thali & Combos",
        items: [
          {
            id: "rk-1",
            name: "Royal Rajasthani Thali",
            description:
              "Dal baati churma, laal maas, gatte ki sabzi, ker sangri, bajra roti, chaas, and mishri mawa",
            price: 499,
            category: "Thali & Combos",
            popular: true,
          },
          {
            id: "rk-2",
            name: "Veg Marwari Thali",
            description:
              "Panchmel dal, gatte curry, papad ki sabzi, bajra roti, khichdi, and aam ka achaar",
            price: 349,
            category: "Thali & Combos",
            isVeg: true,
            popular: true,
          },
        ],
      },
      {
        name: "Signature Dishes",
        items: [
          {
            id: "rk-3",
            name: "Laal Maas",
            description:
              "Fiery Rajasthani mutton curry with dried mathania red chillies and whole spices",
            price: 449,
            category: "Signature Dishes",
            spicy: true,
            popular: true,
          },
          {
            id: "rk-4",
            name: "Dal Baati Churma",
            description:
              "Baked wheat balls with five-lentil dal, ghee-doused churma, and mixed pickle",
            price: 299,
            category: "Signature Dishes",
            isVeg: true,
            popular: true,
          },
          {
            id: "rk-5",
            name: "Gatte Ki Sabzi",
            description:
              "Steamed gram-flour dumplings in a tangy yogurt-based gravy",
            price: 219,
            category: "Signature Dishes",
            isVeg: true,
          },
          {
            id: "rk-6",
            name: "Ker Sangri",
            description:
              "Desert beans and dried berries stir-fried with spices — a Rajasthani classic",
            price: 199,
            category: "Signature Dishes",
            isVeg: true,
          },
          {
            id: "rk-7",
            name: "Safed Maas",
            description:
              "Tender mutton slow-cooked in a mild, creamy white gravy of almonds and cream",
            price: 479,
            category: "Signature Dishes",
          },
          {
            id: "rk-8",
            name: "Soola (Jungle Mutton)",
            description:
              "Whole spice-marinated mutton roasted on coals — a warrior-camp recipe",
            price: 499,
            category: "Signature Dishes",
            spicy: true,
          },
        ],
      },
      {
        name: "Breads & Sides",
        items: [
          {
            id: "rk-9",
            name: "Missi Roti",
            description:
              "Griddle-cooked flatbread with chickpea flour, fenugreek, and ajwain",
            price: 49,
            category: "Breads & Sides",
            isVeg: true,
          },
          {
            id: "rk-10",
            name: "Bajra Roti with Lehsun Chutney",
            description:
              "Pearl-millet flatbread with pungent roasted garlic chutney",
            price: 59,
            category: "Breads & Sides",
            isVeg: true,
          },
        ],
      },
      {
        name: "Sweets & Drinks",
        items: [
          {
            id: "rk-11",
            name: "Churma Ladoo",
            description:
              "Sweet wheat-ghee balls with jaggery and dry fruits — a Rajput tradition",
            price: 99,
            category: "Sweets & Drinks",
            isVeg: true,
            popular: true,
          },
          {
            id: "rk-12",
            name: "Mawa Kachori",
            description:
              "Flaky deep-fried pastry filled with sweetened mawa, nuts, and saffron syrup",
            price: 89,
            category: "Sweets & Drinks",
            isVeg: true,
          },
          {
            id: "rk-13",
            name: "Masala Chaas",
            description:
              "Chilled spiced buttermilk with rock salt, cumin, and mint",
            price: 49,
            category: "Sweets & Drinks",
            isVeg: true,
          },
        ],
      },
    ],
  },
  {
    id: "bengal-bites",
    name: "Bengal Bites",
    cuisine: "Bengali",
    cuisineTag: "Indian",
    rating: 4.5,
    reviewCount: 534,
    deliveryTime: "30–45 min",
    deliveryFee: 20,
    minOrder: 149,
    image: "/assets/generated/restaurant-bengal-bites.dim_600x400.jpg",
    address: "14 Station Road, Raebareli, UP 229001",
    description:
      "Home-style Bengali cooking — fragrant mustard fish curries, slow-cooked kosha mangsho, and mishti sweets that Kolkata is famous for.",
    isOpen: true,
    categories: [
      {
        name: "Street Food & Starters",
        items: [
          {
            id: "bb-1",
            name: "Phuchka (6 pcs)",
            description:
              "Kolkata-style hollow puri filled with spiced tamarind water, potatoes, and chickpeas",
            price: 79,
            category: "Street Food & Starters",
            isVeg: true,
            popular: true,
          },
          {
            id: "bb-2",
            name: "Kathi Roll",
            description:
              "Flaky paratha wrapped with egg, chicken or paneer, onions, and green chutney",
            price: 129,
            category: "Street Food & Starters",
            popular: true,
          },
          {
            id: "bb-3",
            name: "Mochar Chop",
            description:
              "Crispy banana-blossom cutlets spiced with panch phoron and served with kasundi",
            price: 99,
            category: "Street Food & Starters",
            isVeg: true,
          },
        ],
      },
      {
        name: "Fish & Seafood",
        items: [
          {
            id: "bb-4",
            name: "Shorshe Ilish (Hilsa in Mustard)",
            description:
              "The prized Hilsa fish slow-cooked in pungent mustard-poppy seed gravy",
            price: 549,
            category: "Fish & Seafood",
            popular: true,
            spicy: true,
          },
          {
            id: "bb-5",
            name: "Chingri Malai Curry",
            description:
              "Jumbo prawns simmered in rich, mildly sweet coconut milk curry",
            price: 449,
            category: "Fish & Seafood",
            popular: true,
          },
          {
            id: "bb-6",
            name: "Doi Maach",
            description:
              "Rohu fish braised in a tangy yogurt and mustard seed gravy",
            price: 299,
            category: "Fish & Seafood",
          },
        ],
      },
      {
        name: "Meat & Veg Mains",
        items: [
          {
            id: "bb-7",
            name: "Kosha Mangsho",
            description:
              "Slow-cooked, caramelized mutton curry with whole spices and deep-fried potatoes",
            price: 399,
            category: "Meat & Veg Mains",
            popular: true,
            spicy: true,
          },
          {
            id: "bb-8",
            name: "Aloo Posto",
            description:
              "Potatoes stir-fried with poppy seed paste and green chillies — Bengali soul food",
            price: 149,
            category: "Meat & Veg Mains",
            isVeg: true,
            popular: true,
          },
          {
            id: "bb-9",
            name: "Cholar Dal",
            description:
              "Split Bengal gram cooked with coconut slivers, raisins, and a ghee tempering",
            price: 149,
            category: "Meat & Veg Mains",
            isVeg: true,
          },
          {
            id: "bb-10",
            name: "Shukto",
            description:
              "Traditional Bengali bitter-vegetable medley with milk and panch phoron",
            price: 169,
            category: "Meat & Veg Mains",
            isVeg: true,
          },
        ],
      },
      {
        name: "Mishti & Drinks",
        items: [
          {
            id: "bb-11",
            name: "Roshogolla (4 pcs)",
            description:
              "Original Kolkata soft chenna dumplings soaked in light sugar syrup",
            price: 99,
            category: "Mishti & Drinks",
            isVeg: true,
            popular: true,
          },
          {
            id: "bb-12",
            name: "Sandesh (2 pcs)",
            description:
              "Delicate fresh chenna sweet flavoured with cardamom and saffron",
            price: 89,
            category: "Mishti & Drinks",
            isVeg: true,
          },
          {
            id: "bb-13",
            name: "Mishti Doi",
            description:
              "Sweetened fermented yogurt set in earthen pots — a Bengali staple",
            price: 79,
            category: "Mishti & Drinks",
            isVeg: true,
          },
        ],
      },
    ],
  },
  {
    id: "mumbai-street-co",
    name: "Mumbai Street Co.",
    cuisine: "Mumbai Street Food",
    cuisineTag: "Indian",
    rating: 4.6,
    reviewCount: 1891,
    deliveryTime: "20–35 min",
    deliveryFee: 15,
    minOrder: 99,
    image: "/assets/generated/restaurant-mumbai-street-co.dim_600x400.jpg",
    address: "Near Saryu Ghat, Ram Kot, Ayodhya, UP 224123",
    description:
      "The iconic chaos of Mumbai's streets — vada pav, pav bhaji, sev puri, and bhel puri — delivered straight to your door with OG roadside taste.",
    isOpen: true,
    promoted: true,
    categories: [
      {
        name: "Vada Pav & Sandwiches",
        items: [
          {
            id: "ms-1",
            name: "Vada Pav",
            description:
              "The Mumbai burger — spiced potato fritter in a soft pav with dry garlic chutney",
            price: 49,
            category: "Vada Pav & Sandwiches",
            isVeg: true,
            popular: true,
          },
          {
            id: "ms-2",
            name: "Cheese Vada Pav",
            description:
              "Classic vada pav elevated with melted cheese slice and spicy green chutney",
            price: 69,
            category: "Vada Pav & Sandwiches",
            isVeg: true,
            popular: true,
          },
          {
            id: "ms-3",
            name: "Mumbai Masala Toast",
            description:
              "Butter-toasted bread with spiced potato, vegetables, and green chutney",
            price: 89,
            category: "Vada Pav & Sandwiches",
            isVeg: true,
          },
          {
            id: "ms-4",
            name: "Bombay Club Sandwich",
            description:
              "Triple-decker with egg, cucumber, tomato, boiled potato, and mint chutney",
            price: 129,
            category: "Vada Pav & Sandwiches",
            isVeg: true,
          },
        ],
      },
      {
        name: "Chaat",
        items: [
          {
            id: "ms-5",
            name: "Pav Bhaji",
            description:
              "Buttery, spiced vegetable mash served with toasted pav and raw onion",
            price: 129,
            category: "Chaat",
            isVeg: true,
            popular: true,
          },
          {
            id: "ms-6",
            name: "Sev Puri",
            description:
              "Crisp puris with potato, onion, chutneys, sev, and fresh coriander",
            price: 79,
            category: "Chaat",
            isVeg: true,
            popular: true,
          },
          {
            id: "ms-7",
            name: "Bhel Puri",
            description:
              "Puffed rice tossed with onions, tomatoes, raw mango, sev, and chutneys",
            price: 69,
            category: "Chaat",
            isVeg: true,
          },
          {
            id: "ms-8",
            name: "Ragda Pattice",
            description:
              "Crispy potato patties topped with white peas curry, chutneys, and sev",
            price: 99,
            category: "Chaat",
            isVeg: true,
          },
          {
            id: "ms-9",
            name: "Dahi Sev Puri",
            description:
              "Crisp puris loaded with yogurt, sweet tamarind chutney, and spiced sev",
            price: 89,
            category: "Chaat",
            isVeg: true,
          },
        ],
      },
      {
        name: "Rolls & More",
        items: [
          {
            id: "ms-10",
            name: "Keema Pav",
            description:
              "Spiced minced mutton cooked with peas served with four buttery pavs",
            price: 179,
            category: "Rolls & More",
            popular: true,
            spicy: true,
          },
          {
            id: "ms-11",
            name: "Misal Pav",
            description:
              "Spicy sprouted moth bean curry topped with farsan, onion, and lemon",
            price: 109,
            category: "Rolls & More",
            isVeg: true,
            spicy: true,
            popular: true,
          },
          {
            id: "ms-12",
            name: "Frankie (Paneer)",
            description:
              "Soft maida roll stuffed with spiced paneer bhurji, onions, and chillies",
            price: 99,
            category: "Rolls & More",
            isVeg: true,
          },
        ],
      },
      {
        name: "Drinks & Desserts",
        items: [
          {
            id: "ms-13",
            name: "Cutting Chai",
            description:
              "Strong half-cup Mumbai-style masala tea with ginger and cardamom",
            price: 29,
            category: "Drinks & Desserts",
            isVeg: true,
            popular: true,
          },
          {
            id: "ms-14",
            name: "Aamras",
            description:
              "Chilled Alphonso mango pulp — the king of summer drinks",
            price: 89,
            category: "Drinks & Desserts",
            isVeg: true,
          },
          {
            id: "ms-15",
            name: "Kulfi Falooda",
            description:
              "Pistachio kulfi with vermicelli, rose syrup, basil seeds, and cold milk",
            price: 119,
            category: "Drinks & Desserts",
            isVeg: true,
            popular: true,
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
    deliveryFee: 19,
    minOrder: 199,
    image: "/assets/generated/restaurant-pizza-roma.dim_600x400.jpg",
    address: "7 MG Road, Hazratganj, Lucknow, UP 226001",
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
            price: 399,
            category: "Pizzas",
            isVeg: true,
            popular: true,
          },
          {
            id: "pr-2",
            name: "Diavola",
            description:
              "Spicy Calabrian salami, tomato, mozzarella, chili oil",
            price: 449,
            category: "Pizzas",
            spicy: true,
            popular: true,
          },
          {
            id: "pr-3",
            name: "Quattro Formaggi",
            description:
              "Mozzarella, gorgonzola, fontina, and parmigiano reggiano",
            price: 499,
            category: "Pizzas",
            isVeg: true,
          },
          {
            id: "pr-4",
            name: "Prosciutto e Rucola",
            description:
              "San Daniele prosciutto, arugula, shaved parmigiano, cherry tomatoes",
            price: 549,
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
            price: 429,
            category: "Pasta",
            isVeg: true,
            popular: true,
          },
          {
            id: "pr-6",
            name: "Tagliatelle al Ragù",
            description:
              "Hand-rolled pasta with slow-braised beef and pork Bolognese sauce",
            price: 499,
            category: "Pasta",
            popular: true,
          },
          {
            id: "pr-7",
            name: "Spaghetti alle Vongole",
            description:
              "Clams, white wine, garlic, parsley, chili, extra virgin olive oil",
            price: 549,
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
            price: 229,
            category: "Antipasti",
            isVeg: true,
          },
          {
            id: "pr-9",
            name: "Burrata e Prosciutto",
            description:
              "Creamy burrata, San Daniele prosciutto, cherry tomatoes, aged balsamic",
            price: 399,
            category: "Antipasti",
            popular: true,
          },
          {
            id: "pr-10",
            name: "Arancini",
            description:
              "Crispy saffron risotto balls stuffed with ragù and mozzarella",
            price: 299,
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
            price: 199,
            category: "Desserts",
            isVeg: true,
            popular: true,
          },
          {
            id: "pr-12",
            name: "Panna Cotta",
            description:
              "Silky vanilla panna cotta with seasonal berry compote",
            price: 179,
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
    deliveryFee: 25,
    minOrder: 250,
    image: "/assets/generated/restaurant-dragon-palace.dim_600x400.jpg",
    address: "22 Collectorganj, Raebareli, UP 229001",
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
            price: 249,
            category: "Dim Sum",
            popular: true,
          },
          {
            id: "dp-2",
            name: "Siu Mai",
            description: "Pork and shrimp open-face dumplings with tobiko",
            price: 249,
            category: "Dim Sum",
            popular: true,
          },
          {
            id: "dp-3",
            name: "Char Siu Bao",
            description: "Fluffy steamed buns filled with sweet BBQ pork",
            price: 199,
            category: "Dim Sum",
          },
          {
            id: "dp-4",
            name: "Turnip Cake (Lo Bak Go)",
            description: "Pan-fried radish cake with XO sauce",
            price: 199,
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
            price: 299,
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
            price: 349,
            category: "Main Dishes",
            spicy: true,
            popular: true,
          },
          {
            id: "dp-7",
            name: "Peking Duck (Half)",
            description:
              "Lacquered crispy duck served with steamed pancakes, hoisin, and scallion",
            price: 799,
            category: "Main Dishes",
          },
          {
            id: "dp-8",
            name: "Steamed Whole Fish",
            description:
              "Fresh sea bass steamed Cantonese style with ginger, scallion, and soy",
            price: 649,
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
            price: 279,
            category: "Rice & Noodles",
            popular: true,
          },
          {
            id: "dp-10",
            name: "Dan Dan Noodles",
            description:
              "Sichuan chili oil noodles with ground pork, tahini, and Sichuan pepper",
            price: 299,
            category: "Rice & Noodles",
            spicy: true,
          },
          {
            id: "dp-11",
            name: "Beef Chow Fun",
            description:
              "Wok-fried flat rice noodles with tender beef and bean sprouts",
            price: 329,
            category: "Rice & Noodles",
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
    deliveryFee: 15,
    minOrder: 99,
    image: "/assets/generated/restaurant-burger-joint.dim_600x400.jpg",
    address: "5 Civil Lines, Gonda, UP 271001",
    description:
      "Smash burgers, crispy chicken sandwiches, and hand-cut fries. Dry-aged beef blends, house-made sauces, and the best milkshakes in town.",
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
            price: 299,
            category: "Signature Burgers",
            popular: true,
          },
          {
            id: "bj-2",
            name: "Bacon BBQ Meltdown",
            description:
              "Dry-aged beef, thick-cut bacon, cheddar, BBQ sauce, crispy onion rings",
            price: 349,
            category: "Signature Burgers",
            popular: true,
          },
          {
            id: "bj-3",
            name: "Jalapeño Inferno",
            description:
              "Double patty, pepper jack, fresh jalapeños, ghost pepper sauce, and sriracha mayo",
            price: 329,
            category: "Signature Burgers",
            spicy: true,
          },
          {
            id: "bj-4",
            name: "Mushroom Swiss Melt",
            description:
              "Single patty with sautéed mushrooms, gruyère, truffle aioli, and arugula",
            price: 319,
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
            price: 299,
            category: "Chicken Sandwiches",
            popular: true,
            spicy: true,
          },
          {
            id: "bj-6",
            name: "Crispy Ranch Chicken",
            description:
              "Buttermilk fried chicken, ranch slaw, dill pickles, and buttered brioche",
            price: 279,
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
            price: 99,
            category: "Sides & Shakes",
            isVeg: true,
            popular: true,
          },
          {
            id: "bj-8",
            name: "Onion Rings",
            description:
              "Beer-battered thick-cut onion rings with comeback sauce",
            price: 119,
            category: "Sides & Shakes",
            isVeg: true,
          },
          {
            id: "bj-9",
            name: "Classic Milkshake",
            description:
              "Thick hand-spun shakes in vanilla, chocolate, or strawberry",
            price: 149,
            category: "Sides & Shakes",
            isVeg: true,
          },
          {
            id: "bj-10",
            name: "Loaded Chili Fries",
            description:
              "Hand-cut fries topped with beef chili, cheddar, sour cream, jalapeños",
            price: 179,
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
    deliveryFee: 39,
    minOrder: 399,
    image: "/assets/generated/restaurant-sushi-zen.dim_600x400.jpg",
    address: "Near Bus Stand, Naya Bazar, Gonda, UP 271001",
    description:
      "Omakase-inspired delivery. Chef-grade bluefin tuna, live-catch salmon, and uni. Nigiri, premium rolls, and hot dishes for the discerning palate.",
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
            price: 499,
            category: "Nigiri & Sashimi",
            popular: true,
          },
          {
            id: "sz-2",
            name: "Salmon Sashimi (5pc)",
            description:
              "Atlantic live-catch salmon, thinly sliced, with ponzu",
            price: 549,
            category: "Nigiri & Sashimi",
            popular: true,
          },
          {
            id: "sz-3",
            name: "Omakase Nigiri Set (8pc)",
            description:
              "Chef's selection of seasonal fish over seasoned sushi rice",
            price: 1299,
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
            price: 599,
            category: "Signature Rolls",
            popular: true,
          },
          {
            id: "sz-5",
            name: "Spicy Tuna Crunch",
            description:
              "Spicy tuna, cucumber, topped with crispy tempura flakes and sriracha",
            price: 549,
            category: "Signature Rolls",
            spicy: true,
          },
          {
            id: "sz-6",
            name: "Rainbow Roll",
            description:
              "California roll topped with assorted sashimi in a colorful array",
            price: 649,
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
            price: 499,
            category: "Hot Dishes",
            popular: true,
          },
          {
            id: "sz-8",
            name: "Tonkotsu Ramen",
            description:
              "Rich 12-hour pork bone broth, chashu, soft egg, nori, and bamboo shoots",
            price: 649,
            category: "Hot Dishes",
            popular: true,
          },
          {
            id: "sz-9",
            name: "Miso Black Cod",
            description:
              "Nobu-style miso-marinated black cod with pickled ginger and yuzu",
            price: 999,
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
  "Fast Food",
  "Japanese",
];
