import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MylistPage } from './mylist.page';

describe('MylistPage', () => {
  let component: MylistPage;
  let fixture: ComponentFixture<MylistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
