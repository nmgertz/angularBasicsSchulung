export function validateCityFn(c) {
    return null;
}
const validateCity = (cities) => (c) => {
    if (cities.includes(c.value.from) && cities.includes(c.value.to)) {
        return null;
    }
    return { city: true };
};
export const CustomValidators = {
    validateCity,
};
//# sourceMappingURL=flight-validators.js.map