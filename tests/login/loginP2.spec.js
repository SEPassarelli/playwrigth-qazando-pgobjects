const {test} = require('@playwright/test');
const { abrirSite, logarComSucesso, verificarSeLogado, logarComEmailVazio,
     validarEmailInvalido, logarComSenhaVazia, validarSenhaVazia } = require('./loginPage');

test('Login com sucesso', async ({ page }) => {
    await abrirSite(page);
    await logarComSucesso(page);
    await verificarSeLogado(page);
});

test('Login com e-mail vazio', async ({ page }) => {
    await abrirSite(page);
    await logarComEmailVazio(page);
    await validarEmailInvalido(page);
});

test('Login com senha vazia', async ({ page }) => {
    await abrirSite(page);
    await logarComSenhaVazia(page);
    await validarSenhaVazia(page);  
});