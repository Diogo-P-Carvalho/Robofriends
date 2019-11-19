// import React, {Component} from 'react';
// //import CounterButton from '../CounterButton/CounterButton';

// class Header extends Component {
//     shouldComponentUpdate(nextProps, nextState){
//         return false;
//     }

//     render() {
//         //console.log('Header');        
//         return(
//             <div>               
//                 <h1 className="f1">RoboFriends</h1>
//                 {/* <CounterButton color={'red'}/> */}
//             </div>            
//         );            
//     }
// }

// export default Header

import React, {Component} from 'react';

class Header extends Component {
    shouldComponentUpdate(nextProps: any, nextState: any): boolean{
        return false;
    }

    render(): JSX.Element {    
        return(
            <div>               
                <h1 className="f1">RoboFriends</h1>
            </div>            
        );            
    }
}

export default Header