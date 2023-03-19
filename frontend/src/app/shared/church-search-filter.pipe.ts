import { Pipe, PipeTransform } from '@angular/core';
import { Church } from './church';

@Pipe({
  name: 'churchSearchFilter'
})
export class ChurchSearchFilterPipe implements PipeTransform {

  transform(churches: Array<Church>, searchText: String) {
    // Leaves alone if no filter
    if(searchText === ''){ //churches.length === 0 || 
      return churches;
    }
    // Filters churches based on name
    else{
      return churches.filter((church) => 
      { 
        return church.name?.toLowerCase().includes(searchText.toLowerCase())
      })
      //Sorts alphabetically
      .sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }
}
