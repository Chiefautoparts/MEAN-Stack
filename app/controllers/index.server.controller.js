exports.render = function(req,res) {
	if (req.session.lastVisit){
		console.log(req.session.lastVisit);
	}

	req.session.lastVisist = new Date();
	
	res.render('index', {
		title: 'Hello World'
	})
};
