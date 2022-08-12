function Svg(props) {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width={ props.svgDimensions } height={ props.svgDimensions } fill="currentColor" className="mx-1" viewBox="0 0 16 16">
            <path d={ props.svgPath }/>
        </svg>
    );
}

export default Svg;