import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}