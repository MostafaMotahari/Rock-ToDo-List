import React, { Component } from 'react';
import Svg from './svgImage';

class CollapseCard extends Component {
    state = {
        filledTrashSvg: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z",
        doubleCheckSvg: "M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"
    } 
    render() { 
        return (
            <div className="collapse col-12 my-2" id="nextTodoCollapse">
                <div className="card card-body p-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolore cupiditate, ex iste ipsa nesciunt velit dignissimos modi rem magnam accusantium odit obcaecati ea provident labore laudantium recusandae ipsam. Dolore, nobis?
                </div>
                {/* <!-- Control buttons --> */}
                <div className="row mt-2">
                    <div className="col-12">
                        <button className="btn btn-danger p-1 me-1">
                            <Svg svgPath={ this.state.filledTrashSvg } svgDimensions="16" />
                        </button>
                        <button className="btn btn-secondary p-1">
                            <Svg svgPath={ this.state.doubleCheckSvg } svgDimensions="16" />
                        </button>
                    </div>
                </div>
                {/* <!-- End of control buttons --> */}
            </div>
        );
    }
}
 
export default CollapseCard;