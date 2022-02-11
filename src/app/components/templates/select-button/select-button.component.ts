import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent implements OnInit {
  disable = false;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
  }
  selectFilm() {
    this.disable = true;
    this.checkoutService.selectFilm();
  }

  unselectFilm() {
    this.disable = false;
    this.checkoutService.unselectFilm();
  }
}
