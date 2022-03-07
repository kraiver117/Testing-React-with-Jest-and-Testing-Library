import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color and text', () => {
  render(<App />);

  // Find an element with a role button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  // Expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  // Expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // Click button
  fireEvent.click(colorButton);

  // Expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // Expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent('Change to MediumVioletRed');

});

test('enable button initial conditions', () => {
  render(<App />);

  // Check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  expect(colorButton).toBeEnabled();

  // Check that the checkbox starts out unchecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('disabled & enabled button functionality', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });

  // Click the checkboxButton
  fireEvent.click(checkBox);

  // Check that the button is disabled & checkbox is checked
  expect(checkBox).toBeChecked();
  expect(button).toBeDisabled();

  // Click the checkboxButton
  fireEvent.click(checkBox);

  // Chect that the button is enabled & checkbox is not checked
  expect(checkBox).not.toBeChecked();
  expect(button).toBeEnabled();
});

test('Disabled button has gray background color and reverts to MediumVioletRed', () => {
  render(<App />);

  const button = screen.getByRole('button');
  const checkBox = screen.getByRole('checkbox');

  // Check button with initial state
  fireEvent.click(checkBox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkBox);
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('Clicked disabled button has gray background and reverts MidnightBlue', () => {
  render(<App />);

  const button = screen.getByRole('button');
  const checkBox = screen.getByRole('checkbox');

  // Check button when is clicked and blue
  fireEvent.click(button);
  fireEvent.click(checkBox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });
  fireEvent.click(checkBox);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

// Unit Test functions
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});