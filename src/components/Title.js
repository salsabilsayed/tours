import React from 'react';

import classes from './Title.module.css';

const Title = () => {
    return ( 
        <React.Fragment>
            <h1 className={`text-center mb-3 ${classes.title}`}>Our Tours</h1>
            <div className={classes.brdr}></div>
        </React.Fragment>
     );
}
 
export default Title;