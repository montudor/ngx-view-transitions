import { DestroyRef, Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core'
import { Router, NavigationStart, NavigationEnd } from '@angular/router'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Directive({
  selector: '[ngxViewTransitionEnd]',
  standalone: true,
})
export class TransitionEndDirective implements OnInit {
  @Input('ngxViewTransitionEnd') transitionEndValue!: string
  @HostBinding('style.view-transition-name') viewTransitionName?: string

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.applyAnimation()

    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(event => {
      if (event instanceof NavigationStart && !this.elementInDetachedTree()) {
        this.removeAnimation()
      }

      if (event instanceof NavigationEnd) {
        this.applyAnimation()
      }
    })
  }

  elementInDetachedTree(): boolean {
    let currentNode = this.elementRef.nativeElement
    while (currentNode) {
      if (currentNode === document) {
        return false
      }
      if (!currentNode.parentNode) {
        return true
      }
      currentNode = currentNode.parentNode
    }
    return false
  }

  applyAnimation() {
    this.viewTransitionName = this.transitionEndValue
  }

  removeAnimation() {
    this.viewTransitionName = undefined
  }
}
