import Square from './square.jsx';

var Row = (props) => (
  <div>
    {props.columns.map(
      i => <Square x={i} y={props.rowId} key={i} handleCircleClick={props.handleCircleClick}/>
    )}
  </div>
)

export default Row;