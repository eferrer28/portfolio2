import { Portfolio2Page } from './app.po';

describe('portfolio2 App', () => {
  let page: Portfolio2Page;

  beforeEach(() => {
    page = new Portfolio2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
