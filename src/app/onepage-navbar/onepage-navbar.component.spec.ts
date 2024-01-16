import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepageNavbarComponent } from './onepage-navbar.component';

describe('OnepageNavbarComponent', () => {
  let component: OnepageNavbarComponent;
  let fixture: ComponentFixture<OnepageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnepageNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnepageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
