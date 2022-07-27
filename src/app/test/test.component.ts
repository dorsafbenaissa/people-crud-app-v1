import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
name="Ali";
image1="assets/images/traing.jpg"
bookList=[];
usersList=[];
myCondition=false;
  constructor(private userservice UserService) { }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(
      result=>{
        this.usersList=result;},
        error =>{
          console.log(error); 
        }
      }
    )
  }

}
