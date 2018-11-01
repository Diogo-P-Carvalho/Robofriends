import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
//import { robots } from './robots';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    /*constructor(){
        super();
        this.state = {
            robots: []
            //searchfield: ''
        }
        //console.log('constructor');
    }*/

    componentDidMount(){
        //console.log(this.props.store.getState());
        /*fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));*/
        //console.log('componentDidMount');
        this.props.onRequestRobots();
    }

    /*onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }*/

    render(){
        //const {robots, /*searchfield*/} = this.state;
        const{ searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        //console.log('render');
        return isPending ? 
            <h1 className="loading">Loading...</h1> :
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>                    
                </Scroll>                  
            </div>          
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);