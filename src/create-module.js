const dirname = require("path").dirname;
const Module = require("module");

module.exports = function createModule (pathname) {
    const retval = new Module(pathname);
    retval.filename = pathname;
    retval.paths = Module._nodeModulePaths(dirname(pathname));

    return retval;
};
