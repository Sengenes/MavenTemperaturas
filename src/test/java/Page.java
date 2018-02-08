import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page {
	@FindBy(id="argumentConv")
	@CacheLookup
	public WebElement input;
	
	@FindBy(id="answer")
	public WebElement resultado;
	
	public Page(WebDriver driver) {
		if(!"Conversion de grados centigrados a grados Fahrenheit".equals(driver.getTitle()))
			throw new IllegalStateException("Pagina equivocada");
			PageFactory.initElements(driver,  this);
	}

}
/*Results :

Tests run: 9, Failures: 0, Errors: 0, Skipped: 3*/