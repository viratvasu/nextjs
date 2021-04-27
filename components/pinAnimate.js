const PinAnimate = (props)=>{
    return (
        <div className="customsection" style={{'backgroundColor':props.bgcolor}}>
            <h1 style={{'color':props.fgcolor}}>{props.text}</h1>
        </div>
    )
}
export default PinAnimate;