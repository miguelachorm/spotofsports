import { SpotofsportsPage } from './app.po';

describe('spotofsports App', function() {
  let page: SpotofsportsPage;

  beforeEach(() => {
    page = new SpotofsportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
