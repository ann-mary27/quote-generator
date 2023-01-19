import Card from "../components/Card"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quoteActions } from "../store/quote-slice";
import { Helmet } from "react-helmet";

function Home() {
  useEffect(() => {
    fetchOptions();
  }, [])
  
  const quote = useSelector((state) => state.quote);
  const dispatch = useDispatch()
  const [options, setOptions] = useState([]);
  const [tag, setTag] = useState(null);

  const fetchOptions = async () => {
    const response = await fetch('https://api.quotable.io/tags')
    const data = await response.json()
    setOptions(data);
  }
  const generateQuote = async () => {
    const response = tag === null ? await fetch('https://api.quotable.io/random') :
      await fetch(`https://api.quotable.io/random?tag=${tag}`);
    const data = await response.json();
    console.log(data);
    dispatch(quoteActions.updateQuote(data))
  }
  return (
    <div className="homepage">
      <Helmet>
        <title>Quote Generator</title>
      </Helmet>
      <Card quote={quote} showbm={true} />
      <select className="tags" name='tag'>
        {options === [] ? <option>Nothing here</option> : 
          
          options.map((element) =>
          (<option

            onClick={(element) => {
              setTag(element.tag);
            }}
            value={element.tag}
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

export default Home
