export const buildSearchParams = (config) => {
    const {
        baseParams,
        filters = {},
        state
    } = config;
    
    const searchParams = new URLSearchParams(baseParams);
    
    const defaultValues = {
        have_first_class: false,
        have_second_class: false,
        have_third_class: false,
        have_fourth_class: false,
        price_from: 0,
        price_to: 9999
    };
    
    Object.entries(filters).forEach(([stateKey, queryKey]) => {
        const value = state[stateKey];
        const defaultValue = defaultValues[stateKey];
        

        if (typeof value === 'boolean') {
            if (value === true) {
                searchParams.append(queryKey, value);
            }
            return;
        }
        
        
        if (typeof value === 'number') {
            if (value !== defaultValue) {
                searchParams.append(queryKey, value);
            }
            return;
        }

        if (value && value !== '') {
            searchParams.append(queryKey, value);
        }
    });
    
    return searchParams;
};