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
  "duration": 16901997200,
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
  "duration": 278199100,
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
  "duration": 721388000,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_calcualte_button()"
});
formatter.result({
  "duration": 8600155800,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_Administratortab()"
});
formatter.result({
  "duration": 2983444600,
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
  "duration": 7875673700,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_the_career_link()"
});
formatter.result({
  "duration": 2528017200,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_AddIcon()"
});
formatter.result({
  "duration": 4074662600,
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
  "duration": 7269560200,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_Add_Button()"
});
formatter.result({
  "duration": 6038555800,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.Display_ITEM_Added_Message()"
});
formatter.result({
  "duration": 59770500,
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
  "duration": 5355215500,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_Promotions_Link()"
});
formatter.result({
  "duration": 5499715200,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_the_ADDIcon()"
});
formatter.result({
  "duration": 4692258100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA for Tester",
      "offset": 18
    }
  ],
  "location": "ELearning_Stepdefinitions.i_enter_the_name(String)"
});
formatter.result({
  "duration": 3317200800,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.i_click_the_ADD_Button()"
});
formatter.result({
  "duration": 4938897400,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.Display_ITEM_Added_Message1()"
});
formatter.result({
  "duration": 86432300,
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
  "duration": 6207378200,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.select_session_in_Sessions_not_subscribed()"
});
formatter.result({
  "duration": 4269787200,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_arrow()"
});
formatter.result({
  "duration": 5196702200,
  "status": "passed"
});
formatter.match({
  "location": "ELearning_Stepdefinitions.I_click_on_subscribe_sessions_in_promotion_window_button()"
});
formatter.result({
  "duration": 1776189400,
  "status": "passed"
});
});