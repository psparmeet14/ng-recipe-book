import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("My Test Recipe", "This is simply a Test.", "assets/0.jpg"),
    new Recipe("My Test Recipe 2", "This is simply a Test 2.", "assets/0.jpg")
  ];
}
