import React, { Component } from 'react';
import { connect } from 'react-redux';
//import CardList from '../Components/CardList/CardList';
//import SearchBox from '../Components/SearchBox/SearchBox';
//import Scroll from '../Components/Scroll/Scroll';
//import ErrorBoundry from '../Components/ErrorBoundry/ErrorBoundry';
//import { robots } from './robots';
//import './App.css';
import { setSearchField, requestRobots } from '../actions';
//import Header from '../Components/Header/Header';
import MainPage from '../Components/MainPage/MainPage';

export interface IRobot {
    name: string;
    id: number;
    email: string;
}

interface IAppProps {

}

interface IAppState {
    robots: Array<IRobot>;
    searchField: string;
}

// const mapStateToProps = (state) => {
//     return{
//         searchField: state.searchRobots.searchField,
//         robots: state.requestRobots.robots,
//         isPending: state.requestRobots.isPending,
//         error: state.requestRobots.error
//     }
// }

const mapStateToProps = (state: { searchRobots: { searchField: any; }; requestRobots: { robots: any; isPending: any; error: any; }; }) => {
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//         onRequestRobots: () => dispatch(requestRobots())
//     }
// }
const mapDispatchToProps = (dispatch: { (arg0: { type: string; payload: any; }): void; (arg0: (dispatch: any) => Promise<any>): void; }) => {
    return {
        onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>): void => dispatch(setSearchField(event.currentTarget.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component<IAppProps, IAppState> {
    /*constructor(){
        super();
        this.state = {
            robots: []
            //searchfield: ''
        }
        //console.log('constructor');
    }*/

    // componentDidMount(){
    //     //console.log(this.props.store.getState());
    //     /*fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ robots: users }));*/
    //     //console.log('componentDidMount');
    //     this.props.onRequestRobots();
    // }

    /*onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }*/

    //render(){
        //const {robots, /*searchfield*/} = this.state;
        // const{ searchField, onSearchChange, robots, isPending } = this.props;
        // const filteredRobots = robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(searchField.toLowerCase())
        // });
        //console.log('render');
        // return isPending ? 
        //     <h1 className="loading">Loading...</h1> :
        //     <div className="tc">
        //         <Header />
        //         <SearchBox searchChange={onSearchChange}/>
        //         <Scroll>
        //             <ErrorBoundry>
        //                 <CardList robots={filteredRobots}/>
        //             </ErrorBoundry>                    
        //         </Scroll>                  
        //     </div>
        // return (
        //     <div className='tc'>
        //         <Header />
        //         <SearchBox searchChange={onSearchChange}/>
        //         <Scroll>
        //             { isPending ? <h1 className='loading'>Loading</h1> : 
        //             <ErrorBoundry>
        //                 <CardList robots={filteredRobots} /> 
        //             </ErrorBoundry> }  
        //         </Scroll>
        //     </div>    
        // );    
        //return <MainPage { ...this.props }/>          
    //}
    render(): JSX.Element { return (<MainPage {...this.props} />) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);