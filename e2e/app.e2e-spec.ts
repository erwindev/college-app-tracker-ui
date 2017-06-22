import { CollegeAppTrackerUiPage } from './app.po';

describe('college-app-tracker-ui App', () => {
  let page: CollegeAppTrackerUiPage;

  beforeEach(() => {
    page = new CollegeAppTrackerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
