package org.stepdefinition;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass {
	@Before
	public void beforeScenario() {
		System.out.println("Hooks Started...");

	}
	@After
	public void afterScenarios() throws IOException {
		Date d=new Date();
		SimpleDateFormat sd=new SimpleDateFormat("dd-M-yyyy hh:mm:ss");
		String format = sd.format(d);
		String date = format.replaceAll("-", "").replaceAll(" ", "").replaceAll(":", "");
		TakesScreenshot ts=(TakesScreenshot) Adactin_Login.driver;
		File src = ts.getScreenshotAs(OutputType.FILE);
		File dest=new File(System.getProperty("user.dir")+"\\target\\Screenshots"+date+".png");
		FileUtils.copyFile(src, dest);
		System.out.println("Hooks End...");
	}

}
