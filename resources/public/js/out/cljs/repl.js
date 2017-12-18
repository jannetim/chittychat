// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12752_12764 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12753_12765 = null;
var count__12754_12766 = (0);
var i__12755_12767 = (0);
while(true){
if((i__12755_12767 < count__12754_12766)){
var f_12768 = cljs.core._nth.call(null,chunk__12753_12765,i__12755_12767);
cljs.core.println.call(null,"  ",f_12768);

var G__12769 = seq__12752_12764;
var G__12770 = chunk__12753_12765;
var G__12771 = count__12754_12766;
var G__12772 = (i__12755_12767 + (1));
seq__12752_12764 = G__12769;
chunk__12753_12765 = G__12770;
count__12754_12766 = G__12771;
i__12755_12767 = G__12772;
continue;
} else {
var temp__4423__auto___12773 = cljs.core.seq.call(null,seq__12752_12764);
if(temp__4423__auto___12773){
var seq__12752_12774__$1 = temp__4423__auto___12773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12752_12774__$1)){
var c__5094__auto___12775 = cljs.core.chunk_first.call(null,seq__12752_12774__$1);
var G__12776 = cljs.core.chunk_rest.call(null,seq__12752_12774__$1);
var G__12777 = c__5094__auto___12775;
var G__12778 = cljs.core.count.call(null,c__5094__auto___12775);
var G__12779 = (0);
seq__12752_12764 = G__12776;
chunk__12753_12765 = G__12777;
count__12754_12766 = G__12778;
i__12755_12767 = G__12779;
continue;
} else {
var f_12780 = cljs.core.first.call(null,seq__12752_12774__$1);
cljs.core.println.call(null,"  ",f_12780);

var G__12781 = cljs.core.next.call(null,seq__12752_12774__$1);
var G__12782 = null;
var G__12783 = (0);
var G__12784 = (0);
seq__12752_12764 = G__12781;
chunk__12753_12765 = G__12782;
count__12754_12766 = G__12783;
i__12755_12767 = G__12784;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12785 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4309__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12785);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12785)))?cljs.core.second.call(null,arglists_12785):arglists_12785));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12756 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12757 = null;
var count__12758 = (0);
var i__12759 = (0);
while(true){
if((i__12759 < count__12758)){
var vec__12760 = cljs.core._nth.call(null,chunk__12757,i__12759);
var name = cljs.core.nth.call(null,vec__12760,(0),null);
var map__12761 = cljs.core.nth.call(null,vec__12760,(1),null);
var map__12761__$1 = ((cljs.core.seq_QMARK_.call(null,map__12761))?cljs.core.apply.call(null,cljs.core.hash_map,map__12761):map__12761);
var doc = cljs.core.get.call(null,map__12761__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__12761__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12786 = seq__12756;
var G__12787 = chunk__12757;
var G__12788 = count__12758;
var G__12789 = (i__12759 + (1));
seq__12756 = G__12786;
chunk__12757 = G__12787;
count__12758 = G__12788;
i__12759 = G__12789;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__12756);
if(temp__4423__auto__){
var seq__12756__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12756__$1)){
var c__5094__auto__ = cljs.core.chunk_first.call(null,seq__12756__$1);
var G__12790 = cljs.core.chunk_rest.call(null,seq__12756__$1);
var G__12791 = c__5094__auto__;
var G__12792 = cljs.core.count.call(null,c__5094__auto__);
var G__12793 = (0);
seq__12756 = G__12790;
chunk__12757 = G__12791;
count__12758 = G__12792;
i__12759 = G__12793;
continue;
} else {
var vec__12762 = cljs.core.first.call(null,seq__12756__$1);
var name = cljs.core.nth.call(null,vec__12762,(0),null);
var map__12763 = cljs.core.nth.call(null,vec__12762,(1),null);
var map__12763__$1 = ((cljs.core.seq_QMARK_.call(null,map__12763))?cljs.core.apply.call(null,cljs.core.hash_map,map__12763):map__12763);
var doc = cljs.core.get.call(null,map__12763__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__12763__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12794 = cljs.core.next.call(null,seq__12756__$1);
var G__12795 = null;
var G__12796 = (0);
var G__12797 = (0);
seq__12756 = G__12794;
chunk__12757 = G__12795;
count__12758 = G__12796;
i__12759 = G__12797;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map