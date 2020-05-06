const initDb = {
  "products": [
    {
      "id": 1,
      "name": "T shirt Women",
      "description": "New Arrivals T shirt Women Fashion VOGUE Printed Harajuku Female T-Shirts Summer Short Sleeve Casual TShirt Tops",
      "category": 1
    },
    {
      "id": 2,
      "name": "Black leather",
      "description": "Nerazzurri black leather biker jacket women long sleeve leather jacket women soft moto jacket motorcycle faux leather tops women",
      "category": 1
    },
    {
      "id": 3,
      "name": "Kawaii Print T Shirt Women",
      "description": "Nutella Kawaii Print T Shirt Women 90s Harajuku Ullzang Fashion T-shirt Graphic Cute Cartoon Tshirt Korean Style Top Tees Female",
      "category": 1
    },
    {
      "id": 4,
      "name": "MAMA Letter Print T Shirt",
      "description": "Rainbow MAMA Letter Print T Shirt Women Short Sleeve O Neck Loose Tshirt 2020 Summer Women Tee Shirt Tops Camisetas Mujer",
      "category": 1
    },
    {
      "id": 5,
      "name": "iPhone 11",
      "description": "The prominent changes compared with the iPhone XR are the Apple A13 Bionic chip, and an ultra wide dual camera system.",
      "category": 2
    },
    {
      "id": 6,
      "name": "Samsung Galaxy Note 10 ",
      "description": "The Samsung Galaxy Note 10 is a line of Android-based phablets designed ",
      "category": 2
    },
    {
      "id": 7,
      "name": "Dell XPS",
      "description": "13.3-inch, Ultra HD (3,840 x 2,160) UltraSharp InfinityEdge touch display ",
      "category": 2
    },
    {
      "id": 8,
      "name": "Apple MacBook Pro 15.4",
      "description": "macbook pro 2019 15, i9 8 cores ssd 512 go ram 16go",
      "category": 2
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "Clothes",
      "description": "We provide you with the latest women's clothes"
    },
    {
      "id": 2,
      "name": "Electrical",
      "description": "Mobile, Laptop, Robot"
    }
  ]
};

const products = initDb.products;

const categories = initDb.categories;

const newProduct = {
  id: null,
  name: "",
  description: "",
  category: null
};

module.exports = {
  newProduct,
  products,
  categories
};
