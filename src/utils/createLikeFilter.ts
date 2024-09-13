export const createLikeFilter = (value: string) => {
    return new RegExp(value, 'i')
}

export const createNotFilter = (value: string) => {
    return { $not: createLikeFilter(value) }
}