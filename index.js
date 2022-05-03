class Polygon{
    constructor(params){
        this.params = params
        this.count = this.params.length

    }
    get countSides(){
        return this.params.length
    }
    get perimeter(){
        let sum = 0
        for (let i of this.params){
            sum +=i
        }
        return sum
    }
}

class Triangle extends Polygon{
    get isvalid(){
        if (!Array.isArray(this.params)) return;
        if (this.count !== 3) return ;
        let params0 = this.params[0]
        let params1 = this.params[1]
        let params2 = this.params[2]
        return ((params0+params1 > params2) && (params0 + params2 > params1) && ( params1+ params2> params0))
    }
    
}

class Square extends Polygon{
    get isValid(){
       return ((this.param[0] === this.param[1]) && (this.param[1] === this.param[2]) && (this.param[2] === this.param[3]))
    }
    get area(){
        if (this.countSides !== 4)return ;
        return this.param[0] * this.param[0]
    }
}