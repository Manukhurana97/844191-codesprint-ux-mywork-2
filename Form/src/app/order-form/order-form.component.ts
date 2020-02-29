import {Component, OnInit} from '@angular/core';
import {Formdata} from '../model/from';
import {CountrieslistService} from '../countrieslist.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor(private country: CountrieslistService) {
  }


  data = new Formdata(0, '0', ' ', '@gmail.com', '', '', 0);
  phoneno = ['+91', '+971', '+972', '+198', '+701'];

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.country.allCountries().subscribe(
      data2 => {
        this.countryInfo = data2.Countries;
      },
      err => console.log(err),
      () => console.log('complete')
    );
  }

  onChangeCountry(countryValue) {
    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
  }

  getdata(data) {
    console.log(data);
    if (localStorage.Basket === undefined) {
      const cart = [];
      cart.push(data);
      localStorage.Basket = JSON.stringify(cart);
    } else {
      const products = JSON.parse(localStorage.Basket);
      products.push(data);
      localStorage.Basket = JSON.stringify(products);
    }
  }
}


