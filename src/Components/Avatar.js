// src/components/Avatar.js
import React from 'react';
import './Avatar.css';

const Avatar = ({ hairColor, eyeColor, mouthStyle,capColor }) => {
return (

<div className="avatar">
<div className={`hair ${hairColor}`} />
<div className={`eyes ${eyeColor}`} />
<div className={`mouth ${mouthStyle}`} />
<div className={`cap ${capColor}`}/>
</div>
);
};
export default Avatar;