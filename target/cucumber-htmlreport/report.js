$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('C:\Users\angeles.sengenes\Documents\Java\Maven projects\MavenTemperaturas\src\test\resources\MavenTemperaturas.feature');
formatter.feature({
  "line": 1,
  "name": "Conversor de temperaturas",
  "description": "\r\nComo usuario,\r\nnecesito convertir valores de temperaturas\r\npara conocer el equivalente de n°C expresado en °F",
  "id": "conversor-de-temperaturas",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Datos validos",
  "description": "",
  "id": "conversor-de-temperaturas;datos-validos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "un dato de tipo numero",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "es ingresado en el campo de input \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "se muestra el resultado de la temperatura",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDef.DadoNum()"
});
formatter.result({
  "duration": 93910129214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "StepsDef.Cuando(String)"
});
formatter.result({
  "duration": 317483305,
  "status": "passed"
});
formatter.match({
  "location": "StepsDef.EntoncesResultado()"
});
formatter.result({
  "duration": 170969211,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Datos invalidos",
  "description": "",
  "id": "conversor-de-temperaturas;datos-invalidos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "un dato de tipo texto",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "es ingresado en el campo de input \"e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "se muestra un error",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDef.DadoTxt()"
});
formatter.result({
  "duration": 18097645453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e",
      "offset": 35
    }
  ],
  "location": "StepsDef.Cuando(String)"
});
formatter.result({
  "duration": 218492288,
  "status": "passed"
});
formatter.match({
  "location": "StepsDef.EntoncesError()"
});
formatter.result({
  "duration": 169065651,
  "status": "passed"
});
});