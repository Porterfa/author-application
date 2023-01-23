import React from 'react';
import './Socials.css';
import insta from './insta.png';
import emails from './email.png';
import amazon from './amazon.png';
import tiktok from './tiktok.png';

function Socials() {
    return (
        <div className="social-display">
            <table>
                <tbody>
                    <tr>
                    <td>
                        <a target="_blank" href='https://www.instagram.com/thesuzanneaugust'>
                            <img src={insta} className="image__insta"/>
                        </a>
                    </td>
                    <td>
                        <a target="_blank" href='https://mailchi.mp/314c50f4f1bf/join-my-email-list'>
                            <img src={emails} className="image__emails"/>
                        </a>
                    </td>
                    <td>
                        <a target="_blank" href='https://www.amazon.com/Suzanne-August/e/B09B7VSVDZ?ref=dbs_a_def_rwt_sims_vu00_r13_c1'>
                            <img src={amazon} className="image__amazon"/>
                        </a>
                    </td>
                    <td>
                        <a target="_blank" href='https://www.tiktok.com/@suzanneaugustwriter'>
                            <img src={tiktok} className="image__tiktok"/>
                        </a>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Socials