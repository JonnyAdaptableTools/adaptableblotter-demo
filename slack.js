'use strict';

var request = require('request');

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
var tag = arg.tag;
var urlWebHook = arg.slack; //the URL you get on your "incoming web hooks" page

function sendToSlack(s, theUsername, theIconUrl, theIconEmoji, theChannel) {
  var payload = {
    text: s,
  };
  if (theUsername !== undefined) {
    payload.username = theUsername;
  }
  if (theIconUrl !== undefined) {
    payload.icon_url = theIconUrl;
  }
  if (theIconEmoji !== undefined) {
    payload.icon_emoji = theIconEmoji;
  }
  if (theChannel !== undefined) {
    payload.channel = theChannel;
  }
  var theRequest = {
    url: urlWebHook,
    method: 'POST',
    json: payload,
  };
  request(theRequest, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('sendToSlack: ' + s);
    } else {
      console.log(
        'sendToSlack: error, code == ' +
          response.statusCode +
          ', ' +
          response.body +
          '.\n'
      );
    }
  });
}

sendToSlack(tag + ' of Adaptable Blotter demo has been deployed');
