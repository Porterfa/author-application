import React from 'react';
import './bookdisplay.css';
import FeaturedNovel from './noveldisplay';
import cchcover from './cchcover.jpg';
import dfcover from './Final Defining Life Cover.png';
import comingsoon from './Coming Soon.png';

function Novels() {
    return (
        <div className="container-fluid">
            <div className='novel__display row'>
                <div className='col-lg-4 col-m-4"'>
                    <FeaturedNovel
                    src={cchcover}
                    text1="Cross Country Hearts"
                    text2="Young Adult Novel"
                    label="book"
                    path="https://www.amazon.com/gp/product/B09B1B25M9/"
                    />
                </div>
                <div className='novel__left col-lg-4 col-m-4"'>
                    <FeaturedNovel
                    src={dfcover}
                    text1="Defining Life"
                    text2="Young Adult Novella"
                    label="book"
                    path="https://www.amazon.com/gp/product/B09XKWXC21/"
                    />
                </div>
                <div className='novel__left col-lg-4 col-m-4"'>
                    <FeaturedNovel
                    src={comingsoon}
                    text1="Finding Faith"
                    text2="Young Adult Novella Coming Soon"
                    label="book"
                    />
                </div>
            </div>
        </div>
    )
}

export default Novels;