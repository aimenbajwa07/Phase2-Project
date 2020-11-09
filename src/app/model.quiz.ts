export class Quiz {

    
    constructor(public questionId:number, 
                public questionName:string,
                public answerIndex:number, 
                public options:Options ){}
                
}

export class Options {

    constructor(public answerId:number, name:String, isAnswer:boolean){}
}