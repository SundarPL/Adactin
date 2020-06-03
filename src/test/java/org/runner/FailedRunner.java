package org.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"@target\\Rerun\\rerun.txt"},
glue="org.stepdefinition"
)
public class FailedRunner {
	

}
