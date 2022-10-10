import React from 'react';
import './bookdisplay.css';

function FeaturedNovel(props) {
    return (
        <div>
            <div className="display__book">
                <figure data-category={props.label}>
                    <a target="_blank" href={props.path}><img src={props.src} alt="Cross Country Hearts"
                    className="book__image"/></a>
                </figure>
            </div>
            <div>
                <h2 className='novel__p'>{props.text1}</h2>
                <p className='novel__h'>{props.text2}</p>
            </div>
        </div>
    )
}

export default FeaturedNovel;