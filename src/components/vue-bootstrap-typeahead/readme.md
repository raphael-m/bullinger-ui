Component Source: https://github.com/alexurquhart/vue-bootstrap-typeahead/tree/master/src/components
This is a modified copy of the components from vue-bootstrap-typeahead because of missing features.

Changes:
- Show all options when minMatchingChars is zero and input field is focused
- Allow specifying the input field type with a property
- Optionally hide matches which equal to the query (property hideEqual)
- Fix issue where a "shadow" is shown when text field is focused but no matched items are available
- Fix issue when query is null