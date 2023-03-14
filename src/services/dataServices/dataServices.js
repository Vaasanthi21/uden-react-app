// import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { api } from '../apiServices';

// const CSRF = '/v1/api/csrf/';

// export const getCSRFTOKEN = api.injectEndpoints({
//     endpoints: (build) => ({
//         getCSRF: build.query({
//             query:()=>({
//                 method:'GET',
//                 url:CSRF,
//             }), 
//         })
//     })
// })





// export const csrfSlicer = createSlice({
//   name: 'csrf',
//   initialState:{
//     value:""
//   },
//   // The `reducers` field lets us define reducers and generate associated actions
//   reducers: {
    
//   },
//   extraReducers:builder => {
//     builder.addMatcher(getCSRFTOKEN.endpoints.getCSRF.matchFulfilled, (state, action) => {
//       state.value = action.payload;
//     });
//   }
// });

// export const { setCSRF} = csrfSlicer.actions;


// export default csrfSlicer.reducer;
// export const {useGetCSRFQuery} = getCSRFTOKEN
