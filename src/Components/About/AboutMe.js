import React from 'react';
import './AboutMe.css';
import portrait from './portrait.jpg';

function AboutMe() {
    return (
        <>
        <div className="container-fluid">
        <div className='about__display row'>
            <div className="about__left col-lg-5 col-m-5">
                <img src={portrait} className="image" />
            </div>
            <div className="about__right col-lg-7 col-m-7">
                <h1 className='about__h'>SUZANNE AUGUST</h1>
                <h1 className='about__email'><a target="_blank" href="https://mailchi.mp/314c50f4f1bf/join-my-email-list">
                    Click here to join my email list for updates!</a></h1>
                <p className='about__p'> Suzanne is an historian and software engineer who holds master degrees in 
                International History and Computer Science. She was a Wattpad author for over ten years and was a member 
                of the Stars Program, which has seen its authors published and their books made into movies, such as 
                Netflix’s The Kissing Booth and To All the Boys I’ve Loved Before.
                </p>
                <p className='about__p'>During the lockdowns of the pandemic, she decided to begin publishing her novels. 
                The major motivation behind launching her publishing career were her friends and family, who also decided 
                to use their creativity and skills to begin their own businesses.
                </p>
                <p className='about__p'>Although her published novels are currently young adult romances, Suzanne is an 
                author of all genres, and will begin to branch out from young adult in the coming years. If you’d like to 
                receive updates on book deals and upcoming novels, join her email list!
                </p>
                <p className='about__p'>To contact Suzanne, her email is: suzanneaugustwriter@gmail.com</p>
                <p className='about__p'>Suzanne also makes monthly contributions to charity with a portion of the royalties 
                she earns from her work. If you’d like to suggest any charities to donate to, please reach out to her via her email.
                </p>
            </div>
        </div>
        </div>
        </>
    )
}

export default AboutMe