import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // This is a decorator
  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'pet';
  answer = '';
  genders = ['male','female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender:''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    /* THIS IS NOT BEST APPROACH for setting the form value */

    // // allows you to set the value of the whole form.
    // // need to pass javascript object exactly representing your form.
    // this.signupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer:'',
    //   gender: 'male'
    // });





/* patchValue only overrides specific fields*/
    this.signupForm.form.patchValue({
        userData: suggestedName
      }
    );
  }

  // onSubmit(form: NgForm)
  // {
  //   console.log(form);
  // }


  onSubmit()
  {
    // console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
