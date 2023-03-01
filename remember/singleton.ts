class Singleton {
    private static instance :any
    constructor(){

    }
    static getInstance(val: any){
        if(this.instance){
            return this.instance
        }
        this.instance = val;
        return this.instance
    }
}
const testSingleton = () => {
    const test = Singleton.getInstance({algo: true})
    console.log(test)
    const test2 = Singleton.getInstance({algo: false})
    console.log(test)
    console.log(test2)

}
module.exports = {
    testSingleton
}