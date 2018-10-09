/// <reference types="cypress" />

describe('My Aurelia Test', function() {
  it('get message', function() {
    cy.visit('http://localhost:8080/');

    cy.get("h1").should( _tr => {
      const value = _tr.text();
      expect(value).to.eq('Hello World!');
    });
  })
})
