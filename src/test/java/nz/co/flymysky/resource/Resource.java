package nz.co.flymysky.resource;

import org.openqa.selenium.WebElement;

import nz.co.flymysky.Stepdefinition.Hook;

public class Resource  {

	public void getURL(String url) {
		Hook.driver.get(url);
		
	}
	
	public void sendKey(WebElement element, String data) {
		element.sendKeys(data);
	}
	
	public void click(WebElement element) {
		element.click();

	}
	
	public void waitto() throws InterruptedException {
		Thread.sleep(3000);

	}
}
