var marked = require('marked');
var fs = require('fs');

var markdownFile = fs.readFileSync('rawcode.md', 'utf-8');
var markdown = marked(markdownFile);

fs.writeFileSync('/Users/firsttry/Documents/GitHub/RandomKiddo.github.io/mdtohtml.html', markdown);