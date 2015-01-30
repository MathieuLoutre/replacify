var through = require("through2")

module.exports = function (file, opts) {

	opts = opts || {}
	var data = ""

	var read = function (buf, enc, callback) {
		
		data += buf
		callback()
	}

	var write = function (callback) {

		try {

			var keys = Object.keys(opts.variables)

			for (var i = 0; i < keys.length; i++) {

				data = data.replace(new RegExp("@@"+keys[i], "g"), opts.variables[keys[i]])
			}

			this.push(String(data))
		}
		catch (er) {

			callback(new Error(er.toString().replace("Error: ", "") + " (" + file + ")"))
		}
		
		callback()
	}

	return through(read, write)
}
