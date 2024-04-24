export default class LoginScreen {
    buttons = {
        signIn: '//nav/div[3]/div/a[text()="Ingresa"]',
        defaultProfile: '//div[@data-test-default-profile="default-profile"]'
    };
    fields = {
        // both username and password fields are inside open shadow roots, so we have to use CSS locators as xpaths wont work
        username: '#app > * gi-login-username-and-mvpd #login-username-input',
        password: '#app > * gi-login-username-and-mvpd #login-password-input'
    };
}