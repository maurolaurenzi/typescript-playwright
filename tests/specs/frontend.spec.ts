import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page.ts';
import testData from "../data/testData.json";
import MovieScreen from '../locators/movie.screen.ts';
import HomeScreen from '../locators/home.screen.ts';
const movieScreen = new MovieScreen();
const homeScreen = new HomeScreen();
require("dotenv").config();

test.describe("Frontend validations", () => {

  test('should be able to add movie to watchlist and then remove it', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.open();
    await homepage.searchMovie(testData.dune);
    // adding film to watchlist
    await page.click(movieScreen.buttons.myList);
    await page.click(homeScreen.buttons.myStuff);
    await expect(page.locator(homeScreen.cards.film(testData.dune))).toBeVisible();
    // removing film from watchlist
    await page.click(homeScreen.cards.film(testData.dune));
    await page.click(movieScreen.buttons.myList);
    await page.click(homeScreen.buttons.myStuff);
    await expect(page.locator(homeScreen.cards.film(testData.dune))).not.toBeVisible();
  });

  test('should be able to see the details of a movie', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.open();
    await homepage.searchMovie(testData.magnolia);
    await page.click(movieScreen.buttons.details);
    const movieDetails = [
      movieScreen.txts.ratingInformation, 
      movieScreen.txts.subtitleLanguages, 
      movieScreen.txts.audioLanguages, 
      movieScreen.txts.starring, 
      movieScreen.txts.director, 
      movieScreen.txts.producers, 
      movieScreen.txts.writers
    ];
    for(const detail of movieDetails){
      await expect(page.locator(detail)).toBeVisible();
    }
  });
});
