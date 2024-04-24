export default class MovieScreen {
    buttons = {
        myList: '//button[@data-testid="myList_button"]',
        details: '//button[text()="Details"]'
    };
    txts = {
        ratingInformation: '//h2[contains(text(),"Rating Information")]',
        subtitleLanguages: '//h2[contains(text(),"Subtitle Languages")]',
        audioLanguages: '//h2[contains(text(),"Audio Languages")]',
        starring: '//h2[contains(text(),"Starring")]',
        director: '//h2[contains(text(),"Director")]',
        writers: '//h2[contains(text(),"Writers")]',
        producers: '//h2[contains(text(),"Producers")]',
    };
}