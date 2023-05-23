import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  id : string = "";
  card : any = {}

  constructor(
    private cardService : CardService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')+"";
      this.cardService.getCardById(this.id).subscribe(
        response => {
          this.card = response.card;
        }
      );
    });
  }

}
