'use strict';

class AbstractFactory {
    constructor () {
        console.log('AbstractFactory class created');
    }

    createProductA(product) {
        console.log('AbstractFactory.createProdutA created');
    }

    createProductB(product) {
        console.log('AbstractFactory.createProdutB created');
    }
}

class ConcreteFactory1 extends AbstractFactory {
    constructor() {
        super();
        console.log("ConcreteFactory1 class created")
    }

    createProductA(product) {
        console.log('ConcreteFactory1.createProductA created')
        return new ProductA1()
    }

    createProductB(product) {
        console.log('ConcreteFactory1.createProductB created')
        return new ProductB1()
    }
}

class ConcreteFactory2 extends AbstractFactory {
    constructor() {
        super();
        console.log("ConcreteFactory2 class created")
    }

    createProductA(product) {
        console.log('ConcreteFactory2.createProductA created')
        return new ProductA2()
    }

    createProductB(product) {
        console.log('ConcreteFactory2.createProductB created')
        return new ProductB2()
    }
}

class AbstractProductA {
    constructor() {
        console.log('AbstractProductA class created');
    }
}
class AbstractProductB {
    constructor() {
        console.log('AbstractProductB class created')
    }
}

class ProductA1 extends AbstractProductA {
    constructor() {
        super()
        console.log('ProductA1 class created')
    }
}

class ProductA2 extends AbstractProductA {
    constructor () {
        super()
        console.log('ProductA2 class created')
    }
}

class ProductB1 extends AbstractProductB {
    constructor () {
        super()
        console.log('ProductB1 class created')
    }
}

class ProductB2 extends AbstractProductB {
    constructor () {
        super()
        console.log('ProductB2 class created')
    }
}

let factory1 = new ConcreteFactory1();
console.log('-----------------------')
let productB1 = factory1.createProductB();
let productA1 = factory1.createProductA();
console.log('-----------------------')
let factory2 = new ConcreteFactory2();
let productB2 = factory2.createProductB();
let productA2 = factory2.createProductA();