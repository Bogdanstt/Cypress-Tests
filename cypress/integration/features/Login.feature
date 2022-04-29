@regression
Feature: WebdriverUniversity Login Page

    Scenario:Login using valid credentials
        Given I acces the webdriveruniversity Login page
        When I enter a username webdriver
        And I enter the password webdriver123
        And I click on the login button
        Then I should be presented the following message: validation succeeded

    Scenario:Login using invalid credentials(password)
        Given I acces the webdriveruniversity Login page
        When I enter a username webdriver
        And I enter the password webdriver555
        And I click on the login button
        Then I should be presented the following message: validation failed

    @login
    Scenario Outline: Test Login via Webdriveruniversity Login Portal
        Given I acces the webdriveruniversity Login page
        When I enter a username <username>
        And I enter the password <password>
        And I click on the login button
        Then I should be presented the following message: <message>

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver555 | validation failed    |