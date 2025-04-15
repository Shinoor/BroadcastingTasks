Feature: Sounds Homepage Navigation and Validation
 As a user
 I WANT to navigate to the Sounds Homepage
 SO THAT I can explore audio content such as live radio, podcasts, and music categories in one
location.
 Background:
 Given I am on the "BBC Sounds Homepage"
 @todo
 Scenario: Validate the "Listen Live" rail and its links
 Then I should see cards displayed in the "Listen Live" rail
 When I click the "View all Stations & Schedules" link within the "Listen Live" rail
 Then I should be redirected to the "ALL_STATIONS" page

 @todo
 Scenario: Validate category rail cards and links
 Then I should see a rail titled "Categories"
 And the rail should display twelve category links
 When I click the "View all Categories" link on the "Categories" rail
 Then I should be redirected to the "ALL

  @todo
 Scenario: Validate "Sign In" popup is shown when playing content
 Then I should see the "Listen Live" rail
 When I click on "Radio 1" card
 Then I should be redirected to the "Play" page
 When I click the "Play" button
 Then I should see a prompt to "Sign In" or "Register"