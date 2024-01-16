import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onepage-footer',
  standalone: true,
  imports: [CommonModule], // CommonModule ekleyin
  templateUrl: './onepage-footer.component.html',
  styleUrls: ['./onepage-footer.component.css'],
})
export class OnepageFooterComponent {
  currentDate: Date = new Date();
}
