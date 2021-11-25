Feature: Lista de Productos
  Yo como cliente
  Quiero ver la lista productos
  Para ver productos ofrece la tienda

  Scenario: listar productos
    Given el cliente conoce la direccion de la pagina
    When ingresa a la pagina principal
    Then el sistema muestra la lista de productos destacados