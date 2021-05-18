import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3Page } from './tab3.page';
import { RouterTestingModule} from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('exists button Products',()=>{
    const button = fixture.nativeElement.querySelector('#buttonProducts');
    expect(button).toBeTruthy();
    expect(button.getAttribute("color")).toBeTruthy();
    expect(button.getAttribute("size")).toBeTruthy();
    expect(button.textContent).toBe('Acceso a Productos');
    spyOn(component, 'goToProductos');
    let boton = fixture.debugElement.nativeElement.querySelector('#buttonProducts');
    boton.click();
    expect(component.goToProductos).toHaveBeenCalled();
  });

  it('exist button in center', ()=>{
    const contenedor = fixture.debugElement.query(By.css('.container')).nativeElement;
    const content = getComputedStyle(contenedor);
    expect(content.getPropertyValue("align-items")).toBe('center');
    expect(content.getPropertyValue("justify-content")).toBe('center');
    expect(content.getPropertyValue("display")).toBe('flex');
  });
});
