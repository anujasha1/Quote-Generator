import { useEffect, useState } from 'react'
import axios from 'axios'


function QuoteGenerator() {
    const [dataArr, setDataArr] = useState([])
    const [activeQuote, setActiveQuote] = useState(0)

    useEffect(() => {

        axios.get("https://type.fit/api/quotes").then((response) => {setDataArr(response.data)})


        // let response = await axios.get("https://type.fit/api/quotes")     // Use async in front of callback function


        // fetch("https://type.fit/api/quotes").then((response) => response.json())
        // .then((data) => {setDataArr(data)})
    }, [])


    return (
        <div> 
            { dataArr.length > 0 &&  
            <div><button onClick={() => setActiveQuote(Math.floor((Math.random() * 10) + (dataArr.length - 10)))}>New Quote</button>
            
            <p>{dataArr[activeQuote].text}</p>
            <p>{dataArr[activeQuote].author}</p>
            </div>
        }
        </div>
    )
}

export default QuoteGenerator

