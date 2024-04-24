import type { Page } from 'playwright';
import HomeScreen from '../locators/home.screen';
const homeScreen = new HomeScreen();

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://play.max.com');
    }

    async searchMovie(name: string){
        await this.page.click(homeScreen.buttons.search);
        await this.page.locator(homeScreen.fields.searchBar).fill(name);
        await this.page.click(homeScreen.cards.film(name));
    }
}