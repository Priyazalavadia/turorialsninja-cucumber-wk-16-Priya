$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktopstest.feature");
formatter.feature({
  "line": 2,
  "name": "Desktops Test",
  "description": "As a user I want to arrange listing in alphabetical order and verify product added to shopping cart",
  "id": "desktops-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.before({
  "duration": 6048790700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "USer can verify product arrange in alphabatical order",
  "description": "",
  "id": "desktops-test;user-can-verify-product-arrange-in-alphabatical-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"Desktops\" Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can Select Sort By position Name Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify the Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 92376800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 18
    }
  ],
  "location": "TopMenuTestSteps.iMouseHoverOnTabAndClick()"
});
formatter.result({
  "duration": 257500,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.tutorialsninja.steps.TopMenuTestSteps.iMouseHoverOnTabAndClick() in file:/C:/Users/giris/IdeaProjects/turorialsninja-cucumber-wk-16-Priya/target/test-classes/\u0027 with pattern [^I mouse hover on \"([^\"]*)\" Tab and click$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Desktops]. \nStep: When I mouse hover on \"Desktops\" Tab and click\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DesktopsTestSteps.iCanSelectSortByPositionNameZToA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopsTestSteps.verifyTheProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1004243000,
  "status": "passed"
});
formatter.before({
  "duration": 3324062400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User can verify Product Added To Shopping Cart SuccessFully",
  "description": "",
  "id": "desktops-test;user-can-verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I change currency to Pound Sterling",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on \"Desktops\" Tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select Sort By position \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select product “HP LP3065”",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the Text \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select Delivery Date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Qty \"1” using Select class.",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on “Add to Cart” button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify the Message “Success: You have added HP LP3065 to your shopping cart!”",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on link “shopping cart” display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify the text \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the Product name \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the Delivery Date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the Model \"Product21\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Total \"£74.73\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsTestSteps.iChangeCurrencyToPoundSterling()"
});
formatter.result({
  "duration": 682604700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 18
    }
  ],
  "location": "TopMenuTestSteps.iMouseHoverOnTabAndClick()"
});
formatter.result({
  "duration": 469000,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.tutorialsninja.steps.TopMenuTestSteps.iMouseHoverOnTabAndClick() in file:/C:/Users/giris/IdeaProjects/turorialsninja-cucumber-wk-16-Priya/target/test-classes/\u0027 with pattern [^I mouse hover on \"([^\"]*)\" Tab and click$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Desktops]. \nStep: And I mouse hover on \"Desktops\" Tab and click\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 25
    }
  ],
  "location": "DesktopsTestSteps.selectSortByPosition(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 21
    }
  ],
  "location": "DesktopsTestSteps.selectProductHPLP(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 17
    }
  ],
  "location": "DesktopsTestSteps.verifyTheText()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 22
    }
  ],
  "location": "DesktopsTestSteps.selectDeliveryDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    }
  ],
  "location": "DesktopsTestSteps.enterQtyUsingSelectClass()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopsTestSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 49
    }
  ],
  "location": "DesktopsTestSteps.verifyTheMessageSuccessYouHaveAddedHPLPToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopsTestSteps.clickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 17
    }
  ],
  "location": "DesktopsTestSteps.verifyTheTextInShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 25
    }
  ],
  "location": "DesktopsTestSteps.verifyTheProductName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 26
    }
  ],
  "location": "DesktopsTestSteps.verifyTheDeliveryDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product21",
      "offset": 18
    }
  ],
  "location": "DesktopsTestSteps.verifyTheModel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "£74.73",
      "offset": 18
    }
  ],
  "location": "DesktopsTestSteps.verifyTheTotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 946965400,
  "status": "passed"
});
});