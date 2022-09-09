import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})
export class AdminModuleComponent implements OnInit {
  color=["Red","Black","Blue"];
  categories=["Cap","Hoodies","Watch","Bags"];
  selectSize=["S","M","L","X-L","XX-L"];
  newSizeArray:any=[];
  imageArray:any=[];
  disableButtonTrue: boolean=false;
 
  myProductForm:FormGroup|any
   constructor(
     private formBuilder:FormBuilder
   ) { this.buildForm()}
 
   ngOnInit(): void {
   }
 
   buildForm(){
     this.myProductForm = this.formBuilder.group({
      productName: new FormControl ('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
       quantity: new FormControl ('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
       price: new FormControl ('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
       description: new FormControl ('', Validators.required),
       color: new FormControl ('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
       companyName: new FormControl ('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
       category:new FormControl ('', Validators.required),
       size: new FormArray([]),
       productMaterial:new FormControl('', Validators.required),
       image: new FormArray([])
     })
   }
 
   getSize(event:any){
     if(event.target.checked){
      this.newSizeArray.push(event.target.value)
     }
     else{
      this.newSizeArray = this.newSizeArray.filter((value:any)=>value != event.target.value) 
     }
   }
 
   getImages(event:any){
   if(event.target.files.length <= 5){
 this.imageArray.push(event.target.files)
   }else{
     this.imageArray = [];
     this.disableButtonTrue = true
   }
   }
   
  submitProductForm(){
   this.newSizeArray.forEach((elements:string)=>{
    let formControl = new FormControl(elements)
    this.myProductForm.get("size").push(formControl)
   })
   this.imageArray.forEach((element:any) => {
    let formControl = new FormControl(element)
    this.myProductForm.get("image").push(formControl) 
   })
  let result= this.myProductForm.value;
   console.log(result);
   }

}
