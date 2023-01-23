import React from 'react';
import './bookdisplay.css';
import FeaturedNovel from './noveldisplay';
import cchcover from './cchcover.jpg';
import dfcover from './Final Defining Life Cover.jpg';
import ffcover from './Finding_Faith_EBOOK.jpg';

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
                    src={ffcover}
                    text1="Finding Faith"
                    text2="Young Adult Novella Coming Soon"
                    label="book"
                    path="https://www.amazon.com/Finding-Faith-Sweet-Young-Romance-ebook/dp/B0BS9X3LGT"
                    />
                </div>
            </div>
        </div>
    )
}

export default Novels;