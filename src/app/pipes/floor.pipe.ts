import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "floor"
})
export class FloorPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    if (value >= 0) {
      return value.toFixed(2);
    }
    return "";
  }
}
