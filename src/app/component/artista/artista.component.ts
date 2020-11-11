import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';
import { DomseguroPipe } from './../../pipes/domseguro.pipe'




@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  generos:any =[];
  tracks : any = {};
  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService, private router: Router) {
    activatedRoute.params.subscribe(param => this.getArtista(param['id']))
    activatedRoute.params.subscribe(param => this.getTracks(param['id']))
  }

  ngOnInit(): void {
  }


  
  getTracks(id:any){
    this.spotify.getTracks(id).subscribe(tracks =>{
      this.tracks = tracks
     })
  }
  getArtista(id: any) {
    this.spotify.getArtist(id).subscribe(artista => {
      this.artista = artista
      this.generos = artista['genres']
      console.log(this.generos);
      
      this.loading = false
    });
  }


}
