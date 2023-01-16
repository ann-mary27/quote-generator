import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import Card from '../components/Card';


function Bookmark() {

  const bookmarks = useSelector((state) => state.bookmarks)


  return (
    <div>
      <Helmet>
        <title>Bookmarks</title>
      </Helmet>
      {bookmarks.bmlist.length > 0 ?
        bookmarks.bmlist.map(bookmark => (
          <Card key={bookmark._id} quote={bookmark} />)
        )
        : <h3 className="text-center">No bookmark yet</h3> 
    }
    </div>
  )
}

export default Bookmark
