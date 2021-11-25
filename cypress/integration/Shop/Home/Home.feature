Feature: Pagina Principal
  Yo como cliente
  Quiero ingresar al sitio
  Para poder ver los productos que ofrecen

  Scenario: Ingresando a Home
    Given que ingreso a la pagina principal
    Then veo el titulo "¿Qué deseas comprar hoy?" de la pagina

  Scenario: Lista Producto
    Given que estoy en la pagina principal
    Then veo el titulo "Recomendados" de la lista de productos