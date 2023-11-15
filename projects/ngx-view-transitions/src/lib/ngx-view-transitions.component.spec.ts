import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NgxViewTransitionsComponent } from './ngx-view-transitions.component'

describe('NgxViewTransitionsComponent', () => {
  let component: NgxViewTransitionsComponent
  let fixture: ComponentFixture<NgxViewTransitionsComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxViewTransitionsComponent],
    })
    fixture = TestBed.createComponent(NgxViewTransitionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
