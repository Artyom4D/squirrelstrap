/**
 * jQuery plugin template for Grunt
 */

exports.description = 'Create a jQuery plugin file.';

// The actual init template.
exports.template = function(grunt, init, done) {

	init.process({}, [
		init.prompt('name')
	], function(err, props) {
		grunt.util._.defaults(props, init.defaults);

		// File name
		props.filename = props.name.replace(/ /g, '').toLowerCase();

		// Class name
		props.cls = camelize(props.name).replace(/[ -]/g, '');

		// jQuery method name
		props.method = props.cls.charAt(0).toLowerCase() + props.cls.slice(1);

		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		// All done!
		done();
	});

	function camelize(string) {
		return string.replace(/([a-z])([a-z]*)/gi, function(m, $1, $2) {
			return $1.toUpperCase() + $2.toLowerCase();
		});
	}

};
