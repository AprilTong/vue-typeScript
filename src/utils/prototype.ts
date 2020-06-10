Array.prototype.single = function () {
    return Array.from(new Set(this))
}

Array.prototype.copy = function () {
    return JSON.parse(JSON.stringify(this))
}

String.prototype.getTotalLength = function () {
    let len = 0
    for (let i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) > 127 || this.charCodeAt(i) == 94) {
            len += 2
        } else {
            len++
        }
    }
    return len
}
