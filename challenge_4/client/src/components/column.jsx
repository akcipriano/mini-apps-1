import Square from './square.jsx';

var Column = (props) => (
  <div id={props.columnId} className="column">
    {props.rows.map(
      i => <Square x={props.columnId} y={i} key={i} handleCircleClick={props.handleCircleClick}/>
    )}
  </div>
)

export default Column;