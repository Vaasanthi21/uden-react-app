import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const API_BASE_URL = 'https://api.uden.tech';

export const api = createApi({
//   reducerPath: 'udenApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
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


  