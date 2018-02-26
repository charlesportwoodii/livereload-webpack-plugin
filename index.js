const livereload = require('livereload');

function LiveReloadWebpackPlugin(options) {
    this.options = options || {};
    this.files = this.options.files || [];
    this.livereload = this.options.livereload || {
        host: '127.0.0.1',
        port: 35729,
        debug: false
    };
    this.server = null;
}

Object.defineProperty(LiveReloadWebpackPlugin.prototype, 'isRunning', {
	get: function() {
		return !!this.server;
	}
});

LiveReloadWebpackPlugin.prototype.apply = function apply(compiler) {
	var self = this;
	compiler.hooks.watchRun.tapAsync('watch-run', function(watching, callback) {
		if (!self.isRunning) {
			self.server = livereload.createServer(self.livereload);
			self.server.watch(self.files);
			console.log('Livereload server started');
		}
		callback();
	});
};

module.exports = LiveReloadWebpackPlugin;