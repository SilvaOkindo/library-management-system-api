import mongoose from "mongoose";
import { Publisher } from "../models/publisher.js";
import { DBConnection } from "./db-connection.js";

// Connect to MongoDB
mongoose.connect("mongodb://localhost/lms").then(() => {
    console.log("DB connected...")
}).catch(err => {
    console.log(err)
})

// Seed data for publishers
const publishers = [
  {
    name: "Penguin Random House",
    contactInfo: "contact@prh.com",
    address: "1745 Broadway, New York, NY 10019",
  },
  {
    name: "HarperCollins",
    contactInfo: "info@harpercollins.com",
    address: "195 Broadway, New York, NY 10007",
  },
  {
    name: "Simon & Schuster",
    contactInfo: "support@simonandschuster.com",
    address: "1230 Avenue of the Americas, New York, NY 10020",
  },
  {
    name: "Hachette Book Group",
    contactInfo: "contact@hbgusa.com",
    address: "1290 Avenue of the Americas, New York, NY 10104",
  },
  {
    name: "Macmillan Publishers",
    contactInfo: "contact@macmillan.com",
    address: "120 Broadway, New York, NY 10271",
  },
  {
    name: "Scholastic Inc.",
    contactInfo: "scholastic@scholastic.com",
    address: "557 Broadway, New York, NY 10012",
  },
  {
    name: "John Wiley & Sons",
    contactInfo: "info@wiley.com",
    address: "111 River St, Hoboken, NJ 07030",
  },
  {
    name: "Pearson Education",
    contactInfo: "support@pearson.com",
    address: "221 River St, Hoboken, NJ 07030",
  },
  {
    name: "Oxford University Press",
    contactInfo: "info@oup.com",
    address: "198 Madison Ave, New York, NY 10016",
  },
  {
    name: "Cambridge University Press",
    contactInfo: "contact@cambridge.org",
    address: "1 Liberty Plaza, New York, NY 10006",
  },
];

// Insert publishers into MongoDB
const seedPublishers = async () => {
  try {
    await Publisher.deleteMany(); // Clear existing data
    await Publisher.insertMany(publishers);
    console.log("Publishers seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding publishers:", error);
    mongoose.connection.close();
  }
};

seedPublishers();
