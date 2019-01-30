import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Blogs from './Blogs';
import Blog from '../../../components/Blog/Blog';

configure({adapter: new Adapter()});

describe('<Blogs />', () => {
	it('should render Blog', () => {
		const wrapper = shallow(<Blog />);
		expect(wrapper.find(Blog)).toBeDefined();
	});
})