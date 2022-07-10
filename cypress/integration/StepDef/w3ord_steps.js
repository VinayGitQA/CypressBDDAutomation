/// <reference types="cypress" />
import {Given, Then, When, And} from 'cypress-cucumber-preprocessor/steps'
// import statement to access page functions
import {badpage} from '../../support/pageobject/ui_methods/badpagePage_method'
import {htmlcsspage} from '../../support/pageobject/ui_methods/htmlcssPage_method'
import {multimodalpage} from '../../support/pageobject/ui_methods/multimodalPage_method'
// import cypress utility 
import {cyutil} from '../../support/util/cypressutil'

Given ('The user has access to {string}',(website)=>{
    cyutil.visitpage(website);
})

And ('the website has no console errors',()=>{
   cyutil.verifyConsoleError();
 
}) 

Then('respective weblink in the page provide access to live page',()=>{
   cyutil.verifyCurrentPageLink();   
})