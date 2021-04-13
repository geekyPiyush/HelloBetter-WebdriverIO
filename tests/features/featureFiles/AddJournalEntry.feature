Feature: Journal verification for DE/EN

  @regression
  Scenario Outline: Verify evening and morning jounral entries for a new user 

    Given I open patient staging app
    When I signup to patient portal
    Then I create and verify <numberOfEntries> journal entries for <journalType>
    And I logout of the application

    Examples:
    |journalType| numberOfEntries|
    |morning    | 3              |
    |evening    | 3              | 
