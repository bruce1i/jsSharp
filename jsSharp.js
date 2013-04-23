(function () {
    window.Bruce1i = window.Bruce1i || {};
    var fn = window.jSharp = Bruce1i.Sharp = {};

    // private
    var _this = {};

    fn.helper = {
        typeOf: function (obj) {
            var type = Object.prototype.toString.call(obj);
            return type.substring(8, type.length - 1).toLowerCase();
        },
        clone: function (val) {
            var ret;

            if (this.typeOf(val) == "object") {
                ret = {};

                for (var attr in val) {
                    if (!val.hasOwnProperty(attr)) continue;

                    ret[attr] = this.clone(val[attr]);
                }

                return ret;
            }
            else if (this.typeOf(val) == "array") {
                ret = [];

                for (var i = 0, num = val.length; i < num; i++) {
                    ret.push(this.clone(val[i]));
                }

                return ret;
            }
            else {
                return val;
            }
        }
    };

    Object.prototype.createNew = function () {
        return Bruce1i.Sharp.helper.clone(this);
    };

})();