
describe('traverse', function(){

  var tests = document.querySelectorAll('div:nth-child(1n+2)')
    , html = document.head.parentNode
    , traverse = require('traverse')
    , assert = require('assert');

  describe('traverse("nextSibling", el, "div", Infinity)', function(){
    it('should not error when theres no nextSibling', function(){
      var el = document.createElement('div');
      assert(0 == traverse('nextSibling', el).length);
    })
    it('should get all next divs with length of 5', function(){
      var el = tests[0].querySelector('.one');
      var els = traverse('nextSibling', el, 'div', Infinity);
      assert(5 == els.length);
      assertall('div', els);
    })
  })

  describe('traverse("previousSibling", el, "p", Infinity)', function(){
    it('should get all previous paragraphs with length of 3', function(){
      var el = tests[0].querySelector('.one');
      var els = traverse('previousSibling', el, 'p', Infinity);
      assert(3 == els.length);
      assertall('p', els);
    })
  })

  describe('traverse("previousSibling", el, "*", Infinity)', function(){
    it('should get all previous els with length of 7', function(){
      var el = tests[0].querySelector('.one');
      var els = traverse('previousSibling', el, null, Infinity);
      assert(7 == els.length);
    })
  })

  describe('traverse("previousSibling", el, null,  1)', function(){
    it('should get a single previous el', function(){
      var el = tests[0].querySelector('.one');
      var els = traverse('previousSibling', el, null, 1);
      assert(1 == els.length);
    })
  })

  describe('traverse("parentNode", el, null, Infinity)', function(){
    it('should get all parents', function(){
      var el = tests[0].querySelector('.one');
      var els = traverse('parentNode', el, null, Infinity);
      assert(3 == els.length);
    })
  })

  describe('traverse("parentNode", el, "body", 1)', function(){
    it('should get the document body element.', function(){
      var el = tests[0].querySelector('.one');
      var els = traverse('parentNode', el, 'body', 1);
      assert(document.body == els[0]);
      assert(1 == els.length);
    })
  })

  describe('traverse("parentNode", html)', function(){
    it('should return an empty array', function(){
      assert(0 == traverse('parentNode', html));
    })
  })



  function assertall(type, els){
    for (var i = 0; i < els.length; ++i) {
      assert(type == els[i].tagName.toLowerCase(), 'assert "' + type + '"');
    }
  }

});
