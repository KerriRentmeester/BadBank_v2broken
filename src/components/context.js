import React from 'react'; 
import { Route, Link, HashRouter } from 'react-router-dom';

const UserContext = React.createContext(null);

// Card component
function Card(props){
function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
}

return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
    <div className="card-header">{props.header}</div>
    <hr />
    <div className="card-body">
        {/* if the below elements exist, they will display */}
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
    </div>
    </div>      
);    
}

export default Card;
export { Route, Link, HashRouter, UserContext };