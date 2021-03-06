var patterns = require('../lib/backgroundFiles'),
	files = patterns('./content/images/patterns'),
	utils = require('../controllers/utils'),
	uuid = require('node-uuid'),
	contact = require('../controllers/contact');

// **************************************************************************
// PAGES ********************************************************************
// **************************************************************************

exports.index = function(req, res){
	res.render('index', { title: 'Home', files: files });
};

exports.team = function(req, res){
	utils.team(req,res);
};

exports.us = function(req, res){
	res.render('us', { title: 'Team' });
};

exports.work = function(req, res){
	utils.work(req, res);
};

exports.contact = function(req, res){
	if (!req.cookies.sessionId) {
		var uniqueId = uuid.v4();
		res.cookie('sessionId', uniqueId, { maxAge: 900000 } );
	}
	res.render('contact', { title: 'Reach out To Us' });
};

exports.question = function (req, res) {
	contact.question(req, res);
};

exports.addUserResponse = function (req, res) {
	contact.addUserResponse(req, res);
};

exports.register = function(req, res) {
	contact.register(req, res);
}

// **************************************************************************
// PROJECTS ******************************************************************
// **************************************************************************

exports.postProject = function(req, res) {
	utils.postProject(req, res);
}

exports.putProject = function(req, res) {
	utils.putProject(req, res);
}

// **************************************************************************
// MEMBERS ******************************************************************
// **************************************************************************

exports.postMember = function(req, res) {
	utils.postMember(req, res);
};

exports.putMember = function (req, res) {
	utils.putMember(req, res);
};

// **************************************************************************
// QUESTIONS ****************************************************************
// **************************************************************************

exports.postQuestion = function (req, res) {
	utils.postQuestion(req, res);
};

exports.putQuestion = function (req, res) {
	utils.putQuestion(req, res);
};