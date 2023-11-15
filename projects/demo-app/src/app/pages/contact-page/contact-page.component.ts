import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxViewTransitionsModule } from 'ngx-view-transitions'

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, NgxViewTransitionsModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {}
