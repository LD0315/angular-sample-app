import { Recipe } from '../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/2048x1024/landscape-1506456246-delish-healthy-chicken-casserole-1.jpg?resize=980:*' ),
    new Recipe('Another Test Recipe', 'This is simply a test', 
    'https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/2048x1024/landscape-1506456246-delish-healthy-chicken-casserole-1.jpg?resize=980:*' )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
