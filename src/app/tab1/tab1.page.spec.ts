import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1Page } from './tab1.page';
import { RouterTestingModule} from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('exists button Clients',()=>{
    const button = fixture.nativeElement.querySelector('#buttonClients');
    expect(button).toBeTruthy();
    expect(button.getAttribute("color")).toBeTruthy();
    expect(button.getAttribute("size")).toBeTruthy()
    expect(button.getAttribute("routerLink")).toBeTruthy();
    expect(button.textContent).toBe('Acceso a Clientes');
  });

  it('exist button in center', ()=>{
    const contenedor = fixture.debugElement.query(By.css('.container')).nativeElement;
    const content = getComputedStyle(contenedor);
    expect(content.getPropertyValue("align-items")).toBe('center');
    expect(content.getPropertyValue("justify-content")).toBe('center');
    expect(content.getPropertyValue("display")).toBe('flex');
  });


});
