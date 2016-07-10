const AbsolutePathnameRequiredError = require("./errors/absolute-pathname-required-error");
const createModule = require("./create-module");
const createRequire = require("./create-require");
const dirname = require("path").dirname;
const isAbsolutePath = require("path").isAbsolute;
const Module = require("module");
const vm = require("vm");

module.exports = function requireStringAsFile (pathname, codeString) {
    if (!isAbsolutePath(pathname)) {
        throw new AbsolutePathnameRequiredError(pathname);
    }
    const moduleFunction = vm.runInThisContext(Module.wrap(codeString), pathname);
    const mod = createModule(pathname);
    const req = createRequire(mod);

    moduleFunction(mod.exports, req, mod, pathname, dirname(pathname));

    return mod.exports;
};

module.exports.errors = {
    AbsolutePathnameRequiredError,
};
