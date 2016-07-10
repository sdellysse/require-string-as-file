const AbsolutePathnameRequiredError = function (pathname) {
    this.name = "AbsolutePathnameRequiredError";
    this.message = `Absolute pathname was required but received "${ pathname }"`;
    this.stack = (new Error()).stack;

    this.pathname = pathname;
};
AbsolutePathnameRequiredError.prototype = Object.create(Error.prototype);
AbsolutePathnameRequiredError.prototype.constructor = AbsolutePathnameRequiredError;

module.exports = AbsolutePathnameRequiredError;

