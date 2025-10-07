// В файле store/tripsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tripsSlice = createSlice({
    name: 'trips',
    initialState: {
        sortParams: {
            sort: 'time'
        },
        paginationParams: {
            limit: 5,
            offset: 0
        },
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
        setTripsSearch: (state, action) => {
            state.tripsSearch = { ...state.tripsSearch, ...action.payload };
        },
        setSortParams: (state, action) => {
            state.sortParams = { ...state.sortParams, ...action.payload };
        },
        setPaginationParams: (state, action) => {
            state.paginationParams = { ...state.paginationParams, ...action.payload };
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
    setTripsSearch,
    setSortParams,
    setPaginationParams,
    setLoading,
    setError
} = tripsSlice.actions;

export default tripsSlice.reducer;