import { FoodTruck } from "../models/FoodTruck";
import { createNumberFilter, createLikeFilter, createNotFilter } from "../utils";
import { Resolvers, QueryFoodTruckArgs } from "../__generated__/resolvers-types";

export const resolvers = {
    Query: {
      foodTruck: async (_: never, args: QueryFoodTruckArgs) => {
        let limit = args?.input?.itemsPerPage || 100;
        let offset = args?.input?.page || 0;
        let skip = limit * offset;

        // Filters
        let filters = {}

        // Filters used in final query
        if(args?.input) {
            const { address, zipCodes, supervisorDistricts, oldNeighborhoods, policeDistricts, status } = args.input;
            // All filters for this demo will use "AND" logical operators
            // Filters can be customized even more using Mongoose Aggregates $or $and
            if(address) {
                filters['address'] = createLikeFilter(address.value);
            }

            if (zipCodes) {
                filters['zipCodes'] = createNumberFilter(zipCodes.filterType, zipCodes.value);
            }

            if (supervisorDistricts) {
                filters['supervisorDistricts'] = createNumberFilter(supervisorDistricts.filterType, supervisorDistricts.value);
            }

            if (oldNeighborhoods) {
                filters['oldNeighborhoods'] = createNumberFilter(oldNeighborhoods.filterType, oldNeighborhoods.value);
            }

            if (policeDistricts) {
                filters['policeDistricts'] = createNumberFilter(policeDistricts.filterType, policeDistricts.value);
            }

            if (status) {
                if(status.filterType === 'is') {
                    filters['status'] = createLikeFilter(status.type);
                } else if(status.filterType === 'not') {
                    filters['status'] = createNotFilter(status.type);
                }
            }
        }
        // Pagination of FoodTruck results
        const results = await FoodTruck.find(filters , null ,{
            limit,
            skip 
        });
 
        return results;
      }
    },
};