import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
public title: string;
  public subtitle: string;
  public subtitle2: string;
  public email: string;

  constructor() {
    this.title = 'Manuel Beristain Palacios';
    this.subtitle = 'Desarrollador Front End';
    this.subtitle2 = 'Consultor de Sistemas'
    this.email = 'beristainpalacios@gmail.com';
  }

  ngOnInit(): void {

  }
}
