import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';

import Trend from '../Trend';

describe('Trend', () => {
  it('returns null when no data is provided', () => {
    const wrapper = shallow(<Trend />);
    expect(wrapper.html()).toEqual(null);
  });

  it('returns null when only a single point is provided', () => {
    const wrapper = shallow(<Trend data={[3]} />);
    expect(wrapper.html()).toEqual(null);
  });

  it('defaults to percentage dimensions and absolute viewbox coords', () => {
    const wrapper = shallow(<Trend data={[3, 2, 1]} />);
    const { width, height, viewBox } = wrapper.props();

    expect(width).toEqual('100%');
    expect(height).toEqual('25%');
    expect(viewBox).toEqual('0 0 300 75');
  });

  it('delegates props to the parent SVG', () => {
    const wrapper = shallow(<Trend strokeWidth={3} data={[1, 5, 1]} />);
    const { strokeWidth } = wrapper.props();

    // The exact ID is randomly generated, so we can't check the exact value
    expect(strokeWidth).toEqual(3);
  });

  it('renders a path matching the provided data', () => {
    const wrapper = shallow(<Trend data={[1, 5, 1]} />);
    const path = wrapper.childAt(0);
    const { id, d, fill } = path.props();

    // The exact ID is randomly generated, so we can't check the exact value
    expect(id).toMatch(/^react-trend-[\d]+$/);
    expect(d).toEqual('M 8,67\nL 150,8\nL 292,67\n');
    expect(fill).toEqual('none');
  });

  it('renders a smooth path when requested', () => {
    const wrapper = shallow(<Trend smooth data={[1, 5, 1]} />);
    const path = wrapper.childAt(0);
    const { d } = path.props();

    // Smooth lines are complex, and subject to refactoring.
    // Just check that it's non-linear and has an `S` command in there.
    expect(d).toNotEqual('M 8,8\nL 150,37.5\nL 292,67');
    expect(d).toMatch(/\nS [\d]+/);
  });

  it('handles autoDraw', () => {
    // I don't really know the best way to test this, beyond checking that
    // it doesn't blow up.
    const wrapper = mount(<Trend autoDraw data={[1, 5, 1]} />);

    expect(wrapper).toExist();
  });

  it('renders a gradient when multiple colours are provided', () => {
    // I don't really know the best way to test this, beyond checking that
    // it doesn't blow up.
    const wrapper = shallow(<Trend gradient={['red', 'blue']} data={[1, 5, 1]} />);

    const stops = wrapper.find('stop');

    const firstStopProps = stops.first().props();
    const lastStopProps = stops.last().props();

    expect(stops.length).toEqual(2);

    expect(firstStopProps.offset).toEqual(0);
    expect(firstStopProps.stopColor).toEqual('blue');
    expect(lastStopProps.offset).toEqual(1);
    expect(lastStopProps.stopColor).toEqual('red');
  });

  it('handles an array of value objects', () => {
    // We'll check that it renders identical output for both types.
    const data = {
      numbers: [1, 5, 1],
      objects: [{ value: 1 }, { value: 5 }, { value: 1 }],
    };

    const numberWrapper = shallow(<Trend data={data.numbers} />);
    const objectWrapper = shallow(<Trend data={data.objects} />);

    // Compare the actual path rendered, not the entire HTML output.
    // This is because trends are given randomly-generated IDs, and
    // an ID prop is applied to the <path>, making equality checks fail.
    expect(
      numberWrapper.childAt(0).props().d
    ).toEqual(
      objectWrapper.childAt(0).props().d
    );
  });
});
