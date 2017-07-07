var copydir = require('copy-dir');
 
copydir.sync('app/theme', 'dist/');
copydir.sync('app/images', 'dist/images');
