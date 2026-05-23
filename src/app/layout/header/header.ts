import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
