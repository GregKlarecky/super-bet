import {
  trigger,
  transition,
  style,
  animate,
  keyframes
} from "@angular/animations";

export const gentleDrop = trigger("gentleDrop", [
  transition(":enter", [
    style({ height: 0, transform: "translateY(-70%)", opacity: 0 }),
    animate(
      "500ms ease-out",
      keyframes([
        style({ height: "*", opacity: 0, offset: 0.4 }),
        style({ transform: "translateY(10%)", opacity: 1, offset: 0.8 }),
        style({ transform: "translateY(0)", opacity: 1, offset: 1 })
      ])
    )
  ]),
  transition(":leave", [
    animate(
      "500ms ease-out",
      keyframes([
        style({ transform: "translateY(10%)", offset: 0.2 }),
        style({ transform: "translateY(-50%)", opacity: 0, offset: 0.6 }),
        style({ height: 0, offset: 1 })
      ])
    )
  ])
]);
