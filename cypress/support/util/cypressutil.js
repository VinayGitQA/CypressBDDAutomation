var cyutil ={
    /**
     * @param {*} website 
     * @description :to verify page access from respective browser
     * @author: vinay
     */
    visitpage:(website)=>{
        cy.visit(website)
    },

    /**
     * @description : to verify console error is not present after page load
     * @author: vinay
     */
    verifyConsoleError: ()=>{
        cy.window().then((win) => {
            expect(win.console.error).to.have.callCount(0);
           
          });
    },
    /**
     * @description: to verify all the links in the page directs to active page 
     * @author: vinay
     */
    verifyCurrentPageLink:()=>{
        cy.get('a[href^="http"').each($a=>{
            cy.log('The attribure is '+$a.attr('href'))
            cy.request($a.attr('href')).its('status').should('eq',200)
        })  
    }

}

export default {cyutil}