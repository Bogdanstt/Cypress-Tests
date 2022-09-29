# Experimental tests / examples -  with cypress framework

## All spec files can be found in cypress\e2e 


**Demo websites used:**

### https://webdriveruniversity.com/
- [Autocomplete dropdown list](cypress/e2e/webdriver-uni/autocomplete-dropdown-list.js)
- [Browser navigation](cypress\e2e\webdriver-uni\browser-navigation.js)
- [Checkboxes](cypress\e2e\webdriver-uni\checkboxes.js)
- [Enter data and submit ContactUs form using Page Object Model](cypress/e2e/webdriver-uni/contact-us.spec.js)
- [Working with data tables](cypress\e2e\webdriver-uni\data-tables.js)
- [Working with date-picker](cypress\e2e\webdriver-uni\date-picker.js)
- [File upload, read and write file](cypress\e2e\webdriver-uni\file-upload.js)
- [Interact with hidden elements](cypress\e2e\webdriver-uni\hidden.js)
- [Iframes](cypress\e2e\webdriver-uni\iframe.js)
- [Handling alerts and  confirm pop-ups](cypress\e2e\webdriver-uni\js-alerts.js)
- [Mouse actions: scrollIntoView, drag-n-drop, double-click, left-click, hover](cypress\e2e\webdriver-uni\mouse-action.js)
- [Radio buttons](cypress\e2e\webdriver-uni\radio-buttons.js)
- [Select values from dropdownlist](cypress\e2e\webdriver-uni\select-dropdown-list.js)
- [Traversing DOM elements](cypress\e2e\webdriver-uni\traversing-elements.js)

### https://automationteststore.com/
- [Using <code>alias</code> and <code>invoke</code>](cypress\e2e\automation-test-store\alias-invoke.js)
- [Using <code>fixture</code> to submit a contact-us form](cypress\e2e\automation-test-store\contact-us.js)
- [Showing chain of commands usage and  <code>contains</code> command](cypress\e2e\automation-test-store\inspect-item.js)
- [Iterate over elements using <code>each</code>](cypress\e2e\automation-test-store\iterate-over-elements.js)
- [Variables and jquery commands](cypress\e2e\automation-test-store\iterate-over-elements.js)

### http://uitestingplayground.com/
- [Delayed DOM elements, Ajax request and javascript proccesing](cypress\e2e\uitestingplayground\delays.js)
- [Button interactions, scrolling into view a button, asserting data in a dynamic table, finding elements with text containing spaces, working with a progress bar with __cypress-recurse__  ](cypress\e2e\uitestingplayground\interactions.js)
- [Simple UI login](cypress\e2e\uitestingplayground\login.js)
- [Clicking on a link that changes all attributes on mouseover](cypress\e2e\uitestingplayground\mouseoverclick.js)
- [Dealing with non-breaking space in cypress commands and assertions](cypress\e2e\uitestingplayground\nbsp.js)
- [Entering text into an input covered by other element](cypress\e2e\uitestingplayground\overlapped.js)
- [Simple shawdow DOM example](cypress\e2e\uitestingplayground\shadowdom.js)
- [Interacting with elements that are not visible (zero height/width, overlapped, max transparency, hidden, display:none, offscreen)](cypress\e2e\uitestingplayground\shadowdom.js)

### https://demoqa.com/
- [Alert, confirm, prompt](cypress\e2e\demoqa.com\alerts.js)
- [New tab, new window, new window message](cypress\e2e\demoqa.com\browserWindows.js)
- [Textboxes, checkboxes, radio buttons, sortable web tables, mouse clicks, response status codes, upload/download, dynamic props](cypress\e2e\demoqa.com\elements.js)
- [Full practice regitration form including interaction with elements and file upload](cypress\e2e\demoqa.com\forms.js)
- [Using <code>contentDocument</code> to extract text from *body* . <code>Intercept</code> GET request to assert  *body* element](cypress\e2e\demoqa.com\frames.js)
- [Sortable, selectable divs & resizable, droppable, dragabble, boxes](cypress\e2e\demoqa.com\interactions.js)
- [Checking performance metrics: page load time, image load time, slowest image. Show the use of <code>window.performance</code>](cypress\e2e\demoqa.com\performanceMeasure.js)
- [Widges: accordian, auto-complete, date&time picker, slider, tooltip, select menu ](cypress\e2e\demoqa.com\widgets.js)

### API testing
- [Widges: accordian, auto-complete, date&time picker, slider, tooltip, select menu ](cypress\e2e\demoqa.com\widgets.js)
- [API  GET request](cypress\e2e\api-testing\get-request.js)
- [API  POST request](cypress\e2e\api-testing\post-request.js)
- [API  DELETE request](cypress\e2e\api-testing\delete-request.js)
- [API  UPDATE request](cypress\e2e\api-testing\update-request.js)
- [Create, assert, delete new comment with <code>request</code>API](cypress\e2e\api-testing\api-challenge.js)

### https://www.rahulshettyacademy.com/AutomationPractice/

- [Radio buttons, autocomplete, dropdown menu and checkboxes | New tab link check | Alert and confirm pop-ups | Traverse table | Visibilityof input | Iframe | Mouse hover](cypress\e2e\qa\qaclickacademy.js)

### [Example of <code>cy.intercept()</code>](cypress\e2e\other\intercept.js)
- Intercept a request and stub the response body
- Intercept the  request  and stub the request body. Show the use of *res.setThrottle / set.Delay*
- Intercept the  request, modify and merge with the actual response

### [ Example of <code>cy.request()</code>](cypress\e2e\other\request.js)
- Use cy.request to make API requests.
- Use cy.request to authenticate with csrftoken method and assert the *customer cookie*.
- Use cy.request do a simple authentication.

### [ Example of <code>cy.origin()</code> to navigate to another superdomain](cypress\e2e\other\same-origin-policy.js)
- Validate visiting two different super-domains => *NOT WORKING*
- Use cy.origin to visit different origin website and login (with *args Object*)

### [ Example of <code>cy.session()</code>  ](cypress\e2e\other\same-origin-policy.js)
- Part of Test 3 was generated with **Cypress Studio**

### [Some example usage of <code>cy.stub()/spy()</code> ](cypress\e2e\other\spyStub.js)
- Spy on a function and validate it arguments
- Stub on a function and its return value
