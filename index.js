const { initializeDatabase } = require("./db/db.connect");
const Restaurants = require("./models/restaurant.models");

initializeDatabase();

const newRestaurant = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};

async function createData(newRestaurant) {
  try {
    const restaurant = new Restaurants(newRestaurant);
    const saveRestaurant = await restaurant.save();
    console.log("New Restaurant", saveRestaurant);
  } catch (error) {
    throw error;
  }
}

createData(newRestaurant);

async function readAllrestaurants() {
  try {
    const readAll = await Restaurants.find();
    console.log(readAll);
  } catch (error) {
    throw error;
  }
}

// readAllrestaurants();

async function readRestaurantByName(restaurantName) {
  try {
    const getResByName = await Restaurants.findOne({ name: restaurantName });
    console.log(getResByName);
  } catch (error) {
    throw error;
  }
}
// readRestaurantByName("Yo China");

async function resWithOfferReservation(reservation) {
  try {
    const reservationNeeded = await Restaurants.find({
      reservationsNeeded: reservation,
    });
    console.log(reservationNeeded);
  } catch (error) {
    throw error;
  }
}

// resWithOfferReservation(true);

async function resWithDelivery(available) {
  try {
    const deliveryAvailable = await Restaurants.find({
      isDeliveryAvailable: available,
    });
    console.log(deliveryAvailable);
  } catch (error) {
    throw error;
  }
}

// resWithDelivery(true);

async function readResByPhoneNumber(phoneNumber) {
  try {
    const resPhoneNumber = await Restaurants.findOne({
      phoneNumber: phoneNumber,
    });
    console.log(resPhoneNumber);
  } catch (error) {
    throw error;
  }
}

// readResByPhoneNumber("+1288997392");

async function readReWithItalian(cuisine) {
  try {
    const resCuisine = await Restaurants.find({
      cuisine: cuisine,
    });
    console.log(resCuisine);
  } catch (error) {
    throw error;
  }
}

readReWithItalian("Italian");
