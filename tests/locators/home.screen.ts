export default class HomeScreen {
    buttons = {
        search: '//a[@data-testid="search_button"]',
        myStuff: '//a[@data-testid="my-stuff_button"]'
    };
    fields = {
        searchBar: '//input[@data-testid="searchBar_field"]'
    };
    cards = {
        film: (name: string) => `//a[contains(@aria-label,"${name}")]`
    };
}