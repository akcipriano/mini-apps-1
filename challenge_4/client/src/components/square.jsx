var Square = (props) => (
  <div className="square">
    <span className="circle" x={props.x} y={props.y} onClick={props.handleCircleClick}/>
  </div>
)

export default Square;