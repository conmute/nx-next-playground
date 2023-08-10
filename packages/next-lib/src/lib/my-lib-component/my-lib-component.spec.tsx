import { render } from '@testing-library/react';

import MyLibComponent from './my-lib-component';

describe('MyLibComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLibComponent />);
    expect(baseElement).toBeTruthy();
  });
});
