import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from "@angular/animations";

export const bounceList = trigger("bounceList", [
  transition(":enter", [
    query(".list-item", [
      style({ transform: "translateY(-300%)", opacity: 0 }),
      stagger(-100, [
        animate(
          "500ms ease-out",
          style({ transform: "translateY(0)", opacity: 1 })
        )
      ])
    ])
  ]),
  transition(":leave", [animate("500ms ease-out", style({ opacity: 0 }))])
]);
