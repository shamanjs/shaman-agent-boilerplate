var Agent = require('shaman').Agent;
var util = require('util');

function MyAgent() {
  Agent.call(this);
}

util.inherits(MyAgent, Agent);

MyAgent.prototype.start = function(app, cb){
  // Listen for events on other Agents
  // read config etc
  cb();
};

MyAgent.prototype.stop = function(app, cb){
  // Remove listeners for events on other Agents
  // shut down servers etc.
  cb();
};

module.exports = MyAgent;