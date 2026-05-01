import {useState , useEffect} from "react";
function LikeButton() {
    const [count , setCount] = useState(0);

    // setInterval(function () {
    //     setCount(count+1);
    // },1000)

    // To use useEffect
    useEffect (function () {
        setInterval (function () {
            setCount (function(count) {
                return count + 1 ;
            })
        } , 1000);
    },[]);


    function handleClick_Increase () {
        setCount(count+1);
    };

    // const handleClick_Decrease = () => {
    //     setCount(count-1);
    // };

    // const handleClick_Reset = () => {
    //     setCount(0)
    // }


    return(
        <div>
            {/* <h3>Welcome</h3> */}
            <p>Likes: {count}</p>
            {/* <button onClick={handleClick_Increase} className="bg-black">Like</button> */}
            {/* <button onClick={handleClick_Decrease} className="bg-black">Un_Like</button>
            <button onClick={handleClick_Reset} className="bg-black">Reset</button> */}

        </div>
    );
}

export default LikeButton;