import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';
import { Film } from 'src/app/views/list-films/film.model';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {
  listFilms: Film[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe((Film) => {
      this.listFilms = Film;
      })
  }

  selectFilm(Film: Film): void {
    this.checkoutService.setFilm(Film);
    this.checkoutService.setPrice(Film.price);
  }

}
