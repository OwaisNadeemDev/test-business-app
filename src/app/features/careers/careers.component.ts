import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {
  careerForm: FormGroup;
  successMessage: string = '';
  submitted:boolean = false;

  constructor(private formBuilder: FormBuilder, private toast: ToastrService) {
    this.careerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      fields: this.formBuilder.array([this.createField()])
    });
  }

  get fieldControls() {
    return this.careerForm.get('fields') as FormArray;
  }

  get f()
{
    return this.careerForm.controls;
}

  createField(): FormGroup {
    return this.formBuilder.group({
      textField: ['', Validators.required]
    });
  }

  onFileChange(event: Event, index: number) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.fieldControls.at(index).patchValue({ textField: inputElement.files[0]?.name });
    } else {
      this.fieldControls.at(index).patchValue({ textField: null });
    }
  }

  addField() {
    this.fieldControls.push(this.createField());
  }

  removeField(index: number) {
    this.fieldControls.removeAt(index);
  }

  onSubmit() {
    this.submitted = true;
    if (this.careerForm.valid) {
      this.submitted = false;
      this.successMessage = 'Form submitted successfully!';
      this.toast.success(this.successMessage);
      this.careerForm.reset();
    }
  }
}
