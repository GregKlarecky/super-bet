import { trigger, style, animate, transition } from "@angular/animations";

export const switchPage = trigger("switchPage", [
  transition(":enter", [
    style({ transform: "translateX(70%)", opacity: 0 }),
    animate("500ms ease-out", style({ transform: "translateX(0)", opacity: 1 }))
  ]),
  transition(":leave", [
    animate(
      "500ms ease-out",
      style({ transform: "translateX(-100%)", opacity: 0 })
    )
  ])
]);
