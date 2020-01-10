describe('Conta Angular 7', function () {
    it('registrando conta', function () {
        browser.get('http://localhost:4200/');

        element(by.id("aLinkConta")).click();

        var inputDescricao = element(by.id("inputDescricao"));
        var inputValor = element(by.id("inputValor"));
        var inputDataCriacao = element(by.id("inputDataCriacao"));

        inputDescricao.sendKeys("Testando descrição");
        inputValor.sendKeys("10");
        inputDataCriacao.sendKeys("20/02/2020");

        expect(element(by.id('inputDescricao')).getAttribute('value')).toBe("Testando descrição");
        expect(element(by.id('inputValor')).getAttribute('value')).toBe("10");
        expect(element(by.id('inputDataCriacao')).getAttribute('value')).toBe("2020-02-20");

        element(by.id("btnRegistro")).click();
        

        //   // You wrote your first test, cross it off the list
        //   todoList.get(2).element(by.css('input')).click();
        //   var completedAmount = element.all(by.css('.done-true'));
        //   expect(completedAmount.count()).toEqual(2);
    });
});