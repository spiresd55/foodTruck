import { NumberSearchType } from "../__generated__/resolvers-types";

export const createNumberFilter = (type: NumberSearchType, value: Number) => {
    if(type === NumberSearchType.GreaterThan) {
        return { $gt: value };
    } else if(type === NumberSearchType.LessThan) {
        return { $lt: value };
    } else if(type === NumberSearchType.GreaterThanEqualTo) {
        return { $gte: value };
    } else if(type === NumberSearchType.LessThanEqualTo ) {
        return { $lte: value };
    } else if(type === NumberSearchType.EqualTo) {
        return { $eq: value };
    }
}