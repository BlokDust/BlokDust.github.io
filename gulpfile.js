  
var exec = require('child_process').exec;
 
gulp.task('deploy', function (cb) {
  exec('git subtree push --prefix _book origin master', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});