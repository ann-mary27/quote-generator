import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
       quote:{ _id: "",
        content: "Your quotes will appear here!",
        author: ""
    },
        options: [],
        tag:null
    },
    reducers: {
        updateQuote(state, action) {
                state.quote._id = action.payload._id;
                state.quote.content = action.payload.content;
                state.quote.author = action.payload.author;
        },
        setOptions(state, action) {
            state.options = action.payload;
        },
        setTag(state, action) {
            state.tag = action.payload;
        }

    }
})
export const quoteActions = quoteSlice.actions;
export default quoteSlice
