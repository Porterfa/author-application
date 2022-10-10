import React from 'react';
import './Socials.css';

function Socials() {
    return (
        <div className="social-display">
            <table>
                <tbody>
                    <tr>
                    <td>
                        <a target="_blank" href='https://www.instagram.com/thesuzanneaugust'>
                            <i className="fa-brands fa-instagram fa-3x"></i>
                        </a>
                    </td>
                    <td>
                        <a target="_blank" href='https://mailchi.mp/314c50f4f1bf/join-my-email-list'>
                            <i className="fa-regular fa-envelope fa-3x"></i>
                        </a>
                    </td>
                    <td>
                        <a target="_blank" href='https://www.amazon.com/Suzanne-August/e/B09B7VSVDZ?ref=dbs_a_def_rwt_sims_vu00_r13_c1'>
                            <i className="fa-brands fa-amazon fa-3x"></i>
                        </a>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Socials