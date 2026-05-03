import {useState} from "react";
import img1 from "../assets/Notification.jpeg";

function Notification () {

    const [count,setCount]=useState(1);
    function increase (){
        setCount(count+1);
    }

    setInterval (increase,1000);
    return (
        <div className="bg-black text-white text-5xl p-10">
            <h3 className="bg-red-300">{count}</h3>
            <img src={img1} ></img>
            <button onClick={increase}>Increase the Count</button>
        </div>
    );
}

export default Notification;