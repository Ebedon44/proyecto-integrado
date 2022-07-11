import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'filter'
})

export class BusquedaPipe implements PipeTransform{

    transform(value: any[], filterString:string, propName:string): any[] {
        const resultado :any =[];
        if(!value || filterString==='' || propName===''){
            return value;
        }
        value.forEach((a:any)=>{
            if(a[propName].trim().toLowerCase().includes(filterString.toLocaleLowerCase())){
                resultado.push(a);
            }
        });
        return resultado;

        
    }
}