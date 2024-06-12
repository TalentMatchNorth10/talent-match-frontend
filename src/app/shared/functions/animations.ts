import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationTriggerMetadata
} from '@angular/animations';

export const Animations: {
  readonly backdropAnimation: AnimationTriggerMetadata;
  readonly sidenavAnimation: AnimationTriggerMetadata;
} = {
  backdropAnimation: trigger('fade', [
    state(
      'fade-out',
      style({
        opacity: 0,
        visibility: 'hidden'
      })
    ),
    state(
      'fade-in',
      style({
        opacity: 0.7,
        visibility: 'visible'
      })
    ),
    transition('fade-out => fade-in', animate('200ms')),
    transition(
      'fade-in => fade-out',
      animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    )
  ]),
  sidenavAnimation: trigger('transform', [
    state(
      'open, open-instant',
      style({
        transform: 'none',
        visibility: 'visible'
      })
    ),
    state(
      'void',
      style({
        transform: 'translateX(-100%)',
        'box-shadow': 'none',
        visibility: 'hidden'
      })
    ),
    transition('void => open-instant', animate('0ms')),
    transition(
      'void <=> open, open-instant => void',
      animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    )
  ])
};
