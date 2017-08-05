import { VarcvPage } from './app.po';

describe('varcv App', () => {
  let page: VarcvPage;

  beforeEach(() => {
    page = new VarcvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
