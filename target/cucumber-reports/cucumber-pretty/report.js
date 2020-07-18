$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Elearning.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to automate the Elearning page",
  "description": "       To Verify whether application allows admin to create career, promotion \u0026 subscribe session to promotion",
  "id": "this-feature-is-to-automate-the-elearning-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ESC20"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Login  to Elearning page",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;login--to-elearning-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@openAdminTab"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open the browser and enter the url \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the username \"admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter the password \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click the Administratortab",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "http://elearningm1.upskills.in/",
      "offset": 38
    }
  ],
  "location": "ELearning_Stepdefinitions.i_open_the_browser_and_enter_the_url(String)"
});
formatter.result({
  "duration": 12384402900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 22
    }
  ],
  "location": "ELearning_Stepdefinitions.i_enter_the_username(String)"
});
formatter.result({
  "duration": 4100541500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@123",
      "offset": 22
    }
  ],
  "location": "ELearning_Stepdefinitions.i_enter_the_password(String)"
});
formatter.result({
  "duration": 898992900,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_calcualte_button()"
});
formatter.result({
  "duration": 8499757800,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_Administratortab()"
});
formatter.result({
  "duration": 1352366700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To verify whether admin is able to create Career",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;to-verify-whether-admin-is-able-to-create-career",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@CreateCareer"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on CareesAndPromotionsLink",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click the career link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on AddIcon",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter the Name \"QA\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Display ITEM Added Message",
  "keyword": "Then "
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_CareesAndPromotionsLink()"
});
formatter.result({
  "duration": 7233364000,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_the_career_link()"
});
formatter.result({
  "duration": 3937073100,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_AddIcon()"
});
formatter.result({
  "duration": 3172305000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA",
      "offset": 18
    }
  ],
  "location": "ELearning_Stepdefinitions.I_enter_the_Name(String)"
});
formatter.result({
  "duration": 7595574300,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_Add_Button()"
});
formatter.result({
  "duration": 5991727600,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.Display_ITEM_Added_Message()"
});
formatter.result({
  "duration": 72200800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "To verify whether admin is able to create Promotion",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;to-verify-whether-admin-is-able-to-create-promotion",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@CreatePromotion"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I click on CareesAndPromotionsLink",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on Promotions Link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on ADDIcon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter the name \"QA for Tester\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on ADD Button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Display ITEM Added Message1",
  "keyword": "Then "
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_CareesAndPromotionsLink()"
});
formatter.result({
  "duration": 6037417100,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_Promotions_Link()"
});
formatter.result({
  "duration": 5474494700,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_the_ADDIcon()"
});
formatter.result({
  "duration": 5625571800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA for Tester",
      "offset": 18
    }
  ],
  "location": "ELearning_Stepdefinitions.I_enter_the_name(String)"
});
formatter.result({
  "duration": 3415628600,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_ADD_Button()"
});
formatter.result({
  "duration": 4439404300,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.Display_ITEM_Added_Message1()"
});
formatter.result({
  "duration": 67669400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "To verify whether admin is able to subscribe sessions to promotion icon",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;to-verify-whether-admin-is-able-to-subscribe-sessions-to-promotion-icon",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@CreateSubscription"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I click on Subscribe sessions to promotion icon",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "select session in Sessions not subscribed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on arrow",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I click on subscribe sessions in promotion window button",
  "keyword": "When "
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_Subscribe_sessions_to_promotion_icon()"
});
formatter.result({
  "duration": 5544742300,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.select_session_in_Sessions_not_subscribed()"
});
formatter.result({
  "duration": 4222127900,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_arrow()"
});
formatter.result({
  "duration": 5216396900,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_subscribe_sessions_in_promotion_window_button()"
});
formatter.result({
  "duration": 1971741400,
  "status": "passed"
});
formatter.uri("ExcelElearning.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to automate the Elearning page",
  "description": "       To Verify whether application allows admin to create career, promotion \u0026 subscribe session to promotion",
  "id": "this-feature-is-to-automate-the-elearning-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ESC!20"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Login  to Elearning page",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;login--to-elearning-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@openAdminTab"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open the browser and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the username",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter the password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click the Administratortab",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_calcualte_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_Administratortab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "To verify whether admin is able to create Career",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;to-verify-whether-admin-is-able-to-create-career",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@CreateCareer"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on CareesAndPromotionsLink",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click the career link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on AddIcon",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter the Name",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Display ITEM Added Message",
  "keyword": "Then "
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_CareesAndPromotionsLink()"
});
formatter.result({
  "duration": 5546143000,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_the_career_link()"
});
formatter.result({
  "duration": 1049638200,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_AddIcon()"
});
formatter.result({
  "duration": 3144529000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_Add_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.Display_ITEM_Added_Message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "To verify whether admin is able to create Promotion",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;to-verify-whether-admin-is-able-to-create-promotion",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@CreatePromotion"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I click on CareesAndPromotionsLink",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on Promotions Link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on ADDIcon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter the name",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on ADD Button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Display ITEM Added Message1",
  "keyword": "Then "
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_CareesAndPromotionsLink()"
});
formatter.result({
  "duration": 5558545300,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_Promotions_Link()"
});
formatter.result({
  "duration": 5401355200,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_the_ADDIcon()"
});
formatter.result({
  "duration": 4097749400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_ADD_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.Display_ITEM_Added_Message1()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "To verify whether admin is able to subscribe sessions to promotion icon",
  "description": "",
  "id": "this-feature-is-to-automate-the-elearning-page;to-verify-whether-admin-is-able-to-subscribe-sessions-to-promotion-icon",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@CreateSubscription"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I click on Subscribe sessions to promotion icon",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "select session in Sessions not subscribed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on arrow",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I click on subscribe sessions in promotion window button",
  "keyword": "When "
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_Subscribe_sessions_to_promotion_icon()"
});
formatter.result({
  "duration": 73264400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//img[@title\u003d\u0027Subscribe sessions to promotions\u0027])[3]\"}\n  (Session info: chrome\u003d83.0.4103.116)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027STANUKON\u0027, ip: \u00279.77.207.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\SRAVAN~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 83.0.4103.116, webStorageEnabled: true}\nSession ID: c211680bad5a494f48253358767a22f4\n*** Element info: {Using\u003dxpath, value\u003d(//img[@title\u003d\u0027Subscribe sessions to promotions\u0027])[3]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinitions.ELearning_Stepdefinitions.I_click_on_Subscribe_sessions_to_promotion_icon(ELearning_Stepdefinitions.java:106)\r\n\tat ✽.When I click on Subscribe sessions to promotion icon(ExcelElearning.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.select_session_in_Sessions_not_subscribed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_subscribe_sessions_in_promotion_window_button()"
});
formatter.result({
  "status": "skipped"
});
