// Compiled by ClojureScript 0.0-3291 {}
goog.provide('chittychat.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('chittychat.websockets');
if(typeof chittychat.core.messages !== 'undefined'){
} else {
chittychat.core.messages = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof chittychat.core.room !== 'undefined'){
} else {
chittychat.core.room = reagent.core.atom.call(null,null);
}
chittychat.core.update_messages_BANG_ = (function chittychat$core$update_messages_BANG_(p__35096){
var map__35098 = p__35096;
var map__35098__$1 = ((cljs.core.seq_QMARK_.call(null,map__35098))?cljs.core.apply.call(null,cljs.core.hash_map,map__35098):map__35098);
var message = cljs.core.get.call(null,map__35098__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return cljs.core.swap_BANG_.call(null,chittychat.core.messages,((function (map__35098,map__35098__$1,message){
return (function (p1__35095_SHARP_){
return cljs.core.vec.call(null,cljs.core.take.call(null,(10),cljs.core.conj.call(null,p1__35095_SHARP_,message)));
});})(map__35098,map__35098__$1,message))
);
});
chittychat.core.message_list = (function chittychat$core$message_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25356__auto__ = (function chittychat$core$message_list_$_iter__35107(s__35108){
return (new cljs.core.LazySeq(null,(function (){
var s__35108__$1 = s__35108;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__35108__$1);
if(temp__4423__auto__){
var s__35108__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35108__$2)){
var c__25354__auto__ = cljs.core.chunk_first.call(null,s__35108__$2);
var size__25355__auto__ = cljs.core.count.call(null,c__25354__auto__);
var b__35110 = cljs.core.chunk_buffer.call(null,size__25355__auto__);
if((function (){var i__35109 = (0);
while(true){
if((i__35109 < size__25355__auto__)){
var vec__35113 = cljs.core._nth.call(null,c__25354__auto__,i__35109);
var i = cljs.core.nth.call(null,vec__35113,(0),null);
var message = cljs.core.nth.call(null,vec__35113,(1),null);
cljs.core.chunk_append.call(null,b__35110,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__35115 = (i__35109 + (1));
i__35109 = G__35115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35110),chittychat$core$message_list_$_iter__35107.call(null,cljs.core.chunk_rest.call(null,s__35108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35110),null);
}
} else {
var vec__35114 = cljs.core.first.call(null,s__35108__$2);
var i = cljs.core.nth.call(null,vec__35114,(0),null);
var message = cljs.core.nth.call(null,vec__35114,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),chittychat$core$message_list_$_iter__35107.call(null,cljs.core.rest.call(null,s__35108__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25356__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,chittychat.core.messages)));
})()], null);
});
chittychat.core.message_input = (function chittychat$core$message_input(nick){
var value = reagent.core.atom.call(null,null);
return ((function (value){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type message and press enter",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value){
return (function (p1__35116_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__35116_SHARP_.target.value);
});})(value))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (value){
return (function (p1__35117_SHARP_){
if(cljs.core._EQ_.call(null,p1__35117_SHARP_.keyCode,(13))){
chittychat.websockets.send_transit_msg_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"room","room",536484922),cljs.core.deref.call(null,chittychat.core.room),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str(cljs.core.deref.call(null,nick)),cljs.core.str(": "),cljs.core.str(cljs.core.deref.call(null,value))].join('')], null));

return cljs.core.reset_BANG_.call(null,value,null);
} else {
return null;
}
});})(value))
], null)], null);
});
;})(value))
});
chittychat.core.room_input = (function chittychat$core$room_input(){
var value = reagent.core.atom.call(null,null);
return ((function (value){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type room and press enter",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value){
return (function (p1__35118_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__35118_SHARP_.target.value);
});})(value))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (value){
return (function (p1__35119_SHARP_){
if(cljs.core._EQ_.call(null,p1__35119_SHARP_.keyCode,(13))){
cljs.core.reset_BANG_.call(null,chittychat.core.room,cljs.core.deref.call(null,value));

return chittychat.websockets.room_filter_BANG_.call(null,cljs.core.deref.call(null,value));
} else {
return null;
}
});})(value))
], null)], null);
});
;})(value))
});
chittychat.core.nick_input = (function chittychat$core$nick_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35120_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__35120_SHARP_.target.value);
})], null)], null);
});
chittychat.core.chat_page = (function chittychat$core$chat_page(){
var nick = reagent.core.atom.call(null,"Chittychatter");
return ((function (nick){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls","div.controls",1658515593),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Websocket Chittychat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nickname: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chittychat.core.nick_input,nick], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chatroom","div.chatroom",-345309524),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Chatroom: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chittychat.core.room_input], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chittychat.core.message_input,nick], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.messages","div.messages",-55661322),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Messages to ",cljs.core.deref.call(null,chittychat.core.room)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chittychat.core.message_list], null)], null)], null);
});
;})(nick))
});
chittychat.core.mount_components = (function chittychat$core$mount_components(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return chittychat.core.chat_page;},new cljs.core.Symbol("chittychat.core","chat-page","chittychat.core/chat-page",-1617192008,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"chittychat.core","chittychat.core",1952171759,null),new cljs.core.Symbol(null,"chat-page","chat-page",-46573320,null),"src-cljs/chittychat/core.cljs",16,1,50,50,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(chittychat.core.chat_page)?chittychat.core.chat_page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
chittychat.core.init_BANG_ = (function chittychat$core$init_BANG_(){
chittychat.websockets.make_websocket_BANG_.call(null,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/ws")].join(''),chittychat.core.update_messages_BANG_);

return chittychat.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map