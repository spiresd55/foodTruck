//@ts-ignore
import data from '../src/db/data.json';
import { connect } from '../src/db';
import { FoodTruck } from '../src/models/FoodTruck';

(async () => {
    try {
      await connect();

      const promises = [];

      //Clear out the collection
      await FoodTruck.deleteMany({});

      for (let truck of data) {
        const { cnn, lot, permit, NOISent } = truck;
        promises.push(FoodTruck.create({
            locationId: truck.locationid,
            applicant: truck.applicant,
            facilityType: truck.facilityType,
            address: truck.Address,
            cnn,
            locationDescription: truck.LocationDescription,
            blockLot: truck.blocklot,
            block: truck.block,
            lot,
            permit,
            status: truck.Status,
            foodItems: truck.FoodItems,
            x: truck.X,
            y: truck.Y,
            latitude: truck.Latitude,
            longitude: truck.Longitude,
            schedule: truck.Schedule,
            daysHours: truck.dayshours,
            NOISent,
            approved: truck.Approved,
            received: truck.Received,
            priorPermit: truck.PriorPermit,
            expirationDate: truck.ExpirationDate,
            location: truck.Location,
            firePreventionDistricts: truck['Fire Prevention Districts'],
            policeDistricts: truck['Police Districts'],
            supervisorDistricts: truck['Supervisor Districts'],
            zipCodes: truck['Zip Codes'],
            oldNeighborhoods: truck['Neighborhoods (old)'],
        }));  
      }
 
      await Promise.all(promises);
      
      const result = await FoodTruck.find();
      console.log('DB Data', result)
    } catch (err) {
      console.log('error: ' + err)
    }

    //Kill the program
    process.exit();
})();