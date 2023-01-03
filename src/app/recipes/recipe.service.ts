import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("My Test Recipe", "This is simply a Test.", "assets/0.jpg",
         [new Ingredient('Brown Bread', 1), new Ingredient('Butter', 2)]),
        new Recipe("My Test Recipe 2", "This is simply a Test 2.", "assets/0.jpg",
         [new Ingredient('French Fries', 15), new Ingredient('Cheese', 3)])
      ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipeById(index: number): Recipe {
        return this.recipes[index];
    }
}