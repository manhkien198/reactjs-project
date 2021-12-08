import React,{useState} from 'react';
import people from './data'
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
            let newIndex=index+1
            return checkNumber(newIndex)
        })
    }
    const prevPerson=()=>{
        setIndex(index=>{
            let newIndex=index-1
            return checkNumber(newIndex)
        })
    }
    const randomPerson=()=>{
        let randomNumber = Math.floor(Math.random()*people.length)
        console.log(randomNumber);
        if(randomNumber === index){
            randomNumber=index+1
        }
        setIndex(checkNumber(randomNumber))
    }
    return (
        <article>
            <div className="img-container">
            <img className="avatar" src={image} alt={name}/>
            <span className="quote-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg></span>
            </div>
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p>{text}</p>
        <div className="next-prev-btn">
        <button onClick={prevPerson}>
        <i class="fas fa-chevron-left"></i>
        </button>
        <button onClick={nextPerson}>
        <i class="fas fa-chevron-right"></i>
        </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
        </article>
    )
}
export default Review