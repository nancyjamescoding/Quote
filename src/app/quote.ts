export class Quote {
    public showDescription: boolean;
    constructor(public id: number,public name: string,public title:string,public quote:string, public description: string, public completeDate: Date,public likes:number, public dislikes:number){
      this.showDescription=false;
    }

    
  }