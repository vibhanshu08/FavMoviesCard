import React from 'react'
import './App.css';
import Holly from './Holly';
import Indian from './Indian';

const a=5;
const fav=()=>{
    if(a===5)return (<Indian></Indian>)
    else return (<Holly></Holly>)
}

export default fav