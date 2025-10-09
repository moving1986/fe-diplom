import { createSlice } from '@reduxjs/toolkit';

const tripsSlice = createSlice({
    name: 'trips',
    initialState: {
        selectedRoute: null,
        routesData: [],
        loading: false,
        error: null
    },
    reducers: {
        setSelectedRoute: (state, action) => {
            state.selectedRoute = action.payload;
        },
        clearSelectedRoute: (state) => {
            state.selectedRoute = null;
        },
        setRoutesData: (state, action) => {
            state.routesData = action.payload;
        },
      
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {
    setSelectedRoute,
    clearSelectedRoute,
    setRoutesData,
    setLoading,
    setError
} = tripsSlice.actions;

export default tripsSlice.reducer;