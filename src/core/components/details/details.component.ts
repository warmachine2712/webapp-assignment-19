import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public movieDetails: any = {};
  @ViewChild('rating')
  rating!: ElementRef;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private Router: Router) {

    if (localStorage.getItem("Array") == null || localStorage.getItem("Array") == undefined) {
      this.movieDetails = this.Router.getCurrentNavigation()?.extras.state
      localStorage.setItem("Array", JSON.stringify(this.movieDetails));
      console.log(this.movieDetails);
    } else {
      var data = localStorage.getItem("Array");
      this.movieDetails = JSON.parse(data!)
    }
  }

  ngOnInit(): void {
  }

}
