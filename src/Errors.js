(function() {

	var Errors = {};


	Errors.notImplemented = function (method) {
		throw new Error("Method '" + method + "' is not implemented.");
	};


	Errors.notFound = function (path) {
		throw new Error("File or directory '" + path + "' does not exists.");
	};


	Errors.alreadyExists = function (path) {
		throw new Error("File or directory '" + path + "' already exists.");
	};


	Errors.directoryExists = function (path) {
		throw new Error("Directory '" + path + "' already exists.");
	};


	Errors.notFile = function (path) {
		throw new Error("Path '" + path + "' is not a file.");
	};


	Errors.notDirectory = function (path) {
		throw new Error("Path '" + path + "' is not a directory.");
	};


	Errors.notSymlink = function (path) {
		throw new Error("Path '" + path + "' is not a symbolic link.");
	};


	Errors.directoryNotEmpty = function (path) {
		throw new Error("Directory '" + path + "' is not empty.");
	};


	Errors.fdNotFound = function (fd) {
		throw new Error("File descriptor " + fd + " not exists.");
	};


	Errors.notWritable = function (path) {
		throw new Error("File '" + path + "' is not open for writing.");
	};


	Errors.notReadable = function (path) {
		throw new Error("File '" + path + "' is not open for reading.");
	};


	module.exports = Errors;

}).call(this);
