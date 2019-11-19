// import React from 'react';

// const Scroll = (props) => {
//     //console.log(props);
//     return (
//         <div style={{overflowY: 'scroll', border: '3px solid black', height: '700px'}}>
//             {props.children}
//         </div>
//     )
// }

// export default Scroll;

import React from 'react';

type Props = {
    children?: JSX.Element;
}

const Scroll = (props: Props) => {
    //console.log(props);
    return (
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '700px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;