import { render, screen } from '@testing-library/react';
import Header from './components/header/Header';

test('renders shopCart link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/shopcart/i);
  expect(linkElement).toBeInTheDocument();


});
//
//   test('Check if something is true', () => {
//     const something = true
//     expect(something).toBe(true)
//   })
//
//   test('Verify that two strings are identical ', () => {
//     const name1 = 'Lars'
//     const name2 = 'Lars'
//     expect(name1).toEqual(name2)
//     expect(name1).toBe('Lars')
//     expect('Lars').toBe(name1)
//   })
//
//   test('Check if something is true after change', () => {
//     let something = false
//     expect(something).toBe(!true)
//
//     something = true
//     expect(something).toBe(true)
//   })
//
//
// test('Check if something is true or false', () => {
//   expect(true).toBe(true)
//   expect(false).toBe(false)
//   expect(false).toBe(!true)
//   expect(!true).toBe(false)
//   expect(true).not.toBe(false)
//   expect(false).not.toBe(true)
//   expect(true).not.toBe(!true)
//   expect(false).not.toBe(!false)
// })
