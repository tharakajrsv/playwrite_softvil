@organization @ui
Feature: User Login to Organization Portal

  @regression @sanity @test
  Scenario: Verify that user can be login successfuly to the Organization portal when use valid username and password
    Given User is on the Organization login page
    When User enters valid credentials for the Organization portal
    Then User should be redirected to the Organization dashboard
    
  
