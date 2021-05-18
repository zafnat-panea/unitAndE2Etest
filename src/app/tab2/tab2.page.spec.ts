import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2Page } from './tab2.page';
import { RouterTestingModule} from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('exists button Bookings',()=>{
    const button = fixture.nativeElement.querySelector('#buttonBookings');
    expect(button).toBeTruthy();
    expect(button.getAttribute("color")).toBeTruthy();
    expect(button.getAttribute("size")).toBeTruthy()
    expect(button.textContent).toBe('Acceso a Reservas');
    spyOn(component, 'goToReservas');
    let boton = fixture.debugElement.nativeElement.querySelector('#buttonBookings');
    boton.click();
    expect(component.goToReservas).toHaveBeenCalled();
  });

  it('exist button in center', ()=>{
    const contenedor = fixture.debugElement.query(By.css('.container')).nativeElement;
    const content = getComputedStyle(contenedor);
    expect(content.getPropertyValue("align-items")).toBe('center');
    expect(content.getPropertyValue("justify-content")).toBe('center');
    expect(content.getPropertyValue("display")).toBe('flex');
  });
});
