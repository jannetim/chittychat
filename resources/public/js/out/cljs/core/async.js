// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t13531 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13531 = (function (fn_handler,f,meta13532){
this.fn_handler = fn_handler;
this.f = f;
this.meta13532 = meta13532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13533,meta13532__$1){
var self__ = this;
var _13533__$1 = this;
return (new cljs.core.async.t13531(self__.fn_handler,self__.f,meta13532__$1));
});

cljs.core.async.t13531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13533){
var self__ = this;
var _13533__$1 = this;
return self__.meta13532;
});

cljs.core.async.t13531.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta13532","meta13532",929245815,null)], null);
});

cljs.core.async.t13531.cljs$lang$type = true;

cljs.core.async.t13531.cljs$lang$ctorStr = "cljs.core.async/t13531";

cljs.core.async.t13531.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t13531");
});

cljs.core.async.__GT_t13531 = (function cljs$core$async$fn_handler_$___GT_t13531(fn_handler__$1,f__$1,meta13532){
return (new cljs.core.async.t13531(fn_handler__$1,f__$1,meta13532));
});

}

return (new cljs.core.async.t13531(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__13535 = buff;
if(G__13535){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__13535.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__13535.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13535);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13535);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__13537 = arguments.length;
switch (G__13537) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__13540 = arguments.length;
switch (G__13540) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13542 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13542);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13542,ret){
return (function (){
return fn1.call(null,val_13542);
});})(val_13542,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__13544 = arguments.length;
switch (G__13544) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5194__auto___13546 = n;
var x_13547 = (0);
while(true){
if((x_13547 < n__5194__auto___13546)){
(a[x_13547] = (0));

var G__13548 = (x_13547 + (1));
x_13547 = G__13548;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13549 = (i + (1));
i = G__13549;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13553 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13553 = (function (alt_flag,flag,meta13554){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13554 = meta13554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13555,meta13554__$1){
var self__ = this;
var _13555__$1 = this;
return (new cljs.core.async.t13553(self__.alt_flag,self__.flag,meta13554__$1));
});})(flag))
;

cljs.core.async.t13553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13555){
var self__ = this;
var _13555__$1 = this;
return self__.meta13554;
});})(flag))
;

cljs.core.async.t13553.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13553.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13554","meta13554",1550308394,null)], null);
});})(flag))
;

cljs.core.async.t13553.cljs$lang$type = true;

cljs.core.async.t13553.cljs$lang$ctorStr = "cljs.core.async/t13553";

cljs.core.async.t13553.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t13553");
});})(flag))
;

cljs.core.async.__GT_t13553 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13553(alt_flag__$1,flag__$1,meta13554){
return (new cljs.core.async.t13553(alt_flag__$1,flag__$1,meta13554));
});})(flag))
;

}

return (new cljs.core.async.t13553(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13559 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13559 = (function (alt_handler,flag,cb,meta13560){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13560 = meta13560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13561,meta13560__$1){
var self__ = this;
var _13561__$1 = this;
return (new cljs.core.async.t13559(self__.alt_handler,self__.flag,self__.cb,meta13560__$1));
});

cljs.core.async.t13559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13561){
var self__ = this;
var _13561__$1 = this;
return self__.meta13560;
});

cljs.core.async.t13559.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13560","meta13560",40254733,null)], null);
});

cljs.core.async.t13559.cljs$lang$type = true;

cljs.core.async.t13559.cljs$lang$ctorStr = "cljs.core.async/t13559";

cljs.core.async.t13559.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t13559");
});

cljs.core.async.__GT_t13559 = (function cljs$core$async$alt_handler_$___GT_t13559(alt_handler__$1,flag__$1,cb__$1,meta13560){
return (new cljs.core.async.t13559(alt_handler__$1,flag__$1,cb__$1,meta13560));
});

}

