import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-mainpage',
  imports: [Hero],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss',
})
export class Mainpage {}
