import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-add-new-post',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule, FormsModule],
  templateUrl: './add-new-post.component.html',
  styleUrl: './add-new-post.component.css'
})
export class AddNewPostComponent {

  constructor (private form:MatDialogRef<AddNewPostComponent>){}

  public onCloseForm(){
    this.form.close();
  }

  public onSubmitPost(form:NgForm){
    console.log(form.form.value);
    
  }
}
