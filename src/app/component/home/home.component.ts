import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  estrenos: any = [];
  loading:boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = true
    this.spotify.getNewReleases().subscribe((data: any) =>{ this.estrenos = data; this.loading = false})
   
  }
  ngOnInit(): void {
  }
 
}
