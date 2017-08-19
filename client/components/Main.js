import React from 'react';
import { Link } from 'react-router';

// react clone element will render the appropriate child component
// and pass down the application state to it

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                { React.cloneElement(this.props.children, this.props) }
            </div>
        )
    }
});

export default Main;
