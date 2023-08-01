import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipes:Recipe[]=[
  new Recipe("A Test Recipe","This is simply a test","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUx1JDbk_xc6-4ipUf9liGj88hr9uitYLPQ&usqp=CAU")
];
}
