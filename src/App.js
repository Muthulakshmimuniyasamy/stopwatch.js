import React, { useState } from 'react';
import Avatar from './Components/Avatar';
import CustomizationPanel from './Components/CustomizationPanel';
import './App.css';

const App = () => {
const [hairColor, setHairColor] = useState('black');
const [eyeColor, setEyeColor] = useState('blue');
const [mouthStyle, setMouthStyle] = useState('smile');
const[capColor,setCapColor] = useState('red')
return (
<div className="App">
<h1>Avatar Generator</h1>
<center><Avatar hairColor={hairColor} eyeColor={eyeColor} mouthStyle={mouthStyle} capColor={capColor} />
<CustomizationPanel setHairColor= {setHairColor} setEyeColor= {setEyeColor} setMouthStyle= {setMouthStyle} setCapColor={setCapColor} /></center>
</div>
);
};
export default App;