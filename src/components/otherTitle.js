import classes from './otherTitle.module.css'

const OtherTitle = props => {
    return ( 
        <div className={classes.main}>
            <h1 className="pb-5">No Tours Left</h1>
            <button className="btn btn-primary" onClick={props.refreshHandler}>Refresh</button>
        </div>
     );
}
 
export default OtherTitle;