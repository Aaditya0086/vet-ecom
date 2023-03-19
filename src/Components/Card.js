import React from 'react'

const Card=(props)=> {

    let {title, imageUrl} = props;

  return (
    <div>
      <div className="card" style={{width: '24rem', height:'21rem', margin: '8rem',}}>
  <img src={imageUrl} height='175.281rem' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">{title}</h5>
  </div>
</div>
    </div>
  )
}

export default Card
