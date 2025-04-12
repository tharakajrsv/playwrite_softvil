@user @ui
Feature: User Login to User Portal

  @regression @sanity @test
  Scenario: Verify that user can be login successfuly to the User portal when use valid username and password
    Given User is on the User login page
    When User enters valid credentials for the User portal
    Then User should be redirected to the User dashboard
    
  
