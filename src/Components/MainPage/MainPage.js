import React, { Component } from 'react'
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import './MainPage.css';
import Header from '../Header/Header';

class MainPage extends Component {
    componentDidMount(){
        this.props.onRequestRobots();
    }

    filteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        });
    }

    render(){
        const{ onSearchChange, robots, isPending } = this.props;        

        return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    { isPending ? <h1 className='loading'>Loading</h1> : 
                    <ErrorBoundry>
                        <CardList robots={this.filteredRobots(robots)} /> 
                    </ErrorBoundry> }  
                </Scroll>
            </div>    
        );              
    }
}

export default MainPage;