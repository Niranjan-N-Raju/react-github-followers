import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
    let wrapper = '';
    beforeEach(() => {
        wrapper = shallow(<Spinner />);
    });

    it('Spinner component should render div tag', () => {
        expect(wrapper.find('div')).toHaveLength(6);
    });


    it('Spinner component should render div tag with class Spinner', () => {
        expect(wrapper.find('div.Spinner')).toHaveLength(1);
    });




});
