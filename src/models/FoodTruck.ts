import mongoose from "mongoose";

const Schema = mongoose.Schema;

const foodTruckSchema = new Schema({
  locationId: Number,
  applicant: String,
  facilityType: String, //Enum
  cnn: Number,
  locationDescription: String,
  address: String,
  block: String,
  blockLot: String,
  lot: String,
  permit: String,
  status: String, //Enum
  foodItems: String,
  x: Number,
  y: Number,
  latitude: Number,
  longitude: Number,
  schedule: String,
  daysHours: String,
  NOISent: String,
  approved: Date,
  received: Number, //Convert to Date
  priorPermit: Boolean,
  expirationDate: Date,
  firePreventionDistricts: Number,
  policeDistricts: Number,
  zipCodes: Number,
  supervisorDistricts: Number,
  oldNeighborhoods: Number
});

export const FoodTruck = mongoose.model('FoodTruck', foodTruckSchema);
