import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { ReactComponent } from '../src';

describe('ReactComponent', () => {
  it('should render a string exactly', async () => {
    const { findByText } = render(<ReactComponent name="kainstar" />);

    expect(await findByText('The name prop value is kainstar')).toBeTruthy();
  });
});
