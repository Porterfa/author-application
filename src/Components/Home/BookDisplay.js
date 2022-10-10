import React from 'react';
import './BookDisplay.css';
import FeaturedBook from './FeaturedBook';
import cchcover from './cchcover.jpg';

function BookDisplay() {
    return (
        <div className="display__section">
            <FeaturedBook 
                src={cchcover}
                text1="Her sister is the bride. His cousin is the groom. 
                    This love story involves two enemies, one car, and an epic road trip."
                text2="June's sister, April, is getting married. The lucky guy? 
                    A businessman whose cousin is Jasper King, the art maniac loner of her high school."
                text3="The hate between them is mutual, but they can't avoid one another before the wedding. 
                    That becomes impossible when the two are thrown together into a car and forced to drive 
                    down the East Coast from Boston to Jacksonville for the wedding."
                text4="The two embark on an unlikely truce and road trip, which brings them from art museums 
                    in New York to Hersheypark in Pennsylvania, and down to the Coca-Cola Museum in Atlanta. 
                    Along the way June must reevaluate her relationship to Jasper, which is that of bully and 
                    victim, and she must contend with her past actions."
                text5="Sparks fly and ignite, and what happens next will go down in road trip history."
                label="book"
                path="https://www.amazon.com/gp/product/B09B1B25M9"
            />
        </div>
    )
    
}

export default BookDisplay;