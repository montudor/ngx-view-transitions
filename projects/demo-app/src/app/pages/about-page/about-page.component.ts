import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxViewTransitionsModule } from 'ngx-view-transitions'

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, NgxViewTransitionsModule],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {}
