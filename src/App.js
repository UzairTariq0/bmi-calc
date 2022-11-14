import React, { useState } from "react";

const App = () => {
  const [bmi, setBmi] = useState('');
  const [info, setInfo] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("You are Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("You are Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("You are Overweight");
    } else {
      setInfo("Enter Height and Weight");
    }
  };
  return (
    <div className="bg-blue-300 h-screen w-full">
      <div>
        <h1 className="text-center pt-12  text-3xl font-black">THE BMI CHECKER</h1>
      </div>
      <form className="bg-indigo-900 text-white m-2 h-5/6 flex flex-col pt-16 items-center">
        <label className="text-xl font-medium text-white">Enter Your Name</label>
        <input className="w-11/12 mt-6 p-2 bg-indigo-400 text-white font-medium outline-none rounded-xl" type="text"  onChange={(e) => setName(e.target.value)} />
        <label className="text-xl font-medium text-white mt-9">Enter Your Height in CM</label>
        <input className="w-11/12 mt-6 p-2 bg-indigo-400 text-white font-medium  outline-none rounded-xl" type="text" onChange={(e) => setHeight(e.target.value)} />
        <label className="text-xl font-medium text-white mt-9">Enter Your Weight in KG</label>
        <input className="w-11/12 mt-6 p-2 bg-indigo-400 text-white font-medium  outline-none rounded-xl" type="text" onChange={(e) => setWeight(e.target.value)}/>
        <button type="button" className="bg-blue-300 mt-7 p-3 rounded-3xl text-black font-semibold" onClick={handleBmi}>Calculate</button>
        <div className="w-10/12 border-solid border-4 border-sky-500 mt-6 h-24 ">
          <h3 className="text-white font-semibold p-1 text-center ">Hello {name}, your BMI is: {bmi}</h3>
          <p className="text-center ">{info}</p>
        </div>
      </form>
    </div>
  );
};

export default App;
