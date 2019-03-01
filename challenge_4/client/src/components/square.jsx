var Square = (props) => (
  <div className="square">
    <span className="circle" id={`${props.x},${props.y}`} x={props.x} y={props.y} onClick={props.handleCircleClick}/>
  </div>
)

export default Square;