Feature: Conversor de temperaturas

Como usuario,
necesito convertir valores de temperaturas
para conocer el equivalente de °C expresado en °F

Scenario: Datos validos
	Given un dato de tipo numero
	When es ingresado en el campo de input "1"
	Then se muestra el resultado de la temperatura

Scenario: Datos invalidos
	Given un dato de tipo texto
	When es ingresado en el campo de input "e"
	Then se muestra un error
	
#	Results :
#
#Tests run: 8, Failures: 0, Errors: 0, Skipped: 0