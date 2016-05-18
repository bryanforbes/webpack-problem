// The following builds the JSON file into the bundle
var configJSON = require("json!../config.json");

console.log(configJSON.api);

// The following gives me the new URL of the copied JSON file
var configURL = require("file?name=[path][name].[ext]!../config.json");

console.log(configURL);

// TODO: How to copy the JSON file, get the new URL, and load it
// w/o building it into the bundle
