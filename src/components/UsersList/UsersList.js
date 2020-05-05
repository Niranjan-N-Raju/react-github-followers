import React from 'react';

import classes from './UsersList.module.scss';

const usersList = (props) => {

    return (
        <div className={classes.UsersList}>
            <div className={classes.ImageClass}>
                <img src="https://avatars1.githubusercontent.com/u/374915?v=4" />
            </div>
            <div className={classes.DataClass}>
                <div className={classes.UserName}>
                    Niranjan
                </div>
            </div>
        </div>
    );

}

export default usersList;