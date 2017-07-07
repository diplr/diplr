var copy = require('copy'); 

//copy template
copy('app/theme/**/**.js', 'dist', function(err, files){
  if(err) throw err;
});
copy('app/theme/**/**.css', 'dist', function(err, files){
  if(err) throw err;
});

//theme images
copy('app/theme/**/**.gif', 'dist', function(err, files){
  if(err) throw err;
});
copy('app/theme/**/**.png', 'dist', function(err, files){
  if(err) throw err;
});
copy('app/theme/**/**.jpg', 'dist', function(err, files){
  if(err) throw err;
});

//theme fonts
copy('app/theme/**/**.woff', 'dist', function(err, files){
  if(err) throw err;
});
copy('app/theme/**/**.eot', 'dist', function(err, files){
  if(err) throw err;
});
copy('app/theme/**/**.ttf', 'dist', function(err, files){
  if(err) throw err;
});
copy('app/theme/**/**.woff2', 'dist', function(err, files){
  if(err) throw err;
});
copy('app/theme/**/**.svg', 'dist', function(err, files){
  if(err) throw err;
});

