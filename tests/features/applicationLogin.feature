Feature:  User Athentification tests
   As a valid user 
   I want to Login to the application




Background:
   Given User navigates to the application
  


   Scenario: Login should be success
   And User click on sign in link
   When User enter the valid userEmail as "fattytaiwo05@yahoo.co.uk"
   And User click on the continue button
   And User enter the  valid password as "Mayowa123_4"
   And User click on the sign in button
   Then Login should be successful

  # Scenario: Login should not be success
  # When User enter the valid userEmail as "fattytaiwo05@yahoo.co.uk"
  # And User click on the continue button
  # And User enter the  invalid password as "Mayow"
  # And User click on the sign in button
  # But Login should fail