return (new cljs.core.async.t13559(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13562_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13562_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13563_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13563_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4309__auto__ = wport;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13564 = (i + (1));
i = G__13564;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4309__auto__ = ret;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__4297__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4297__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13567){
var map__13568 = p__13567;
var map__13568__$1 = ((cljs.core.seq_QMARK_.call(null,map__13568))?cljs.core.apply.call(null,cljs.core.hash_map,map__13568):map__13568);
var opts = map__13568__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13565){
var G__13566 = cljs.core.first.call(null,seq13565);
var seq13565__$1 = cljs.core.next.call(null,seq13565);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13566,seq13565__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__13570 = arguments.length;
switch (G__13570) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7047__auto___13619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___13619){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___13619){
return (function (state_13594){
var state_val_13595 = (state_13594[(1)]);
if((state_val_13595 === (7))){
var inst_13590 = (state_13594[(2)]);
var state_13594__$1 = state_13594;
var statearr_13596_13620 = state_13594__$1;
(statearr_13596_13620[(2)] = inst_13590);

(statearr_13596_13620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13595 === (1))){
var state_13594__$1 = state_13594;
var statearr_13597_13621 = state_13594__$1;
(statearr_13597_13621[(2)] = null);

(statearr_13597_13621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13595 === (4))){
var inst_13573 = (state_13594[(7)]);
var inst_13573__$1 = (state_13594[(2)]);
var inst_13574 = (inst_13573__$1 == null);
var state_13594__$1 = (function (){var statearr_13598 = state_13594;
(statearr_13598[(7)] = inst_13573__$1);

return statearr_13598;
})();
if(cljs.core.truth_(inst_13574)){
var statearr_13599_13622 = state_13594__$1;
(statearr_13599_13622[(1)] = (5));

} else {
var statearr_13600_13623 = state_13594__$1;
(statearr_13600_13623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13595 === (13))){
var state_13594__$1 = state_13594;
var statearr_13601_13624 = state_13594__$1;
(statearr_13601_13624[(2)] = null);

(statearr_13601_13624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13595 === (6))){
var inst_13573 = (state_13594[(7)]);
var state_13594__$1 = state_13594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13594__$1,(11),to,inst_13573);
} else {
if((state_val_13595 === (3))){
var inst_13592 = (state_13594[(2)]);
var state_13594__$1 = state_13594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13594__$1,inst_13592);
} else {
if((state_val_13595 === (12))){
var state_13594__$1 = state_13594;
var statearr_13602_13625 = state_13594__$1;
(statearr_13602_13625[(2)] = null);

(statearr_13602_13625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13595 === (2))){
var state_13594__$1 = state_13594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13594__$1,(4),from);
} else {
if((state_val_13595 === (11))){
var inst_13583 = (state_13594[(2)]);
var state_13594__$1 = state_13594;
if(cljs.core.truth_(inst_13583)){
var statearr_13603_13626 = state_13594__$1;
(statearr_13603_13626[(1)] = (12));

} else {
var statearr_13604_13627 = state_13594__$1;
(statearr_13604_13627[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13595 === (9))){
var state_13594__$1 = state_13594;
var statearr_13605_13628 = state_13594__$1;
(statearr_13605_13628[(2)] = null);

(statearr_13605_13628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13595 === (5))){
var state_13594__$1 = state_13594;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13606_13629 = state_13594__$1;
(statearr_13606_13629[(1)] = (8));

} else {
var statearr_13607_13630 = state_13594__$1;
(statearr_13607_13630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13595 === (14))){
var inst_13588 = (state_13594[(2)]);
var state_13594__$1 = state_13594;
var statearr_13608_13631 = state_13594__$1;
(statearr_13608_13631[(2)] = inst_13588);

(statearr_13608_13631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13595 === (10))){
var inst_13580 = (state_13594[(2)]);
var state_13594__$1 = state_13594;
var statearr_13609_13632 = state_13594__$1;
(statearr_13609_13632[(2)] = inst_13580);

(statearr_13609_13632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13595 === (8))){
var inst_13577 = cljs.core.async.close_BANG_.call(null,to);
var state_13594__$1 = state_13594;
var statearr_13610_13633 = state_13594__$1;
(statearr_13610_13633[(2)] = inst_13577);

(statearr_13610_13633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___13619))
;
return ((function (switch__6985__auto__,c__7047__auto___13619){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_13614 = [null,null,null,null,null,null,null,null];
(statearr_13614[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_13614[(1)] = (1));

return statearr_13614;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_13594){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_13594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e13615){if((e13615 instanceof Object)){
var ex__6989__auto__ = e13615;
var statearr_13616_13634 = state_13594;
(statearr_13616_13634[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13635 = state_13594;
state_13594 = G__13635;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_13594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_13594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___13619))
})();
var state__7049__auto__ = (function (){var statearr_13617 = f__7048__auto__.call(null);
(statearr_13617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___13619);

return statearr_13617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___13619))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13819){
var vec__13820 = p__13819;
var v = cljs.core.nth.call(null,vec__13820,(0),null);
var p = cljs.core.nth.call(null,vec__13820,(1),null);
var job = vec__13820;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7047__auto___14002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___14002,res,vec__13820,v,p,job,jobs,results){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___14002,res,vec__13820,v,p,job,jobs,results){
return (function (state_13825){
var state_val_13826 = (state_13825[(1)]);
if((state_val_13826 === (1))){
var state_13825__$1 = state_13825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13825__$1,(2),res,v);
} else {
if((state_val_13826 === (2))){
var inst_13822 = (state_13825[(2)]);
var inst_13823 = cljs.core.async.close_BANG_.call(null,res);
var state_13825__$1 = (function (){var statearr_13827 = state_13825;
(statearr_13827[(7)] = inst_13822);

return statearr_13827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13825__$1,inst_13823);
} else {
return null;
}
}
});})(c__7047__auto___14002,res,vec__13820,v,p,job,jobs,results))
;
return ((function (switch__6985__auto__,c__7047__auto___14002,res,vec__13820,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0 = (function (){
var statearr_13831 = [null,null,null,null,null,null,null,null];
(statearr_13831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__);

(statearr_13831[(1)] = (1));

return statearr_13831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1 = (function (state_13825){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_13825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e13832){if((e13832 instanceof Object)){
var ex__6989__auto__ = e13832;
var statearr_13833_14003 = state_13825;
(statearr_13833_14003[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14004 = state_13825;
state_13825 = G__14004;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__ = function(state_13825){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1.call(this,state_13825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___14002,res,vec__13820,v,p,job,jobs,results))
})();
var state__7049__auto__ = (function (){var statearr_13834 = f__7048__auto__.call(null);
(statearr_13834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___14002);

return statearr_13834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___14002,res,vec__13820,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13835){
var vec__13836 = p__13835;
var v = cljs.core.nth.call(null,vec__13836,(0),null);
var p = cljs.core.nth.call(null,vec__13836,(1),null);
var job = vec__13836;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5194__auto___14005 = n;
var __14006 = (0);
while(true){
if((__14006 < n__5194__auto___14005)){
var G__13837_14007 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13837_14007) {
case "compute":
var c__7047__auto___14009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14006,c__7047__auto___14009,G__13837_14007,n__5194__auto___14005,jobs,results,process,async){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (__14006,c__7047__auto___14009,G__13837_14007,n__5194__auto___14005,jobs,results,process,async){
return (function (state_13850){
var state_val_13851 = (state_13850[(1)]);
if((state_val_13851 === (1))){
var state_13850__$1 = state_13850;
var statearr_13852_14010 = state_13850__$1;
(statearr_13852_14010[(2)] = null);

(statearr_13852_14010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (2))){
var state_13850__$1 = state_13850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13850__$1,(4),jobs);
} else {
if((state_val_13851 === (3))){
var inst_13848 = (state_13850[(2)]);
var state_13850__$1 = state_13850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13850__$1,inst_13848);
} else {
if((state_val_13851 === (4))){
var inst_13840 = (state_13850[(2)]);
var inst_13841 = process.call(null,inst_13840);
var state_13850__$1 = state_13850;
if(cljs.core.truth_(inst_13841)){
var statearr_13853_14011 = state_13850__$1;
(statearr_13853_14011[(1)] = (5));

} else {
var statearr_13854_14012 = state_13850__$1;
(statearr_13854_14012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (5))){
var state_13850__$1 = state_13850;
var statearr_13855_14013 = state_13850__$1;
(statearr_13855_14013[(2)] = null);

(statearr_13855_14013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (6))){
var state_13850__$1 = state_13850;
var statearr_13856_14014 = state_13850__$1;
(statearr_13856_14014[(2)] = null);

(statearr_13856_14014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13851 === (7))){
var inst_13846 = (state_13850[(2)]);
var state_13850__$1 = state_13850;
var statearr_13857_14015 = state_13850__$1;
(statearr_13857_14015[(2)] = inst_13846);

(statearr_13857_14015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14006,c__7047__auto___14009,G__13837_14007,n__5194__auto___14005,jobs,results,process,async))
;
return ((function (__14006,switch__6985__auto__,c__7047__auto___14009,G__13837_14007,n__5194__auto___14005,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0 = (function (){
var statearr_13861 = [null,null,null,null,null,null,null];
(statearr_13861[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__);

(statearr_13861[(1)] = (1));

return statearr_13861;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1 = (function (state_13850){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_13850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e13862){if((e13862 instanceof Object)){
var ex__6989__auto__ = e13862;
var statearr_13863_14016 = state_13850;
(statearr_13863_14016[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14017 = state_13850;
state_13850 = G__14017;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__ = function(state_13850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1.call(this,state_13850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__;
})()
;})(__14006,switch__6985__auto__,c__7047__auto___14009,G__13837_14007,n__5194__auto___14005,jobs,results,process,async))
})();
var state__7049__auto__ = (function (){var statearr_13864 = f__7048__auto__.call(null);
(statearr_13864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___14009);

return statearr_13864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(__14006,c__7047__auto___14009,G__13837_14007,n__5194__auto___14005,jobs,results,process,async))
);


break;
case "async":
var c__7047__auto___14018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14006,c__7047__auto___14018,G__13837_14007,n__5194__auto___14005,jobs,results,process,async){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (__14006,c__7047__auto___14018,G__13837_14007,n__5194__auto___14005,jobs,results,process,async){
return (function (state_13877){
var state_val_13878 = (state_13877[(1)]);
if((state_val_13878 === (1))){
var state_13877__$1 = state_13877;
var statearr_13879_14019 = state_13877__$1;
(statearr_13879_14019[(2)] = null);

(statearr_13879_14019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (2))){
var state_13877__$1 = state_13877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13877__$1,(4),jobs);
} else {
if((state_val_13878 === (3))){
var inst_13875 = (state_13877[(2)]);
var state_13877__$1 = state_13877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13877__$1,inst_13875);
} else {
if((state_val_13878 === (4))){
var inst_13867 = (state_13877[(2)]);
var inst_13868 = async.call(null,inst_13867);
var state_13877__$1 = state_13877;
if(cljs.core.truth_(inst_13868)){
var statearr_13880_14020 = state_13877__$1;
(statearr_13880_14020[(1)] = (5));

} else {
var statearr_13881_14021 = state_13877__$1;
(statearr_13881_14021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (5))){
var state_13877__$1 = state_13877;
var statearr_13882_14022 = state_13877__$1;
(statearr_13882_14022[(2)] = null);

(statearr_13882_14022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (6))){
var state_13877__$1 = state_13877;
var statearr_13883_14023 = state_13877__$1;
(statearr_13883_14023[(2)] = null);

(statearr_13883_14023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13878 === (7))){
var inst_13873 = (state_13877[(2)]);
var state_13877__$1 = state_13877;
var statearr_13884_14024 = state_13877__$1;
(statearr_13884_14024[(2)] = inst_13873);

(statearr_13884_14024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14006,c__7047__auto___14018,G__13837_14007,n__5194__auto___14005,jobs,results,process,async))
;
return ((function (__14006,switch__6985__auto__,c__7047__auto___14018,G__13837_14007,n__5194__auto___14005,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0 = (function (){
var statearr_13888 = [null,null,null,null,null,null,null];
(statearr_13888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__);

(statearr_13888[(1)] = (1));

return statearr_13888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1 = (function (state_13877){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_13877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e13889){if((e13889 instanceof Object)){
var ex__6989__auto__ = e13889;
var statearr_13890_14025 = state_13877;
(statearr_13890_14025[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14026 = state_13877;
state_13877 = G__14026;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__ = function(state_13877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1.call(this,state_13877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__;
})()
;})(__14006,switch__6985__auto__,c__7047__auto___14018,G__13837_14007,n__5194__auto___14005,jobs,results,process,async))
})();
var state__7049__auto__ = (function (){var statearr_13891 = f__7048__auto__.call(null);
(statearr_13891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___14018);

return statearr_13891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(__14006,c__7047__auto___14018,G__13837_14007,n__5194__auto___14005,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14027 = (__14006 + (1));
__14006 = G__14027;
continue;
} else {
}
break;
}

var c__7047__auto___14028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___14028,jobs,results,process,async){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___14028,jobs,results,process,async){
return (function (state_13913){
var state_val_13914 = (state_13913[(1)]);
if((state_val_13914 === (1))){
var state_13913__$1 = state_13913;
var statearr_13915_14029 = state_13913__$1;
(statearr_13915_14029[(2)] = null);

(statearr_13915_14029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13914 === (2))){
var state_13913__$1 = state_13913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13913__$1,(4),from);
} else {
if((state_val_13914 === (3))){
var inst_13911 = (state_13913[(2)]);
var state_13913__$1 = state_13913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13913__$1,inst_13911);
} else {
if((state_val_13914 === (4))){
var inst_13894 = (state_13913[(7)]);
var inst_13894__$1 = (state_13913[(2)]);
var inst_13895 = (inst_13894__$1 == null);
var state_13913__$1 = (function (){var statearr_13916 = state_13913;
(statearr_13916[(7)] = inst_13894__$1);

return statearr_13916;
})();
if(cljs.core.truth_(inst_13895)){
var statearr_13917_14030 = state_13913__$1;
(statearr_13917_14030[(1)] = (5));

} else {
var statearr_13918_14031 = state_13913__$1;
(statearr_13918_14031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13914 === (5))){
var inst_13897 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13913__$1 = state_13913;
var statearr_13919_14032 = state_13913__$1;
(statearr_13919_14032[(2)] = inst_13897);

(statearr_13919_14032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13914 === (6))){
var inst_13899 = (state_13913[(8)]);
var inst_13894 = (state_13913[(7)]);
var inst_13899__$1 = cljs.core.async.chan.call(null,(1));
var inst_13900 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13901 = [inst_13894,inst_13899__$1];
var inst_13902 = (new cljs.core.PersistentVector(null,2,(5),inst_13900,inst_13901,null));
var state_13913__$1 = (function (){var statearr_13920 = state_13913;
(statearr_13920[(8)] = inst_13899__$1);

return statearr_13920;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13913__$1,(8),jobs,inst_13902);
} else {
if((state_val_13914 === (7))){
var inst_13909 = (state_13913[(2)]);
var state_13913__$1 = state_13913;
var statearr_13921_14033 = state_13913__$1;
(statearr_13921_14033[(2)] = inst_13909);

(statearr_13921_14033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13914 === (8))){
var inst_13899 = (state_13913[(8)]);
var inst_13904 = (state_13913[(2)]);
var state_13913__$1 = (function (){var statearr_13922 = state_13913;
(statearr_13922[(9)] = inst_13904);

return statearr_13922;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13913__$1,(9),results,inst_13899);
} else {
if((state_val_13914 === (9))){
var inst_13906 = (state_13913[(2)]);
var state_13913__$1 = (function (){var statearr_13923 = state_13913;
(statearr_13923[(10)] = inst_13906);

return statearr_13923;
})();
var statearr_13924_14034 = state_13913__$1;
(statearr_13924_14034[(2)] = null);

(statearr_13924_14034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___14028,jobs,results,process,async))
;
return ((function (switch__6985__auto__,c__7047__auto___14028,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0 = (function (){
var statearr_13928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__);

(statearr_13928[(1)] = (1));

return statearr_13928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1 = (function (state_13913){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_13913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e13929){if((e13929 instanceof Object)){
var ex__6989__auto__ = e13929;
var statearr_13930_14035 = state_13913;
(statearr_13930_14035[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14036 = state_13913;
state_13913 = G__14036;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__ = function(state_13913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1.call(this,state_13913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___14028,jobs,results,process,async))
})();
var state__7049__auto__ = (function (){var statearr_13931 = f__7048__auto__.call(null);
(statearr_13931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___14028);

return statearr_13931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___14028,jobs,results,process,async))
);


var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__,jobs,results,process,async){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__,jobs,results,process,async){
return (function (state_13969){
var state_val_13970 = (state_13969[(1)]);
if((state_val_13970 === (7))){
var inst_13965 = (state_13969[(2)]);
var state_13969__$1 = state_13969;
var statearr_13971_14037 = state_13969__$1;
(statearr_13971_14037[(2)] = inst_13965);

(statearr_13971_14037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (20))){
var state_13969__$1 = state_13969;
var statearr_13972_14038 = state_13969__$1;
(statearr_13972_14038[(2)] = null);

(statearr_13972_14038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (1))){
var state_13969__$1 = state_13969;
var statearr_13973_14039 = state_13969__$1;
(statearr_13973_14039[(2)] = null);

(statearr_13973_14039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (4))){
var inst_13934 = (state_13969[(7)]);
var inst_13934__$1 = (state_13969[(2)]);
var inst_13935 = (inst_13934__$1 == null);
var state_13969__$1 = (function (){var statearr_13974 = state_13969;
(statearr_13974[(7)] = inst_13934__$1);

return statearr_13974;
})();
if(cljs.core.truth_(inst_13935)){
var statearr_13975_14040 = state_13969__$1;
(statearr_13975_14040[(1)] = (5));

} else {
var statearr_13976_14041 = state_13969__$1;
(statearr_13976_14041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (15))){
var inst_13947 = (state_13969[(8)]);
var state_13969__$1 = state_13969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13969__$1,(18),to,inst_13947);
} else {
if((state_val_13970 === (21))){
var inst_13960 = (state_13969[(2)]);
var state_13969__$1 = state_13969;
var statearr_13977_14042 = state_13969__$1;
(statearr_13977_14042[(2)] = inst_13960);

(statearr_13977_14042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (13))){
var inst_13962 = (state_13969[(2)]);
var state_13969__$1 = (function (){var statearr_13978 = state_13969;
(statearr_13978[(9)] = inst_13962);

return statearr_13978;
})();
var statearr_13979_14043 = state_13969__$1;
(statearr_13979_14043[(2)] = null);

(statearr_13979_14043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (6))){
var inst_13934 = (state_13969[(7)]);
var state_13969__$1 = state_13969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13969__$1,(11),inst_13934);
} else {
if((state_val_13970 === (17))){
var inst_13955 = (state_13969[(2)]);
var state_13969__$1 = state_13969;
if(cljs.core.truth_(inst_13955)){
var statearr_13980_14044 = state_13969__$1;
(statearr_13980_14044[(1)] = (19));

} else {
var statearr_13981_14045 = state_13969__$1;
(statearr_13981_14045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (3))){
var inst_13967 = (state_13969[(2)]);
var state_13969__$1 = state_13969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13969__$1,inst_13967);
} else {
if((state_val_13970 === (12))){
var inst_13944 = (state_13969[(10)]);
var state_13969__$1 = state_13969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13969__$1,(14),inst_13944);
} else {
if((state_val_13970 === (2))){
var state_13969__$1 = state_13969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13969__$1,(4),results);
} else {
if((state_val_13970 === (19))){
var state_13969__$1 = state_13969;
var statearr_13982_14046 = state_13969__$1;
(statearr_13982_14046[(2)] = null);

(statearr_13982_14046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (11))){
var inst_13944 = (state_13969[(2)]);
var state_13969__$1 = (function (){var statearr_13983 = state_13969;
(statearr_13983[(10)] = inst_13944);

return statearr_13983;
})();
var statearr_13984_14047 = state_13969__$1;
(statearr_13984_14047[(2)] = null);

(statearr_13984_14047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (9))){
var state_13969__$1 = state_13969;
var statearr_13985_14048 = state_13969__$1;
(statearr_13985_14048[(2)] = null);

(statearr_13985_14048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (5))){
var state_13969__$1 = state_13969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13986_14049 = state_13969__$1;
(statearr_13986_14049[(1)] = (8));

} else {
var statearr_13987_14050 = state_13969__$1;
(statearr_13987_14050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (14))){
var inst_13947 = (state_13969[(8)]);
var inst_13949 = (state_13969[(11)]);
var inst_13947__$1 = (state_13969[(2)]);
var inst_13948 = (inst_13947__$1 == null);
var inst_13949__$1 = cljs.core.not.call(null,inst_13948);
var state_13969__$1 = (function (){var statearr_13988 = state_13969;
(statearr_13988[(8)] = inst_13947__$1);

(statearr_13988[(11)] = inst_13949__$1);

return statearr_13988;
})();
if(inst_13949__$1){
var statearr_13989_14051 = state_13969__$1;
(statearr_13989_14051[(1)] = (15));

} else {
var statearr_13990_14052 = state_13969__$1;
(statearr_13990_14052[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (16))){
var inst_13949 = (state_13969[(11)]);
var state_13969__$1 = state_13969;
var statearr_13991_14053 = state_13969__$1;
(statearr_13991_14053[(2)] = inst_13949);

(statearr_13991_14053[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (10))){
var inst_13941 = (state_13969[(2)]);
var state_13969__$1 = state_13969;
var statearr_13992_14054 = state_13969__$1;
(statearr_13992_14054[(2)] = inst_13941);

(statearr_13992_14054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (18))){
var inst_13952 = (state_13969[(2)]);
var state_13969__$1 = state_13969;
var statearr_13993_14055 = state_13969__$1;
(statearr_13993_14055[(2)] = inst_13952);

(statearr_13993_14055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13970 === (8))){
var inst_13938 = cljs.core.async.close_BANG_.call(null,to);
var state_13969__$1 = state_13969;
var statearr_13994_14056 = state_13969__$1;
(statearr_13994_14056[(2)] = inst_13938);

(statearr_13994_14056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto__,jobs,results,process,async))
;
return ((function (switch__6985__auto__,c__7047__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0 = (function (){
var statearr_13998 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__);

(statearr_13998[(1)] = (1));

return statearr_13998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1 = (function (state_13969){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_13969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e13999){if((e13999 instanceof Object)){
var ex__6989__auto__ = e13999;
var statearr_14000_14057 = state_13969;
(statearr_14000_14057[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14058 = state_13969;
state_13969 = G__14058;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__ = function(state_13969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1.call(this,state_13969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6986__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__,jobs,results,process,async))
})();
var state__7049__auto__ = (function (){var statearr_14001 = f__7048__auto__.call(null);
(statearr_14001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_14001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__,jobs,results,process,async))
);

return c__7047__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__14060 = arguments.length;
switch (G__14060) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__14063 = arguments.length;
switch (G__14063) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__14066 = arguments.length;
switch (G__14066) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7047__auto___14118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___14118,tc,fc){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___14118,tc,fc){
return (function (state_14092){
var state_val_14093 = (state_14092[(1)]);
if((state_val_14093 === (7))){
var inst_14088 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14094_14119 = state_14092__$1;
(statearr_14094_14119[(2)] = inst_14088);

(statearr_14094_14119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (1))){
var state_14092__$1 = state_14092;
var statearr_14095_14120 = state_14092__$1;
(statearr_14095_14120[(2)] = null);

(statearr_14095_14120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (4))){
var inst_14069 = (state_14092[(7)]);
var inst_14069__$1 = (state_14092[(2)]);
var inst_14070 = (inst_14069__$1 == null);
var state_14092__$1 = (function (){var statearr_14096 = state_14092;
(statearr_14096[(7)] = inst_14069__$1);

return statearr_14096;
})();
if(cljs.core.truth_(inst_14070)){
var statearr_14097_14121 = state_14092__$1;
(statearr_14097_14121[(1)] = (5));

} else {
var statearr_14098_14122 = state_14092__$1;
(statearr_14098_14122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (13))){
var state_14092__$1 = state_14092;
var statearr_14099_14123 = state_14092__$1;
(statearr_14099_14123[(2)] = null);

(statearr_14099_14123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (6))){
var inst_14069 = (state_14092[(7)]);
var inst_14075 = p.call(null,inst_14069);
var state_14092__$1 = state_14092;
if(cljs.core.truth_(inst_14075)){
var statearr_14100_14124 = state_14092__$1;
(statearr_14100_14124[(1)] = (9));

} else {
var statearr_14101_14125 = state_14092__$1;
(statearr_14101_14125[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (3))){
var inst_14090 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14092__$1,inst_14090);
} else {
if((state_val_14093 === (12))){
var state_14092__$1 = state_14092;
var statearr_14102_14126 = state_14092__$1;
(statearr_14102_14126[(2)] = null);

(statearr_14102_14126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (2))){
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14092__$1,(4),ch);
} else {
if((state_val_14093 === (11))){
var inst_14069 = (state_14092[(7)]);
var inst_14079 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14092__$1,(8),inst_14079,inst_14069);
} else {
if((state_val_14093 === (9))){
var state_14092__$1 = state_14092;
var statearr_14103_14127 = state_14092__$1;
(statearr_14103_14127[(2)] = tc);

(statearr_14103_14127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (5))){
var inst_14072 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14073 = cljs.core.async.close_BANG_.call(null,fc);
var state_14092__$1 = (function (){var statearr_14104 = state_14092;
(statearr_14104[(8)] = inst_14072);

return statearr_14104;
})();
var statearr_14105_14128 = state_14092__$1;
(statearr_14105_14128[(2)] = inst_14073);

(statearr_14105_14128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (14))){
var inst_14086 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14106_14129 = state_14092__$1;
(statearr_14106_14129[(2)] = inst_14086);

(statearr_14106_14129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (10))){
var state_14092__$1 = state_14092;
var statearr_14107_14130 = state_14092__$1;
(statearr_14107_14130[(2)] = fc);

(statearr_14107_14130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (8))){
var inst_14081 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
if(cljs.core.truth_(inst_14081)){
var statearr_14108_14131 = state_14092__$1;
(statearr_14108_14131[(1)] = (12));

} else {
var statearr_14109_14132 = state_14092__$1;
(statearr_14109_14132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___14118,tc,fc))
;
return ((function (switch__6985__auto__,c__7047__auto___14118,tc,fc){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_14113 = [null,null,null,null,null,null,null,null,null];
(statearr_14113[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_14113[(1)] = (1));

return statearr_14113;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_14092){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_14092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e14114){if((e14114 instanceof Object)){
var ex__6989__auto__ = e14114;
var statearr_14115_14133 = state_14092;
(statearr_14115_14133[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14134 = state_14092;
state_14092 = G__14134;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_14092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_14092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___14118,tc,fc))
})();
var state__7049__auto__ = (function (){var statearr_14116 = f__7048__auto__.call(null);
(statearr_14116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___14118);

return statearr_14116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___14118,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__){
return (function (state_14181){
var state_val_14182 = (state_14181[(1)]);
if((state_val_14182 === (1))){
var inst_14167 = init;
var state_14181__$1 = (function (){var statearr_14183 = state_14181;
(statearr_14183[(7)] = inst_14167);

return statearr_14183;
})();
var statearr_14184_14199 = state_14181__$1;
(statearr_14184_14199[(2)] = null);

(statearr_14184_14199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14182 === (2))){
var state_14181__$1 = state_14181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14181__$1,(4),ch);
} else {
if((state_val_14182 === (3))){
var inst_14179 = (state_14181[(2)]);
var state_14181__$1 = state_14181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14181__$1,inst_14179);
} else {
if((state_val_14182 === (4))){
var inst_14170 = (state_14181[(8)]);
var inst_14170__$1 = (state_14181[(2)]);
var inst_14171 = (inst_14170__$1 == null);
var state_14181__$1 = (function (){var statearr_14185 = state_14181;
(statearr_14185[(8)] = inst_14170__$1);

return statearr_14185;
})();
if(cljs.core.truth_(inst_14171)){
var statearr_14186_14200 = state_14181__$1;
(statearr_14186_14200[(1)] = (5));

} else {
var statearr_14187_14201 = state_14181__$1;
(statearr_14187_14201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14182 === (5))){
var inst_14167 = (state_14181[(7)]);
var state_14181__$1 = state_14181;
var statearr_14188_14202 = state_14181__$1;
(statearr_14188_14202[(2)] = inst_14167);

(statearr_14188_14202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14182 === (6))){
var inst_14170 = (state_14181[(8)]);
var inst_14167 = (state_14181[(7)]);
var inst_14174 = f.call(null,inst_14167,inst_14170);
var inst_14167__$1 = inst_14174;
var state_14181__$1 = (function (){var statearr_14189 = state_14181;
(statearr_14189[(7)] = inst_14167__$1);

return statearr_14189;
})();
var statearr_14190_14203 = state_14181__$1;
(statearr_14190_14203[(2)] = null);

(statearr_14190_14203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14182 === (7))){
var inst_14177 = (state_14181[(2)]);
var state_14181__$1 = state_14181;
var statearr_14191_14204 = state_14181__$1;
(statearr_14191_14204[(2)] = inst_14177);

(statearr_14191_14204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7047__auto__))
;
return ((function (switch__6985__auto__,c__7047__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6986__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6986__auto____0 = (function (){
var statearr_14195 = [null,null,null,null,null,null,null,null,null];
(statearr_14195[(0)] = cljs$core$async$reduce_$_state_machine__6986__auto__);

(statearr_14195[(1)] = (1));

return statearr_14195;
});
var cljs$core$async$reduce_$_state_machine__6986__auto____1 = (function (state_14181){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_14181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e14196){if((e14196 instanceof Object)){
var ex__6989__auto__ = e14196;
var statearr_14197_14205 = state_14181;
(statearr_14197_14205[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14206 = state_14181;
state_14181 = G__14206;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6986__auto__ = function(state_14181){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6986__auto____1.call(this,state_14181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6986__auto____0;
cljs$core$async$reduce_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6986__auto____1;
return cljs$core$async$reduce_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__))
})();
var state__7049__auto__ = (function (){var statearr_14198 = f__7048__auto__.call(null);
(statearr_14198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_14198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__))
);

return c__7047__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__14208 = arguments.length;
switch (G__14208) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__){
return (function (state_14233){
var state_val_14234 = (state_14233[(1)]);
if((state_val_14234 === (7))){
var inst_14215 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14235_14259 = state_14233__$1;
(statearr_14235_14259[(2)] = inst_14215);

(statearr_14235_14259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (1))){
var inst_14209 = cljs.core.seq.call(null,coll);
var inst_14210 = inst_14209;
var state_14233__$1 = (function (){var statearr_14236 = state_14233;
(statearr_14236[(7)] = inst_14210);

return statearr_14236;
})();
var statearr_14237_14260 = state_14233__$1;
(statearr_14237_14260[(2)] = null);

(statearr_14237_14260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (4))){
var inst_14210 = (state_14233[(7)]);
var inst_14213 = cljs.core.first.call(null,inst_14210);
var state_14233__$1 = state_14233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14233__$1,(7),ch,inst_14213);
} else {
if((state_val_14234 === (13))){
var inst_14227 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14238_14261 = state_14233__$1;
(statearr_14238_14261[(2)] = inst_14227);

(statearr_14238_14261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (6))){
var inst_14218 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14218)){
var statearr_14239_14262 = state_14233__$1;
(statearr_14239_14262[(1)] = (8));

} else {
var statearr_14240_14263 = state_14233__$1;
(statearr_14240_14263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (3))){
var inst_14231 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14233__$1,inst_14231);
} else {
if((state_val_14234 === (12))){
var state_14233__$1 = state_14233;
var statearr_14241_14264 = state_14233__$1;
(statearr_14241_14264[(2)] = null);

(statearr_14241_14264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (2))){
var inst_14210 = (state_14233[(7)]);
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14210)){
var statearr_14242_14265 = state_14233__$1;
(statearr_14242_14265[(1)] = (4));

} else {
var statearr_14243_14266 = state_14233__$1;
(statearr_14243_14266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (11))){
var inst_14224 = cljs.core.async.close_BANG_.call(null,ch);
var state_14233__$1 = state_14233;
var statearr_14244_14267 = state_14233__$1;
(statearr_14244_14267[(2)] = inst_14224);

(statearr_14244_14267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (9))){
var state_14233__$1 = state_14233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14245_14268 = state_14233__$1;
(statearr_14245_14268[(1)] = (11));

} else {
var statearr_14246_14269 = state_14233__$1;
(statearr_14246_14269[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (5))){
var inst_14210 = (state_14233[(7)]);
var state_14233__$1 = state_14233;
var statearr_14247_14270 = state_14233__$1;
(statearr_14247_14270[(2)] = inst_14210);

(statearr_14247_14270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (10))){
var inst_14229 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14248_14271 = state_14233__$1;
(statearr_14248_14271[(2)] = inst_14229);

(statearr_14248_14271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (8))){
var inst_14210 = (state_14233[(7)]);
var inst_14220 = cljs.core.next.call(null,inst_14210);
var inst_14210__$1 = inst_14220;
var state_14233__$1 = (function (){var statearr_14249 = state_14233;
(statearr_14249[(7)] = inst_14210__$1);

return statearr_14249;
})();
var statearr_14250_14272 = state_14233__$1;
(statearr_14250_14272[(2)] = null);

(statearr_14250_14272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto__))
;
return ((function (switch__6985__auto__,c__7047__auto__){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_14254 = [null,null,null,null,null,null,null,null];
(statearr_14254[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_14254[(1)] = (1));

return statearr_14254;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_14233){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_14233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e14255){if((e14255 instanceof Object)){
var ex__6989__auto__ = e14255;
var statearr_14256_14273 = state_14233;
(statearr_14256_14273[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14274 = state_14233;
state_14233 = G__14274;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_14233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_14233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__))
})();
var state__7049__auto__ = (function (){var statearr_14257 = f__7048__auto__.call(null);
(statearr_14257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_14257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__))
);

return c__7047__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj14276 = {};
return obj14276;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4297__auto__ = _;
if(and__4297__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4945__auto__ = (((_ == null))?null:_);
return (function (){var or__4309__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj14278 = {};
return obj14278;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t14500 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14500 = (function (mult,ch,cs,meta14501){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14501 = meta14501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14502,meta14501__$1){
var self__ = this;
var _14502__$1 = this;
return (new cljs.core.async.t14500(self__.mult,self__.ch,self__.cs,meta14501__$1));
});})(cs))
;

cljs.core.async.t14500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14502){
var self__ = this;
var _14502__$1 = this;
return self__.meta14501;
});})(cs))
;

cljs.core.async.t14500.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14500.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14500.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14500.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14500.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14500.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14501","meta14501",-422570366,null)], null);
});})(cs))
;

cljs.core.async.t14500.cljs$lang$type = true;

cljs.core.async.t14500.cljs$lang$ctorStr = "cljs.core.async/t14500";

cljs.core.async.t14500.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t14500");
});})(cs))
;

cljs.core.async.__GT_t14500 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14500(mult__$1,ch__$1,cs__$1,meta14501){
return (new cljs.core.async.t14500(mult__$1,ch__$1,cs__$1,meta14501));
});})(cs))
;

}

return (new cljs.core.async.t14500(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7047__auto___14721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___14721,cs,m,dchan,dctr,done){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___14721,cs,m,dchan,dctr,done){
return (function (state_14633){
var state_val_14634 = (state_14633[(1)]);
if((state_val_14634 === (7))){
var inst_14629 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14635_14722 = state_14633__$1;
(statearr_14635_14722[(2)] = inst_14629);

(statearr_14635_14722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (20))){
var inst_14534 = (state_14633[(7)]);
var inst_14544 = cljs.core.first.call(null,inst_14534);
var inst_14545 = cljs.core.nth.call(null,inst_14544,(0),null);
var inst_14546 = cljs.core.nth.call(null,inst_14544,(1),null);
var state_14633__$1 = (function (){var statearr_14636 = state_14633;
(statearr_14636[(8)] = inst_14545);

return statearr_14636;
})();
if(cljs.core.truth_(inst_14546)){
var statearr_14637_14723 = state_14633__$1;
(statearr_14637_14723[(1)] = (22));

} else {
var statearr_14638_14724 = state_14633__$1;
(statearr_14638_14724[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (27))){
var inst_14574 = (state_14633[(9)]);
var inst_14505 = (state_14633[(10)]);
var inst_14581 = (state_14633[(11)]);
var inst_14576 = (state_14633[(12)]);
var inst_14581__$1 = cljs.core._nth.call(null,inst_14574,inst_14576);
var inst_14582 = cljs.core.async.put_BANG_.call(null,inst_14581__$1,inst_14505,done);
var state_14633__$1 = (function (){var statearr_14639 = state_14633;
(statearr_14639[(11)] = inst_14581__$1);

return statearr_14639;
})();
if(cljs.core.truth_(inst_14582)){
var statearr_14640_14725 = state_14633__$1;
(statearr_14640_14725[(1)] = (30));

} else {
var statearr_14641_14726 = state_14633__$1;
(statearr_14641_14726[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (1))){
var state_14633__$1 = state_14633;
var statearr_14642_14727 = state_14633__$1;
(statearr_14642_14727[(2)] = null);

(statearr_14642_14727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (24))){
var inst_14534 = (state_14633[(7)]);
var inst_14551 = (state_14633[(2)]);
var inst_14552 = cljs.core.next.call(null,inst_14534);
var inst_14514 = inst_14552;
var inst_14515 = null;
var inst_14516 = (0);
var inst_14517 = (0);
var state_14633__$1 = (function (){var statearr_14643 = state_14633;
(statearr_14643[(13)] = inst_14514);

(statearr_14643[(14)] = inst_14516);

(statearr_14643[(15)] = inst_14515);

(statearr_14643[(16)] = inst_14517);

(statearr_14643[(17)] = inst_14551);

return statearr_14643;
})();
var statearr_14644_14728 = state_14633__$1;
(statearr_14644_14728[(2)] = null);

(statearr_14644_14728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (39))){
var state_14633__$1 = state_14633;
var statearr_14648_14729 = state_14633__$1;
(statearr_14648_14729[(2)] = null);

(statearr_14648_14729[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (4))){
var inst_14505 = (state_14633[(10)]);
var inst_14505__$1 = (state_14633[(2)]);
var inst_14506 = (inst_14505__$1 == null);
var state_14633__$1 = (function (){var statearr_14649 = state_14633;
(statearr_14649[(10)] = inst_14505__$1);

return statearr_14649;
})();
if(cljs.core.truth_(inst_14506)){
var statearr_14650_14730 = state_14633__$1;
(statearr_14650_14730[(1)] = (5));

} else {
var statearr_14651_14731 = state_14633__$1;
(statearr_14651_14731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (15))){
var inst_14514 = (state_14633[(13)]);
var inst_14516 = (state_14633[(14)]);
var inst_14515 = (state_14633[(15)]);
var inst_14517 = (state_14633[(16)]);
var inst_14530 = (state_14633[(2)]);
var inst_14531 = (inst_14517 + (1));
var tmp14645 = inst_14514;
var tmp14646 = inst_14516;
var tmp14647 = inst_14515;
var inst_14514__$1 = tmp14645;
var inst_14515__$1 = tmp14647;
var inst_14516__$1 = tmp14646;
var inst_14517__$1 = inst_14531;
var state_14633__$1 = (function (){var statearr_14652 = state_14633;
(statearr_14652[(13)] = inst_14514__$1);

(statearr_14652[(14)] = inst_14516__$1);

(statearr_14652[(15)] = inst_14515__$1);

(statearr_14652[(18)] = inst_14530);

(statearr_14652[(16)] = inst_14517__$1);

return statearr_14652;
})();
var statearr_14653_14732 = state_14633__$1;
(statearr_14653_14732[(2)] = null);

(statearr_14653_14732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (21))){
var inst_14555 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14657_14733 = state_14633__$1;
(statearr_14657_14733[(2)] = inst_14555);

(statearr_14657_14733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (31))){
var inst_14581 = (state_14633[(11)]);
var inst_14585 = done.call(null,null);
var inst_14586 = cljs.core.async.untap_STAR_.call(null,m,inst_14581);
var state_14633__$1 = (function (){var statearr_14658 = state_14633;
(statearr_14658[(19)] = inst_14585);

return statearr_14658;
})();
var statearr_14659_14734 = state_14633__$1;
(statearr_14659_14734[(2)] = inst_14586);

(statearr_14659_14734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (32))){
var inst_14574 = (state_14633[(9)]);
var inst_14575 = (state_14633[(20)]);
var inst_14576 = (state_14633[(12)]);
var inst_14573 = (state_14633[(21)]);
var inst_14588 = (state_14633[(2)]);
var inst_14589 = (inst_14576 + (1));
var tmp14654 = inst_14574;
var tmp14655 = inst_14575;
var tmp14656 = inst_14573;
var inst_14573__$1 = tmp14656;
var inst_14574__$1 = tmp14654;
var inst_14575__$1 = tmp14655;
var inst_14576__$1 = inst_14589;
var state_14633__$1 = (function (){var statearr_14660 = state_14633;
(statearr_14660[(9)] = inst_14574__$1);

(statearr_14660[(22)] = inst_14588);

(statearr_14660[(20)] = inst_14575__$1);

(statearr_14660[(12)] = inst_14576__$1);

(statearr_14660[(21)] = inst_14573__$1);

return statearr_14660;
})();
var statearr_14661_14735 = state_14633__$1;
(statearr_14661_14735[(2)] = null);

(statearr_14661_14735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (40))){
var inst_14601 = (state_14633[(23)]);
var inst_14605 = done.call(null,null);
var inst_14606 = cljs.core.async.untap_STAR_.call(null,m,inst_14601);
var state_14633__$1 = (function (){var statearr_14662 = state_14633;
(statearr_14662[(24)] = inst_14605);

return statearr_14662;
})();
var statearr_14663_14736 = state_14633__$1;
(statearr_14663_14736[(2)] = inst_14606);

(statearr_14663_14736[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (33))){
var inst_14592 = (state_14633[(25)]);
var inst_14594 = cljs.core.chunked_seq_QMARK_.call(null,inst_14592);
var state_14633__$1 = state_14633;
if(inst_14594){
var statearr_14664_14737 = state_14633__$1;
(statearr_14664_14737[(1)] = (36));

} else {
var statearr_14665_14738 = state_14633__$1;
(statearr_14665_14738[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (13))){
var inst_14524 = (state_14633[(26)]);
var inst_14527 = cljs.core.async.close_BANG_.call(null,inst_14524);
var state_14633__$1 = state_14633;
var statearr_14666_14739 = state_14633__$1;
(statearr_14666_14739[(2)] = inst_14527);

(statearr_14666_14739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (22))){
var inst_14545 = (state_14633[(8)]);
var inst_14548 = cljs.core.async.close_BANG_.call(null,inst_14545);
var state_14633__$1 = state_14633;
var statearr_14667_14740 = state_14633__$1;
(statearr_14667_14740[(2)] = inst_14548);

(statearr_14667_14740[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (36))){
var inst_14592 = (state_14633[(25)]);
var inst_14596 = cljs.core.chunk_first.call(null,inst_14592);
var inst_14597 = cljs.core.chunk_rest.call(null,inst_14592);
var inst_14598 = cljs.core.count.call(null,inst_14596);
var inst_14573 = inst_14597;
var inst_14574 = inst_14596;
var inst_14575 = inst_14598;
var inst_14576 = (0);
var state_14633__$1 = (function (){var statearr_14668 = state_14633;
(statearr_14668[(9)] = inst_14574);

(statearr_14668[(20)] = inst_14575);

(statearr_14668[(12)] = inst_14576);

(statearr_14668[(21)] = inst_14573);

return statearr_14668;
})();
var statearr_14669_14741 = state_14633__$1;
(statearr_14669_14741[(2)] = null);

(statearr_14669_14741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (41))){
var inst_14592 = (state_14633[(25)]);
var inst_14608 = (state_14633[(2)]);
var inst_14609 = cljs.core.next.call(null,inst_14592);
var inst_14573 = inst_14609;
var inst_14574 = null;
var inst_14575 = (0);
var inst_14576 = (0);
var state_14633__$1 = (function (){var statearr_14670 = state_14633;
(statearr_14670[(9)] = inst_14574);

(statearr_14670[(20)] = inst_14575);

(statearr_14670[(27)] = inst_14608);

(statearr_14670[(12)] = inst_14576);

(statearr_14670[(21)] = inst_14573);

return statearr_14670;
})();
var statearr_14671_14742 = state_14633__$1;
(statearr_14671_14742[(2)] = null);

(statearr_14671_14742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (43))){
var state_14633__$1 = state_14633;
var statearr_14672_14743 = state_14633__$1;
(statearr_14672_14743[(2)] = null);

(statearr_14672_14743[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (29))){
var inst_14617 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14673_14744 = state_14633__$1;
(statearr_14673_14744[(2)] = inst_14617);

(statearr_14673_14744[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (44))){
var inst_14626 = (state_14633[(2)]);
var state_14633__$1 = (function (){var statearr_14674 = state_14633;
(statearr_14674[(28)] = inst_14626);

return statearr_14674;
})();
var statearr_14675_14745 = state_14633__$1;
(statearr_14675_14745[(2)] = null);

(statearr_14675_14745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (6))){
var inst_14565 = (state_14633[(29)]);
var inst_14564 = cljs.core.deref.call(null,cs);
var inst_14565__$1 = cljs.core.keys.call(null,inst_14564);
var inst_14566 = cljs.core.count.call(null,inst_14565__$1);
var inst_14567 = cljs.core.reset_BANG_.call(null,dctr,inst_14566);
var inst_14572 = cljs.core.seq.call(null,inst_14565__$1);
var inst_14573 = inst_14572;
var inst_14574 = null;
var inst_14575 = (0);
var inst_14576 = (0);
var state_14633__$1 = (function (){var statearr_14676 = state_14633;
(statearr_14676[(9)] = inst_14574);

(statearr_14676[(29)] = inst_14565__$1);

(statearr_14676[(20)] = inst_14575);

(statearr_14676[(30)] = inst_14567);

(statearr_14676[(12)] = inst_14576);

(statearr_14676[(21)] = inst_14573);

return statearr_14676;
})();
var statearr_14677_14746 = state_14633__$1;
(statearr_14677_14746[(2)] = null);

(statearr_14677_14746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (28))){
var inst_14592 = (state_14633[(25)]);
var inst_14573 = (state_14633[(21)]);
var inst_14592__$1 = cljs.core.seq.call(null,inst_14573);
var state_14633__$1 = (function (){var statearr_14678 = state_14633;
(statearr_14678[(25)] = inst_14592__$1);

return statearr_14678;
})();
if(inst_14592__$1){
var statearr_14679_14747 = state_14633__$1;
(statearr_14679_14747[(1)] = (33));

} else {
var statearr_14680_14748 = state_14633__$1;
(statearr_14680_14748[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (25))){
var inst_14575 = (state_14633[(20)]);
var inst_14576 = (state_14633[(12)]);
var inst_14578 = (inst_14576 < inst_14575);
var inst_14579 = inst_14578;
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14579)){
var statearr_14681_14749 = state_14633__$1;
(statearr_14681_14749[(1)] = (27));

} else {
var statearr_14682_14750 = state_14633__$1;
(statearr_14682_14750[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (34))){
var state_14633__$1 = state_14633;
var statearr_14683_14751 = state_14633__$1;
(statearr_14683_14751[(2)] = null);

(statearr_14683_14751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (17))){
var state_14633__$1 = state_14633;
var statearr_14684_14752 = state_14633__$1;
(statearr_14684_14752[(2)] = null);

(statearr_14684_14752[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (3))){
var inst_14631 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14633__$1,inst_14631);
} else {
if((state_val_14634 === (12))){
var inst_14560 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14685_14753 = state_14633__$1;
(statearr_14685_14753[(2)] = inst_14560);

(statearr_14685_14753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (2))){
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(4),ch);
} else {
if((state_val_14634 === (23))){
var state_14633__$1 = state_14633;
var statearr_14686_14754 = state_14633__$1;
(statearr_14686_14754[(2)] = null);

(statearr_14686_14754[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (35))){
var inst_14615 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14687_14755 = state_14633__$1;
(statearr_14687_14755[(2)] = inst_14615);

(statearr_14687_14755[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (19))){
var inst_14534 = (state_14633[(7)]);
var inst_14538 = cljs.core.chunk_first.call(null,inst_14534);
var inst_14539 = cljs.core.chunk_rest.call(null,inst_14534);
var inst_14540 = cljs.core.count.call(null,inst_14538);
var inst_14514 = inst_14539;
var inst_14515 = inst_14538;
var inst_14516 = inst_14540;
var inst_14517 = (0);
var state_14633__$1 = (function (){var statearr_14688 = state_14633;
(statearr_14688[(13)] = inst_14514);

(statearr_14688[(14)] = inst_14516);

(statearr_14688[(15)] = inst_14515);

(statearr_14688[(16)] = inst_14517);

return statearr_14688;
})();
var statearr_14689_14756 = state_14633__$1;
(statearr_14689_14756[(2)] = null);

(statearr_14689_14756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (11))){
var inst_14514 = (state_14633[(13)]);
var inst_14534 = (state_14633[(7)]);
var inst_14534__$1 = cljs.core.seq.call(null,inst_14514);
var state_14633__$1 = (function (){var statearr_14690 = state_14633;
(statearr_14690[(7)] = inst_14534__$1);

return statearr_14690;
})();
if(inst_14534__$1){
var statearr_14691_14757 = state_14633__$1;
(statearr_14691_14757[(1)] = (16));

} else {
var statearr_14692_14758 = state_14633__$1;
(statearr_14692_14758[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (9))){
var inst_14562 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14693_14759 = state_14633__$1;
(statearr_14693_14759[(2)] = inst_14562);

(statearr_14693_14759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (5))){
var inst_14512 = cljs.core.deref.call(null,cs);
var inst_14513 = cljs.core.seq.call(null,inst_14512);
var inst_14514 = inst_14513;
var inst_14515 = null;
var inst_14516 = (0);
var inst_14517 = (0);
var state_14633__$1 = (function (){var statearr_14694 = state_14633;
(statearr_14694[(13)] = inst_14514);

(statearr_14694[(14)] = inst_14516);

(statearr_14694[(15)] = inst_14515);

(statearr_14694[(16)] = inst_14517);

return statearr_14694;
})();
var statearr_14695_14760 = state_14633__$1;
(statearr_14695_14760[(2)] = null);

(statearr_14695_14760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (14))){
var state_14633__$1 = state_14633;
var statearr_14696_14761 = state_14633__$1;
(statearr_14696_14761[(2)] = null);

(statearr_14696_14761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (45))){
var inst_14623 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14697_14762 = state_14633__$1;
(statearr_14697_14762[(2)] = inst_14623);

(statearr_14697_14762[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (26))){
var inst_14565 = (state_14633[(29)]);
var inst_14619 = (state_14633[(2)]);
var inst_14620 = cljs.core.seq.call(null,inst_14565);
var state_14633__$1 = (function (){var statearr_14698 = state_14633;
(statearr_14698[(31)] = inst_14619);

return statearr_14698;
})();
if(inst_14620){
var statearr_14699_14763 = state_14633__$1;
(statearr_14699_14763[(1)] = (42));

} else {
var statearr_14700_14764 = state_14633__$1;
(statearr_14700_14764[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (16))){
var inst_14534 = (state_14633[(7)]);
var inst_14536 = cljs.core.chunked_seq_QMARK_.call(null,inst_14534);
var state_14633__$1 = state_14633;
if(inst_14536){
var statearr_14701_14765 = state_14633__$1;
(statearr_14701_14765[(1)] = (19));

} else {
var statearr_14702_14766 = state_14633__$1;
(statearr_14702_14766[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (38))){
var inst_14612 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14703_14767 = state_14633__$1;
(statearr_14703_14767[(2)] = inst_14612);

(statearr_14703_14767[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (30))){
var state_14633__$1 = state_14633;
var statearr_14704_14768 = state_14633__$1;
(statearr_14704_14768[(2)] = null);

(statearr_14704_14768[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (10))){
var inst_14515 = (state_14633[(15)]);
var inst_14517 = (state_14633[(16)]);
var inst_14523 = cljs.core._nth.call(null,inst_14515,inst_14517);
var inst_14524 = cljs.core.nth.call(null,inst_14523,(0),null);
var inst_14525 = cljs.core.nth.call(null,inst_14523,(1),null);
var state_14633__$1 = (function (){var statearr_14705 = state_14633;
(statearr_14705[(26)] = inst_14524);

return statearr_14705;
})();
if(cljs.core.truth_(inst_14525)){
var statearr_14706_14769 = state_14633__$1;
(statearr_14706_14769[(1)] = (13));

} else {
var statearr_14707_14770 = state_14633__$1;
(statearr_14707_14770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (18))){
var inst_14558 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14708_14771 = state_14633__$1;
(statearr_14708_14771[(2)] = inst_14558);

(statearr_14708_14771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (42))){
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14633__$1,(45),dchan);
} else {
if((state_val_14634 === (37))){
var inst_14592 = (state_14633[(25)]);
var inst_14601 = (state_14633[(23)]);
var inst_14505 = (state_14633[(10)]);
var inst_14601__$1 = cljs.core.first.call(null,inst_14592);
var inst_14602 = cljs.core.async.put_BANG_.call(null,inst_14601__$1,inst_14505,done);
var state_14633__$1 = (function (){var statearr_14709 = state_14633;
(statearr_14709[(23)] = inst_14601__$1);

return statearr_14709;
})();
if(cljs.core.truth_(inst_14602)){
var statearr_14710_14772 = state_14633__$1;
(statearr_14710_14772[(1)] = (39));

} else {
var statearr_14711_14773 = state_14633__$1;
(statearr_14711_14773[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (8))){
var inst_14516 = (state_14633[(14)]);
var inst_14517 = (state_14633[(16)]);
var inst_14519 = (inst_14517 < inst_14516);
var inst_14520 = inst_14519;
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14520)){
var statearr_14712_14774 = state_14633__$1;
(statearr_14712_14774[(1)] = (10));

} else {
var statearr_14713_14775 = state_14633__$1;
(statearr_14713_14775[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___14721,cs,m,dchan,dctr,done))
;
return ((function (switch__6985__auto__,c__7047__auto___14721,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6986__auto__ = null;
var cljs$core$async$mult_$_state_machine__6986__auto____0 = (function (){
var statearr_14717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14717[(0)] = cljs$core$async$mult_$_state_machine__6986__auto__);

(statearr_14717[(1)] = (1));

return statearr_14717;
});
var cljs$core$async$mult_$_state_machine__6986__auto____1 = (function (state_14633){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_14633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e14718){if((e14718 instanceof Object)){
var ex__6989__auto__ = e14718;
var statearr_14719_14776 = state_14633;
(statearr_14719_14776[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14777 = state_14633;
state_14633 = G__14777;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6986__auto__ = function(state_14633){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6986__auto____1.call(this,state_14633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6986__auto____0;
cljs$core$async$mult_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6986__auto____1;
return cljs$core$async$mult_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___14721,cs,m,dchan,dctr,done))
})();
var state__7049__auto__ = (function (){var statearr_14720 = f__7048__auto__.call(null);
(statearr_14720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___14721);

return statearr_14720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___14721,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__14779 = arguments.length;
switch (G__14779) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj14782 = {};
return obj14782;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5349__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5349__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14787){
var map__14788 = p__14787;
var map__14788__$1 = ((cljs.core.seq_QMARK_.call(null,map__14788))?cljs.core.apply.call(null,cljs.core.hash_map,map__14788):map__14788);
var opts = map__14788__$1;
var statearr_14789_14792 = state;
(statearr_14789_14792[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__14788,map__14788__$1,opts){
return (function (val){
var statearr_14790_14793 = state;
(statearr_14790_14793[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14788,map__14788__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_14791_14794 = state;
(statearr_14791_14794[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14783){
var G__14784 = cljs.core.first.call(null,seq14783);
var seq14783__$1 = cljs.core.next.call(null,seq14783);
var G__14785 = cljs.core.first.call(null,seq14783__$1);
var seq14783__$2 = cljs.core.next.call(null,seq14783__$1);
var G__14786 = cljs.core.first.call(null,seq14783__$2);
var seq14783__$3 = cljs.core.next.call(null,seq14783__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14784,G__14785,G__14786,seq14783__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t14914 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14914 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14915){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14915 = meta14915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14916,meta14915__$1){
var self__ = this;
var _14916__$1 = this;
return (new cljs.core.async.t14914(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14915__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14916){
var self__ = this;
var _14916__$1 = this;
return self__.meta14915;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14914.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14914.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14914.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14914.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14914.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14914.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14914.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14914.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14915","meta14915",1477335328,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14914.cljs$lang$type = true;

cljs.core.async.t14914.cljs$lang$ctorStr = "cljs.core.async/t14914";

cljs.core.async.t14914.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t14914");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14914 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14914(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14915){
return (new cljs.core.async.t14914(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14915));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14914(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7047__auto___15033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___15033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___15033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14986){
var state_val_14987 = (state_14986[(1)]);
if((state_val_14987 === (7))){
var inst_14930 = (state_14986[(7)]);
var inst_14935 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14930);
var state_14986__$1 = state_14986;
var statearr_14988_15034 = state_14986__$1;
(statearr_14988_15034[(2)] = inst_14935);

(statearr_14988_15034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (20))){
var inst_14945 = (state_14986[(8)]);
var state_14986__$1 = state_14986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14986__$1,(23),out,inst_14945);
} else {
if((state_val_14987 === (1))){
var inst_14920 = (state_14986[(9)]);
var inst_14920__$1 = calc_state.call(null);
var inst_14921 = cljs.core.seq_QMARK_.call(null,inst_14920__$1);
var state_14986__$1 = (function (){var statearr_14989 = state_14986;
(statearr_14989[(9)] = inst_14920__$1);

return statearr_14989;
})();
if(inst_14921){
var statearr_14990_15035 = state_14986__$1;
(statearr_14990_15035[(1)] = (2));

} else {
var statearr_14991_15036 = state_14986__$1;
(statearr_14991_15036[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (24))){
var inst_14938 = (state_14986[(10)]);
var inst_14930 = inst_14938;
var state_14986__$1 = (function (){var statearr_14992 = state_14986;
(statearr_14992[(7)] = inst_14930);

return statearr_14992;
})();
var statearr_14993_15037 = state_14986__$1;
(statearr_14993_15037[(2)] = null);

(statearr_14993_15037[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (4))){
var inst_14920 = (state_14986[(9)]);
var inst_14926 = (state_14986[(2)]);
var inst_14927 = cljs.core.get.call(null,inst_14926,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14928 = cljs.core.get.call(null,inst_14926,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14929 = cljs.core.get.call(null,inst_14926,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14930 = inst_14920;
var state_14986__$1 = (function (){var statearr_14994 = state_14986;
(statearr_14994[(11)] = inst_14929);

(statearr_14994[(12)] = inst_14928);

(statearr_14994[(7)] = inst_14930);

(statearr_14994[(13)] = inst_14927);

return statearr_14994;
})();
var statearr_14995_15038 = state_14986__$1;
(statearr_14995_15038[(2)] = null);

(statearr_14995_15038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (15))){
var state_14986__$1 = state_14986;
var statearr_14996_15039 = state_14986__$1;
(statearr_14996_15039[(2)] = null);

(statearr_14996_15039[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (21))){
var inst_14938 = (state_14986[(10)]);
var inst_14930 = inst_14938;
var state_14986__$1 = (function (){var statearr_14997 = state_14986;
(statearr_14997[(7)] = inst_14930);

return statearr_14997;
})();
var statearr_14998_15040 = state_14986__$1;
(statearr_14998_15040[(2)] = null);

(statearr_14998_15040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (13))){
var inst_14982 = (state_14986[(2)]);
var state_14986__$1 = state_14986;
var statearr_14999_15041 = state_14986__$1;
(statearr_14999_15041[(2)] = inst_14982);

(statearr_14999_15041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (22))){
var inst_14980 = (state_14986[(2)]);
var state_14986__$1 = state_14986;
var statearr_15000_15042 = state_14986__$1;
(statearr_15000_15042[(2)] = inst_14980);

(statearr_15000_15042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (6))){
var inst_14984 = (state_14986[(2)]);
var state_14986__$1 = state_14986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14986__$1,inst_14984);
} else {
if((state_val_14987 === (25))){
var state_14986__$1 = state_14986;
var statearr_15001_15043 = state_14986__$1;
(statearr_15001_15043[(2)] = null);

(statearr_15001_15043[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (17))){
var inst_14960 = (state_14986[(14)]);
var state_14986__$1 = state_14986;
var statearr_15002_15044 = state_14986__$1;
(statearr_15002_15044[(2)] = inst_14960);

(statearr_15002_15044[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (3))){
var inst_14920 = (state_14986[(9)]);
var state_14986__$1 = state_14986;
var statearr_15003_15045 = state_14986__$1;
(statearr_15003_15045[(2)] = inst_14920);

(statearr_15003_15045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (12))){
var inst_14939 = (state_14986[(15)]);
var inst_14946 = (state_14986[(16)]);
var inst_14960 = (state_14986[(14)]);
var inst_14960__$1 = inst_14939.call(null,inst_14946);
var state_14986__$1 = (function (){var statearr_15004 = state_14986;
(statearr_15004[(14)] = inst_14960__$1);

return statearr_15004;
})();
if(cljs.core.truth_(inst_14960__$1)){
var statearr_15005_15046 = state_14986__$1;
(statearr_15005_15046[(1)] = (17));

} else {
var statearr_15006_15047 = state_14986__$1;
(statearr_15006_15047[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (2))){
var inst_14920 = (state_14986[(9)]);
var inst_14923 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14920);
var state_14986__$1 = state_14986;
var statearr_15007_15048 = state_14986__$1;
(statearr_15007_15048[(2)] = inst_14923);

(statearr_15007_15048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (23))){
var inst_14971 = (state_14986[(2)]);
var state_14986__$1 = state_14986;
if(cljs.core.truth_(inst_14971)){
var statearr_15008_15049 = state_14986__$1;
(statearr_15008_15049[(1)] = (24));

} else {
var statearr_15009_15050 = state_14986__$1;
(statearr_15009_15050[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (19))){
var inst_14968 = (state_14986[(2)]);
var state_14986__$1 = state_14986;
if(cljs.core.truth_(inst_14968)){
var statearr_15010_15051 = state_14986__$1;
(statearr_15010_15051[(1)] = (20));

} else {
var statearr_15011_15052 = state_14986__$1;
(statearr_15011_15052[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (11))){
var inst_14945 = (state_14986[(8)]);
var inst_14951 = (inst_14945 == null);
var state_14986__$1 = state_14986;
if(cljs.core.truth_(inst_14951)){
var statearr_15012_15053 = state_14986__$1;
(statearr_15012_15053[(1)] = (14));

} else {
var statearr_15013_15054 = state_14986__$1;
(statearr_15013_15054[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (9))){
var inst_14938 = (state_14986[(10)]);
var inst_14938__$1 = (state_14986[(2)]);
var inst_14939 = cljs.core.get.call(null,inst_14938__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14940 = cljs.core.get.call(null,inst_14938__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14941 = cljs.core.get.call(null,inst_14938__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14986__$1 = (function (){var statearr_15014 = state_14986;
(statearr_15014[(17)] = inst_14940);

(statearr_15014[(15)] = inst_14939);

(statearr_15014[(10)] = inst_14938__$1);

return statearr_15014;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14986__$1,(10),inst_14941);
} else {
if((state_val_14987 === (5))){
var inst_14930 = (state_14986[(7)]);
var inst_14933 = cljs.core.seq_QMARK_.call(null,inst_14930);
var state_14986__$1 = state_14986;
if(inst_14933){
var statearr_15015_15055 = state_14986__$1;
(statearr_15015_15055[(1)] = (7));

} else {
var statearr_15016_15056 = state_14986__$1;
(statearr_15016_15056[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (14))){
var inst_14946 = (state_14986[(16)]);
var inst_14953 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14946);
var state_14986__$1 = state_14986;
var statearr_15017_15057 = state_14986__$1;
(statearr_15017_15057[(2)] = inst_14953);

(statearr_15017_15057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (26))){
var inst_14976 = (state_14986[(2)]);
var state_14986__$1 = state_14986;
var statearr_15018_15058 = state_14986__$1;
(statearr_15018_15058[(2)] = inst_14976);

(statearr_15018_15058[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (16))){
var inst_14956 = (state_14986[(2)]);
var inst_14957 = calc_state.call(null);
var inst_14930 = inst_14957;
var state_14986__$1 = (function (){var statearr_15019 = state_14986;
(statearr_15019[(7)] = inst_14930);

(statearr_15019[(18)] = inst_14956);

return statearr_15019;
})();
var statearr_15020_15059 = state_14986__$1;
(statearr_15020_15059[(2)] = null);

(statearr_15020_15059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (10))){
var inst_14945 = (state_14986[(8)]);
var inst_14946 = (state_14986[(16)]);
var inst_14944 = (state_14986[(2)]);
var inst_14945__$1 = cljs.core.nth.call(null,inst_14944,(0),null);
var inst_14946__$1 = cljs.core.nth.call(null,inst_14944,(1),null);
var inst_14947 = (inst_14945__$1 == null);
var inst_14948 = cljs.core._EQ_.call(null,inst_14946__$1,change);
var inst_14949 = (inst_14947) || (inst_14948);
var state_14986__$1 = (function (){var statearr_15021 = state_14986;
(statearr_15021[(8)] = inst_14945__$1);

(statearr_15021[(16)] = inst_14946__$1);

return statearr_15021;
})();
if(cljs.core.truth_(inst_14949)){
var statearr_15022_15060 = state_14986__$1;
(statearr_15022_15060[(1)] = (11));

} else {
var statearr_15023_15061 = state_14986__$1;
(statearr_15023_15061[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (18))){
var inst_14940 = (state_14986[(17)]);
var inst_14939 = (state_14986[(15)]);
var inst_14946 = (state_14986[(16)]);
var inst_14963 = cljs.core.empty_QMARK_.call(null,inst_14939);
var inst_14964 = inst_14940.call(null,inst_14946);
var inst_14965 = cljs.core.not.call(null,inst_14964);
var inst_14966 = (inst_14963) && (inst_14965);
var state_14986__$1 = state_14986;
var statearr_15024_15062 = state_14986__$1;
(statearr_15024_15062[(2)] = inst_14966);

(statearr_15024_15062[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14987 === (8))){
var inst_14930 = (state_14986[(7)]);
var state_14986__$1 = state_14986;
var statearr_15025_15063 = state_14986__$1;
(statearr_15025_15063[(2)] = inst_14930);

(statearr_15025_15063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___15033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6985__auto__,c__7047__auto___15033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6986__auto__ = null;
var cljs$core$async$mix_$_state_machine__6986__auto____0 = (function (){
var statearr_15029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15029[(0)] = cljs$core$async$mix_$_state_machine__6986__auto__);

(statearr_15029[(1)] = (1));

return statearr_15029;
});
var cljs$core$async$mix_$_state_machine__6986__auto____1 = (function (state_14986){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_14986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e15030){if((e15030 instanceof Object)){
var ex__6989__auto__ = e15030;
var statearr_15031_15064 = state_14986;
(statearr_15031_15064[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15065 = state_14986;
state_14986 = G__15065;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6986__auto__ = function(state_14986){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6986__auto____1.call(this,state_14986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6986__auto____0;
cljs$core$async$mix_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6986__auto____1;
return cljs$core$async$mix_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___15033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7049__auto__ = (function (){var statearr_15032 = f__7048__auto__.call(null);
(statearr_15032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___15033);

return statearr_15032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___15033,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj15067 = {};
return obj15067;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__15069 = arguments.length;
switch (G__15069) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__15073 = arguments.length;
switch (G__15073) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4309__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4309__auto__,mults){
return (function (p1__15071_SHARP_){
if(cljs.core.truth_(p1__15071_SHARP_.call(null,topic))){
return p1__15071_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15071_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4309__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t15074 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15074 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15075){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15075 = meta15075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15076,meta15075__$1){
var self__ = this;
var _15076__$1 = this;
return (new cljs.core.async.t15074(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15075__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t15074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15076){
var self__ = this;
var _15076__$1 = this;
return self__.meta15075;
});})(mults,ensure_mult))
;

cljs.core.async.t15074.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t15074.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t15074.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t15074.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t15074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t15074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t15074.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15075","meta15075",1641957619,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t15074.cljs$lang$type = true;

cljs.core.async.t15074.cljs$lang$ctorStr = "cljs.core.async/t15074";

cljs.core.async.t15074.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15074");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t15074 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t15074(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15075){
return (new cljs.core.async.t15074(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15075));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t15074(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7047__auto___15197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___15197,mults,ensure_mult,p){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___15197,mults,ensure_mult,p){
return (function (state_15148){
var state_val_15149 = (state_15148[(1)]);
if((state_val_15149 === (7))){
var inst_15144 = (state_15148[(2)]);
var state_15148__$1 = state_15148;
var statearr_15150_15198 = state_15148__$1;
(statearr_15150_15198[(2)] = inst_15144);

(statearr_15150_15198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (20))){
var state_15148__$1 = state_15148;
var statearr_15151_15199 = state_15148__$1;
(statearr_15151_15199[(2)] = null);

(statearr_15151_15199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (1))){
var state_15148__$1 = state_15148;
var statearr_15152_15200 = state_15148__$1;
(statearr_15152_15200[(2)] = null);

(statearr_15152_15200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (24))){
var inst_15127 = (state_15148[(7)]);
var inst_15136 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15127);
var state_15148__$1 = state_15148;
var statearr_15153_15201 = state_15148__$1;
(statearr_15153_15201[(2)] = inst_15136);

(statearr_15153_15201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (4))){
var inst_15079 = (state_15148[(8)]);
var inst_15079__$1 = (state_15148[(2)]);
var inst_15080 = (inst_15079__$1 == null);
var state_15148__$1 = (function (){var statearr_15154 = state_15148;
(statearr_15154[(8)] = inst_15079__$1);

return statearr_15154;
})();
if(cljs.core.truth_(inst_15080)){
var statearr_15155_15202 = state_15148__$1;
(statearr_15155_15202[(1)] = (5));

} else {
var statearr_15156_15203 = state_15148__$1;
(statearr_15156_15203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (15))){
var inst_15121 = (state_15148[(2)]);
var state_15148__$1 = state_15148;
var statearr_15157_15204 = state_15148__$1;
(statearr_15157_15204[(2)] = inst_15121);

(statearr_15157_15204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (21))){
var inst_15141 = (state_15148[(2)]);
var state_15148__$1 = (function (){var statearr_15158 = state_15148;
(statearr_15158[(9)] = inst_15141);

return statearr_15158;
})();
var statearr_15159_15205 = state_15148__$1;
(statearr_15159_15205[(2)] = null);

(statearr_15159_15205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (13))){
var inst_15103 = (state_15148[(10)]);
var inst_15105 = cljs.core.chunked_seq_QMARK_.call(null,inst_15103);
var state_15148__$1 = state_15148;
if(inst_15105){
var statearr_15160_15206 = state_15148__$1;
(statearr_15160_15206[(1)] = (16));

} else {
var statearr_15161_15207 = state_15148__$1;
(statearr_15161_15207[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (22))){
var inst_15133 = (state_15148[(2)]);
var state_15148__$1 = state_15148;
if(cljs.core.truth_(inst_15133)){
var statearr_15162_15208 = state_15148__$1;
(statearr_15162_15208[(1)] = (23));

} else {
var statearr_15163_15209 = state_15148__$1;
(statearr_15163_15209[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (6))){
var inst_15079 = (state_15148[(8)]);
var inst_15129 = (state_15148[(11)]);
var inst_15127 = (state_15148[(7)]);
var inst_15127__$1 = topic_fn.call(null,inst_15079);
var inst_15128 = cljs.core.deref.call(null,mults);
var inst_15129__$1 = cljs.core.get.call(null,inst_15128,inst_15127__$1);
var state_15148__$1 = (function (){var statearr_15164 = state_15148;
(statearr_15164[(11)] = inst_15129__$1);

(statearr_15164[(7)] = inst_15127__$1);

return statearr_15164;
})();
if(cljs.core.truth_(inst_15129__$1)){
var statearr_15165_15210 = state_15148__$1;
(statearr_15165_15210[(1)] = (19));

} else {
var statearr_15166_15211 = state_15148__$1;
(statearr_15166_15211[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (25))){
var inst_15138 = (state_15148[(2)]);
var state_15148__$1 = state_15148;
var statearr_15167_15212 = state_15148__$1;
(statearr_15167_15212[(2)] = inst_15138);

(statearr_15167_15212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (17))){
var inst_15103 = (state_15148[(10)]);
var inst_15112 = cljs.core.first.call(null,inst_15103);
var inst_15113 = cljs.core.async.muxch_STAR_.call(null,inst_15112);
var inst_15114 = cljs.core.async.close_BANG_.call(null,inst_15113);
var inst_15115 = cljs.core.next.call(null,inst_15103);
var inst_15089 = inst_15115;
var inst_15090 = null;
var inst_15091 = (0);
var inst_15092 = (0);
var state_15148__$1 = (function (){var statearr_15168 = state_15148;
(statearr_15168[(12)] = inst_15092);

(statearr_15168[(13)] = inst_15114);

(statearr_15168[(14)] = inst_15089);

(statearr_15168[(15)] = inst_15090);

(statearr_15168[(16)] = inst_15091);

return statearr_15168;
})();
var statearr_15169_15213 = state_15148__$1;
(statearr_15169_15213[(2)] = null);

(statearr_15169_15213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (3))){
var inst_15146 = (state_15148[(2)]);
var state_15148__$1 = state_15148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15148__$1,inst_15146);
} else {
if((state_val_15149 === (12))){
var inst_15123 = (state_15148[(2)]);
var state_15148__$1 = state_15148;
var statearr_15170_15214 = state_15148__$1;
(statearr_15170_15214[(2)] = inst_15123);

(statearr_15170_15214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (2))){
var state_15148__$1 = state_15148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15148__$1,(4),ch);
} else {
if((state_val_15149 === (23))){
var state_15148__$1 = state_15148;
var statearr_15171_15215 = state_15148__$1;
(statearr_15171_15215[(2)] = null);

(statearr_15171_15215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (19))){
var inst_15079 = (state_15148[(8)]);
var inst_15129 = (state_15148[(11)]);
var inst_15131 = cljs.core.async.muxch_STAR_.call(null,inst_15129);
var state_15148__$1 = state_15148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15148__$1,(22),inst_15131,inst_15079);
} else {
if((state_val_15149 === (11))){
var inst_15103 = (state_15148[(10)]);
var inst_15089 = (state_15148[(14)]);
var inst_15103__$1 = cljs.core.seq.call(null,inst_15089);
var state_15148__$1 = (function (){var statearr_15172 = state_15148;
(statearr_15172[(10)] = inst_15103__$1);

return statearr_15172;
})();
if(inst_15103__$1){
var statearr_15173_15216 = state_15148__$1;
(statearr_15173_15216[(1)] = (13));

} else {
var statearr_15174_15217 = state_15148__$1;
(statearr_15174_15217[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (9))){
var inst_15125 = (state_15148[(2)]);
var state_15148__$1 = state_15148;
var statearr_15175_15218 = state_15148__$1;
(statearr_15175_15218[(2)] = inst_15125);

(statearr_15175_15218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (5))){
var inst_15086 = cljs.core.deref.call(null,mults);
var inst_15087 = cljs.core.vals.call(null,inst_15086);
var inst_15088 = cljs.core.seq.call(null,inst_15087);
var inst_15089 = inst_15088;
var inst_15090 = null;
var inst_15091 = (0);
var inst_15092 = (0);
var state_15148__$1 = (function (){var statearr_15176 = state_15148;
(statearr_15176[(12)] = inst_15092);

(statearr_15176[(14)] = inst_15089);

(statearr_15176[(15)] = inst_15090);

(statearr_15176[(16)] = inst_15091);

return statearr_15176;
})();
var statearr_15177_15219 = state_15148__$1;
(statearr_15177_15219[(2)] = null);

(statearr_15177_15219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (14))){
var state_15148__$1 = state_15148;
var statearr_15181_15220 = state_15148__$1;
(statearr_15181_15220[(2)] = null);

(statearr_15181_15220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (16))){
var inst_15103 = (state_15148[(10)]);
var inst_15107 = cljs.core.chunk_first.call(null,inst_15103);
var inst_15108 = cljs.core.chunk_rest.call(null,inst_15103);
var inst_15109 = cljs.core.count.call(null,inst_15107);
var inst_15089 = inst_15108;
var inst_15090 = inst_15107;
var inst_15091 = inst_15109;
var inst_15092 = (0);
var state_15148__$1 = (function (){var statearr_15182 = state_15148;
(statearr_15182[(12)] = inst_15092);

(statearr_15182[(14)] = inst_15089);

(statearr_15182[(15)] = inst_15090);

(statearr_15182[(16)] = inst_15091);

return statearr_15182;
})();
var statearr_15183_15221 = state_15148__$1;
(statearr_15183_15221[(2)] = null);

(statearr_15183_15221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (10))){
var inst_15092 = (state_15148[(12)]);
var inst_15089 = (state_15148[(14)]);
var inst_15090 = (state_15148[(15)]);
var inst_15091 = (state_15148[(16)]);
var inst_15097 = cljs.core._nth.call(null,inst_15090,inst_15092);
var inst_15098 = cljs.core.async.muxch_STAR_.call(null,inst_15097);
var inst_15099 = cljs.core.async.close_BANG_.call(null,inst_15098);
var inst_15100 = (inst_15092 + (1));
var tmp15178 = inst_15089;
var tmp15179 = inst_15090;
var tmp15180 = inst_15091;
var inst_15089__$1 = tmp15178;
var inst_15090__$1 = tmp15179;
var inst_15091__$1 = tmp15180;
var inst_15092__$1 = inst_15100;
var state_15148__$1 = (function (){var statearr_15184 = state_15148;
(statearr_15184[(17)] = inst_15099);

(statearr_15184[(12)] = inst_15092__$1);

(statearr_15184[(14)] = inst_15089__$1);

(statearr_15184[(15)] = inst_15090__$1);

(statearr_15184[(16)] = inst_15091__$1);

return statearr_15184;
})();
var statearr_15185_15222 = state_15148__$1;
(statearr_15185_15222[(2)] = null);

(statearr_15185_15222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (18))){
var inst_15118 = (state_15148[(2)]);
var state_15148__$1 = state_15148;
var statearr_15186_15223 = state_15148__$1;
(statearr_15186_15223[(2)] = inst_15118);

(statearr_15186_15223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15149 === (8))){
var inst_15092 = (state_15148[(12)]);
var inst_15091 = (state_15148[(16)]);
var inst_15094 = (inst_15092 < inst_15091);
var inst_15095 = inst_15094;
var state_15148__$1 = state_15148;
if(cljs.core.truth_(inst_15095)){
var statearr_15187_15224 = state_15148__$1;
(statearr_15187_15224[(1)] = (10));

} else {
var statearr_15188_15225 = state_15148__$1;
(statearr_15188_15225[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___15197,mults,ensure_mult,p))
;
return ((function (switch__6985__auto__,c__7047__auto___15197,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_15192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15192[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_15192[(1)] = (1));

return statearr_15192;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_15148){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_15148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e15193){if((e15193 instanceof Object)){
var ex__6989__auto__ = e15193;
var statearr_15194_15226 = state_15148;
(statearr_15194_15226[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15227 = state_15148;
state_15148 = G__15227;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_15148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_15148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___15197,mults,ensure_mult,p))
})();
var state__7049__auto__ = (function (){var statearr_15195 = f__7048__auto__.call(null);
(statearr_15195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___15197);

return statearr_15195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___15197,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__15229 = arguments.length;
switch (G__15229) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__15232 = arguments.length;
switch (G__15232) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__15235 = arguments.length;
switch (G__15235) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7047__auto___15305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___15305,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___15305,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15274){
var state_val_15275 = (state_15274[(1)]);
if((state_val_15275 === (7))){
var state_15274__$1 = state_15274;
var statearr_15276_15306 = state_15274__$1;
(statearr_15276_15306[(2)] = null);

(statearr_15276_15306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (1))){
var state_15274__$1 = state_15274;
var statearr_15277_15307 = state_15274__$1;
(statearr_15277_15307[(2)] = null);

(statearr_15277_15307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (4))){
var inst_15238 = (state_15274[(7)]);
var inst_15240 = (inst_15238 < cnt);
var state_15274__$1 = state_15274;
if(cljs.core.truth_(inst_15240)){
var statearr_15278_15308 = state_15274__$1;
(statearr_15278_15308[(1)] = (6));

} else {
var statearr_15279_15309 = state_15274__$1;
(statearr_15279_15309[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (15))){
var inst_15270 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
var statearr_15280_15310 = state_15274__$1;
(statearr_15280_15310[(2)] = inst_15270);

(statearr_15280_15310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (13))){
var inst_15263 = cljs.core.async.close_BANG_.call(null,out);
var state_15274__$1 = state_15274;
var statearr_15281_15311 = state_15274__$1;
(statearr_15281_15311[(2)] = inst_15263);

(statearr_15281_15311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (6))){
var state_15274__$1 = state_15274;
var statearr_15282_15312 = state_15274__$1;
(statearr_15282_15312[(2)] = null);

(statearr_15282_15312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (3))){
var inst_15272 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15274__$1,inst_15272);
} else {
if((state_val_15275 === (12))){
var inst_15260 = (state_15274[(8)]);
var inst_15260__$1 = (state_15274[(2)]);
var inst_15261 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15260__$1);
var state_15274__$1 = (function (){var statearr_15283 = state_15274;
(statearr_15283[(8)] = inst_15260__$1);

return statearr_15283;
})();
if(cljs.core.truth_(inst_15261)){
var statearr_15284_15313 = state_15274__$1;
(statearr_15284_15313[(1)] = (13));

} else {
var statearr_15285_15314 = state_15274__$1;
(statearr_15285_15314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (2))){
var inst_15237 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15238 = (0);
var state_15274__$1 = (function (){var statearr_15286 = state_15274;
(statearr_15286[(7)] = inst_15238);

(statearr_15286[(9)] = inst_15237);

return statearr_15286;
})();
var statearr_15287_15315 = state_15274__$1;
(statearr_15287_15315[(2)] = null);

(statearr_15287_15315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (11))){
var inst_15238 = (state_15274[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15274,(10),Object,null,(9));
var inst_15247 = chs__$1.call(null,inst_15238);
var inst_15248 = done.call(null,inst_15238);
var inst_15249 = cljs.core.async.take_BANG_.call(null,inst_15247,inst_15248);
var state_15274__$1 = state_15274;
var statearr_15288_15316 = state_15274__$1;
(statearr_15288_15316[(2)] = inst_15249);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15274__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (9))){
var inst_15238 = (state_15274[(7)]);
var inst_15251 = (state_15274[(2)]);
var inst_15252 = (inst_15238 + (1));
var inst_15238__$1 = inst_15252;
var state_15274__$1 = (function (){var statearr_15289 = state_15274;
(statearr_15289[(7)] = inst_15238__$1);

(statearr_15289[(10)] = inst_15251);

return statearr_15289;
})();
var statearr_15290_15317 = state_15274__$1;
(statearr_15290_15317[(2)] = null);

(statearr_15290_15317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (5))){
var inst_15258 = (state_15274[(2)]);
var state_15274__$1 = (function (){var statearr_15291 = state_15274;
(statearr_15291[(11)] = inst_15258);

return statearr_15291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15274__$1,(12),dchan);
} else {
if((state_val_15275 === (14))){
var inst_15260 = (state_15274[(8)]);
var inst_15265 = cljs.core.apply.call(null,f,inst_15260);
var state_15274__$1 = state_15274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15274__$1,(16),out,inst_15265);
} else {
if((state_val_15275 === (16))){
var inst_15267 = (state_15274[(2)]);
var state_15274__$1 = (function (){var statearr_15292 = state_15274;
(statearr_15292[(12)] = inst_15267);

return statearr_15292;
})();
var statearr_15293_15318 = state_15274__$1;
(statearr_15293_15318[(2)] = null);

(statearr_15293_15318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (10))){
var inst_15242 = (state_15274[(2)]);
var inst_15243 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15274__$1 = (function (){var statearr_15294 = state_15274;
(statearr_15294[(13)] = inst_15242);

return statearr_15294;
})();
var statearr_15295_15319 = state_15274__$1;
(statearr_15295_15319[(2)] = inst_15243);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15274__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (8))){
var inst_15256 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
var statearr_15296_15320 = state_15274__$1;
(statearr_15296_15320[(2)] = inst_15256);

(statearr_15296_15320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___15305,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6985__auto__,c__7047__auto___15305,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_15300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15300[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_15300[(1)] = (1));

return statearr_15300;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_15274){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_15274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e15301){if((e15301 instanceof Object)){
var ex__6989__auto__ = e15301;
var statearr_15302_15321 = state_15274;
(statearr_15302_15321[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15322 = state_15274;
state_15274 = G__15322;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_15274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_15274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___15305,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7049__auto__ = (function (){var statearr_15303 = f__7048__auto__.call(null);
(statearr_15303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___15305);

return statearr_15303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___15305,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__15325 = arguments.length;
switch (G__15325) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7047__auto___15380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___15380,out){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___15380,out){
return (function (state_15355){
var state_val_15356 = (state_15355[(1)]);
if((state_val_15356 === (7))){
var inst_15335 = (state_15355[(7)]);
var inst_15334 = (state_15355[(8)]);
var inst_15334__$1 = (state_15355[(2)]);
var inst_15335__$1 = cljs.core.nth.call(null,inst_15334__$1,(0),null);
var inst_15336 = cljs.core.nth.call(null,inst_15334__$1,(1),null);
var inst_15337 = (inst_15335__$1 == null);
var state_15355__$1 = (function (){var statearr_15357 = state_15355;
(statearr_15357[(7)] = inst_15335__$1);

(statearr_15357[(9)] = inst_15336);

(statearr_15357[(8)] = inst_15334__$1);

return statearr_15357;
})();
if(cljs.core.truth_(inst_15337)){
var statearr_15358_15381 = state_15355__$1;
(statearr_15358_15381[(1)] = (8));

} else {
var statearr_15359_15382 = state_15355__$1;
(statearr_15359_15382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (1))){
var inst_15326 = cljs.core.vec.call(null,chs);
var inst_15327 = inst_15326;
var state_15355__$1 = (function (){var statearr_15360 = state_15355;
(statearr_15360[(10)] = inst_15327);

return statearr_15360;
})();
var statearr_15361_15383 = state_15355__$1;
(statearr_15361_15383[(2)] = null);

(statearr_15361_15383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (4))){
var inst_15327 = (state_15355[(10)]);
var state_15355__$1 = state_15355;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15355__$1,(7),inst_15327);
} else {
if((state_val_15356 === (6))){
var inst_15351 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15362_15384 = state_15355__$1;
(statearr_15362_15384[(2)] = inst_15351);

(statearr_15362_15384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (3))){
var inst_15353 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15355__$1,inst_15353);
} else {
if((state_val_15356 === (2))){
var inst_15327 = (state_15355[(10)]);
var inst_15329 = cljs.core.count.call(null,inst_15327);
var inst_15330 = (inst_15329 > (0));
var state_15355__$1 = state_15355;
if(cljs.core.truth_(inst_15330)){
var statearr_15364_15385 = state_15355__$1;
(statearr_15364_15385[(1)] = (4));

} else {
var statearr_15365_15386 = state_15355__$1;
(statearr_15365_15386[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (11))){
var inst_15327 = (state_15355[(10)]);
var inst_15344 = (state_15355[(2)]);
var tmp15363 = inst_15327;
var inst_15327__$1 = tmp15363;
var state_15355__$1 = (function (){var statearr_15366 = state_15355;
(statearr_15366[(10)] = inst_15327__$1);

(statearr_15366[(11)] = inst_15344);

return statearr_15366;
})();
var statearr_15367_15387 = state_15355__$1;
(statearr_15367_15387[(2)] = null);

(statearr_15367_15387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (9))){
var inst_15335 = (state_15355[(7)]);
var state_15355__$1 = state_15355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15355__$1,(11),out,inst_15335);
} else {
if((state_val_15356 === (5))){
var inst_15349 = cljs.core.async.close_BANG_.call(null,out);
var state_15355__$1 = state_15355;
var statearr_15368_15388 = state_15355__$1;
(statearr_15368_15388[(2)] = inst_15349);

(statearr_15368_15388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (10))){
var inst_15347 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15369_15389 = state_15355__$1;
(statearr_15369_15389[(2)] = inst_15347);

(statearr_15369_15389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (8))){
var inst_15335 = (state_15355[(7)]);
var inst_15336 = (state_15355[(9)]);
var inst_15334 = (state_15355[(8)]);
var inst_15327 = (state_15355[(10)]);
var inst_15339 = (function (){var cs = inst_15327;
var vec__15332 = inst_15334;
var v = inst_15335;
var c = inst_15336;
return ((function (cs,vec__15332,v,c,inst_15335,inst_15336,inst_15334,inst_15327,state_val_15356,c__7047__auto___15380,out){
return (function (p1__15323_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15323_SHARP_);
});
;})(cs,vec__15332,v,c,inst_15335,inst_15336,inst_15334,inst_15327,state_val_15356,c__7047__auto___15380,out))
})();
var inst_15340 = cljs.core.filterv.call(null,inst_15339,inst_15327);
var inst_15327__$1 = inst_15340;
var state_15355__$1 = (function (){var statearr_15370 = state_15355;
(statearr_15370[(10)] = inst_15327__$1);

return statearr_15370;
})();
var statearr_15371_15390 = state_15355__$1;
(statearr_15371_15390[(2)] = null);

(statearr_15371_15390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___15380,out))
;
return ((function (switch__6985__auto__,c__7047__auto___15380,out){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_15375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15375[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_15375[(1)] = (1));

return statearr_15375;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_15355){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_15355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e15376){if((e15376 instanceof Object)){
var ex__6989__auto__ = e15376;
var statearr_15377_15391 = state_15355;
(statearr_15377_15391[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15392 = state_15355;
state_15355 = G__15392;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_15355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_15355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___15380,out))
})();
var state__7049__auto__ = (function (){var statearr_15378 = f__7048__auto__.call(null);
(statearr_15378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___15380);

return statearr_15378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___15380,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__15394 = arguments.length;
switch (G__15394) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7047__auto___15442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___15442,out){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___15442,out){
return (function (state_15418){
var state_val_15419 = (state_15418[(1)]);
if((state_val_15419 === (7))){
var inst_15400 = (state_15418[(7)]);
var inst_15400__$1 = (state_15418[(2)]);
var inst_15401 = (inst_15400__$1 == null);
var inst_15402 = cljs.core.not.call(null,inst_15401);
var state_15418__$1 = (function (){var statearr_15420 = state_15418;
(statearr_15420[(7)] = inst_15400__$1);

return statearr_15420;
})();
if(inst_15402){
var statearr_15421_15443 = state_15418__$1;
(statearr_15421_15443[(1)] = (8));

} else {
var statearr_15422_15444 = state_15418__$1;
(statearr_15422_15444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (1))){
var inst_15395 = (0);
var state_15418__$1 = (function (){var statearr_15423 = state_15418;
(statearr_15423[(8)] = inst_15395);

return statearr_15423;
})();
var statearr_15424_15445 = state_15418__$1;
(statearr_15424_15445[(2)] = null);

(statearr_15424_15445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (4))){
var state_15418__$1 = state_15418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15418__$1,(7),ch);
} else {
if((state_val_15419 === (6))){
var inst_15413 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15425_15446 = state_15418__$1;
(statearr_15425_15446[(2)] = inst_15413);

(statearr_15425_15446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (3))){
var inst_15415 = (state_15418[(2)]);
var inst_15416 = cljs.core.async.close_BANG_.call(null,out);
var state_15418__$1 = (function (){var statearr_15426 = state_15418;
(statearr_15426[(9)] = inst_15415);

return statearr_15426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15418__$1,inst_15416);
} else {
if((state_val_15419 === (2))){
var inst_15395 = (state_15418[(8)]);
var inst_15397 = (inst_15395 < n);
var state_15418__$1 = state_15418;
if(cljs.core.truth_(inst_15397)){
var statearr_15427_15447 = state_15418__$1;
(statearr_15427_15447[(1)] = (4));

} else {
var statearr_15428_15448 = state_15418__$1;
(statearr_15428_15448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (11))){
var inst_15395 = (state_15418[(8)]);
var inst_15405 = (state_15418[(2)]);
var inst_15406 = (inst_15395 + (1));
var inst_15395__$1 = inst_15406;
var state_15418__$1 = (function (){var statearr_15429 = state_15418;
(statearr_15429[(8)] = inst_15395__$1);

(statearr_15429[(10)] = inst_15405);

return statearr_15429;
})();
var statearr_15430_15449 = state_15418__$1;
(statearr_15430_15449[(2)] = null);

(statearr_15430_15449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (9))){
var state_15418__$1 = state_15418;
var statearr_15431_15450 = state_15418__$1;
(statearr_15431_15450[(2)] = null);

(statearr_15431_15450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (5))){
var state_15418__$1 = state_15418;
var statearr_15432_15451 = state_15418__$1;
(statearr_15432_15451[(2)] = null);

(statearr_15432_15451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (10))){
var inst_15410 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15433_15452 = state_15418__$1;
(statearr_15433_15452[(2)] = inst_15410);

(statearr_15433_15452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (8))){
var inst_15400 = (state_15418[(7)]);
var state_15418__$1 = state_15418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15418__$1,(11),out,inst_15400);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___15442,out))
;
return ((function (switch__6985__auto__,c__7047__auto___15442,out){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_15437 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15437[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_15437[(1)] = (1));

return statearr_15437;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_15418){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_15418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e15438){if((e15438 instanceof Object)){
var ex__6989__auto__ = e15438;
var statearr_15439_15453 = state_15418;
(statearr_15439_15453[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15454 = state_15418;
state_15418 = G__15454;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_15418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_15418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___15442,out))
})();
var state__7049__auto__ = (function (){var statearr_15440 = f__7048__auto__.call(null);
(statearr_15440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___15442);

return statearr_15440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___15442,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15462 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15462 = (function (map_LT_,f,ch,meta15463){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15463 = meta15463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15464,meta15463__$1){
var self__ = this;
var _15464__$1 = this;
return (new cljs.core.async.t15462(self__.map_LT_,self__.f,self__.ch,meta15463__$1));
});

cljs.core.async.t15462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15464){
var self__ = this;
var _15464__$1 = this;
return self__.meta15463;
});

cljs.core.async.t15462.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15462.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15462.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15465 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15465 = (function (map_LT_,f,ch,meta15463,_,fn1,meta15466){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15463 = meta15463;
this._ = _;
this.fn1 = fn1;
this.meta15466 = meta15466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15467,meta15466__$1){
var self__ = this;
var _15467__$1 = this;
return (new cljs.core.async.t15465(self__.map_LT_,self__.f,self__.ch,self__.meta15463,self__._,self__.fn1,meta15466__$1));
});})(___$1))
;

cljs.core.async.t15465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15467){
var self__ = this;
var _15467__$1 = this;
return self__.meta15466;
});})(___$1))
;

cljs.core.async.t15465.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15455_SHARP_){
return f1.call(null,(((p1__15455_SHARP_ == null))?null:self__.f.call(null,p1__15455_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15465.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15463","meta15463",-2026296706,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15466","meta15466",-1740597976,null)], null);
});})(___$1))
;

cljs.core.async.t15465.cljs$lang$type = true;

cljs.core.async.t15465.cljs$lang$ctorStr = "cljs.core.async/t15465";

cljs.core.async.t15465.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15465");
});})(___$1))
;

cljs.core.async.__GT_t15465 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15465(map_LT___$1,f__$1,ch__$1,meta15463__$1,___$2,fn1__$1,meta15466){
return (new cljs.core.async.t15465(map_LT___$1,f__$1,ch__$1,meta15463__$1,___$2,fn1__$1,meta15466));
});})(___$1))
;

}

return (new cljs.core.async.t15465(self__.map_LT_,self__.f,self__.ch,self__.meta15463,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4297__auto__ = ret;
if(cljs.core.truth_(and__4297__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4297__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t15462.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15463","meta15463",-2026296706,null)], null);
});

cljs.core.async.t15462.cljs$lang$type = true;

cljs.core.async.t15462.cljs$lang$ctorStr = "cljs.core.async/t15462";

cljs.core.async.t15462.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15462");
});

cljs.core.async.__GT_t15462 = (function cljs$core$async$map_LT__$___GT_t15462(map_LT___$1,f__$1,ch__$1,meta15463){
return (new cljs.core.async.t15462(map_LT___$1,f__$1,ch__$1,meta15463));
});

}

return (new cljs.core.async.t15462(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15471 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15471 = (function (map_GT_,f,ch,meta15472){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15472 = meta15472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15473,meta15472__$1){
var self__ = this;
var _15473__$1 = this;
return (new cljs.core.async.t15471(self__.map_GT_,self__.f,self__.ch,meta15472__$1));
});

cljs.core.async.t15471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15473){
var self__ = this;
var _15473__$1 = this;
return self__.meta15472;
});

cljs.core.async.t15471.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15471.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15471.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15471.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15471.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15471.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15472","meta15472",981698604,null)], null);
});

cljs.core.async.t15471.cljs$lang$type = true;

cljs.core.async.t15471.cljs$lang$ctorStr = "cljs.core.async/t15471";

cljs.core.async.t15471.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15471");
});

cljs.core.async.__GT_t15471 = (function cljs$core$async$map_GT__$___GT_t15471(map_GT___$1,f__$1,ch__$1,meta15472){
return (new cljs.core.async.t15471(map_GT___$1,f__$1,ch__$1,meta15472));
});

}

return (new cljs.core.async.t15471(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15477 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15477 = (function (filter_GT_,p,ch,meta15478){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15478 = meta15478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15479,meta15478__$1){
var self__ = this;
var _15479__$1 = this;
return (new cljs.core.async.t15477(self__.filter_GT_,self__.p,self__.ch,meta15478__$1));
});

cljs.core.async.t15477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15479){
var self__ = this;
var _15479__$1 = this;
return self__.meta15478;
});

cljs.core.async.t15477.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15477.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15477.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15477.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15478","meta15478",273049759,null)], null);
});

cljs.core.async.t15477.cljs$lang$type = true;

cljs.core.async.t15477.cljs$lang$ctorStr = "cljs.core.async/t15477";

cljs.core.async.t15477.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15477");
});

cljs.core.async.__GT_t15477 = (function cljs$core$async$filter_GT__$___GT_t15477(filter_GT___$1,p__$1,ch__$1,meta15478){
return (new cljs.core.async.t15477(filter_GT___$1,p__$1,ch__$1,meta15478));
});

}

return (new cljs.core.async.t15477(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__15481 = arguments.length;
switch (G__15481) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7047__auto___15524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___15524,out){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___15524,out){
return (function (state_15502){
var state_val_15503 = (state_15502[(1)]);
if((state_val_15503 === (7))){
var inst_15498 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
var statearr_15504_15525 = state_15502__$1;
(statearr_15504_15525[(2)] = inst_15498);

(statearr_15504_15525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (1))){
var state_15502__$1 = state_15502;
var statearr_15505_15526 = state_15502__$1;
(statearr_15505_15526[(2)] = null);

(statearr_15505_15526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (4))){
var inst_15484 = (state_15502[(7)]);
var inst_15484__$1 = (state_15502[(2)]);
var inst_15485 = (inst_15484__$1 == null);
var state_15502__$1 = (function (){var statearr_15506 = state_15502;
(statearr_15506[(7)] = inst_15484__$1);

return statearr_15506;
})();
if(cljs.core.truth_(inst_15485)){
var statearr_15507_15527 = state_15502__$1;
(statearr_15507_15527[(1)] = (5));

} else {
var statearr_15508_15528 = state_15502__$1;
(statearr_15508_15528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (6))){
var inst_15484 = (state_15502[(7)]);
var inst_15489 = p.call(null,inst_15484);
var state_15502__$1 = state_15502;
if(cljs.core.truth_(inst_15489)){
var statearr_15509_15529 = state_15502__$1;
(statearr_15509_15529[(1)] = (8));

} else {
var statearr_15510_15530 = state_15502__$1;
(statearr_15510_15530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (3))){
var inst_15500 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15502__$1,inst_15500);
} else {
if((state_val_15503 === (2))){
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15502__$1,(4),ch);
} else {
if((state_val_15503 === (11))){
var inst_15492 = (state_15502[(2)]);
var state_15502__$1 = state_15502;
var statearr_15511_15531 = state_15502__$1;
(statearr_15511_15531[(2)] = inst_15492);

(statearr_15511_15531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (9))){
var state_15502__$1 = state_15502;
var statearr_15512_15532 = state_15502__$1;
(statearr_15512_15532[(2)] = null);

(statearr_15512_15532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (5))){
var inst_15487 = cljs.core.async.close_BANG_.call(null,out);
var state_15502__$1 = state_15502;
var statearr_15513_15533 = state_15502__$1;
(statearr_15513_15533[(2)] = inst_15487);

(statearr_15513_15533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (10))){
var inst_15495 = (state_15502[(2)]);
var state_15502__$1 = (function (){var statearr_15514 = state_15502;
(statearr_15514[(8)] = inst_15495);

return statearr_15514;
})();
var statearr_15515_15534 = state_15502__$1;
(statearr_15515_15534[(2)] = null);

(statearr_15515_15534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15503 === (8))){
var inst_15484 = (state_15502[(7)]);
var state_15502__$1 = state_15502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15502__$1,(11),out,inst_15484);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___15524,out))
;
return ((function (switch__6985__auto__,c__7047__auto___15524,out){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_15519 = [null,null,null,null,null,null,null,null,null];
(statearr_15519[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_15519[(1)] = (1));

return statearr_15519;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_15502){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_15502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e15520){if((e15520 instanceof Object)){
var ex__6989__auto__ = e15520;
var statearr_15521_15535 = state_15502;
(statearr_15521_15535[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15536 = state_15502;
state_15502 = G__15536;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_15502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_15502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___15524,out))
})();
var state__7049__auto__ = (function (){var statearr_15522 = f__7048__auto__.call(null);
(statearr_15522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___15524);

return statearr_15522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___15524,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__15538 = arguments.length;
switch (G__15538) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__){
return (function (state_15705){
var state_val_15706 = (state_15705[(1)]);
if((state_val_15706 === (7))){
var inst_15701 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
var statearr_15707_15748 = state_15705__$1;
(statearr_15707_15748[(2)] = inst_15701);

(statearr_15707_15748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (20))){
var inst_15671 = (state_15705[(7)]);
var inst_15682 = (state_15705[(2)]);
var inst_15683 = cljs.core.next.call(null,inst_15671);
var inst_15657 = inst_15683;
var inst_15658 = null;
var inst_15659 = (0);
var inst_15660 = (0);
var state_15705__$1 = (function (){var statearr_15708 = state_15705;
(statearr_15708[(8)] = inst_15660);

(statearr_15708[(9)] = inst_15658);

(statearr_15708[(10)] = inst_15659);

(statearr_15708[(11)] = inst_15682);

(statearr_15708[(12)] = inst_15657);

return statearr_15708;
})();
var statearr_15709_15749 = state_15705__$1;
(statearr_15709_15749[(2)] = null);

(statearr_15709_15749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (1))){
var state_15705__$1 = state_15705;
var statearr_15710_15750 = state_15705__$1;
(statearr_15710_15750[(2)] = null);

(statearr_15710_15750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (4))){
var inst_15646 = (state_15705[(13)]);
var inst_15646__$1 = (state_15705[(2)]);
var inst_15647 = (inst_15646__$1 == null);
var state_15705__$1 = (function (){var statearr_15711 = state_15705;
(statearr_15711[(13)] = inst_15646__$1);

return statearr_15711;
})();
if(cljs.core.truth_(inst_15647)){
var statearr_15712_15751 = state_15705__$1;
(statearr_15712_15751[(1)] = (5));

} else {
var statearr_15713_15752 = state_15705__$1;
(statearr_15713_15752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (15))){
var state_15705__$1 = state_15705;
var statearr_15717_15753 = state_15705__$1;
(statearr_15717_15753[(2)] = null);

(statearr_15717_15753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (21))){
var state_15705__$1 = state_15705;
var statearr_15718_15754 = state_15705__$1;
(statearr_15718_15754[(2)] = null);

(statearr_15718_15754[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (13))){
var inst_15660 = (state_15705[(8)]);
var inst_15658 = (state_15705[(9)]);
var inst_15659 = (state_15705[(10)]);
var inst_15657 = (state_15705[(12)]);
var inst_15667 = (state_15705[(2)]);
var inst_15668 = (inst_15660 + (1));
var tmp15714 = inst_15658;
var tmp15715 = inst_15659;
var tmp15716 = inst_15657;
var inst_15657__$1 = tmp15716;
var inst_15658__$1 = tmp15714;
var inst_15659__$1 = tmp15715;
var inst_15660__$1 = inst_15668;
var state_15705__$1 = (function (){var statearr_15719 = state_15705;
(statearr_15719[(8)] = inst_15660__$1);

(statearr_15719[(9)] = inst_15658__$1);

(statearr_15719[(10)] = inst_15659__$1);

(statearr_15719[(14)] = inst_15667);

(statearr_15719[(12)] = inst_15657__$1);

return statearr_15719;
})();
var statearr_15720_15755 = state_15705__$1;
(statearr_15720_15755[(2)] = null);

(statearr_15720_15755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (22))){
var state_15705__$1 = state_15705;
var statearr_15721_15756 = state_15705__$1;
(statearr_15721_15756[(2)] = null);

(statearr_15721_15756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (6))){
var inst_15646 = (state_15705[(13)]);
var inst_15655 = f.call(null,inst_15646);
var inst_15656 = cljs.core.seq.call(null,inst_15655);
var inst_15657 = inst_15656;
var inst_15658 = null;
var inst_15659 = (0);
var inst_15660 = (0);
var state_15705__$1 = (function (){var statearr_15722 = state_15705;
(statearr_15722[(8)] = inst_15660);

(statearr_15722[(9)] = inst_15658);

(statearr_15722[(10)] = inst_15659);

(statearr_15722[(12)] = inst_15657);

return statearr_15722;
})();
var statearr_15723_15757 = state_15705__$1;
(statearr_15723_15757[(2)] = null);

(statearr_15723_15757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (17))){
var inst_15671 = (state_15705[(7)]);
var inst_15675 = cljs.core.chunk_first.call(null,inst_15671);
var inst_15676 = cljs.core.chunk_rest.call(null,inst_15671);
var inst_15677 = cljs.core.count.call(null,inst_15675);
var inst_15657 = inst_15676;
var inst_15658 = inst_15675;
var inst_15659 = inst_15677;
var inst_15660 = (0);
var state_15705__$1 = (function (){var statearr_15724 = state_15705;
(statearr_15724[(8)] = inst_15660);

(statearr_15724[(9)] = inst_15658);

(statearr_15724[(10)] = inst_15659);

(statearr_15724[(12)] = inst_15657);

return statearr_15724;
})();
var statearr_15725_15758 = state_15705__$1;
(statearr_15725_15758[(2)] = null);

(statearr_15725_15758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (3))){
var inst_15703 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15705__$1,inst_15703);
} else {
if((state_val_15706 === (12))){
var inst_15691 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
var statearr_15726_15759 = state_15705__$1;
(statearr_15726_15759[(2)] = inst_15691);

(statearr_15726_15759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (2))){
var state_15705__$1 = state_15705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15705__$1,(4),in$);
} else {
if((state_val_15706 === (23))){
var inst_15699 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
var statearr_15727_15760 = state_15705__$1;
(statearr_15727_15760[(2)] = inst_15699);

(statearr_15727_15760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (19))){
var inst_15686 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
var statearr_15728_15761 = state_15705__$1;
(statearr_15728_15761[(2)] = inst_15686);

(statearr_15728_15761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (11))){
var inst_15671 = (state_15705[(7)]);
var inst_15657 = (state_15705[(12)]);
var inst_15671__$1 = cljs.core.seq.call(null,inst_15657);
var state_15705__$1 = (function (){var statearr_15729 = state_15705;
(statearr_15729[(7)] = inst_15671__$1);

return statearr_15729;
})();
if(inst_15671__$1){
var statearr_15730_15762 = state_15705__$1;
(statearr_15730_15762[(1)] = (14));

} else {
var statearr_15731_15763 = state_15705__$1;
(statearr_15731_15763[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (9))){
var inst_15693 = (state_15705[(2)]);
var inst_15694 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15705__$1 = (function (){var statearr_15732 = state_15705;
(statearr_15732[(15)] = inst_15693);

return statearr_15732;
})();
if(cljs.core.truth_(inst_15694)){
var statearr_15733_15764 = state_15705__$1;
(statearr_15733_15764[(1)] = (21));

} else {
var statearr_15734_15765 = state_15705__$1;
(statearr_15734_15765[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (5))){
var inst_15649 = cljs.core.async.close_BANG_.call(null,out);
var state_15705__$1 = state_15705;
var statearr_15735_15766 = state_15705__$1;
(statearr_15735_15766[(2)] = inst_15649);

(statearr_15735_15766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (14))){
var inst_15671 = (state_15705[(7)]);
var inst_15673 = cljs.core.chunked_seq_QMARK_.call(null,inst_15671);
var state_15705__$1 = state_15705;
if(inst_15673){
var statearr_15736_15767 = state_15705__$1;
(statearr_15736_15767[(1)] = (17));

} else {
var statearr_15737_15768 = state_15705__$1;
(statearr_15737_15768[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (16))){
var inst_15689 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
var statearr_15738_15769 = state_15705__$1;
(statearr_15738_15769[(2)] = inst_15689);

(statearr_15738_15769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (10))){
var inst_15660 = (state_15705[(8)]);
var inst_15658 = (state_15705[(9)]);
var inst_15665 = cljs.core._nth.call(null,inst_15658,inst_15660);
var state_15705__$1 = state_15705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15705__$1,(13),out,inst_15665);
} else {
if((state_val_15706 === (18))){
var inst_15671 = (state_15705[(7)]);
var inst_15680 = cljs.core.first.call(null,inst_15671);
var state_15705__$1 = state_15705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15705__$1,(20),out,inst_15680);
} else {
if((state_val_15706 === (8))){
var inst_15660 = (state_15705[(8)]);
var inst_15659 = (state_15705[(10)]);
var inst_15662 = (inst_15660 < inst_15659);
var inst_15663 = inst_15662;
var state_15705__$1 = state_15705;
if(cljs.core.truth_(inst_15663)){
var statearr_15739_15770 = state_15705__$1;
(statearr_15739_15770[(1)] = (10));

} else {
var statearr_15740_15771 = state_15705__$1;
(statearr_15740_15771[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto__))
;
return ((function (switch__6985__auto__,c__7047__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6986__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6986__auto____0 = (function (){
var statearr_15744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15744[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6986__auto__);

(statearr_15744[(1)] = (1));

return statearr_15744;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6986__auto____1 = (function (state_15705){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_15705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e15745){if((e15745 instanceof Object)){
var ex__6989__auto__ = e15745;
var statearr_15746_15772 = state_15705;
(statearr_15746_15772[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15773 = state_15705;
state_15705 = G__15773;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6986__auto__ = function(state_15705){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6986__auto____1.call(this,state_15705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6986__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6986__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__))
})();
var state__7049__auto__ = (function (){var statearr_15747 = f__7048__auto__.call(null);
(statearr_15747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_15747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__))
);

return c__7047__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__15775 = arguments.length;
switch (G__15775) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__15778 = arguments.length;
switch (G__15778) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__15781 = arguments.length;
switch (G__15781) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7047__auto___15831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___15831,out){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___15831,out){
return (function (state_15805){
var state_val_15806 = (state_15805[(1)]);
if((state_val_15806 === (7))){
var inst_15800 = (state_15805[(2)]);
var state_15805__$1 = state_15805;
var statearr_15807_15832 = state_15805__$1;
(statearr_15807_15832[(2)] = inst_15800);

(statearr_15807_15832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (1))){
var inst_15782 = null;
var state_15805__$1 = (function (){var statearr_15808 = state_15805;
(statearr_15808[(7)] = inst_15782);

return statearr_15808;
})();
var statearr_15809_15833 = state_15805__$1;
(statearr_15809_15833[(2)] = null);

(statearr_15809_15833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (4))){
var inst_15785 = (state_15805[(8)]);
var inst_15785__$1 = (state_15805[(2)]);
var inst_15786 = (inst_15785__$1 == null);
var inst_15787 = cljs.core.not.call(null,inst_15786);
var state_15805__$1 = (function (){var statearr_15810 = state_15805;
(statearr_15810[(8)] = inst_15785__$1);

return statearr_15810;
})();
if(inst_15787){
var statearr_15811_15834 = state_15805__$1;
(statearr_15811_15834[(1)] = (5));

} else {
var statearr_15812_15835 = state_15805__$1;
(statearr_15812_15835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (6))){
var state_15805__$1 = state_15805;
var statearr_15813_15836 = state_15805__$1;
(statearr_15813_15836[(2)] = null);

(statearr_15813_15836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (3))){
var inst_15802 = (state_15805[(2)]);
var inst_15803 = cljs.core.async.close_BANG_.call(null,out);
var state_15805__$1 = (function (){var statearr_15814 = state_15805;
(statearr_15814[(9)] = inst_15802);

return statearr_15814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15805__$1,inst_15803);
} else {
if((state_val_15806 === (2))){
var state_15805__$1 = state_15805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15805__$1,(4),ch);
} else {
if((state_val_15806 === (11))){
var inst_15785 = (state_15805[(8)]);
var inst_15794 = (state_15805[(2)]);
var inst_15782 = inst_15785;
var state_15805__$1 = (function (){var statearr_15815 = state_15805;
(statearr_15815[(7)] = inst_15782);

(statearr_15815[(10)] = inst_15794);

return statearr_15815;
})();
var statearr_15816_15837 = state_15805__$1;
(statearr_15816_15837[(2)] = null);

(statearr_15816_15837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (9))){
var inst_15785 = (state_15805[(8)]);
var state_15805__$1 = state_15805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15805__$1,(11),out,inst_15785);
} else {
if((state_val_15806 === (5))){
var inst_15782 = (state_15805[(7)]);
var inst_15785 = (state_15805[(8)]);
var inst_15789 = cljs.core._EQ_.call(null,inst_15785,inst_15782);
var state_15805__$1 = state_15805;
if(inst_15789){
var statearr_15818_15838 = state_15805__$1;
(statearr_15818_15838[(1)] = (8));

} else {
var statearr_15819_15839 = state_15805__$1;
(statearr_15819_15839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (10))){
var inst_15797 = (state_15805[(2)]);
var state_15805__$1 = state_15805;
var statearr_15820_15840 = state_15805__$1;
(statearr_15820_15840[(2)] = inst_15797);

(statearr_15820_15840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15806 === (8))){
var inst_15782 = (state_15805[(7)]);
var tmp15817 = inst_15782;
var inst_15782__$1 = tmp15817;
var state_15805__$1 = (function (){var statearr_15821 = state_15805;
(statearr_15821[(7)] = inst_15782__$1);

return statearr_15821;
})();
var statearr_15822_15841 = state_15805__$1;
(statearr_15822_15841[(2)] = null);

(statearr_15822_15841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___15831,out))
;
return ((function (switch__6985__auto__,c__7047__auto___15831,out){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_15826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15826[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_15826[(1)] = (1));

return statearr_15826;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_15805){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_15805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e15827){if((e15827 instanceof Object)){
var ex__6989__auto__ = e15827;
var statearr_15828_15842 = state_15805;
(statearr_15828_15842[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15843 = state_15805;
state_15805 = G__15843;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_15805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_15805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___15831,out))
})();
var state__7049__auto__ = (function (){var statearr_15829 = f__7048__auto__.call(null);
(statearr_15829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___15831);

return statearr_15829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___15831,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15845 = arguments.length;
switch (G__15845) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7047__auto___15914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___15914,out){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___15914,out){
return (function (state_15883){
var state_val_15884 = (state_15883[(1)]);
if((state_val_15884 === (7))){
var inst_15879 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_15885_15915 = state_15883__$1;
(statearr_15885_15915[(2)] = inst_15879);

(statearr_15885_15915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (1))){
var inst_15846 = (new Array(n));
var inst_15847 = inst_15846;
var inst_15848 = (0);
var state_15883__$1 = (function (){var statearr_15886 = state_15883;
(statearr_15886[(7)] = inst_15847);

(statearr_15886[(8)] = inst_15848);

return statearr_15886;
})();
var statearr_15887_15916 = state_15883__$1;
(statearr_15887_15916[(2)] = null);

(statearr_15887_15916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (4))){
var inst_15851 = (state_15883[(9)]);
var inst_15851__$1 = (state_15883[(2)]);
var inst_15852 = (inst_15851__$1 == null);
var inst_15853 = cljs.core.not.call(null,inst_15852);
var state_15883__$1 = (function (){var statearr_15888 = state_15883;
(statearr_15888[(9)] = inst_15851__$1);

return statearr_15888;
})();
if(inst_15853){
var statearr_15889_15917 = state_15883__$1;
(statearr_15889_15917[(1)] = (5));

} else {
var statearr_15890_15918 = state_15883__$1;
(statearr_15890_15918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (15))){
var inst_15873 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_15891_15919 = state_15883__$1;
(statearr_15891_15919[(2)] = inst_15873);

(statearr_15891_15919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (13))){
var state_15883__$1 = state_15883;
var statearr_15892_15920 = state_15883__$1;
(statearr_15892_15920[(2)] = null);

(statearr_15892_15920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (6))){
var inst_15848 = (state_15883[(8)]);
var inst_15869 = (inst_15848 > (0));
var state_15883__$1 = state_15883;
if(cljs.core.truth_(inst_15869)){
var statearr_15893_15921 = state_15883__$1;
(statearr_15893_15921[(1)] = (12));

} else {
var statearr_15894_15922 = state_15883__$1;
(statearr_15894_15922[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (3))){
var inst_15881 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15883__$1,inst_15881);
} else {
if((state_val_15884 === (12))){
var inst_15847 = (state_15883[(7)]);
var inst_15871 = cljs.core.vec.call(null,inst_15847);
var state_15883__$1 = state_15883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15883__$1,(15),out,inst_15871);
} else {
if((state_val_15884 === (2))){
var state_15883__$1 = state_15883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15883__$1,(4),ch);
} else {
if((state_val_15884 === (11))){
var inst_15863 = (state_15883[(2)]);
var inst_15864 = (new Array(n));
var inst_15847 = inst_15864;
var inst_15848 = (0);
var state_15883__$1 = (function (){var statearr_15895 = state_15883;
(statearr_15895[(7)] = inst_15847);

(statearr_15895[(10)] = inst_15863);

(statearr_15895[(8)] = inst_15848);

return statearr_15895;
})();
var statearr_15896_15923 = state_15883__$1;
(statearr_15896_15923[(2)] = null);

(statearr_15896_15923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (9))){
var inst_15847 = (state_15883[(7)]);
var inst_15861 = cljs.core.vec.call(null,inst_15847);
var state_15883__$1 = state_15883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15883__$1,(11),out,inst_15861);
} else {
if((state_val_15884 === (5))){
var inst_15851 = (state_15883[(9)]);
var inst_15847 = (state_15883[(7)]);
var inst_15848 = (state_15883[(8)]);
var inst_15856 = (state_15883[(11)]);
var inst_15855 = (inst_15847[inst_15848] = inst_15851);
var inst_15856__$1 = (inst_15848 + (1));
var inst_15857 = (inst_15856__$1 < n);
var state_15883__$1 = (function (){var statearr_15897 = state_15883;
(statearr_15897[(12)] = inst_15855);

(statearr_15897[(11)] = inst_15856__$1);

return statearr_15897;
})();
if(cljs.core.truth_(inst_15857)){
var statearr_15898_15924 = state_15883__$1;
(statearr_15898_15924[(1)] = (8));

} else {
var statearr_15899_15925 = state_15883__$1;
(statearr_15899_15925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (14))){
var inst_15876 = (state_15883[(2)]);
var inst_15877 = cljs.core.async.close_BANG_.call(null,out);
var state_15883__$1 = (function (){var statearr_15901 = state_15883;
(statearr_15901[(13)] = inst_15876);

return statearr_15901;
})();
var statearr_15902_15926 = state_15883__$1;
(statearr_15902_15926[(2)] = inst_15877);

(statearr_15902_15926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (10))){
var inst_15867 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_15903_15927 = state_15883__$1;
(statearr_15903_15927[(2)] = inst_15867);

(statearr_15903_15927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (8))){
var inst_15847 = (state_15883[(7)]);
var inst_15856 = (state_15883[(11)]);
var tmp15900 = inst_15847;
var inst_15847__$1 = tmp15900;
var inst_15848 = inst_15856;
var state_15883__$1 = (function (){var statearr_15904 = state_15883;
(statearr_15904[(7)] = inst_15847__$1);

(statearr_15904[(8)] = inst_15848);

return statearr_15904;
})();
var statearr_15905_15928 = state_15883__$1;
(statearr_15905_15928[(2)] = null);

(statearr_15905_15928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___15914,out))
;
return ((function (switch__6985__auto__,c__7047__auto___15914,out){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_15909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15909[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_15909[(1)] = (1));

return statearr_15909;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_15883){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_15883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e15910){if((e15910 instanceof Object)){
var ex__6989__auto__ = e15910;
var statearr_15911_15929 = state_15883;
(statearr_15911_15929[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15930 = state_15883;
state_15883 = G__15930;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_15883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_15883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___15914,out))
})();
var state__7049__auto__ = (function (){var statearr_15912 = f__7048__auto__.call(null);
(statearr_15912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___15914);

return statearr_15912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___15914,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15932 = arguments.length;
switch (G__15932) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7047__auto___16005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___16005,out){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___16005,out){
return (function (state_15974){
var state_val_15975 = (state_15974[(1)]);
if((state_val_15975 === (7))){
var inst_15970 = (state_15974[(2)]);
var state_15974__$1 = state_15974;
var statearr_15976_16006 = state_15974__$1;
(statearr_15976_16006[(2)] = inst_15970);

(statearr_15976_16006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15975 === (1))){
var inst_15933 = [];
var inst_15934 = inst_15933;
var inst_15935 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15974__$1 = (function (){var statearr_15977 = state_15974;
(statearr_15977[(7)] = inst_15935);

(statearr_15977[(8)] = inst_15934);

return statearr_15977;
})();
var statearr_15978_16007 = state_15974__$1;
(statearr_15978_16007[(2)] = null);

(statearr_15978_16007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15975 === (4))){
var inst_15938 = (state_15974[(9)]);
var inst_15938__$1 = (state_15974[(2)]);
var inst_15939 = (inst_15938__$1 == null);
var inst_15940 = cljs.core.not.call(null,inst_15939);
var state_15974__$1 = (function (){var statearr_15979 = state_15974;
(statearr_15979[(9)] = inst_15938__$1);

return statearr_15979;
})();
if(inst_15940){
var statearr_15980_16008 = state_15974__$1;
(statearr_15980_16008[(1)] = (5));

} else {
var statearr_15981_16009 = state_15974__$1;
(statearr_15981_16009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15975 === (15))){
var inst_15964 = (state_15974[(2)]);
var state_15974__$1 = state_15974;
var statearr_15982_16010 = state_15974__$1;
(statearr_15982_16010[(2)] = inst_15964);

(statearr_15982_16010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15975 === (13))){
var state_15974__$1 = state_15974;
var statearr_15983_16011 = state_15974__$1;
(statearr_15983_16011[(2)] = null);

(statearr_15983_16011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15975 === (6))){
var inst_15934 = (state_15974[(8)]);
var inst_15959 = inst_15934.length;
var inst_15960 = (inst_15959 > (0));
var state_15974__$1 = state_15974;
if(cljs.core.truth_(inst_15960)){
var statearr_15984_16012 = state_15974__$1;
(statearr_15984_16012[(1)] = (12));

} else {
var statearr_15985_16013 = state_15974__$1;
(statearr_15985_16013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15975 === (3))){
var inst_15972 = (state_15974[(2)]);
var state_15974__$1 = state_15974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15974__$1,inst_15972);
} else {
if((state_val_15975 === (12))){
var inst_15934 = (state_15974[(8)]);
var inst_15962 = cljs.core.vec.call(null,inst_15934);
var state_15974__$1 = state_15974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15974__$1,(15),out,inst_15962);
} else {
if((state_val_15975 === (2))){
var state_15974__$1 = state_15974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15974__$1,(4),ch);
} else {
if((state_val_15975 === (11))){
var inst_15938 = (state_15974[(9)]);
var inst_15942 = (state_15974[(10)]);
var inst_15952 = (state_15974[(2)]);
var inst_15953 = [];
var inst_15954 = inst_15953.push(inst_15938);
var inst_15934 = inst_15953;
var inst_15935 = inst_15942;
var state_15974__$1 = (function (){var statearr_15986 = state_15974;
(statearr_15986[(7)] = inst_15935);

(statearr_15986[(11)] = inst_15954);

(statearr_15986[(12)] = inst_15952);

(statearr_15986[(8)] = inst_15934);

return statearr_15986;
})();
var statearr_15987_16014 = state_15974__$1;
(statearr_15987_16014[(2)] = null);

(statearr_15987_16014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15975 === (9))){
var inst_15934 = (state_15974[(8)]);
var inst_15950 = cljs.core.vec.call(null,inst_15934);
var state_15974__$1 = state_15974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15974__$1,(11),out,inst_15950);
} else {
if((state_val_15975 === (5))){
var inst_15935 = (state_15974[(7)]);
var inst_15938 = (state_15974[(9)]);
var inst_15942 = (state_15974[(10)]);
var inst_15942__$1 = f.call(null,inst_15938);
var inst_15943 = cljs.core._EQ_.call(null,inst_15942__$1,inst_15935);
var inst_15944 = cljs.core.keyword_identical_QMARK_.call(null,inst_15935,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15945 = (inst_15943) || (inst_15944);
var state_15974__$1 = (function (){var statearr_15988 = state_15974;
(statearr_15988[(10)] = inst_15942__$1);

return statearr_15988;
})();
if(cljs.core.truth_(inst_15945)){
var statearr_15989_16015 = state_15974__$1;
(statearr_15989_16015[(1)] = (8));

} else {
var statearr_15990_16016 = state_15974__$1;
(statearr_15990_16016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15975 === (14))){
var inst_15967 = (state_15974[(2)]);
var inst_15968 = cljs.core.async.close_BANG_.call(null,out);
var state_15974__$1 = (function (){var statearr_15992 = state_15974;
(statearr_15992[(13)] = inst_15967);

return statearr_15992;
})();
var statearr_15993_16017 = state_15974__$1;
(statearr_15993_16017[(2)] = inst_15968);

(statearr_15993_16017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15975 === (10))){
var inst_15957 = (state_15974[(2)]);
var state_15974__$1 = state_15974;
var statearr_15994_16018 = state_15974__$1;
(statearr_15994_16018[(2)] = inst_15957);

(statearr_15994_16018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15975 === (8))){
var inst_15938 = (state_15974[(9)]);
var inst_15934 = (state_15974[(8)]);
var inst_15942 = (state_15974[(10)]);
var inst_15947 = inst_15934.push(inst_15938);
var tmp15991 = inst_15934;
var inst_15934__$1 = tmp15991;
var inst_15935 = inst_15942;
var state_15974__$1 = (function (){var statearr_15995 = state_15974;
(statearr_15995[(7)] = inst_15935);

(statearr_15995[(14)] = inst_15947);

(statearr_15995[(8)] = inst_15934__$1);

return statearr_15995;
})();
var statearr_15996_16019 = state_15974__$1;
(statearr_15996_16019[(2)] = null);

(statearr_15996_16019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7047__auto___16005,out))
;
return ((function (switch__6985__auto__,c__7047__auto___16005,out){
return (function() {
var cljs$core$async$state_machine__6986__auto__ = null;
var cljs$core$async$state_machine__6986__auto____0 = (function (){
var statearr_16000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16000[(0)] = cljs$core$async$state_machine__6986__auto__);

(statearr_16000[(1)] = (1));

return statearr_16000;
});
var cljs$core$async$state_machine__6986__auto____1 = (function (state_15974){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_15974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e16001){if((e16001 instanceof Object)){
var ex__6989__auto__ = e16001;
var statearr_16002_16020 = state_15974;
(statearr_16002_16020[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16021 = state_15974;
state_15974 = G__16021;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
cljs$core$async$state_machine__6986__auto__ = function(state_15974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6986__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6986__auto____1.call(this,state_15974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6986__auto____0;
cljs$core$async$state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6986__auto____1;
return cljs$core$async$state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___16005,out))
})();
var state__7049__auto__ = (function (){var statearr_16003 = f__7048__auto__.call(null);
(statearr_16003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___16005);

return statearr_16003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___16005,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map