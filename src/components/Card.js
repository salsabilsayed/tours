import { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
	const [showPar, setShowPar] = useState(false);
	const [readShow, setReadShow] = useState(true);

	const firstPartDesc = props.desc.split(" ").slice(0, 30).join(" ");
	const secondPartDesc = props.desc.split(" ").slice(30).join(" ");

	const showParHandler = () => {
		setShowPar(true);
		setReadShow(false);
	};

	const hideParHandler = () => {
		setShowPar(false);
		setReadShow(true);
	};

	return (
		<div className={`card mt-5 overflow-hidden ${classes.cardContainer}`}>
	
			<div className={classes.parent}>
				<div className={classes.child} style={{backgroundImage:`url(${props.imageUrl})`}}></div>
			</div>
			<div className="card-body">
				<div className="d-flex flex-column flex-md-row justify-content-md-between">
					<h5 className={`card-title ${classes.head}`}>{props.title}</h5>
					<p className={`align-self-start ${classes.price}`}>{props.price}</p>
				</div>

				<p className="card-text text-left text-secondary">
					{firstPartDesc}
					{readShow && (
						<span className={classes.more} onClick={showParHandler}>
							<span className={classes.dots}> ...</span>Read More
						</span>
					)}

					{showPar && (
						<span>
							&nbsp;{secondPartDesc}&nbsp;
							<span className={classes.more} onClick={hideParHandler}>
								show less
							</span>
						</span>
					)}
				</p>
				<div className="text-center">		
				<button type="button" className="btn btn-outline-danger" onClick={()=>props.onDeleteHandler(props.id)}>
					Not interested
				</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
