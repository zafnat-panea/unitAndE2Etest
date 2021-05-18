import {browser, element, by, ExpectedConditions} from "protractor";
import { TabsPage } from './app.po';

describe("testTabs", () => {

  let tab : TabsPage
  let url = "";

  beforeEach(()=>{
    tab = new TabsPage();
  })

  it("test go to tab1",()=>{
    tab.navigate();
    tab.goToTab1();
    browser.driver.sleep(3000);
    browser.getCurrentUrl().then(dir =>{
      url = dir
      expect(url).toEqual('http://localhost:4200/tabs/tab1');
    });
  })

  it("test go to tab2",()=>{
    tab.navigate();
    tab.goToTab2();
    browser.driver.sleep(3000);
    browser.getCurrentUrl().then(dir =>{
      url = dir
      expect(url).toEqual('http://localhost:4200/tabs/tab2');
    });
  })

  it("test go to tab3",()=>{
    tab.navigate();
    tab.goToTab3();
    browser.driver.sleep(3000);
    browser.getCurrentUrl().then(dir =>{
      url = dir
      expect(url).toEqual('http://localhost:4200/tabs/tab3');
    });
  })

  it("test go to Clients and back",()=>{
    tab.navigate();
    tab.goToTab1();
    tab.goToPageTab1();
    browser.driver.sleep(3000);
    browser.getCurrentUrl().then(dir =>{
      url=dir
      expect(url).toEqual('http://localhost:4200/tabs/tab1/clientes');
    });
    tab.goToBack();
      browser.getCurrentUrl().then(dir =>{
      url=dir
      expect(url).toEqual('http://localhost:4200/tabs/tab1');
      });
  })

  it("test go to Bookings and back",()=>{
    tab.navigate();
    tab.goToTab2();
    tab.goToPageTab2();
    browser.driver.sleep(3000);
    browser.getCurrentUrl().then(dir =>{
      url=dir
      expect(url).toEqual('http://localhost:4200/tabs/tab2/reservas');
    });
    tab.goToBack();
      browser.getCurrentUrl().then(dir =>{
      url=dir
      expect(url).toEqual('http://localhost:4200/tabs/tab2');
      });
  })

  it("test go to Products and back",()=>{
    tab.navigate();
    tab.goToTab3();
    tab.goToPageTab3();
    browser.driver.sleep(3000);
    browser.getCurrentUrl().then(dir =>{
      url=dir
      expect(url).toEqual('http://localhost:4200/tabs/tab3/productos');
    });
    tab.goToBack();
      browser.getCurrentUrl().then(dir =>{
      url=dir
      expect(url).toEqual('http://localhost:4200/tabs/tab3');
      });
  })

  it("test go to ClientsDetails and back",()=>{
    tab.navigate();
    tab.goToTab1();
    tab.goToPageTab1();
    browser.driver.sleep(3000);
    browser.getCurrentUrl().then(dir =>{
      url=dir
      expect(url).toEqual('http://localhost:4200/tabs/tab1/clientes');
    });
    tab.goToPageTab1Details();
    browser.getCurrentUrl().then(dir=>{
      url = dir
      expect(url).toEqual('http://localhost:4200/tabs/tab1/clientes/Cliente1'||
      'http://localhost:4200/tabs/tab1/clientes/Cliente2'||
      'http://localhost:4200/tabs/tab1/clientes/Cliente3'||
      'http://localhost:4200/tabs/tab1/clientes/Cliente4'||
      'http://localhost:4200/tabs/tab1/clientes/Cliente5');
    })
    tab.goToBackClients();
    browser.getCurrentUrl().then(dir =>{
      url=dir
      expect(url).toEqual('http://localhost:4200/tabs/tab1/clientes');
      });
  })

  it("test go to ClientsDetails and home",()=>{
    tab.navigate();
    tab.goToTab1();
    tab.goToPageTab1();
    browser.driver.sleep(3000);
    browser.getCurrentUrl().then(dir =>{
      url=dir
      expect(url).toEqual('http://localhost:4200/tabs/tab1/clientes');
    });
    tab.goToPageTab1Details();
    browser.getCurrentUrl().then(dir=>{
      url = dir
      expect(url).toEqual('http://localhost:4200/tabs/tab1/clientes/Cliente1'||
      'http://localhost:4200/tabs/tab1/clientes/Cliente2'||
      'http://localhost:4200/tabs/tab1/clientes/Cliente3'||
      'http://localhost:4200/tabs/tab1/clientes/Cliente4'||
      'http://localhost:4200/tabs/tab1/clientes/Cliente5');
    })
    tab.goToHome();
      browser.getCurrentUrl().then(dir =>{
      url=dir
      expect(url).toEqual('http://localhost:4200/tabs/tab2');
      });
  })
})