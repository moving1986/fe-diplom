export const buildSearchParams = (config) => {
    const {
        baseParams,
        filters = {},
        state
    } = config;

    const searchParams = new URLSearchParams(baseParams);


    Object.entries(filters).forEach(([stateKey, queryKey]) => {
        const value = state[stateKey];
        if (isValidParam(value)) {
            searchParams.append(queryKey, value);
        }
    });

    return searchParams;
};


const isValidParam = (value) => {
    return value !== null &&
        value !== undefined &&
        value !== '' &&
        !(Array.isArray(value) && value.length === 0);
};