package stepdefinitions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import common.wrapper;
import test.TestRunner;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class ELearning_Stepdefinitions extends TestRunner{
	
    @Given("^I open the browser and enter the url \"([^\"]*)\"$")
	public void i_open_the_browser_and_enter_the_url(String url) throws Throwable {
    	// protected static WebDriver driver;
    	System.setProperty("webdriver.chrome.driver","driver//chromedriver.exe");
	 	   driver = new ChromeDriver();
	 	  driver.get("http://elearningm1.upskills.in/");
	}
    @Then("^I enter the username \"([^\"]*)\"$")
	public void i_enter_the_username(String username) throws Throwable {
		//driver.findElement(By.xpath("//input[@id='login']")).sendKeys(wrapper.getDataFromExcel(1,0));
    	driver.findElement(By.xpath("//input[@id='login']")).sendKeys(username);
	}
	@And("^I enter the password \"([^\"]*)\"$")
		public void i_enter_the_password(String password) throws Throwable {
		//driver.findElement(By.xpath("//input[@id='password']")).sendKeys(wrapper.getDataFromExcel(1,1));
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
		}
    @Then("^I click the login button$")
	public void i_click_the_calcualte_button() throws Throwable {
		driver.findElement(By.xpath("//button[@class='btn-block btn btn-primary ']")).click();
		  Thread.sleep(3000);
		  }
    @When("^I click the Administratortab$")
	public void i_click_the_Administratortab() throws Throwable {
	driver.findElement(By.xpath("//a[@title='Administration']")).click();
	}
	@Then("^I click on CareesAndPromotionsLink$")
	public void i_click_the_CareesAndPromotionsLink() throws Throwable {
		driver.findElement(By.xpath("//a[contains(text(),'Careers')]")).click();
	Thread.sleep(4000);
	}
	@When("^I click the career link$")
	public void I_click_the_career_link() throws Throwable {
	 driver.findElement(By.xpath("//*[@id=\"toolbar-career\"]/div/div/a[2]/img")).click();
	}
	@When("^I click on AddIcon$")
	public void I_click_on_AddIcon() throws Throwable {
		driver.findElement(By.xpath("//img[@title='Add']")).click();
		Thread.sleep(2000);
	}
   @Then("^I enter the Name \"([^\"]*)\"$")
	public void I_enter_the_Name(String Name) throws Throwable {
	//driver.findElement(By.xpath("//input[@id='career_name']")).sendKeys(wrapper.getDataFromExcel(1,2));
	   driver.findElement(By.xpath("//input[@id='career_name']")).sendKeys(Name); 
	Thread.sleep(7000);
    }
   @When("^I click on Add Button$")
	public void I_click_on_Add_Button() throws Throwable {
	driver.findElement(By.name("submit")).click();
    Thread.sleep(4000);
	}
   @Then("^Display ITEM Added Message$")
	public void Display_ITEM_Added_Message() throws Throwable {
	String Message = driver.findElement(By.xpath("//div[contains(text(),'Item added')]")).getText();
	System.out.println(Message);
	}

   @Then("^I click on Carees And Promotions$")
	public void I_click_on_Carees_And_Promotions() throws Throwable {
		driver.findElement(By.xpath("(//li[@class='active'])[2]")).click();
	Thread.sleep(4000);
	}
   @When("^I click on Promotions Link$")
	public void I_click_on_Promotions_Link() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"toolbar-career\"]/div/div/a[3]/img")).click();
		Thread.sleep(4000);
	}
   @When("^I click on ADDIcon$")
	public void I_click_the_ADDIcon() throws Throwable {
		driver.findElement(By.xpath("//img[@title='Add']")).click();
		Thread.sleep(3000);
	}
   @Then("^I enter the name \"([^\"]*)\"$")
	public void i_enter_the_name(String name) throws Throwable {
	//driver.findElement(By.xpath("//input[@id='name']")).sendKeys(wrapper.getDataFromExcel(1,3));
	driver.findElement(By.xpath("//input[@id='name']")).sendKeys(name);
	Thread.sleep(3000);
   }
   @When("^I click on ADD Button$")
  	public void i_click_the_ADD_Button() throws Throwable {
  		driver.findElement(By.xpath("//button [@id='promotion_submit']")).click();
  		Thread.sleep(3000);
  	}
   @Then("^Display ITEM Added Message1$")
	public void Display_ITEM_Added_Message1() throws Throwable {
	String Message1 = driver.findElement(By.xpath("//div[contains(text(),'Item added')]")).getText();
	System.out.println(Message1);
	}
   @When("^I click on Subscribe sessions to promotion icon$")
 	public void I_click_on_Subscribe_sessions_to_promotion_icon() throws Throwable {
 		driver.findElement(By.xpath("(//img[@title='Subscribe sessions to promotions'])[3]")).click();
 		Thread.sleep(4000);
    }
   @Then("^select session in Sessions not subscribed$")
  	public void select_session_in_Sessions_not_subscribed() throws Throwable {
	   driver.findElement(By.xpath("//select[@name='firstLetterUser']//option[@value='D']")).click();
	   driver.findElement(By.xpath("//option[contains(text(),'Dheeraj11')]")).click();
   Thread.sleep(4000);
   }
   @When("^I click on arrow$")
	public void I_click_on_arrow() throws Throwable {
	driver.findElement(By.xpath("(//button[@type='button'])[2]")).click();
   Thread.sleep(5000);
   }
   @When("^I click on subscribe sessions in promotion window button$")
	public void I_click_on_subscribe_sessions_in_promotion_window_button() throws Throwable {
	driver.findElement(By.xpath("//td//button[contains(text(),'Subscribe sessions to promotion')]")).click();
	System.out.println("Admin is able to subscribe sessions promotion window");
    
}
}

