package Objects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Search_Page_Objects {
	@FindBy(id="location")
	public static WebElement location;
	@FindBy(id="hotels")
	public static WebElement hotels;
	@FindBy(id="room_type")
	public static WebElement room_type;
	@FindBy(id="room_nos")
	public static WebElement room_nos;
	@FindBy(id="datepick_in")
	public static WebElement datepick_in;
	@FindBy(id="datepick_out")
	public static WebElement datepick_out;
	@FindBy(id="adult_room")
	public static WebElement adult_room;
	@FindBy(id="child_room")
	public static WebElement child_room;
	@FindBy(id="Submit")
	public static WebElement submit;
	

}
