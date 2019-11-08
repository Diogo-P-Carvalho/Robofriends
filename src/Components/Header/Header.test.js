import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expect to render Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot()
});

it('shouldComponentUpdate', () => {
    const wrapper = shallow(<Header />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate();

    expect(shouldUpdate).toEqual(false);
})