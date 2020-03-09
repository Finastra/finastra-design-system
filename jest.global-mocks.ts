window.URL.createObjectURL = jest.fn();

/**
 * ISSUE:
 * https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
 */
window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn()
  };
});

(global as any).Plotly = require('plotly.js/dist/plotly.js');
(window.URL as any).createObjectURL = jest.fn();
