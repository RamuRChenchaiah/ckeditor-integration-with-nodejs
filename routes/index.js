var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
	response.writeHead(302, {
	  'Location': '/editor/assets/index.html'
	});
	response.end();
});

module.exports = router;
