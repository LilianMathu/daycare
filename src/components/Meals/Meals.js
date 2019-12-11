import React from 'react'
import PropTypes from 'prop-types'

function Meals(props) {
    return (
        <div>
        <div className="container">
        <div className="row">
            <div className="span3">
                <div className="well">
                    <h2 className="muted">Morning</h2>
                    <p><span className="label">Breakfast</span></p>
                    <ul>
                        <li>Weetabix</li>
                        <li>Grapes</li>
                        <li>Cerelac</li>
                    </ul>          
                    <p>Snack Time</p>
                    
                    <p><a className="btn btn-large" href="/"><i className="icon-ok"></i> Select plan</a></p>
                </div>
            </div>
            <div className="span3">
                <div className="well">
                    <h2 className="text-warning">Mid-Morning</h2>
                    <ul>
                        <li>Tea</li>
                        <li>Milk</li>
                        <li>Cookies</li>
                    </ul>          
                    
                    <p><a className="btn btn-success btn-large" href="/"><i className="icon-ok"></i> Select plan</a></p>
                </div>
            </div>
            <div className="span3">
                <div className="well">
                    <h2 className="text-info">Lunch</h2>
                    <p><span className="label label-info">Balanced Diet</span></p>
                    <ul>
                        <li>Rice</li>
                        <li>Pasta</li>
                        <li>Fruit</li>
                    </ul>          
                    
                  <p><a className="btn btn-large" href="/"><i className="icon-ok"></i> Select plan</a></p>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}


export default Meals

