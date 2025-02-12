import { test, expect } from '@playwright/test';

test('Todo list works in an actual browser', async ({ page }) => {
  // Navigate to the running app.
  // Adjust the port if necessary (Vite's default is often 5173).
  await page.goto('http://localhost:5173');

  // Verify that the header is rendered.
  await expect(page.locator('h1')).toHaveText('Todo App');

  // Define the todo text to add.
  const todoText = 'Playwright Todo';

  // Fill the input and click the "Add Todo" button.
  await page.fill('input[placeholder="Enter a todo"]', todoText);
  await page.click('button:has-text("Add Todo")');

  // Verify the new todo item appears in the list.
  const todoItem = page.locator('li.todo-item', { hasText: todoText });
  await expect(todoItem).toBeVisible();

  // Click on the todo item to toggle its completion status.
  await todoItem.click();

  // Verify that the 'completed' class is applied.
  await expect(todoItem).toHaveClass(/completed/);
});
