/// <reference types="cypress" />
describe('Client request', () =>{
    it('Should do some st', () =>{
        cy.visit('/');
    })
    it('cy.request() - make an XHR request', () => {
        cy.request('http://localhost:8080/customer')
          .should((response) => {
            expect(response.status).to.eq(200)
            // the server sometimes gets an extra comment posted from another machine
            // which gets returned as 1 extra object
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
          })
      })
})