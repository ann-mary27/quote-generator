import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        _id: "",
        content: "Your quotes will appear here!",
        author: ""
    },
    reducers: {
        updateQuote(state, action) {
            {
                state._id = action.payload._id;
                state.content = action.payload.content;
                state.author = action.payload.author;
            }
        }
    }
})
export const quoteActions = quoteSlice.actions;
export default quoteSlice
