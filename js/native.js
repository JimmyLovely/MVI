function MVI() {
    var self = this;
    self.name = 'ClientScript';
}

MVI.prototype.sayName = function () {
    window.console.log(this.name);
}

MVI.prototype.findModeNumber = function (arr) {
    var sortedArr = [0, 2, 2, 4, 5, 6, 7, 7, 8, 8, 8, 9, 9, 9, 0, 0, 7, 7, 7, 7, 1, 1, 1];

    var mode = {
        value: null,
        length: 0
    };

    var nextMode = {
        value: null,
        length: 0
    }

    for (var index = 0; index < sortedArr.length; index++) {
        var element = sortedArr[index];

        if (index === 0) {
            mode.value = element;
            mode.length = 1;
        } else {
            if (element == sortedArr[index - 1]) {
                element == mode.value ? mode.length++ : nextMode.length++;
            } else {
                nextMode.value = element;
                nextMode.length = 1;
            }

            if (mode.length < nextMode.length) {
                mode = nextMode;
                nextMode = {
                    value: null,
                    length: 0
                }
            }
        }

    }

    window.console.log(mode);
}

MVI.prototype.findModeNumberWithJS = function (arr) {
    var arr = [0, 2, 2, 4, 5, 6, 7, 7, 8, 8, 8, 9, 2, 9, 9, 0, 0, 7, 7, 1, 7, 7, 1, 1, 1];

    var groupArr = [];
    arr.forEach(function (element) {
        if (groupArr[element]) {
            groupArr[element].count++;
        } else {
            groupArr[element] = {
                number: element,
                count: 1
            };
        }
    });

    groupArr.sort(function (x, y) {
        return y.count - x.count;
    });

    window.console.log(groupArr.shift());
}

MVI.prototype.baseFunctionWithES6 = function (n) {
    f = n => n <= 2 ? 1 : f(--n) + f(--n);
}

MVI.prototype.baseFunctionWithES3 = function (n) {
    return n <= 2 ? 1 : arguments.callee(--arguments[0]) + arguments.callee(--arguments[0]);
}

var mvi = window.mvi ? window.mvi : new MVI();