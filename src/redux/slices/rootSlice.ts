import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'classic drone',
        price: "2000.00",
        artist: 'J.Cole',
        album: 'Offseason',
        tracks: "12",
        year: 2021
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, } = rootSlice.actions;