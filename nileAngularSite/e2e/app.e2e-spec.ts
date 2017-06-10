import { NileAngularSitePage } from './app.po';

describe('nile-angular-site App', () => {
  let page: NileAngularSitePage;

  beforeEach(() => {
    page = new NileAngularSitePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
