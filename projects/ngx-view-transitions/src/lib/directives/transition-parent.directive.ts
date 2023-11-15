import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core'
import { TransitionStartDirective } from './transition-start.directive'

@Directive({
  selector: '[libTransitionParent]',
  standalone: true,
})
export class TransitionParentDirective {
  constructor() {}

  @ContentChildren(TransitionStartDirective, { descendants: true })
  pageTransitionStartDirectives!: QueryList<TransitionStartDirective>

  @HostListener('click')
  onClick() {
    this.pageTransitionStartDirectives.forEach(directive => {
      if (directive.transitionTrigger === 'parentClick') {
        directive.applyAnimation(true)
      }
    })
  }
}
