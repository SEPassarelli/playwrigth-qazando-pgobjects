// pages/loginPage.js
const { expect } = require('@playwright/test');

const abrirSite = async (page) => {
    await page.goto('https://automationpratice.com.br/login/');
}

const logarComSucesso = async (page, email) => {
    await page.locator('#user').fill('teste@email.com');    
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
}

const verificarSeLogado = async (page, senha) => {
    const mensagem = page.getByText('Login realizado');
    await expect(mensagem).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();
}

const logarComEmailVazio = async (page) => {
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();    
}

const validarEmailInvalido = async (page) => {
    await expect(page.getByText('E-mail inválido.')).toBeVisible({timeout: 10000});    
}

const logarComSenhaVazia = async (page) => {
    await page.locator('#user').fill('teste@email.com');
    await page.getByRole('button', { name: 'login' }).click();
}

const validarSenhaVazia = async (page) => {
    await expect(page.getByText('Senha inválida.')).toBeVisible();
}

module.exports = {
    abrirSite,
    logarComSucesso,
    verificarSeLogado,
    logarComEmailVazio,
    validarEmailInvalido,
    logarComSenhaVazia,
    validarSenhaVazia
}