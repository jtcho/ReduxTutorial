// test/test_helper.js

import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

// Hoist all `window` properties to global level.
Object.keys(window).forEach((key) => {
    if (! (key in global)) {
        global[key] = window[key];
    }
});

chai.use(chaiImmutable);
