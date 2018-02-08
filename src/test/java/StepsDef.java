import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.*;

public class StepsDef {
	protected WebDriver driver;

@Before
public void setUp() {
	System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers\\chromedriver.exe");
	driver=new ChromeDriver();
}
@Given("^un dato de tipo numero$")
public void DadoNum() {
	driver.get("http://www.metric-conversions.org/es/temperatura/celsius-a-fahrenheit.htm");
}
@Given("^un dato de tipo texto$")
public void DadoTxt() {
	driver.get("http://www.metric-conversions.org/es/temperatura/celsius-a-fahrenheit.htm");
}
@When("^es ingresado en el campo de input \"([^\"]*)\"$")
public void Cuando(String gradosC) {//El dato es de tipo int, pero de esta forma no lo reconoce el sendKeys. Paso como String.
	driver.findElement(By.id("argumentConv")).sendKeys(gradosC);
}
@Then("^se muestra el resultado de la temperatura$")
public void EntoncesResultado() {
	WebElement resultado=driver.findElement(By.id("answer"));
	System.out.println(resultado.getText());
}
@Then("^se muestra un error$")
public void EntoncesError() {
	WebElement error=driver.findElement(By.id("answer"));
	System.out.println(error.getText());
}
@After
public void tearDown() {
	//driver.close();
}
}