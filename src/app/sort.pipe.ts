import { PipeTransform,Pipe } from "@angular/core";

@Pipe({
  name:'sort'
})


export class CustomSort implements PipeTransform
{
  transform(value: any[],field?:any ,order?:string)
  {
    return value.sort((value1,value2)=>{
      if(value1[field]>value2[field])
      {
        return order==='desc'? 1 :-1;
      }
     if(value1[field]<value2[field])
      {
        return order==='desc'?-1:1;
      }
      return 0
    })
  }


}
