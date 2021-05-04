import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render login input', () => {
    fixture = TestBed.createComponent(LoginComponent);
    const element = fixture.nativeElement;
    const email:HTMLInputElement = element.querySelector('input#email');
    expect(email).toBeTruthy();

  });


  it('should bind email value to Component property', () => {
    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement;
    const emailInput: HTMLInputElement = element.querySelector('#email');
    emailInput.value = 'cade@oheitor.com';

    emailInput.dispatchEvent(new Event('input'));

    expect(fixture.componentInstance.email).toBe('cade@oheitor.com');
  });

  it('should perform display binding in HTML template', () => {
    
    const element = fixture.nativeElement;
    const emailInput: HTMLInputElement = element.querySelector('#email');
    const display: HTMLInputElement = element.querySelector('#display');
    
    emailInput.value = 'cade@oheitor.com';

    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(fixture.componentInstance.email).toBe('cade@oheitor.com');
    expect(display.textContent).toBe('cade@oheitor.com');
  });


});

