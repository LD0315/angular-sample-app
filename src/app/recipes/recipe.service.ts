import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe(
            'Fresh Seafood Don', 
            'A super-fresh Seafood Don - just awesome!', 
            'https://favy-inbound-singapore.s3.amazonaws.com/uploads/topic_item/image/77806/retina_kaisendon_eyecatch.jpg',
            [
                new Ingredient('Salmon', 1),
                new Ingredient('Prawn', 3)
            ]),
        new Recipe(
            'Tasty Pork Soup', 
            'What else you need to say?', 
            'https://cont-daidokolog.pal-system.co.jp/system/recipe/4303/img/thumbnail/pc_detail_main_COP10_AK_165.jpg',
            [
                new Ingredient('Onion', 2),
                new Ingredient('Potato', 1)
            ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }
}