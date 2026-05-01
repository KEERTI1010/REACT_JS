## Creating And Nesting components

```jsx
function MyButton () {
    return (
        <button> Click Me </button>
    );
}

export default function MyApp() {
    return(
        <div>
        <h1> Welcome to my React Coursen</h>
        <MyButton />
        </div>
    );
}

Here <MyButton /> starts with a capital letter.React component names must always start with a capital letter, while HTML tags must be lowercase.

```

## Hook_Concept

```jsx

1.useState - is used to define the state of our application.
 
* its an a Hook that lets you add state to a functional components  . It returns an array with the current state and a function to update it.

```
```jsx

import React , {useState} from "react";
const Counter = () => {
    const [count,setCount] = useState(0);
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount{count+1}}>Increment</button>
        </div>
    );
};

```

```jsx

2. useEffect - 

*mounting,rerendring,unmounting,Conditional rerendring,cleanup

