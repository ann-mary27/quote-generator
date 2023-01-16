import {configureStore} from '@reduxjs/toolkit';
import quoteSlice from './quote-slice';
import BookmarksSlice from './bml-slice';

const store= configureStore(
    {
        reducer:{
            quote: quoteSlice.reducer,
            bookmarks: BookmarksSlice.reducer
        }
    }
);
export default store;

