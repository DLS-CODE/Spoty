import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDiqmvoP9uFCl55qMdnOdBrYH0YbkMa7xnSCOvdjhS1J3JXAkCWsW4iZnF0Yayw8Xls49r9Co0rHobPrHg'

    })
    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items))
  }

  getArtists(termino) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map(data => data['artists'].items))
  }

  getArtist(id: any) {
    return this.getQuery(`artists/${id}`)
  }

  getTracks(id:any){
    return this.getQuery(`artists/${id}/top-tracks?market=ES`).pipe(map(data =>data['tracks']))
  }

}


