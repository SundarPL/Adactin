package org.runner;

import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Before;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinition.JVMReport;

import gherkin.ast.Scenario;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features= "src/test/resources/features/",monochrome = true,
				glue="org.stepdefinition", dryRun=false,plugin = {"pretty",
				"html:src\\test\\resources\\Reports\\HtmlReports",
				"json:src\\test\\resources\\Reports\\JsonReports\\Report.json",
				"junit:src\\test\\resources\\Reports\\XmlReports\\Report.xml",
				"rerun:target\\Rerun\\rerun.txt"})

public class Runner {
	@AfterClass
	public static void JvmReports() {
		JVMReport.generateJVMReports("src\\test\\resources\\Reports\\JsonReports\\Report.json");

	}
	
}
