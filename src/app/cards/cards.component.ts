import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    private cardService : CardService,
    private router : Router
  ) { }

  cardsList : any[] = [];
  
  ngOnInit(): void {
    this.cardService.getCards().subscribe(
      response => {
        this.cardsList = response.cards;
      } 
    )
  }

  goToCard(id : string) : void{
    this.router.navigate(['cards', id]);
  }
}
