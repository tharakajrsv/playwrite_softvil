@admin @ui
Feature: User Login to Admin Portal

  @regression @sanity @test
  Scenario: Verify that user can be login successfuly to the Admin portal when use valid username and password
    Given User is on the Admin login page
    When User enters valid credentials for the Admin portal
    Then User should be redirected to the Admin dashboard
    
  
