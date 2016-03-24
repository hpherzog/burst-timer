

module.exports = function(config) {
    config.set({
        port: 9876,
        autoWatch: true,
        frameworks: ['browserify', 'mocha'],
        browsers: ['Chrome', 'Firefox'],
        files: [
            "lib/**/*.js",
            "test/**/*.js"
        ],
        preprocessors: {
            "lib/**/*.js": ["browserify"],
            "test/**/*.js": ["browserify"]
        },
        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },
    });
};
