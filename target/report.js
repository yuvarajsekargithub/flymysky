$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/YUVARAJ/eclipse-workspace/SeleniumProject/Task3/src/test/resources/nz.co.flymysky.Feature/BookingPage.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To check the Booking Page in HomePage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The User should see the Find a Flight Page in HomePage",
  "keyword": "Given "
});
formatter.step({
  "name": "The User Should select all the datas in Find a Flight Page till Search Flight \"\u003cFrom\u003e\",\"\u003cTo\u003e\",\"\u003cfromDate\u003e\",\"\u003creturndate\u003e\",\"\u003cAdult\u003e\",\"\u003cchild\u003e\",\"\u003cinfant\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The User should see the flight details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "From",
        "To",
        "fromDate",
        "returndate",
        "Adult",
        "child",
        "infant"
      ]
    },
    {
      "cells": [
        "Auckland",
        "Great Barrier Island (Claris)",
        "27/03/2019",
        "28/03/2019",
        "1",
        "2",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To check the Booking Page in HomePage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User should see the Find a Flight Page in HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_User_should_see_the_Find_a_Flight_Page_in_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User Should select all the datas in Find a Flight Page till Search Flight \"Auckland\",\"Great Barrier Island (Claris)\",\"27/03/2019\",\"28/03/2019\",\"1\",\"2\",\"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_User_Should_select_all_the_datas_in_Find_a_Flight_Page_till_Search_Flight(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The User should see the flight details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_User_should_see_the_flight_details()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});