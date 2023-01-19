import Card from "../components/Card"
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { quoteActions } from "../store/quote-slice";
import { Helmet } from "react-helmet";

function Home() {
  useEffect(() => {
    fetchOptions();
  })
  const quote = useSelector((state) => state.quote.quote);
  const tag=useSelector((state) => state.quote.tag);
  const options=useSelector((state) => state.quote.options);
  const dispatch = useDispatch()

  const fetchOptions = async () => {
    const response = await fetch('https://api.quotable.io/tags')
    const data = await response.json()
    dispatch(quoteActions.setOptions(data));
  }
  const generateQuote = async () => {
    const response = tag === null ? await fetch('https://api.quotable.io/random') :
      await fetch(`https://api.quotable.io/random?tags=${tag}`);
    const data = await response.json();
    dispatch(quoteActions.updateQuote(data))
    
  }
  return (
    <div className="homepage">
      <Helmet>
        <title>Quote Generator</title>
      </Helmet>
      <Card quote={quote} showbm={true} />
      <select className="tags" name='tag' defaultValue={tag? tag:''} onChange={(e) => {
              
              dispatch(quoteActions.setTag(e.target.value));
            } }>
        {options === [] ? <option>Nothing here</option> : 
          options.map((element) =>
          (<option
          
            value={element.slug}
            key={element._id}>
            {element.name}
          </option>))
        }
      </select>
      <button
        onClick={generateQuote}
        className="mx-auto btn">
        Get Quote
      </button>
    </div>
  )
}

export default Home;