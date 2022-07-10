Feature: w3.org website verification
Description: accessing different w3.org page and verifying respective weblinks

Scenario Outline: w3.org webpage access and verification of available weblinks in the page
Given The user has access to "<website>"
And the website has no console errors 
Then respective weblink in the page provide access to live page
Examples:
    | website                                            |
    |https://www.w3.org/standards/badpage                |
    |https://www.w3.org/standards/webofdevices/multimodal|
    |https://www.w3.org/standards/webdesign/htmlcss      |