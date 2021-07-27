import React from 'react'

const MenuCard = ({menuData}) => {
    return(
        <>
        <div className="container">
        <div className="row">
        { menuData.map((curElem) => {
            const {id,category,name,description,image,altimage,price} = curElem;
            return (
                <>
                <div key={id} className="card bg-light col-sm-4" >
                <div className="card-body">
                    <span className="badge bg-primary rounded-circle">{id}</span>
                    <span> <b> {category.toUpperCase()} </b> </span>
                    <h2 className="card-title"> {name} </h2>
                    <span >
                       <article><p className="card-text">{description}</p></article>
                    </span>
                    <br/>
                    <div className="btn btn-outline-primary">Read More</div>
                </div>
                <img src={image} alt={altimage} className="card-media rounded img-fluid" />
                <span className="btn btn-success pt-2">
                <h3>Order Now for &nbsp;
                <span className="badge rounded-pill bg-danger">
                    {price}
                </span>
                </h3>
                </span>
            </div>
            </>
            )

        })}
        </div>
        </div>
        </>
    )
}
        

export default MenuCard
