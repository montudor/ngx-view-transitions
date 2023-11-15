import { DestroyRef, Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'
import { filter, timer } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Directive({
  selector: '[libTransitionStart]',
  standalone: true,
})
export class TransitionStartDirective implements OnInit {
  @Input('libTransitionStart') transitionStartValue!: string
  @Input() transitionTrigger: 'always' | 'click' | 'parentClick' = 'always'
  @HostBinding('style.view-transition-name') viewTransitionName?: string

  constructor(
    private router: Router,
    private destroyRef: DestroyRef,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(event => {
        if (this.transitionTrigger === 'always') {
          this.applyAnimation()
          return
        }
      })
  }

  @HostListener('click')
  onClick() {
    if (this.transitionTrigger === 'click') {
      this.applyAnimation(true)
    }
  }

  private get hostElement(): HTMLElement {
    return this.elementRef.nativeElement
  }

  applyAnimation(autoRemove = false) {
    this.viewTransitionName = this.transitionStartValue

    if (autoRemove) {
      timer(500).subscribe(() => {
        this.removeAnimation()
      })
    }
  }

  removeAnimation() {
    this.viewTransitionName = undefined
  }
}
