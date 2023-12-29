import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import TypeRestaurant from '../types/restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<TypeRestaurant[], void>({
      query: () => 'restaurantes'
    }),
    getMenu: builder.query<TypeRestaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetMenuQuery } = api

export default api
