import {
  style,
  trigger,
  state,
  transition,
  animate
} from "@angular/animations";

export const toggleDashboard = trigger("toggle", [
  state(
    "open",
    style({
      height: "{{ height }}px"
    }),
    { params: { height: "263px" } }
  ),
  state(
    "close",
    style({
      height: "35px"
    })
  ),
  transition("open <=> close", [animate("300ms")])
]);
