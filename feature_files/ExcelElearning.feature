@ESC!20
Feature: This feature is to automate the Elearning page
         To Verify whether application allows admin to create career, promotion & subscribe session to promotion
  
@openAdminTab
  Scenario: Login  to Elearning page
    Given I open the browser and enter the url 
    Then I enter the username 
    And I enter the password 
    Then I click the login button
    When I click the Administratortab
@CreateCareer
  Scenario: To verify whether admin is able to create Career
    Then I click on CareesAndPromotionsLink
    When I click the career link
    When I click on AddIcon
    Then I enter the Name 
    When I click on Add Button
    Then Display ITEM Added Message
@CreatePromotion
Scenario: To verify whether admin is able to create Promotion
    Then I click on CareesAndPromotionsLink
    When I click on Promotions Link
    When I click on ADDIcon
    Then I enter the name 
    When I click on ADD Button
    Then Display ITEM Added Message1
@CreateSubscription
Scenario: To verify whether admin is able to subscribe sessions to promotion icon
    When I click on Subscribe sessions to promotion icon
    Then select session in Sessions not subscribed 
    When I click on arrow 
    When I click on subscribe sessions in promotion window button
    
    
    