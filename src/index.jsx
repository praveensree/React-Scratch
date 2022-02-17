import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
    return (
        <div>
            <h2>I am  { props.name }!</h2>
        </div>
    )
}

   ReactDOM.render(<App name={"Praveen"}/>, document.getElementById('app'));