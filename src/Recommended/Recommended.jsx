import React from 'react'
import "./Recommended.css"
import Button from '../Components/Button'
function Recommended({handleButtonsClick}) {
  return (
    <>
       <div >
           <h2 className='recommeded-title'>Recommended</h2>
             <div className="recommended-flex">
             
             <Button onClickHandler={handleButtonsClick} value="" title="All Produts"/>
             <Button onClickHandler={handleButtonsClick} value="Nike" title="Nike"/>
             <Button onClickHandler={handleButtonsClick} value="Adidas" title="Adidas"/>
             <Button onClickHandler={handleButtonsClick} value="Puma" title="Puma"/>
             <Button onClickHandler={handleButtonsClick} value="Vans" title="Vans"/>


             </div>
       </div>
    </>
  )
}

export default Recommended

/*
  <button className='btns'>Nike</button>
  <button className='btns' >All Products</button>
  <button className='btns'>Adidas</button>
  <button className='btns'>Puma</button>
  <button className='btns'>Vans</button>
  */