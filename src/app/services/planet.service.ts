import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetModel } from '../shared/store/planets/planets.state';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getPlanet(id: string): Observable<PlanetModel> {
    return this.http.get<PlanetModel>(
      `https://api.le-systeme-solaire.net/rest/bodies/${id}`
    );
  }

  getPlanetQuote(id: string): { quote: string; quotee: string } {
    switch (id) {
      case 'mercury':
        return {
          quote:
            'I had rather be Mercury, the smallest among seven [planets], revolving round the sun, than the first among five [moons] revolving round Saturn.',
          quotee: 'Johann Wolfgang von Goethe',
        };
      case 'venus':
        return {
          quote:
            'There are so many stars shining in the sky, so many beautiful things winking at you, but when Venus comes out, all the others are waned, they are pushed to the background.',
          quotee: 'Mehmet Murat Ildan',
        };
      case 'mars':
        return {
          quote:
            'The first human beings to land on Mars should not come back to Earth. They should be the beginning of a build-up of a colony/settlement, I call it a ‘permanence’.',
          quotee: 'Buzz Aldrin',
        };
      case 'jupiter':
        return {
          quote:
            "Without Jupiter cleaning out the early solar system, the Earth would be pock-marked with meteor collisions. We would suffer from asteroid impacts every day. CNN studios would probably be a gigantic crater it if wasn't for Jupiter.",
          quotee: 'Michio Kaku',
        };
      case 'saturn':
        return {
          quote:
            "Far away, to an infinite world I escape. I'm clear and calm, I'm unafraid. Sunless days, in my sheltered milkyway. In Saturn's rings I feel no pain.",
          quotee: 'Paula Cole',
        };
      case 'uranus':
        return {
          quote:
            "A human being born at one of Uranus's poles would be a middle-aged man at sunset and a very old man before it was time for a second sunrise.",
          quotee: 'Isaac Asimov',
        };
      case 'neptune':
        return {
          quote:
            'No one planet can tell us everything about the universe, but Neptune seems to hold more than its share of information about the formation of our own solar system.',
          quotee: 'Heidi Hammel',
        };
      case 'pluto':
        return {
          quote:
            "If you slid Pluto to where Earth is right now, heat from the sun would evaporate that ice, and it would grow a tail. Now that's no kind of behavior for a planet.",
          quotee: 'Neil deGrasse Tyson',
        };
      default:
        return {
          quote:
            "Earth provides enough to satisfy every man's needs, but not every man's greed.",
          quotee: 'Mahatma Gandhi',
        };
    }
  }
}
