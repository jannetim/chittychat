// Compiled by ClojureScript 0.0-3291 {}
goog.provide('chittychat.websockets');
goog.require('cljs.core');
goog.require('cognitect.transit');
if(typeof chittychat.websockets.ws_chan !== 'undefined'){
} else {
chittychat.websockets.ws_chan = cljs.core.atom.call(null,null);
}
if(typeof chittychat.websockets.chatroom !== 'undefined'){
} else {
chittychat.websockets.chatroom = cljs.core.atom.call(null,null);
}
chittychat.websockets.json_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
chittychat.websockets.json_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
chittychat.websockets.receive_transit_msg_BANG_ = (function chittychat$websockets$receive_transit_msg_BANG_(update_fn){
return (function (msg){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cognitect.transit.read.call(null,chittychat.websockets.json_reader,msg.data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room","room",536484922)], null)),cljs.core.deref.call(null,chittychat.websockets.chatroom))){
return update_fn.call(null,cognitect.transit.read.call(null,chittychat.websockets.json_reader,msg.data));
} else {
return null;
}
});
});
chittychat.websockets.send_transit_msg_BANG_ = (function chittychat$websockets$send_transit_msg_BANG_(msg){
if(cljs.core.truth_(cljs.core.deref.call(null,chittychat.websockets.ws_chan))){
return cljs.core.deref.call(null,chittychat.websockets.ws_chan).send(cognitect.transit.write.call(null,chittychat.websockets.json_writer,msg));
} else {
throw (new Error("Websocket is not available!"));
}
});
chittychat.websockets.make_websocket_BANG_ = (function chittychat$websockets$make_websocket_BANG_(url,receive_handler){
cljs.core.println.call(null,"attempting to connect websocket");

var temp__4421__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__4421__auto__)){
var chan = temp__4421__auto__;
chan.onmessage = chittychat.websockets.receive_transit_msg_BANG_.call(null,receive_handler);

cljs.core.reset_BANG_.call(null,chittychat.websockets.ws_chan,chan);

return cljs.core.println.call(null,"Websocket connection established with: ",url);
} else {
throw (new Error("Websocket connection failed!"));
}
});
chittychat.websockets.room_filter_BANG_ = (function chittychat$websockets$room_filter_BANG_(room){
cljs.core.println.call(null,room);

cljs.core.println.call(null,cljs.core.deref.call(null,chittychat.websockets.chatroom));

return cljs.core.reset_BANG_.call(null,chittychat.websockets.chatroom,room);
});

//# sourceMappingURL=websockets.js.map