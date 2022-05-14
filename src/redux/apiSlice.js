import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`
//     },
//     unset(token) {
//        axios.defaults.headers.common.Authorization = '' 
//     }
// }

// const getContacts = createAsyncThunk('get/contacts', async credentials => {
//     try {
//         const { data } = await axios.post('/contacts', credentials);
//         // token.set(data.token)
//         return data;
//     } catch (error) {
        
//     };
// });

// const logIn = createAsyncThunk('auth/login', async credentials => {
//     try {
//         const { data } = await axios.post('/users/login', credentials);
//         token.set(data.token)

//         return data;
//     } catch (error) {
        
//     };
// });

// const logOut = createAsyncThunk('auth/logout', async credentials => {
//     try {
//         const { data } = await axios.post('/users/logout', credentials);
//         token.unset()
//         return data;
//     } catch (error) {
        
//     };
// });


// const operations = {
//     register,
//     logIn,
//     logOut
// }
// export default operations;

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContacts: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});
export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddContactsMutation,
} = contactsApi;
