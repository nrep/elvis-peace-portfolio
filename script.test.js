const assert = require('node:assert/strict');
const test = require('node:test');
const vm = require('node:vm');
const fs = require('node:fs');

const source = fs.readFileSync('script.js', 'utf8');

const runScript = ({ storedTheme = null, systemDark = false } = {}) => {
  const attributes = new Map();
  const mediaListeners = [];
  const storage = new Map(storedTheme ? [['portfolio-theme', storedTheme]] : []);
  const buttons = ['system', 'light', 'dark'].map((theme) => ({
    dataset: { theme },
    attributes: new Map(),
    listeners: {},
    setAttribute(name, value) { this.attributes.set(name, value); },
    addEventListener(type, listener) { this.listeners[type] = listener; },
  }));
  const media = {
    matches: systemDark,
    addEventListener(type, listener) {
      if (type === 'change') mediaListeners.push(listener);
    },
  };
  const document = {
    documentElement: {
      classList: { add() {} },
      setAttribute(name, value) { attributes.set(name, value); },
    },
    querySelectorAll(selector) {
      if (selector === '[data-theme]') return buttons;
      return [];
    },
    querySelector() { return null; },
    getElementById() { return { hidden: false }; },
  };
  const window = {
    matchMedia(query) {
      return query.includes('prefers-color-scheme: dark') ? media : { matches: false };
    },
    localStorage: {
      getItem(key) { return storage.get(key) ?? null; },
      setItem(key, value) { storage.set(key, value); },
    },
  };

  vm.runInNewContext(source, { document, window });
  return { attributes, buttons, mediaListeners, storage };
};

test('uses the saved explicit theme and marks its control selected', () => {
  const page = runScript({ storedTheme: 'dark' });

  assert.equal(page.attributes.get('data-theme'), 'dark');
  assert.equal(page.buttons[2].attributes.get('aria-pressed'), 'true');
});

test('defaults to system and responds when the OS theme changes', () => {
  const page = runScript({ systemDark: false });
  assert.equal(page.attributes.get('data-theme'), 'light');

  page.mediaListeners[0]({ matches: true });
  assert.equal(page.attributes.get('data-theme'), 'dark');
});

test('selecting a theme applies and persists the preference', () => {
  const page = runScript();

  page.buttons[2].listeners.click();

  assert.equal(page.attributes.get('data-theme'), 'dark');
  assert.equal(page.storage.get('portfolio-theme'), 'dark');
  assert.equal(page.buttons[2].attributes.get('aria-pressed'), 'true');
});
