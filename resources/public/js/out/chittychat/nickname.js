// Compiled by ClojureScript 0.0-3291 {}
goog.provide('chittychat.nickname');
goog.require('cljs.core');
chittychat.nickname.nick = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nick","nick",1903283010),""], null));
/**
 * docstring
 */
chittychat.nickname.set_nick_BANG_ = (function chittychat$nickname$set_nick_BANG_(nick){
cljs.core.println.call(null,"plaa");

return cljs.core.swap_BANG_.call(null,nick,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nick], null),nick);
});

//# sourceMappingURL=nickname.js.map