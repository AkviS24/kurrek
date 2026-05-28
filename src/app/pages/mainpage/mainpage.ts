import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { WhyMe } from "../../components/why-me/why-me";

@Component({
  selector: 'app-mainpage',
  imports: [Hero, WhyMe],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss',
})
export class Mainpage {}
