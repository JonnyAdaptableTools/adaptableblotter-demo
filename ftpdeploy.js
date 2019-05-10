'use strict';

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

const arg = (argList => {
  let arg = {},
    a,
    opt,
    thisOpt,
    curOpt;
  for (a = 0; a < argList.length; a++) {
    thisOpt = argList[a].trim();
    opt = thisOpt.replace(/^\-+/, '');
    if (opt === thisOpt) {
      // argument value
      if (curOpt) arg[curOpt] = opt;
      curOpt = null;
    } else {
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

var config = {
  username: user,
  password: password, // optional, prompted if none given
  host: '160.153.162.153', // use this now instead of "adaptableblotter.com",
  port: 21,
  localRoot: __dirname + '/dist',
  remoteRoot: '/',
  include: [],
  exclude: [],
};

console.log('deploying: ' + config.localRoot);
console.log('FTP USER: ' + config.username);

ftpDeploy.deploy(config, function(err) {
  if (err) {
    console.log(err);
    console.log('Trying deployment again');
    ftpDeploy.deploy(config, function(err) {
      if (err) {
        console.log(err);
        process.exit(1);
      } else {
        console.log('Deployment finished');
      }
    });
  } else {
    console.log('Deployment finished');
  }
});

ftpDeploy.on('uploaded', function(data) {
  console.log(
    'Total Files: ' +
      data.totalFileCount +
      ', Transfered: ' +
      data.transferredFileCount +
      ', File uploaded: ' +
      data.filename
  ); // same data as uploading event
});
