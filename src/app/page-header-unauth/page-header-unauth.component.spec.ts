import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderUnauthComponent } from './page-header-unauth.component';

describe('PageHeaderUnauthComponent', () => {
  let component: PageHeaderUnauthComponent;
  let fixture: ComponentFixture<PageHeaderUnauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderUnauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderUnauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
