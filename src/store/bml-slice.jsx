import { createSlice } from "@reduxjs/toolkit";
const BookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState: {
        bmlist: localStorage.getItem('bookmarks')!==null ? 
        JSON.parse(localStorage.getItem('bookmarks'))
        : []
    },
    reducers: {
        addtoBML(state, action) {
            state.bmlist.unshift(action.payload)
            localStorage.setItem('bookmarks',JSON.stringify(state.bmlist));
        },
        removefromBML(state, action) {
            state.bmlist=state.bmlist.filter(
               (bm)=>  action.payload._id !== bm._id )
               localStorage.setItem('bookmarks', JSON.stringify(state.bmlist))
        }
        
    }
})

export const BMLActions = BookmarksSlice.actions;
export default BookmarksSlice;

