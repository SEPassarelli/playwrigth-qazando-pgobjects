// @ts-check
import { test, expect } from '@playwright/test';

test('Login com sucesso', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/login/');
    await page.locator('#user').fill('teste@email.com');    
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
    //expect(page.getByText('Login realizado com sucesso')).toBeVisible();
    const mensagem = page.getByText('Login realizado');
    await expect(mensagem).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();
});

test('Login com e-mail vazio', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/login/');   
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('E-mail inválido.')).toBeVisible({timeout: 10000});    
});

test('Login com senha vazia', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/login/');
    await page.locator('#user').fill('teste@email.com');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('Senha inválida.')).toBeVisible();
});

