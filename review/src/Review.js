import React,{useState} from 'react';
import people from './data'
const Review=()=>{
    const [index,setIndex]= useState(0)
    const {id,name,job,image,text}= people[index]
    const checkNumber=(number)=>{
        if(number>people.length+1){
            return number = 0
        }
        if(number)
    }
    const nextPerson=()=>{

    }
    const prevPerson=()=>{

    }
    const randomPerson=()=>{
        const randomNumber = Math.floor(Math.random()*people.length)
        console.log(randomNumber);
    }
}
export default Review