$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Access seleniumframework.com website",
  "description": "Use selenium java with cucumber-jvm and navigate to website",
  "id": "access-seleniumframework.com-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 915520849,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Print title, url",
  "description": "",
  "id": "access-seleniumframework.com-website;print-title,-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open seleniumframework website",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I validate title and URL",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_open_seleniumframework_website()"
});
formatter.result({
  "duration": 17489591126,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_print_title_and_URL()"
});
formatter.result({
  "duration": 11033760,
  "status": "passed"
});
formatter.after({
  "duration": 75404033,
  "status": "passed"
});
});