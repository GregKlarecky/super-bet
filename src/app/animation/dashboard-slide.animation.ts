import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

export const slide = trigger("slide", [
  state(
    "0",
    style({
      transform: "translateX({{translate}}px)"
    }),
    { params: { translate: 0 } }
  ),
  state(
    "1",
    style({
      transform: "translateX({{translate}}px)"
    }),
    { params: { translate: 0 } }
  ),
  state(
    "2",
    style({
      transform: "translateX({{translate}}px)"
    }),
    { params: { translate: 0 } }
  ),
  state(
    "3",
    style({
      transform: "translateX({{translate}}px)"
    }),
    { params: { translate: 0 } }
  ),
  transition("* => *", [animate("300ms")])
]);
