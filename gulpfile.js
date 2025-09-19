/* eslint-disable no-unused-vars */
/* global require exports*/
const Gulp = require("gulp");
const zip = require("gulp-zip");

function createRelease() {
	return Gulp.src([
		"**",
		"!node_modules{,/**}",
		"!dist{,/**}",
		"!*.zip",
		"!gulpfile.js",
		"!package-lock.json",
		"!package.json"
	], { base: "." })
	.pipe(zip("module.zip"))
	.pipe(Gulp.dest("./"));
}

exports.zip = createRelease;
exports.default = createRelease;
