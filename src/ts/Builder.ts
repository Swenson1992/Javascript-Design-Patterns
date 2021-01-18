class Builders {
    constructor() {
        console.log('Builder Class created!');
    }
    public buildPart (partName:string) {
        console.log('Builder.buildPart invoked!', partName);
    }
}

class ConcreateBuilders extends Builders {
    constructor() {
        super()
        console.log('ConcreteBuilder Class created!');
    }

    private product: Products
    public buildPart (partName:string) {
        super.buildPart(partName)
        console.log('ConcreteBuilder.buildPart invoked!',partName);
        this.product = new Products(partName)
    }

    getResult() {
        console.log('ConcreteBuilder.getResult invoked!');
        return this.product
    }
}

class Products {
    public data:string
    constructor(material: string) {
        console.log("Product class created");
        this.data = material
    }
}

class Directors {
    structure:Array<string>
    constructor() {
        this.structure = ['Prod1', 'Prod2', 'Prod3']
        console.log("Director class created");
    }

    construct() {
        console.log("Director.Construct created");
        for(let prodName in this.structure) {
            let buidlers = new ConcreateBuilders();
            buidlers.buildPart(this.structure[prodName])
            buidlers.getResult();
            console.log("\n")
        }
    }
}

let directors = new Directors();
directors.construct();