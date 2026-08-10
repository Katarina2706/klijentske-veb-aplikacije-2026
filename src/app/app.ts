import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('klijentske-veb-aplikacije-2026');
  ime = 'Katarina';
  prezime = 'Djordjevic';
  indeks = '2022204817'
}
