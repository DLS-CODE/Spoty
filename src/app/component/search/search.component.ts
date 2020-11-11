
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private spotifySearch:SpotifyService) { }

  artistas:any = []
  loading:boolean;

  buscar(termino){
    this.loading = true;
    this.spotifySearch.getArtists(termino).subscribe((data:any) => {this.artistas = data; this.loading = false; console.log(this.artistas);
    } )
  }


  ngOnInit(): void {
  }

}
