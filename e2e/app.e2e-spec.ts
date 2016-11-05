import { SaturdayPage } from './app.po';

describe('saturday App', function() {
  let page: SaturdayPage;

  beforeEach(() => {
    page = new SaturdayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
