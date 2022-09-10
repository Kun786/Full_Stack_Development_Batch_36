import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  @ViewChild('FileSelect') FileSelect: ElementRef | any;
  

  color = ["Red", "Black", "Blue"];
  categories = ["Cap", "Hoodies", "Watch", "Bags"];
  selectSize = ["S", "M", "L", "X-L", "XX-L"];
  newSizeArray: any = [];
  imageArray: any = [];
  disableButtonTrue: boolean = false;
  myProductForm: FormGroup | any
  constructor(
    private formBuilder: FormBuilder,
    private ToastrService:ToastrService,
    private ProductService:ProductService
  ) { this.buildForm() }

  ngOnInit(): void {
  }

  buildForm() {
    this.myProductForm = this.formBuilder.group({
      productName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      quantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      description: new FormControl('', Validators.required),
      color: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      companyName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      category: new FormControl('', Validators.required),
      size: new FormArray([]),
      productMaterial: new FormControl('', Validators.required),
      image: new FormArray([])
    })
  }

  getSize(event: any) {
    if (event.target.checked) {
      this.newSizeArray.push(event.target.value);
    }
    else {
      this.newSizeArray = this.newSizeArray.filter((value: any) => value != event.target.value)
    }
  }

  getImages(event: any) {
    if (event.target.files.length <= 5) {
      this.imageArray.push(event.target.files);
    } else {
      this.imageArray = [];
      this.FileSelect.nativeElement.value= null;
      this.disableButtonTrue = true;
      this.ToastrService.warning(`Image selection limit is 5 but you have selected ${event.target.files.length}`);
    }
  }

  submitProductForm() {
    this.newSizeArray.forEach((elements: string) => {
      let formControl = new FormControl(elements)
      this.myProductForm.get("size").push(formControl)
    })

    this.imageArray.forEach((element: any) => {
      let formControl = new FormControl(element)
      this.myProductForm.get("image").push(formControl)
    })
    
    let MultiPartFormData = new FormData();
    MultiPartFormData.append('productName',this.myProductForm.get('productName').value);
    MultiPartFormData.append('quantity',this.myProductForm.get('quantity').value);
    MultiPartFormData.append('price',this.myProductForm.get('price').value);
    MultiPartFormData.append('description',this.myProductForm.get('description').value);
    MultiPartFormData.append('color',this.myProductForm.get('color').value);
    MultiPartFormData.append('companyName',this.myProductForm.get('companyName').value);
    MultiPartFormData.append('category',this.myProductForm.get('category').value);
    MultiPartFormData.append('size',this.myProductForm.get('size').value);
    MultiPartFormData.append('productMaterial',this.myProductForm.get('productMaterial').value);
    MultiPartFormData.append('image',this.myProductForm.get('image').value);
   
    this.ProductService.CreateProductCard(MultiPartFormData).subscribe((ResponseComingFromBackend:any) => {
      console.log(ResponseComingFromBackend);
    })
  }


}