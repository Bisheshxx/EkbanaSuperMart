import { Pipe, PipeTransform } from '@angular/core';
import { Console } from 'console';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(ProductData: Array<any>, Category: string): any {
    if(ProductData && Category != 'All'){
      return ProductData.filter((result)=>result.categoryTitle.indexOf(Category)>-1)
    }
    return ProductData;
  }

}
