class SingleInstance {

    public static instance: SingleInstance
    public getInstance(name:string): SingleInstance {
        if (!SingleInstance.instance) {
            SingleInstance.instance = new SingleInstance(name)
        }
        return SingleInstance.instance
    }
    public name:string
    constructor(name:string) {
        this.name = name
    }
}

let ob1 = new SingleInstance("one")
let ob2 = new SingleInstance("two")
let ob3 = new SingleInstance("three")

console.log(ob1.getInstance("one"))
console.log(ob2.getInstance("two"))
console.log(ob3.getInstance("three"))