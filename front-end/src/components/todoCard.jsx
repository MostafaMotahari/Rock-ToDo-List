import React, { Component } from 'react';
import Button from './button';
import Svg from './svgImage';
import CollapseCard from './collapseCard';
import './assets/todoCardStyles.css'

class ToDoCard extends Component {
    state = {
        filledCalendarSvg: "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z",
        filledAlarmSvg: "M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z", 
        outlineCalendarSvg: "",
        outlineAlarmSvg: "",
    }

    render() { 
        return (
            <div className="col-md-4 sticky-top">
                <div className="rounded-3 border border-dark p-2" id="todobox-next">

                    <div className="row pt-1">
                        {/* <!-- Title --> */}
                        <div className="col-10">
                            <Svg svgPath={ this.state.filledCalendarSvg } svgDimensions="18" />
                            <span>Title: { this.props.todoTitle }</span>
                        </div>
                        {/* <!-- End of title --> */}
                    </div>

                    <div className="row pb-1">
                        {/* <!-- Time --> */}
                        <div className="col-8">
                            <Svg svgPath={ this.state.filledAlarmSvg } svgDimensions="18"/>
                            <span>Time: { this.props.todoTime }</span>
                        </div>
                        {/* <!-- End of time --> */}

                        {/* Description Button */}
                        <Button
                            isCollapseButton={ true }
                            textButton="Desc"
                            buttonVariant="dark"
                            otherClasses="py-0 rounded-pill float-end"
                        />
                        <CollapseCard />
        
                    </div>

                </div>
            </div>
        );
    }
}
 
export default ToDoCard;