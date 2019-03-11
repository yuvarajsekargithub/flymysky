package nz.co.flymysky.Stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="C:\\Users\\YUVARAJ\\eclipse-workspace\\SeleniumProject\\Task3\\src\\test\\resources\\nz.co.flymysky.Feature\\BookingPage.feature",
glue ="nz.co.flymysky.Stepdefinition", 
monochrome=true,
plugin = {"html:target"})


public class TestRunner {

}
