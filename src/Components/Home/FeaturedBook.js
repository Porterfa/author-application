import React from 'react';
import './BookDisplay.css';

function FeaturedBook(props) {
    return (
        <div className="container-fluid">
            <div className="book__display row">
                <div className="left col-lg-6">
                    <a target="_blank" href={props.path} >
                    <figure data-category={props.label}>
                        <img src={props.src} alt="Cross Country Hearts"
                        className="book__img"/>
                    </figure></a>
                </div>
                <div className="right col-lg-6">
                    <h1 className='title'>CROSS COUNTRY HEARTS</h1>
                    <a target="_blank" href='https://www.amazon.com/gp/product/B09B1B25M9'><p className='paperback'>Click here to buy on Amazon kindle for $3.99.</p></a>
                    <p className='paperback'>Also available on paperback and audiobook.</p>
                    <h5 className='tag-line'>{props.text1}</h5>
                    <p>{props.text2}</p>
                    <p>{props.text3}</p>
                    <p>{props.text4}</p>
                    <p>{props.text5}</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBook;