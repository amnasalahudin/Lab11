import { render, screen } from '@testing-library/react';
import App from './App';
import Task3 from './Task3';

//task1
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
});

//task2
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Hello World");

});
//task3
test('renders learn react link', () => {
  render(<Task3 />);
  const linkElement = screen.getByTestId("comp1");
  
  expect(linkElement).toHaveTextContent("Mars") 
});
