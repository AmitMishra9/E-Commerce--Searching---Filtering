import React from 'react'

 function Inputs({handleRadioChange,value,title,name,color}) {
  return (
    <label className="sidebar-label-container">
          <input  onChange={handleRadioChange} type="radio" name={name} value={value}/>
          <span className="checkMark" style={{backgroundColor:color}}  ></span>
          {title}
        </label>
  )
}


export default Inputs;