describe("jasmine-fixture 1.x", function() {
  return describe("affix", function() {
    var EXAMPLES, selector, _i, _len;
    beforeEach(function() {
      jasmineFixture(jQuery_1_6_4);
      return this.addMatchers({
        toInjectProperly: function() {
          var $result;
          $result = affix(this.actual);
          return $(this.actual).length > 0 && $.contains($result.parent(), this.actual);
        }
      });
    });
    EXAMPLES = ['span', '.foo', '.foo-hah', '#blah-blah', '#baz', 'h1.foo', 'h2#baz', 'h3#zing.zoom', 'h4.zoom#zing', 'div span ul li', 'a b c d e f g h i j k l m n o p q r s t u v w x y z', '.boom.bang.pow#whoosh', '#foo .panda', 'input#man .restroom', '.pants.zipper', 'foo > bar > baz', 'input[value="12"]', 'div[class="class1 class2 class3"] span[div="div1 div2 div3"]', 'form fieldset[name=ok] input#foo.sp1.sp1[foo="woo"][value="13"]', '[name="foo"][bar="baz"]', 'div[data-bind="my_item"]', '.ui-dialog[style="width: 1px; height: 5px"]', '#toddler .hidden.toy input[name="toyName"][value="cuddle bunny"]'];
    for (_i = 0, _len = EXAMPLES.length; _i < _len; _i++) {
      selector = EXAMPLES[_i];
      Then(function() {
        return expect(selector).toInjectProperly();
      });
      Then(function() {
        return expect($('body')).not.toHas(selector);
      });
    }
    context("a plain old div", function() {
      Given(function() {
        return this.$result = affix('div');
      });
      return Then(function() {
        return expect(this.$result).toIs('div');
      });
    });
    context("raw attrs", function() {
      Given(function() {
        return this.$result = affix('[name=foo]');
      });
      Then(function() {
        return expect($('body')).toHas('[name=foo]');
      });
      return Then(function() {
        return expect(this.$result).toIs('[name=foo]');
      });
    });
    context("nesting returns", function() {
      Given(function() {
        return this.$result = affix('table.sp_record tbody tr');
      });
      return Then(function() {
        return expect(this.$result).toIs('table');
      });
    });
    context("a siblings!", function() {
      Given(function() {
        return this.$result = affix('div h1+h2');
      });
      return Then(function() {
        return expect(this.$result.find('h1').siblings('h2')).toIs("h2");
      });
    });
    return context("chaining", function() {
      Given(function() {
        return this.$container = affix('.container');
      });
      When(function() {
        return this.$result = this.$container.affix('#content');
      });
      Then(function() {
        return expect(this.$container).toHas('#content');
      });
      return Then(function() {
        return expect(this.$result).toIs('#content');
      });
    });
  });
});