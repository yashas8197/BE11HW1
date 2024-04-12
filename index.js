const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  employeeProfile: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  telphoneNumber: {
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
});

const EmployeeCard = mongoose.model("EmployeeCard", employeeSchema);

module.export = EmployeeCard;

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPhoto: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productInfo: {
    type: String,
    required: true,
  },
  productColor: {
    type: String,
    required: true,
  },
  productSize: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

const ProductCard = mongoose.model("ProductCard", productSchema);

module.exports = ProductCard;

const creditCardSchema = new mongoose.Schema({
  creditCardName: {
    type: String,
    required: true,
  },
  creditCardNumber: {
    type: Number,
    required: true,
  },
  creditCardDate: {
    type: Date,
    required: true,
  },
  creditCardUserName: {
    type: String,
    required: true,
  },
  creditCardLogo: {
    type: String,
    required: true,
  },
});

const BankCreditCard = mongoose.model("BankCreditCard", creditCardSchema);

module.exports = BankCreditCard;

const fruitSchema = new mongoose.Schema({
  fruitName: {
    type: String,
    required: true,
  },
  fruitImg: {
    type: String,
    required: true,
  },
  fruitDescription: {
    type: String,
    required: true,
  },
  fruitCalories: {
    type: Number,
    required: true,
  },
  fruitCarboHydrates: {
    type: Number,
    required: true,
  },
  fruitProtien: {
    type: Number,
    requried: true,
  },
  fruitFat: {
    type: Number,
    required: true,
  },
});

const FruitPost = mongoose.model("FruitPost", fruitSchema);

module.exports = FruitPost;

const flipKartProduct = new mongoose.Schema({
  flipKartProductName: {
    type: String,
    required: true,
  },
  flipKartProductUrl: {
    type: String,
    required: true,
  },
  flipKartProductRating: {
    type: Number,
    required: true,
  },
  flipKartProductDescrition: {
    type: String,
    required: true,
  },
  flipKartProductfeature: {
    type: String,
    required: true,
  },
  flipKartProductWarrenty: {
    type: Number,
    required: true,
  },
  flipKartProductPrice: {
    type: Number,
    required: true,
  },
  flipKartProductDiscount: {
    type: Number,
    required: false,
  },
  flipKartProductDelivery: {
    type: String,
    required: true,
  },
  flipKartProductAvailable: {
    type: String,
    required: true,
  },
});

const FlipkartProduct = mongoose.model("FlipkartProduct", flipKartProduct);

module.exports = FlipkartProduct;

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    category: {
      type: String,
      enum: ["Personal", "Work", "Study", "Ideas", "Journal", "Other"],
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true },
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;

const booksSchema = new mongoose.Schema(
  {
    bookTitle: {
      type: String,
      required: true,
    },
    bookAuthor: {
      type: String,
      required: true,
    },
    bookPublishYear: {
      type: Number,
      required: true,
    },
    bookGenre: {
      type: [String],
      enum: [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Thriller",
        "Science Fiction",
        "Fantasy",
        "Romance",
        "Historical",
        "Biography",
        "Self-help",
        "Other",
      ],
    },
    bookLanguage: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "United States",
    },
    bookRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 10,
    },
    bookSummary: {
      type: String,
    },
    bookCoverImgUrl: {
      type: String,
    },
  },
  { timestamps: true },
);

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cuisines: {
      type: [String],
      enum: [
        "Italian",
        "Mexican",
        "Chinese",
        "Indian",
        "American",
        "French",
        "Japanese",
        "Mediterranean",
        "Thai",
        "Vegetarian",
        "Vegan",
        "Other",
      ],
    },
    location: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    website: {
      type: String,
    },
    openingYear: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    specialDishes: {
      type: [String],
    },
    photoUrls: {
      type: [String],
    },
  },
  { timestamps: true },
);

const Restaurants = mongoose.model("Restaurants", restaurantSchema);

module.exports = Restaurants;

const smartphoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    operatingSystem: {
      type: String,
    },
    displaySize: {
      type: String,
    },
    storage: {
      type: String,
    },
    ram: {
      type: String,
    },
    cameraSpecs: {
      type: Object,
    },
    batteryCapacity: {
      type: String,
    },
    connectivity: {
      type: [String],
    },
    price: {
      type: Number,
    },
    colorsAvailable: {
      type: [String],
    },
    features: {
      type: [String],
    },
  },
  { timrstamps: true },
);

const Smartphone = mongoose.model("Smartphone", smartphoneSchema);

module.exports = Smartphone;

const todosSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true },
);

const Todo = mongoose.model("Todo", todosSchema);

module.export = Todo;
