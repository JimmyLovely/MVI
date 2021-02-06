function MVI() {
    var self = this;
    self.name = 'ClientScript';
}

MVI.prototype.sayName = function () {
    window.console.log(this.name);
}

var mvi = window.mvi ? window.mvi : new MVI();