// src/components/CustomizationPanel.js
import React from 'react';
import './CustomizationPanel.css';
const CustomizationPanel = ({ setHairColor, setEyeColor, setMouthStyle,setCapColor }) => {
return (
<div>
    <div class="container">
    <div>
<label>Cap Color:</label>
<select onChange={(e) => setCapColor(e.target.value)}>
<option value="red">Red</option>
<option value="orange">Orange</option>
<option value="blue">Blue</option>
</select>
</div>
<div>
<label>Hair Color:</label>
<select onChange={(e) => setHairColor(e.target.value)}>
<option value="black">Black</option>
<option value="blonde">Gray</option>
<option value="brown">Brown</option>
<option value="purple">Purple</option>
</select>
</div>
<div>
<label>Eye Color:</label>
<select onChange={(e) => setEyeColor(e.target.value)}>
<option value="blue">Blue</option>
<option value="green">Pink</option>
<option value="red">Red</option>
</select>
</div>
<div>
<label>Mouth Style:</label>
<select onChange={(e) => setMouthStyle(e.target.value)}>
<option value="smile">Smile</option>
<option value="sad">Sad</option>
</select>
</div>
</div>
</div>
);
};

export default CustomizationPanel;