import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie : any
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
  @HostListener('click', ['$event.target'])
  onClick() {
    this.Router.navigate(['details'],{state: this.movie});
  }
}
