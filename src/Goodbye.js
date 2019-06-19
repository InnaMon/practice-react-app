import React, { Component } from 'react';

class Goodbye extends Component {
    render(props) {
        return (
            <div className='tc'>
                <h2>Goodbye for now!</h2>
                <p>{this.props.salutation}</p>
            </div>
        );
    }
}

export default Goodbye;