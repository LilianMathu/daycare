import React from 'react'

export default function Routine() {
    return (
        <section id="what-we-do">
            <div className="container-fluid">
                <h2 className="section-title mb-2 h1">Our Daily Routine</h2>
                <p className="text-center text-muted h5">Having and managing a correct routine is crucial for a child's growth.</p>
                <div className="row mt-5">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="card">
                            <div className="card-block block-1">
                                <h3 className="card-title">Sign in sheet</h3>
                                <p className="card-text">Check in and check out children with the click of a button. It’s that easy!</p>
                                <a href="/services/maps" target="_blank" 
                                classNameName="stretched-link btn">Visit</a>                           
                             </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="card">
                            <div className="card-block block-2">
                                <h3 className="card-title">Daily schedule </h3>
                                <p className="card-text">Use our childcare software to record planned learning experiences for the week and automatically 
                                align them to your program’s learning domains, such as cognitive, sensory, or physical development</p><br />
                                <a href="/services/tracking" target="_blank" 
                        classNameName="stretched-link btn">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <div className="card">
                            <div className="card-block block-3">
                                <h3 className="card-title">Daily Reports</h3>
                                <p className="card-text">Attach photos or videos with classroom observations to show 
                                their development in action. Save time by making notes about all children at once, 
                                multiple at a time, or child by child, if you need to. Plus, you can easily tag them 
                                by age range, domain, and skill.</p> <br />
                                <a href="/" target="_blank" 
                                classNameName="stretched-link btn">Visit</a>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}