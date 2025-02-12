import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Todo App', () => {
  it('should add a new todo with proper styling', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText(/enter a todo/i);
    const button = screen.getByRole('button', { name: /add todo/i });
    
    // Add a new todo
    fireEvent.change(input, { target: { value: 'Learn Vite' } });
    fireEvent.click(button);
    
    // Verify the new todo is rendered with the correct class
    const todoItem = screen.getByText('Learn Vite');
    expect(todoItem).toBeInTheDocument();
    expect(todoItem).toHaveClass('todo-item');
    // The new todo should not have the 'completed' class initially
    expect(todoItem).not.toHaveClass('completed');
  });
  
  it('should toggle todo completion and update styling accordingly', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText(/enter a todo/i);
    const button = screen.getByRole('button', { name: /add todo/i });
    
    // Add a new todo
    fireEvent.change(input, { target: { value: 'Learn React' } });
    fireEvent.click(button);
    
    const todoItem = screen.getByText('Learn React');
    expect(todoItem).toBeInTheDocument();
    expect(todoItem).toHaveClass('todo-item');
    expect(todoItem).not.toHaveClass('completed');
    
    // Toggle the completion status by clicking the todo item
    fireEvent.click(todoItem);
    
    // After toggling, the todo item should have the 'completed' class
    expect(todoItem).toHaveClass('completed');
  });
});
