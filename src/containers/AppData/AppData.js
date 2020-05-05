import React, { Component } from 'react';

import classes from './AppData.module.scss'

import SearchBox from '../../components/SearchBox/SearchBox';
import UsersList from '../../components/UsersList/UsersList';

class AppData extends Component {
    state = {
        searchText: '',
        loading: true,
    }

    inputChangedHandler = (event) => {
        event.preventDefault();

        const value = event.target.value;
        this.setState({ searchText: value });
    }

    render() {
        return (
            <div className={classes.AppData}>
                <SearchBox value={this.state.searchText} changed={this.inputChangedHandler} />
                <div className={classes.Data}>
                    <UsersList />
                </div>
            </div>
        );
    }
}

export default AppData;