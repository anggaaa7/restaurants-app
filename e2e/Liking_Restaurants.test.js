// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorit');
});

// eslint-disable-next-line no-unused-vars, no-undef
Scenario('showing empty liked movies', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

// eslint-disable-next-line no-unused-vars, no-undef
Scenario('liking one restaurant', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.resto-name', 10);
  I.seeElement('.resto-name');

  // eslint-disable-next-line no-undef
  I.click(locate('.resto-name').first());

  I.seeElement('#likeButton');
  // eslint-disable-next-line no-undef
  I.click('#likeButton');
});
