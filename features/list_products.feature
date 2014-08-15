Feature: List products
  In order to buy products I want
  As a customer
  I need to be able to view all available products

  Scenario: Seeing a notification if there are no products
    Given there are no products in the catalogue
    When I browse the catalogue
    Then I should be told that there are no products

  Scenario: Seeing list of 2 products
    Given there is a product "PJ-001" in the catalogue
    And there is a product "VG-025" in the catalogue
    When I browse the catalogue
    Then I should see these exact products in the catalogue

  Scenario: Seeing first 10 products in the 12 product catalogue
    Given there are following products in the catalogue:
      | SKU    |
      | PJ-001 |
      | PJ-002 |
      | PJ-003 |
      | PJ-005 |
      | PJ-007 |
      | VD-001 |
      | VD-002 |
      | PD-003 |
      | TS-001 |
      | TS-002 |
      | PS-003 |
      | SO-001 |
      | SO-002 |
    When I browse the catalogue
    Then I should see 2 pages of products
    And on the first page the first product should be "PJ-001"
    And on the first page the last product should be "PS-003"
