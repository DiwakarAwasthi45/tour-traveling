// src/data/data.jsx

// Destinations Data
let destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1200,
     rating: 4.7,
    description: "Experience the city of love and the Eiffel Tower."
  },
  {
    id: 2,
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1800,
     rating: 4.9,
    description: "Enjoy crystal clear water and luxury resorts."
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    image: "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1500,
    rating: 4.9,
    description: "Explore modern architecture and desert adventures."
  },
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    price: 1300,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Enjoy beaches, temples, and tropical vibes."
  },
  {
    id: 2,
    name: "Switzerland",
    country: "Switzerland",
    price: 2200,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1570161766218-f8488ebb8078?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Beautiful mountains and scenic landscapes."
  },
   {
    id: 1,
    name: "Nepal",
    country: "Nepal",
    price: 900,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore the Himalayas, Mount Everest, and beautiful culture."
  }
];

// Services Data
let services = [
  {
    id: 1,
    title: "Flight Booking",
    icon: "✈️",
    description: "Book flights worldwide at affordable prices."
  },
  {
    id: 2,
    title: "Hotel Reservation",
    icon: "🏨",
    description: "Comfortable and luxury hotel bookings."
  },
  {
    id: 3,
    title: "Tour Packages",
    icon: "🗺️",
    description: "Customized packages for your dream vacation."
  }
];

// Packages Data
let packages = [
  {
    id: 1,
    title: "Romantic Paris Tour",
    duration: "5 Days",
    price: 1200,
    image: "https://images.unsplash.com/photo-1705445214419-f10affd36c0a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Maldives Luxury Escape",
    duration: "7 Days",
    price: 2000,
    image: "https://plus.unsplash.com/premium_photo-1680340941711-547df61a7a94?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Dubai Adventure",
    duration: "6 Days",
    price: 1500,
    image: "https://images.unsplash.com/photo-1588129582730-bf9c9a7cab5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 1,
    title: "Nepal Adventure Tour",
    duration: "7 Days",
    price: 1200,
    image: "https://images.unsplash.com/photo-1550406437-7314ef06d903?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore Everest, Pokhara and Chitwan in one amazing trip."
  },
  {
    id: 2,
    title: "Paris Romantic Getaway",
    duration: "5 Days",
    price: 1500,
    image: "https://images.unsplash.com/photo-1771347819259-487a944f006f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Visit Eiffel Tower and enjoy romantic city vibes."
  },
  {
    id: 3,
    title: "Dubai Luxury Trip",
    duration: "6 Days",
    price: 1700,
    image: "https://images.unsplash.com/photo-1762280251209-f4c2cddeb53f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Desert safari, Burj Khalifa and luxury shopping."
  }
    
];

// Export all
export { destinations, services, packages };