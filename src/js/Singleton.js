'use strict';

class Singleton {
    constructor(data) {
        if (Singleton.prototype.Instance == undefined) {
            this.data = data;
            Singleton.prototype.Instance = this
        }
        return Singleton.prototype.Instance
    }
}

let obj1 = new Singleton("one")
let obj2 = new Singleton("two")
let obj3 = new Singleton("three")

obj2.init = 'Object flag';

console.log(obj1 === obj2)
console.log(obj1 === obj3)

console.log(obj1)
console.log(obj2)
console.log(obj3)