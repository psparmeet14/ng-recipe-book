import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('f', {static: false}) shoppingEditForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    const name = this.shoppingEditForm.value.name;
    const amount = this.shoppingEditForm.value.amount;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }
}
