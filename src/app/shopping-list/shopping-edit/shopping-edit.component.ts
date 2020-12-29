import { 
  Component, 
  OnInit, 
  OnDestroy, 
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs';
//import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';


import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  //@ViewChild('nameInput', { static: false })  nameInputRef: ElementRef;
  //@ViewChild('amountInput', { static: false })  amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  subscription: Subscription;
  editMode = false;
  editeditemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editeditemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount

          })
        }
      );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    //const ingName = this.nameInputRef.nativeElement.value;
    //const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    //this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
}
