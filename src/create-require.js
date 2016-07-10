const Module = require("module");

module.exports = function createRequire (module) {
    const retval = function (pathname) {
        return Module._load(pathname, module);
    };
    retval.resolve = function (pathname) {
        return Module._resolveFilename(pathname, module);
    };
    retval.main = process.mainModule;
    retval.extensions = require.extensions;
    retval.cache = require.cache;

    return retval;
};
