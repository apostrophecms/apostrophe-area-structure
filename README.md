# apostrophe-area-structure

### A tool for visualizing a page's area structure

![A demo of the apostrophe-area-structure module](demos/apostrophe-area-structure-demo.gif)

This module adds a `Page Area Structure` menu item to your Page Settings menu that unspools the current page's DOM for all areas and their widgets (and those widget's areas and _their_ widgets, etc) and nests them in a way that makes it simple to see their structure, without widget players/CSS obscuring them.

The menu displays the area's `name` (key the area is stored in on the document) as well as what the parent document's title/slug.

From this menu you can delete a widget (which will delete all of it's child areas, etc)

## Future planning
[] Create a UI switch that toggles between the draft and live versions of a document (when `apostrophe-workflow` is enabled)
[] Consider drag-and-drop moving of widgets among areas
[] Future UI enhancements