// USING ....
// Mounting 
// Re-Rendering
// Un-Mounting
// Dependency Array []
// Cleanups

import {useState , useEffect} from "react";

function Counter (props){
    useEffect ( function () {
        console.log("Mount");

        return function () {
            console.log("UnMount");
        }
    } , []);

    useEffect (function () {
        console.log("Count has been Changed broo");

        return function (){
            console.log("Cleanupppp")
        }
    } , [props.count])

    return <div>
        Counter {props.count}
    </div>

}

export default Counter;