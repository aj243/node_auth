var hbs = require('hbs')

function hbsHelpers(hbs) {
  hbs.registerHelper("messageExists", function(value, options) {
		if(message.length > 0){
			return true;
		}
  });

  // More helpers...
}

module.exports = hbsHelpers;