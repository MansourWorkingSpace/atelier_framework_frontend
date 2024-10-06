import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-directives.component.html',
  styleUrl: './test-directives.component.css'
})
export class TestDirectivesComponent implements OnInit{
  afficherNom='';
  couleurs = ['rouge' , 'vert' , 'bleu'];
  constructor(){}
  ngOnInit(){}
  couleur='bleu';
  styleCorrect={'background-color' : 'purple' };
  
  text="";
}
