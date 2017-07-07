var copy = require('copy'); 

//copy application html
copy('src/**/**.html', 'dist', function(err, files){
  if(err) throw err;
});
//copy application js
copy('src/**/**.js', 'dist', function(err, files){
  if(err) throw err;
});
//copy application png
copy('src/**/**.png', 'dist', function(err, files){
  if(err) throw err;
});

//copy template
copy('theme/**/**.js', 'dist', function(err, files){
  if(err) throw err;
});
copy('theme/**/**.css', 'dist', function(err, files){
  if(err) throw err;
});

//theme images
copy('theme/**/**.gif', 'dist', function(err, files){
  if(err) throw err;
});
copy('theme/**/**.png', 'dist', function(err, files){
  if(err) throw err;
});
copy('theme/**/**.jpg', 'dist', function(err, files){
  if(err) throw err;
});

//theme fonts
copy('theme/**/**.woff', 'dist', function(err, files){
  if(err) throw err;
});
copy('theme/**/**.eot', 'dist', function(err, files){
  if(err) throw err;
});
copy('theme/**/**.ttf', 'dist', function(err, files){
  if(err) throw err;
});
copy('theme/**/**.woff2', 'dist', function(err, files){
  if(err) throw err;
});
copy('theme/**/**.svg', 'dist', function(err, files){
  if(err) throw err;
});

