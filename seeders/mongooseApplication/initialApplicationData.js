/*
    Not Working for now 
*/
const mongoose = require("mongoose");
require("dotenv").config();
const faker = require("faker");
const { randomStringGenerator } = require("../../utils/randomString");
const { dbApplication } = require("./../../config/database");

exports.seedingMongoose = async () => {
    try {
        // Mongoose Connect
        const db = await dbApplication;

        // Clear existing data
        await db.Motorcycle.deleteMany({});
        await db.RentalAgreement.deleteMany({});
        await db.MotorcyclesRentalAgreement.deleteMany({});
        await db.RentalCompany.deleteMany({});
        console.log("# Mongoose: Cleared existing data #");

        // Seed rental companies
        const rentalCompanies = [];
        for (let i = 0; i < 5; i++) {
            const rentalCompany = new RentalCompany({
                name: faker.company.companyName(),
            });
            rentalCompanies.push(await rentalCompany.save());
        }
        console.log("Rental Companies inserted");

        // Seed motorcycles
        const motorcycles = [];
        for (let i = 0; i < 20; i++) {
            const motorcycle = new Motorcycle({
                price: faker.commerce.price(1000, 5000, 0),
                status: faker.random.arrayElement(["sold", "stock"]),
                serialNumber: randomStringGenerator(),
            });
            motorcycles.push(await motorcycle.save());
        }
        console.log("Motorcycles inserted");

        // Seed rental agreements
        const rentalAgreements = [];
        for (let i = 0; i < 10; i++) {
            const rentalAgreement = new RentalAgreement({
                rentalAmount: faker.commerce.price(100, 500, 0),
                rentalCompanyId: faker.random.arrayElement(rentalCompanies)._id,
                motorcycleId: faker.random.arrayElement(motorcycles)._id,
            });
            rentalAgreements.push(await rentalAgreement.save());
        }
        console.log("Rental Agreements inserted");

        // Seed motorcycles_rentalAgreements
        for (let i = 0; i < 10; i++) {
            const motorcyclesRentalAgreement = new MotorcyclesRentalAgreement({
                motorcycleId: faker.random.arrayElement(motorcycles)._id,
                rentalAgreementId: faker.random.arrayElement(rentalAgreements)._id,
            });
            await motorcyclesRentalAgreement.save();
        }
        console.log("MotorcyclesRentalAgreements inserted");

        console.log("# Database Seeding Completed! #");
    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
        console.log("# Mongoose Database Disconnected! #");
    }
};
