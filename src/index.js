import React from 'react';
import ReactDOM from 'react-dom';

//
ReactDOM.render(
    React.DOM.h1({ style: { background: "blue", color: "white" } },
        "Hello World"),
    document.getElementById('main'));

//
ReactDOM.render( < h1 > Hello World(2) < /h1>,
    document.getElementById('main2'));


// Component - propaty(read only)
class MyComponent extends React.Component {
    render() {
        return React.DOM.h1({ style: { background: "red", color: "white" } }, this._getMessage());
    }

    _getMessage() {
        return this.props.message;
    }
};

ReactDOM.render(React.createElement(MyComponent, { message: 'Hello Component' }),
    document.getElementById('component'));


// Component - state(read/write)
class MyComponent2 extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            message: 'Hello Component(2)',
        };
    };

    render() {
        return React.DOM.h1(null, this.state.message);
    }
};

ReactDOM.render(React.createElement(MyComponent2),
    document.getElementById('component2'));


// Component
class MyComponent3 extends React.Component {
    render() {
        return React.DOM.input({
            type: 'text',
            placeholder: 'input the value and hit the Enter key',
            onKeyPress: this._showAlert
        });
    }

    _showAlert(e) {
        if (e.key === 'Enter' && e.target.value) {
            alert(e.target.value);
        }
    }
};

ReactDOM.render(React.createElement(MyComponent3),
    document.getElementById('component3'));