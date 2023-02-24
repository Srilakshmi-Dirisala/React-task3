import React from 'react';

const Section2 =()=> {
    return (
        <div>
             <section>
        <div className="container-fluid">
            <div className="row p-4 ">
                <div className="col-lg-6 col-sm-12">
                    <img src="./assets/images/11.jpeg" alt="" width="100%" className="my-5"/>
                    <video width="320" height="240" controls>
                        <source src="./assets/images/movie.mp4" type="video/mp4"/>
                        <source src="movie.ogg" type="video/ogg"/>
                        Your browser does not support the video tag.
                        </video>

                </div>
                
                <div className="col-lg-6 col-sm-12 text-white p-5">
                    <p style={{color: '#C004DE'}}><b>About Us</b></p>
                    <h1>WHAT IS ICOLAND?</h1>
                    <p>BSUNIVERS CONSULTING is a French company specializing in consulting and IT in Finance. The firm
                        provides support to financial institutions with their quantitative modeling challenges related
                        to financial market behavior and to investment strategies. The firm uses advanced mathematical
                        modeling tools including AI.</p><br/>
                    <h1>WINWINCOINS</h1>
                    <p>WinWinCoins seeks to solve crypto trader problems with its commercial launch of the
                        next-generation AI robot trading solution that aims to vastly improve trading profits. Say
                        goodbye to losses. With the WinWinCoins trading bot, everyone wins.</p>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

export default Section2;