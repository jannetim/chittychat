// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__5349__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5349__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__12509_12517 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__12510_12518 = null;
var count__12511_12519 = (0);
var i__12512_12520 = (0);
while(true){
if((i__12512_12520 < count__12511_12519)){
var k_12521 = cljs.core._nth.call(null,chunk__12510_12518,i__12512_12520);
e.setAttribute(cljs.core.name.call(null,k_12521),cljs.core.get.call(null,attrs,k_12521));

var G__12522 = seq__12509_12517;
var G__12523 = chunk__12510_12518;
var G__12524 = count__12511_12519;
var G__12525 = (i__12512_12520 + (1));
seq__12509_12517 = G__12522;
chunk__12510_12518 = G__12523;
count__12511_12519 = G__12524;
i__12512_12520 = G__12525;
continue;
} else {
var temp__4423__auto___12526 = cljs.core.seq.call(null,seq__12509_12517);
if(temp__4423__auto___12526){
var seq__12509_12527__$1 = temp__4423__auto___12526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12509_12527__$1)){
var c__5094__auto___12528 = cljs.core.chunk_first.call(null,seq__12509_12527__$1);
var G__12529 = cljs.core.chunk_rest.call(null,seq__12509_12527__$1);
var G__12530 = c__5094__auto___12528;
var G__12531 = cljs.core.count.call(null,c__5094__auto___12528);
var G__12532 = (0);
seq__12509_12517 = G__12529;
chunk__12510_12518 = G__12530;
count__12511_12519 = G__12531;
i__12512_12520 = G__12532;
continue;
} else {
var k_12533 = cljs.core.first.call(null,seq__12509_12527__$1);
e.setAttribute(cljs.core.name.call(null,k_12533),cljs.core.get.call(null,attrs,k_12533));

var G__12534 = cljs.core.next.call(null,seq__12509_12527__$1);
var G__12535 = null;
var G__12536 = (0);
var G__12537 = (0);
seq__12509_12517 = G__12534;
chunk__12510_12518 = G__12535;
count__12511_12519 = G__12536;
i__12512_12520 = G__12537;
continue;
}
} else {
}
}
break;
}

