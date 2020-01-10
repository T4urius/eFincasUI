describe('Conta Angular 7', function () {
    it('atualizando conta', function () {
        browser.get('http://localhost:4200/');

        element(by.id("aLinkConta")).click();

        element(by.id("iconDeleteConta")).click();
    });
});