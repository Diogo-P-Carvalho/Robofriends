import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';
import CardList from '../CardList/CardList';

it('expect to render ErrorBoundry component', () => {
    expect(shallow(<ErrorBoundry />)).toMatchSnapshot()
});

it('render with an error', () => {
    const wrapper = shallow(<ErrorBoundry/>);
    wrapper.setState({hasError: true});

    expect(wrapper.type()).toEqual('h1');
})

it('display error message', () => {
    const wrapper = shallow(<ErrorBoundry><CardList/></ErrorBoundry>);
    const error = new Error('test');

    wrapper.find(CardList).simulateError(error);

    expect(wrapper.state()).toEqual({hasError: true});
})