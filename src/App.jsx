import { useState } from "react";
// import LikeButton from "./components/LikeButton"
import Counter from "./components/Counter"

function App() {

    const [count , setCount] = useState(0);

    function increase () {
        //setCount(count+1);
        setCount(c=>c+1);        
    }

    return(
        <div>
            {/* <LikeButton /> */}
            <Counter  count={count}/>
            <button onClick={increase}>Increase</button>
        </div>
    )
}

export default App