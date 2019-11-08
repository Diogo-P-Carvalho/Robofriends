import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('CounterButton', () => {
    it('expect to render CounterButton component', () => {
        const mockColor = 'red';
        expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
    });

    it('correctly increments the counter', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor}/>)

        wrapper.find('[id="counter"]').simulate('click');
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({count: 2})
        expect(wrapper.props().color).toEqual('red');
    })

    it('shouldComponentUpdate', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor}/>)

        wrapper.setState({count: undefined})

        const shouldUpdate = wrapper.instance().shouldComponentUpdate('red', 1);
    
        expect(shouldUpdate).toBe(false);
    })
});
