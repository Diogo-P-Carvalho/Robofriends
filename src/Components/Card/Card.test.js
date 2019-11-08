import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';
//import {shallowToJson} from 'enzyme-to-json';

it('expect to render Card component', () => {
    //expect(shallow(<Card />).length).toEqual(1)
    // const wrapper = shallow(<Card />);
    // expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(shallow(<Card />)).toMatchSnapshot();
})
