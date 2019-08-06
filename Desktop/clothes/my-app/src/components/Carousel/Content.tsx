import React from 'react'

interface Iprops {
    price: string;
    title: string;
    description: string;
}


const Content: React.SFC<Iprops> = ({ price, title, description }) => {
    return (
        <section>
            <span>{price}</span>
            <h2>{title}</h2>
            <p>{description} </p>
            <div>
                <i className="far fa-eye"></i>
                <i className="far fa-star"></i>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </section>
    )
}

export default Content