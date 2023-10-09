import { render } from '@testing-library/react';

import ArticleCard from './article-card';

describe('ArticleCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleCard />);
    expect(baseElement).toBeTruthy();
  });
});
