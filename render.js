var page = require('webpage').create();
page.viewportSize = { width: 1440, height: 768 };
page.open('index.html', function() {
    page.render('styleguide.png');
    phantom.exit();
});