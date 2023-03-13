import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const API_BASE_URL = 'https://api.uden.tech';
const DEVAPI_BASE_URL = 'https://devapi.uden.tech';

export const api = createApi({
//   reducerPath: 'udenApi',
  baseQuery: fetchBaseQuery({ baseUrl: window.location.host==="uden.tech" || window.location.host==="www.uden.tech"?API_BASE_URL:DEVAPI_BASE_URL ,credentials:'include'}),
  endpoints: () => ({}),
})

// export const apiEndpoints = {
//     useGetJobByIdQuery
// }

// export const jobsApi = createApi({
//     reducerPath: 'jobsApi',
//     baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL+JOBS }),
//     endpoints: (builder) => ({
//       getJob: builder.query({
//         query: (id) => `/${id}/`,
//       }),
//       postJob: builder.mutation({
//         query: ({id,...patch }) => ({url:`/${id}/`,method: 'POST',body: patch}),
//       }),
//       getComments: builder.query({
//         query: () => '/comments',
//       }),
//     }),
//   })


  