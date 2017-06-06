"use strict";

var gulp = require('gulp');  
var gutil = require( 'gulp-util' );  
var ftp = require( 'vinyl-ftp' );


const arg = (argList => {
  let arg = {}, a, opt, thisOpt, curOpt;
  for (a = 0; a < argList.length; a++) {
    thisOpt = argList[a].trim();
    opt = thisOpt.replace(/^\-+/, '');
    if (opt === thisOpt) {
      // argument value
      if (curOpt) arg[curOpt] = opt;
      curOpt = null;
    }
    else {
      // argument name
      curOpt = opt;
      arg[curOpt] = true;
    }
  }
  return arg;
})(process.argv);


/** Configuration **/
var user = arg.user;  
var password = arg.password;  
var host = 'files.000webhost.com';  
var port = 21;  
var localFilesGlob = ['./dist/**/*'];  
var remoteFolder = arg.path;

// helper function to build an FTP connection based on our configuration
function getFtpConnection() {  
    return ftp.create({
        host: host,
        port: port,
        user: user,
        password: password,
        log: gutil.log
    });
}

/**
 * Deploy task.
 * Copies the new files to the server
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy`
 */
gulp.task('ftp-deploy', function() {

    var conn = getFtpConnection();

    return gulp.src(localFilesGlob, {  buffer: false })
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
        .pipe( conn.dest( remoteFolder ) )
    ;
});
