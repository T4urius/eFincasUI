describe('Conta Angular 7', function () {
    it('atualizando conta', function () {
        browser.get('http://localhost:4200/');

        element(by.id("aLinkConta")).click();

        element(by.id("iconEditConta")).click();

        var inputDescricao = element(by.id("inputDescricao"));
        var inputValor = element(by.id("inputValor"));
        var inputDataCriacao = element(by.id("inputDataCriacao"));

        inputDescricao.clear().sendKeys("Atualizando descrição 2");
        inputValor.clear().sendKeys("20");
        inputDataCriacao.clear().sendKeys("30-07-2020");

        expect(element(by.id('inputDescricao')).getAttribute('value')).toBe("Atualizando descrição 2");
        expect(element(by.id('inputValor')).getAttribute('value')).toBe("20");
        expect(element(by.id('inputDataCriacao')).getAttribute('value')).toBe("2020-07-30");

        element(by.id("btnAtualizar")).click();

    });
});