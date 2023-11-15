import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxViewTransitionsModule } from 'ngx-view-transitions'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NgxViewTransitionsModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
