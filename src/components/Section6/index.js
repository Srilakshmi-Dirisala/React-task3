import React from 'react';

const Section6 =()=> {
    return (
        <div>
            <section className="section-team " id="team">
        <div className="text mt-5 text-center text-white">
            <h1>Our Team</h1><br/>
            <p>With help from our teams, contributors and investors these are the <br />
                milestones we are looking forward to achieve.</p>
        </div><br />
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="card" style={{height: '25rem'}}>
                        <img className="card-img-top" src="./assets/images/ceo.jpeg" alt="Card image cap"/>
                        <div className="card-body text-center">
                            <h2>Badreddine SLIME</h2>
                            <p className="card-text">CEO & Founder</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="card" style={{height: '25rem'}}>
                        <img className="card-img-top" src="./assets/images/kiransir.jpg" alt="Card image cap"/>
                        <div className="card-body text-center mt-2">
                            <h1>Kiran PVS</h1>
                            <p className="card-text">Technical Architect</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="card" style={{height: '25rem'}}>
                        <img className="card-img-top" src="./assets/images/Alicia.jpeg" alt="Card image cap"/>
                        <div className="card-body text-center">
                            <h1>Alicia F</h1>
                            <p className="card-text">Marketing Manager</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card cardhover" style={{height: '25rem'}}>
                        <img className="card-img-top" src="./assets/images/Carlitos.jpeg" alt="Card image cap"/>
                        <div className="card-body text-center">
                            <h1>Carlitos R</h1>
                            <p className=" cadrColor">Marketing Content Creator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

export default Section6;