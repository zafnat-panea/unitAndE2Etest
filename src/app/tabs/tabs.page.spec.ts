import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exists tab1', () =>{
      const tab : HTMLElement = fixture.nativeElement;
      const tab1 = tab.querySelector('#tab1');
      const icon1 = tab.querySelector('#accessibility-outline');
      const label1 = tab.querySelector('#label-tab1');
      expect(tab1.getAttribute("tab")).toBe('tab1');
      expect(icon1.getAttribute("name")).toBe('accessibility-outline');
      expect('Clientes').toBe(label1.textContent);
  });

  it('exists tab2', ()=>{
    const tab2 = fixture.nativeElement.querySelector('#tab2');
    const icon2 = fixture.nativeElement.querySelector('#receipt-outline');
    const label2 = fixture.nativeElement.querySelector('#label-tab2');
    expect(tab2).toBeTruthy();
    expect(tab2.getAttribute("tab")).toBe('tab2');
    expect(icon2.getAttribute("name")).toBe('receipt-outline');
    expect(label2.innerHTML).toBe(label2.textContent);
  });

  it('exists tab3',()=>{
    const tab3 = fixture.nativeElement.querySelector('#tab3');
    const icon3 = fixture.nativeElement.querySelector('#cart-outline');
    const label3 = fixture.nativeElement.querySelector('#label-tab3');
    expect(tab3.getAttribute("tab")).toBe('tab3');
    expect(icon3).toBeTruthy();
    expect(icon3.getAttribute("name")).toBe('cart-outline');
    expect(label3.textContent).toBe('Productos');
  })
});
