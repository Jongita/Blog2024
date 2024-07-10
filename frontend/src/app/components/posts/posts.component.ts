import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  constructor (private dialog:MatDialog){}

  public onAddClick(){
    console.log("paspaude");
    this.dialog.open(AddNewPostComponent)
  }
}
