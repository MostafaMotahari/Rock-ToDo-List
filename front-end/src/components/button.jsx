import React, { Component } from 'react';

class Button extends Component {
    state = {  }

    // Detect if the button is a collapse button
    isCollapseButton() {
        // Make the classname for the button
        const className = `btn btn-${ this.props.buttonVariant } ${ this.props.otherClasses }`;

        if (this.props.isCollapseButton === true) {
            return (
                <button type="button" className={ className } data-bs-toggle="collapse" href="#nextTodoCollapse" aria-expanded="false" aria-controls="nextTodoCollapse">
                  { this.props.textButton }
                </button>
            )
        } else {
            return (<button type="button" className={ className }>{ this.props.textButton }</button>);
        }
    }

    render() { 
        return (
            <div className="col-4">
                { this.isCollapseButton() }
            </div>
        );
    }
}
 
export default Button;