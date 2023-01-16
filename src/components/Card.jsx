import { FaBookmark, FaTimes } from 'react-icons/fa';
import { BMLActions } from '../store/bml-slice';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'


export default function Card({quote, showbm}) {
  const bookmarks=useSelector((state)=> state.bookmarks)
  const dispatch = useDispatch()
  return (
    <div className="card">
      <p className="quote">{quote.content}</p>
      <div className="container">
        <div className="row">
          <div className="col-2 "></div>
          <div className="col-8">
            <p>
              {quote.author !== '' && <small className="author text-center">-{quote.author}</small>}
            </p>
          </div>
          <div className="col-2 ">
            {
              <button className="bookmark">
                {showbm ?
                <FaBookmark onClick={() => {
                
                  if(!bookmarks.bmlist.includes(quote) && quote._id!==''){
                    dispatch(BMLActions.addtoBML(quote))
                  }
                }} />
                : 
                <FaTimes onClick={()=>{
                  if(bookmarks.bmlist.length>0){
                    dispatch(BMLActions.removefromBML(quote))
                  }
                  console.log(bookmarks.bmlist)
                }} />
                }
                
              </button>}
          </div>
        </div>
      </div>

    </div>
  )
}

Card.prototype={
  showbm: PropTypes.bool,
  quote: PropTypes.shape({
    _id: PropTypes.string,
    author:  PropTypes.string,
    content: PropTypes.string
  })
}

Card.defaultProps = {
  showbm: false
}