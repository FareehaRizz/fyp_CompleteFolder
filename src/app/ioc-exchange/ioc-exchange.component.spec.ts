import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IocExchangeComponent } from './ioc-exchange.component';

describe('IocExchangeComponent', () => {
  let component: IocExchangeComponent;
  let fixture: ComponentFixture<IocExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IocExchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IocExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
