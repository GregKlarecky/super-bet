import { transition, style, animate, trigger } from "@angular/animations";

export const fade = trigger("fade", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("500ms ease-out", style({ opacity: 1 }))
  ]),
  transition(":leave", [animate("500ms ease-out", style({ opacity: 0 }))])
]);
