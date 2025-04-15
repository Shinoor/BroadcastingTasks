@music @navigation
Feature: Music Page Navigation on BBC Sounds
  As a user
  I want to navigate through the music section of BBC Sounds
  So that I can discover and play music easily

  @homepage @accessibility
  Scenario: User navigates to the Music page from the homepage
    Given I am on the BBC Sounds homepage
    When I click on the "Music" navigation link
    Then I should be taken to the Music landing page
    And the page title should contain "Music"

  @category @filter
  Scenario: User filters music by a specific genre
    Given I am on the Music landing page
    When I select the "Classical" genre from the filter options
    Then I should see a list of classical music shows
    And each show should be tagged with "Classical"