import React,{useEffect, useState} from "react";

const App = () => {
    const [num, setnum] = useState(0);
    const [nums, setnums] = useState(0);

    useEffect(() => {
        alert("I am clicked");
        console.log("I am also clicked")
    }, [num]);

    return (
        <div>
        <button 
        onClick={
            () => {
            SetNum(num + 1);
        }}
        >
            click me {num}
            </button>
            <br />
            <button 
        onClick={
            () => {
            SetNum(nums + 1);
        }}
        >
            click me {nums}
            </button>
            </div>
    );
};

export default App;