import React from 'react'
import { AiFillStar } from "react-icons/ai";
import {BsFillBagHeartFill} from 'react-icons/bs';

function Card({img,title,star,reviews,prevPrice,newPrice}) {
  return (
    <div>
    <section className="card">
    <img
      src={img}
      alt={title}
      className="card-img"
    />   {/*className="rating-start"*/}
    <div className="card-details">
      <h4 className="card-title">{title}</h4>
      <section className="card-reviews">
           {star} {star} {star}  {star}        
           
       <span className="total-reviews">{reviews}</span>
      </section>
      <section className="card-price">
        <div className="price">
          <del>{prevPrice}</del> <br></br>${newPrice}
        </div>
          <div className="beg">
              <BsFillBagHeartFill className="bag-icon"/>
          </div>
      </section>
    </div>
  </section>
    </div>
  )
}


export default Card;