import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderAuthComponent } from './page-header-auth.component';

describe('PageHeaderAuthComponent', () => {
  let component: PageHeaderAuthComponent;
  let fixture: ComponentFixture<PageHeaderAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
