package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

import static junit.framework.TestCase.assertEquals;

public class StepDefs {
    public WebDriver driver;
    public StepDefs()
    {
        driver = Hooks.driver;
    }
    @When("^I open seleniumframework website$")
    public void i_open_seleniumframework_website() throws Throwable
    {
        driver.get("http://www.seleniumframework.com");
    }
    @Then("^I validate title and URL$")
    public void i_print_title_and_URL() throws Throwable {
        assertEquals("Selenium Framework | Selenium, Cucumber, Ruby, Java et al.",driver.getTitle());
        assertEquals("http://www.seleniumframework.com/",driver.getCurrentUrl());}
}
