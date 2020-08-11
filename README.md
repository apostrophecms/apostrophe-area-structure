# apostrophe-area-structure

### A tool for visualizing a page's area structure

![A demo of the apostrophe-area-structure module](demo/apostrophe-area-structure-demo.gif)

This module adds a `Page Area Structure` menu item to your Page Settings menu that unspools the current page's DOM for all areas and their widgets (and those widget's areas and _their_ widgets, etc) and nests them in a way that makes it simple to see their structure, without widget players/CSS obscuring them.

The menu displays the area's `name` (key the area is stored in on the document) as well as what the parent document's title/slug.

From this menu you can delete a widget (which will delete all of its child areas, etc., just as it would if you clicked the delete button for that widget on the page).

You can also edit a widget. This will close the Page Area Structure dialog box and scroll to the widget, before activating the appropriate editor dialog box or in the case of rich text, triggering a click to initiate the on-page editor.

## Installation
In your Apostrophe project:
- `npm i apostrophe-area-structure`
- In your `app.js`
```javascript
const apos = require('apostrophe')({
  shortName: 'my-project',
  modules: {
    // ... other configuration
    'apostrophe-area-structure': {}
  }
});
```