var seq__12513_12538 = cljs.core.seq.call(null,children);
var chunk__12514_12539 = null;
var count__12515_12540 = (0);
var i__12516_12541 = (0);
while(true){
if((i__12516_12541 < count__12515_12540)){
var ch_12542 = cljs.core._nth.call(null,chunk__12514_12539,i__12516_12541);
e.appendChild(ch_12542);

var G__12543 = seq__12513_12538;
var G__12544 = chunk__12514_12539;
var G__12545 = count__12515_12540;
var G__12546 = (i__12516_12541 + (1));
seq__12513_12538 = G__12543;
chunk__12514_12539 = G__12544;
count__12515_12540 = G__12545;
i__12516_12541 = G__12546;
continue;
} else {
var temp__4423__auto___12547 = cljs.core.seq.call(null,seq__12513_12538);
if(temp__4423__auto___12547){
var seq__12513_12548__$1 = temp__4423__auto___12547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12513_12548__$1)){
var c__5094__auto___12549 = cljs.core.chunk_first.call(null,seq__12513_12548__$1);
var G__12550 = cljs.core.chunk_rest.call(null,seq__12513_12548__$1);
var G__12551 = c__5094__auto___12549;
var G__12552 = cljs.core.count.call(null,c__5094__auto___12549);
var G__12553 = (0);
seq__12513_12538 = G__12550;
chunk__12514_12539 = G__12551;
count__12515_12540 = G__12552;
i__12516_12541 = G__12553;
continue;
} else {
var ch_12554 = cljs.core.first.call(null,seq__12513_12548__$1);
e.appendChild(ch_12554);

var G__12555 = cljs.core.next.call(null,seq__12513_12548__$1);
var G__12556 = null;
var G__12557 = (0);
var G__12558 = (0);
seq__12513_12538 = G__12555;
chunk__12514_12539 = G__12556;
count__12515_12540 = G__12557;
i__12516_12541 = G__12558;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq12506){
var G__12507 = cljs.core.first.call(null,seq12506);
var seq12506__$1 = cljs.core.next.call(null,seq12506);
var G__12508 = cljs.core.first.call(null,seq12506__$1);
var seq12506__$2 = cljs.core.next.call(null,seq12506__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__12507,G__12508,seq12506__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5204__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5206__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5207__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5208__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__,hierarchy__5208__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__,hierarchy__5208__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5208__auto__,method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_12559 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_12559.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_12559.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_12559.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_12559);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__12560,st_map){
var map__12564 = p__12560;
var map__12564__$1 = ((cljs.core.seq_QMARK_.call(null,map__12564))?cljs.core.apply.call(null,cljs.core.hash_map,map__12564):map__12564);
var container_el = cljs.core.get.call(null,map__12564__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__12564,map__12564__$1,container_el){
return (function (p__12565){
var vec__12566 = p__12565;
var k = cljs.core.nth.call(null,vec__12566,(0),null);
var v = cljs.core.nth.call(null,vec__12566,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__12564,map__12564__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__12567,dom_str){
var map__12569 = p__12567;
var map__12569__$1 = ((cljs.core.seq_QMARK_.call(null,map__12569))?cljs.core.apply.call(null,cljs.core.hash_map,map__12569):map__12569);
var c = map__12569__$1;
var content_area_el = cljs.core.get.call(null,map__12569__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__12570){
var map__12572 = p__12570;
var map__12572__$1 = ((cljs.core.seq_QMARK_.call(null,map__12572))?cljs.core.apply.call(null,cljs.core.hash_map,map__12572):map__12572);
var content_area_el = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__){
return (function (state_12614){
var state_val_12615 = (state_12614[(1)]);
if((state_val_12615 === (1))){
var inst_12599 = (state_12614[(7)]);
var inst_12599__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12600 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12601 = ["10px","10px","100%","68px","1.0"];
var inst_12602 = cljs.core.PersistentHashMap.fromArrays(inst_12600,inst_12601);
var inst_12603 = cljs.core.merge.call(null,inst_12602,style);
var inst_12604 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12599__$1,inst_12603);
var inst_12605 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12599__$1,msg);
var inst_12606 = cljs.core.async.timeout.call(null,(300));
var state_12614__$1 = (function (){var statearr_12616 = state_12614;
(statearr_12616[(7)] = inst_12599__$1);

(statearr_12616[(8)] = inst_12605);

(statearr_12616[(9)] = inst_12604);

return statearr_12616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12614__$1,(2),inst_12606);
} else {
if((state_val_12615 === (2))){
var inst_12599 = (state_12614[(7)]);
var inst_12608 = (state_12614[(2)]);
var inst_12609 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_12610 = ["auto"];
var inst_12611 = cljs.core.PersistentHashMap.fromArrays(inst_12609,inst_12610);
var inst_12612 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12599,inst_12611);
var state_12614__$1 = (function (){var statearr_12617 = state_12614;
(statearr_12617[(10)] = inst_12608);

return statearr_12617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12614__$1,inst_12612);
} else {
return null;
}
}
});})(c__7047__auto__))
;
return ((function (switch__6985__auto__,c__7047__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto____0 = (function (){
var statearr_12621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12621[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto__);

(statearr_12621[(1)] = (1));

return statearr_12621;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto____1 = (function (state_12614){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_12614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e12622){if((e12622 instanceof Object)){
var ex__6989__auto__ = e12622;
var statearr_12623_12625 = state_12614;
(statearr_12623_12625[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12626 = state_12614;
state_12614 = G__12626;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto__ = function(state_12614){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto____1.call(this,state_12614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__))
})();
var state__7049__auto__ = (function (){var statearr_12624 = f__7048__auto__.call(null);
(statearr_12624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_12624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__))
);

return c__7047__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__12628 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__12628,(0),null);
var ln = cljs.core.nth.call(null,vec__12628,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__12631 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__12631,(0),null);
var file_line = cljs.core.nth.call(null,vec__12631,(1),null);
var file_column = cljs.core.nth.call(null,vec__12631,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12631,file_name,file_line,file_column){
return (function (p1__12629_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__12629_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__12631,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__4309__auto__ = file_line;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
var and__4297__auto__ = cause;
if(cljs.core.truth_(and__4297__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__4297__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__12633 = figwheel.client.heads_up.ensure_container.call(null);
var map__12633__$1 = ((cljs.core.seq_QMARK_.call(null,map__12633))?cljs.core.apply.call(null,cljs.core.hash_map,map__12633):map__12633);
var content_area_el = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__){
return (function (state_12680){
var state_val_12681 = (state_12680[(1)]);
if((state_val_12681 === (1))){
var inst_12663 = (state_12680[(7)]);
var inst_12663__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12664 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12665 = ["0.0"];
var inst_12666 = cljs.core.PersistentHashMap.fromArrays(inst_12664,inst_12665);
var inst_12667 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12663__$1,inst_12666);
var inst_12668 = cljs.core.async.timeout.call(null,(300));
var state_12680__$1 = (function (){var statearr_12682 = state_12680;
(statearr_12682[(7)] = inst_12663__$1);

(statearr_12682[(8)] = inst_12667);

return statearr_12682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12680__$1,(2),inst_12668);
} else {
if((state_val_12681 === (2))){
var inst_12663 = (state_12680[(7)]);
var inst_12670 = (state_12680[(2)]);
var inst_12671 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_12672 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_12673 = cljs.core.PersistentHashMap.fromArrays(inst_12671,inst_12672);
var inst_12674 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12663,inst_12673);
var inst_12675 = cljs.core.async.timeout.call(null,(200));
var state_12680__$1 = (function (){var statearr_12683 = state_12680;
(statearr_12683[(9)] = inst_12674);

(statearr_12683[(10)] = inst_12670);

return statearr_12683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12680__$1,(3),inst_12675);
} else {
if((state_val_12681 === (3))){
var inst_12663 = (state_12680[(7)]);
var inst_12677 = (state_12680[(2)]);
var inst_12678 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12663,"");
var state_12680__$1 = (function (){var statearr_12684 = state_12680;
(statearr_12684[(11)] = inst_12677);

return statearr_12684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12680__$1,inst_12678);
} else {
return null;
}
}
}
});})(c__7047__auto__))
;
return ((function (switch__6985__auto__,c__7047__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__6986__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__6986__auto____0 = (function (){
var statearr_12688 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12688[(0)] = figwheel$client$heads_up$clear_$_state_machine__6986__auto__);

(statearr_12688[(1)] = (1));

return statearr_12688;
});
var figwheel$client$heads_up$clear_$_state_machine__6986__auto____1 = (function (state_12680){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_12680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e12689){if((e12689 instanceof Object)){
var ex__6989__auto__ = e12689;
var statearr_12690_12692 = state_12680;
(statearr_12690_12692[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12693 = state_12680;
state_12680 = G__12693;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__6986__auto__ = function(state_12680){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__6986__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__6986__auto____1.call(this,state_12680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__6986__auto____0;
figwheel$client$heads_up$clear_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__6986__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__))
})();
var state__7049__auto__ = (function (){var statearr_12691 = f__7048__auto__.call(null);
(statearr_12691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_12691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__))
);

return c__7047__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__){
return (function (state_12725){
var state_val_12726 = (state_12725[(1)]);
if((state_val_12726 === (1))){
var inst_12715 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_12725__$1 = state_12725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12725__$1,(2),inst_12715);
} else {
if((state_val_12726 === (2))){
var inst_12717 = (state_12725[(2)]);
var inst_12718 = cljs.core.async.timeout.call(null,(400));
var state_12725__$1 = (function (){var statearr_12727 = state_12725;
(statearr_12727[(7)] = inst_12717);

return statearr_12727;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12725__$1,(3),inst_12718);
} else {
if((state_val_12726 === (3))){
var inst_12720 = (state_12725[(2)]);
var inst_12721 = figwheel.client.heads_up.clear.call(null);
var state_12725__$1 = (function (){var statearr_12728 = state_12725;
(statearr_12728[(8)] = inst_12720);

return statearr_12728;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12725__$1,(4),inst_12721);
} else {
if((state_val_12726 === (4))){
var inst_12723 = (state_12725[(2)]);
var state_12725__$1 = state_12725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12725__$1,inst_12723);
} else {
return null;
}
}
}
}
});})(c__7047__auto__))
;
return ((function (switch__6985__auto__,c__7047__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto____0 = (function (){
var statearr_12732 = [null,null,null,null,null,null,null,null,null];
(statearr_12732[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto__);

(statearr_12732[(1)] = (1));

return statearr_12732;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto____1 = (function (state_12725){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_12725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e12733){if((e12733 instanceof Object)){
var ex__6989__auto__ = e12733;
var statearr_12734_12736 = state_12725;
(statearr_12734_12736[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12737 = state_12725;
state_12725 = G__12737;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto__ = function(state_12725){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto____1.call(this,state_12725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__))
})();
var state__7049__auto__ = (function (){var statearr_12735 = f__7048__auto__.call(null);
(statearr_12735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_12735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__))
);

return c__7047__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map