webpackJsonp([5,9],{496:function(t,o,n){o=t.exports=n(487)(),o.push([t.i,"lazy-child-two-component h1{color:green}",""])},506:function(t,o,n){var e=n(496);"string"==typeof e&&(e=[[t.i,e,""]]);n(488)(e,{});e.locals&&(t.exports=e.locals)},517:function(t,o){t.exports="<h1>Lazy child two loaded</h1>"},539:function(t,o,n){"use strict";var e=n(506),i=(n.n(e),function(){function t(){}return t}()),a={controller:i,template:n(517)};o.a=a},540:function(t,o,n){"use strict";function e(t){t.state("lazyChildTwo",{parent:"lazyParent",component:"lazyChildTwoComponent",data:{isChild:!0,navTitle:"Lazy Child Two",moduleTitle:"Lazy Child Two",isMenuItem:!0}})}e.$inject=["$stateProvider"],o.a=e},541:function(t,o,n){"use strict";var e=n(12),i=(n.n(e),n(539)),a=n(540),l=n.i(e.module)("lazy-child-two",[]).component("lazyChildTwoComponent",i.a).config(a.a).name;o.default=l}});