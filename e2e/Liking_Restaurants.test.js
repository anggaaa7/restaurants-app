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

  I.seeElement('.restautant__title a');
  // eslint-disable-next-line no-undef
  I.click(locate('.restautant__title a').first());

  I.seeElement('#likeButton');
  // eslint-disable-next-line no-undef
  I.click('#likeButton');
});
