import { NgModule } from '@angular/core'
import { NgxViewTransitionsComponent } from './ngx-view-transitions.component'
import { TransitionStartDirective } from './directives/transition-start.directive'
import { TransitionEndDirective } from './directives/transition-end.directive'
import { TransitionParentDirective } from './directives/transition-parent.directive'

@NgModule({
  declarations: [NgxViewTransitionsComponent],
  imports: [TransitionStartDirective, TransitionEndDirective, TransitionParentDirective],
  exports: [TransitionStartDirective, TransitionEndDirective, TransitionParentDirective],
})
export class NgxViewTransitionsModule {}
