import React,{useState} from 'react';
import people from './data'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
const Review=()=>{
    const [index,setIndex]= useState(0)
    const {id,name,job,image,text}= people[index]
    const checkNumber=(number)=>{
        if(number>people.length-1){
            return number = 0
        }
        if(number<0){
            return number = people.length-1
        }
        return number
    }
    const nextPerson=()=>{
        setIndex(index=>{
            let newIndex=number+1
            return checkNumber(newIndex)
        })
    }
    const prevPerson=()=>{
        setIndex(index=>{
            let newIndex=number-1
            return checkNumber(newIndex)
        })
    }
    const randomPerson=()=>{
        const randomNumber = Math.floor(Math.random()*people.length)
        console.log(randomNumber);
        if(randomNumber===index){
            randomNumber=index+1
        }
        setIndex(checkNumber(randomNumber))
    }
}
export default Review