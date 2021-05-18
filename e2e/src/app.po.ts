import {browser, by, element, ExpectedConditions} from 'protractor';

export class TabsPage{

  navigate(){
    return browser.get('/');
  }

  goToTab1(){
    const tab1 = element(by.id('tab-button-tab1'));
    browser.wait(ExpectedConditions.elementToBeClickable(tab1));
    tab1.click();
  }

  goToTab2(){
    const tab2 = element(by.id('tab-button-tab2'));
    browser.wait(ExpectedConditions.elementToBeClickable(tab2));
    tab2.click();
  }

  goToTab3(){
    const tab3 = element(by.id('tab-button-tab3'));
    browser.wait(ExpectedConditions.elementToBeClickable(tab3));
    tab3.click();
  }

  goToBack(){
    const buttonBack = element(by.id('arrow-back-outline'));
    browser.wait(ExpectedConditions.elementToBeClickable(buttonBack));
    buttonBack.click();
  }

  goToBackClients(){
    const buttonBack = element(by.id('arrow-back-outline2'));
    browser.wait(ExpectedConditions.elementToBeClickable(buttonBack));
    buttonBack.click();
  }

  goToHome(){
    const buttonHome = element(by.id('home-outline'));
    browser.wait(ExpectedConditions.elementToBeClickable(buttonHome));
    buttonHome.click();
  }

  goToPageTab1(){
    const tab1 = element(by.id('tab-button-tab1'));
    browser.wait(ExpectedConditions.elementToBeClickable(tab1))
    tab1.click();
    const button1 = element(by.id('buttonClients'));
    browser.wait(ExpectedConditions.elementToBeClickable(button1));
    button1.click();
  }

  goToPageTab2(){
    const tab2 = element(by.id('tab-button-tab2'));
    browser.wait(ExpectedConditions.elementToBeClickable(tab2))
    tab2.click();
    const button2 = element(by.id('buttonBookings'));
    browser.wait(ExpectedConditions.elementToBeClickable(button2));
    button2.click();
  }

  goToPageTab3(){
    const tab3 = element(by.id('tab-button-tab3'));
    browser.wait(ExpectedConditions.elementToBeClickable(tab3))
    tab3.click();
    const button3 = element(by.id('buttonProducts'));
    browser.wait(ExpectedConditions.elementToBeClickable(button3));
    button3.click();
  }

  goToPageTab1Details(){
    const tab1 = element(by.id('tab-button-tab1'));
    browser.wait(ExpectedConditions.elementToBeClickable(tab1))
    tab1.click();
    const button1 = element(by.id('buttonClients'));
    browser.wait(ExpectedConditions.elementToBeClickable(button1));
    button1.click();
    const buttonclient = element(by.id('editarCliente'));
    browser.wait(ExpectedConditions.elementToBeClickable(buttonclient));
    buttonclient.click();
  }
}

