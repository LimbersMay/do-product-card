import * as React from 'react';

import { create } from 'react-test-renderer';
import {ProductTitle} from "../../src";
describe('ProductTitle', () => {
    test('Should show the component with the custom title', () => {
        const wrapper = create(
            <ProductTitle title="Custom Product" />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
