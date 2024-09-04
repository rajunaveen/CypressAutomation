describe('Handling Child Windows', () => 
    {
    it('Should handle child window', () => 
        {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
 
       cy.get("#opentab").invoke('removeAttr','target').click();
 
       cy.origin("https://www.qaclickacademy.com",()=>
       {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
 
       })
 
 
    });

    it('Handling Web Table',function() {
 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
         
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
         
            const text=$e1.text()
            if(text.includes("Python"))
            {
         
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                 const priceText=   price.text()
                 expect(priceText).to.equal('25')
                })
            }
         
        })
         
         
        })
         
        it('Child Window',function() {
 
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
             
            //cy.get('div.mouse-hover-content').invoke('show')
            cy.contains('Top').click({force: true})
            cy.url().should('include','top')
            })      
 
});