// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11859__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__11859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11860__i = 0, G__11860__a = new Array(arguments.length -  0);
while (G__11860__i < G__11860__a.length) {G__11860__a[G__11860__i] = arguments[G__11860__i + 0]; ++G__11860__i;}
  args = new cljs.core.IndexedSeq(G__11860__a,0);
} 
return G__11859__delegate.call(this,args);};
G__11859.cljs$lang$maxFixedArity = 0;
G__11859.cljs$lang$applyTo = (function (arglist__11861){
var args = cljs.core.seq(arglist__11861);
return G__11859__delegate(args);
});
G__11859.cljs$core$IFn$_invoke$arity$variadic = G__11859__delegate;
return G__11859;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__11862){
var map__11864 = p__11862;
var map__11864__$1 = ((cljs.core.seq_QMARK_.call(null,map__11864))?cljs.core.apply.call(null,cljs.core.hash_map,map__11864):map__11864);
var message = cljs.core.get.call(null,map__11864__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__11864__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4309__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4297__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4297__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4297__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__7047__auto___11993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___11993,ch){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___11993,ch){
return (function (state_11967){
var state_val_11968 = (state_11967[(1)]);
if((state_val_11968 === (7))){
var inst_11963 = (state_11967[(2)]);
var state_11967__$1 = state_11967;
var statearr_11969_11994 = state_11967__$1;
(statearr_11969_11994[(2)] = inst_11963);

(statearr_11969_11994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (1))){
var state_11967__$1 = state_11967;
var statearr_11970_11995 = state_11967__$1;
(statearr_11970_11995[(2)] = null);

(statearr_11970_11995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (4))){
var inst_11931 = (state_11967[(7)]);
var inst_11931__$1 = (state_11967[(2)]);
var state_11967__$1 = (function (){var statearr_11971 = state_11967;
(statearr_11971[(7)] = inst_11931__$1);

return statearr_11971;
})();
if(cljs.core.truth_(inst_11931__$1)){
var statearr_11972_11996 = state_11967__$1;
(statearr_11972_11996[(1)] = (5));

} else {
var statearr_11973_11997 = state_11967__$1;
(statearr_11973_11997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (13))){
var state_11967__$1 = state_11967;
var statearr_11974_11998 = state_11967__$1;
(statearr_11974_11998[(2)] = null);

(statearr_11974_11998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (6))){
var state_11967__$1 = state_11967;
var statearr_11975_11999 = state_11967__$1;
(statearr_11975_11999[(2)] = null);

(statearr_11975_11999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (3))){
var inst_11965 = (state_11967[(2)]);
var state_11967__$1 = state_11967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11967__$1,inst_11965);
} else {
if((state_val_11968 === (12))){
var inst_11938 = (state_11967[(8)]);
var inst_11951 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_11938);
var inst_11952 = cljs.core.first.call(null,inst_11951);
var inst_11953 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_11952);
var inst_11954 = console.warn("Figwheel: Not loading code with warnings - ",inst_11953);
var state_11967__$1 = state_11967;
var statearr_11976_12000 = state_11967__$1;
(statearr_11976_12000[(2)] = inst_11954);

(statearr_11976_12000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (2))){
var state_11967__$1 = state_11967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11967__$1,(4),ch);
} else {
if((state_val_11968 === (11))){
var inst_11947 = (state_11967[(2)]);
var state_11967__$1 = state_11967;
var statearr_11977_12001 = state_11967__$1;
(statearr_11977_12001[(2)] = inst_11947);

(statearr_11977_12001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (9))){
var inst_11937 = (state_11967[(9)]);
var inst_11949 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_11937,opts);
var state_11967__$1 = state_11967;
if(cljs.core.truth_(inst_11949)){
var statearr_11978_12002 = state_11967__$1;
(statearr_11978_12002[(1)] = (12));

} else {
var statearr_11979_12003 = state_11967__$1;
(statearr_11979_12003[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (5))){
var inst_11937 = (state_11967[(9)]);
var inst_11931 = (state_11967[(7)]);
var inst_11933 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_11934 = (new cljs.core.PersistentArrayMap(null,2,inst_11933,null));
var inst_11935 = (new cljs.core.PersistentHashSet(null,inst_11934,null));
var inst_11936 = figwheel.client.focus_msgs.call(null,inst_11935,inst_11931);
var inst_11937__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_11936);
var inst_11938 = cljs.core.first.call(null,inst_11936);
var inst_11939 = figwheel.client.reload_file_state_QMARK_.call(null,inst_11937__$1,opts);
var state_11967__$1 = (function (){var statearr_11980 = state_11967;
(statearr_11980[(9)] = inst_11937__$1);

(statearr_11980[(8)] = inst_11938);

return statearr_11980;
})();
if(cljs.core.truth_(inst_11939)){
var statearr_11981_12004 = state_11967__$1;
(statearr_11981_12004[(1)] = (8));

} else {
var statearr_11982_12005 = state_11967__$1;
(statearr_11982_12005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (14))){
var inst_11957 = (state_11967[(2)]);
var state_11967__$1 = state_11967;
var statearr_11983_12006 = state_11967__$1;
(statearr_11983_12006[(2)] = inst_11957);

(statearr_11983_12006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (10))){
var inst_11959 = (state_11967[(2)]);
var state_11967__$1 = (function (){var statearr_11984 = state_11967;
(statearr_11984[(10)] = inst_11959);

return statearr_11984;
})();
var statearr_11985_12007 = state_11967__$1;
(statearr_11985_12007[(2)] = null);

(statearr_11985_12007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11968 === (8))){
var inst_11938 = (state_11967[(8)]);
var inst_11941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11942 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_11938);
var inst_11943 = cljs.core.async.timeout.call(null,(1000));
var inst_11944 = [inst_11942,inst_11943];
var inst_11945 = (new cljs.core.PersistentVector(null,2,(5),inst_11941,inst_11944,null));
var state_11967__$1 = state_11967;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11967__$1,(11),inst_11945);
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
});})(c__7047__auto___11993,ch))
;
return ((function (switch__6985__auto__,c__7047__auto___11993,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__6986__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__6986__auto____0 = (function (){
var statearr_11989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11989[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__6986__auto__);

(statearr_11989[(1)] = (1));

return statearr_11989;
});
var figwheel$client$file_reloader_plugin_$_state_machine__6986__auto____1 = (function (state_11967){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_11967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e11990){if((e11990 instanceof Object)){
var ex__6989__auto__ = e11990;
var statearr_11991_12008 = state_11967;
(statearr_11991_12008[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12009 = state_11967;
state_11967 = G__12009;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__6986__auto__ = function(state_11967){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__6986__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__6986__auto____1.call(this,state_11967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__6986__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__6986__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___11993,ch))
})();
var state__7049__auto__ = (function (){var statearr_11992 = f__7048__auto__.call(null);
(statearr_11992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___11993);

return statearr_11992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___11993,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__12010_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__12010_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_12017 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_12017){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_12015 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_12016 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_12015,_STAR_print_newline_STAR_12016,base_path_12017){
return (function() { 
var G__12018__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__12018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12019__i = 0, G__12019__a = new Array(arguments.length -  0);
while (G__12019__i < G__12019__a.length) {G__12019__a[G__12019__i] = arguments[G__12019__i + 0]; ++G__12019__i;}
  args = new cljs.core.IndexedSeq(G__12019__a,0);
} 
return G__12018__delegate.call(this,args);};
G__12018.cljs$lang$maxFixedArity = 0;
G__12018.cljs$lang$applyTo = (function (arglist__12020){
var args = cljs.core.seq(arglist__12020);
return G__12018__delegate(args);
});
G__12018.cljs$core$IFn$_invoke$arity$variadic = G__12018__delegate;
return G__12018;
})()
;})(_STAR_print_fn_STAR_12015,_STAR_print_newline_STAR_12016,base_path_12017))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12016;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12015;
}}catch (e12014){if((e12014 instanceof Error)){
var e = e12014;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_12017], null));
} else {
var e = e12014;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_12017))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__12021){
var map__12026 = p__12021;
var map__12026__$1 = ((cljs.core.seq_QMARK_.call(null,map__12026))?cljs.core.apply.call(null,cljs.core.hash_map,map__12026):map__12026);
var opts = map__12026__$1;
var build_id = cljs.core.get.call(null,map__12026__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__12026,map__12026__$1,opts,build_id){
return (function (p__12027){
var vec__12028 = p__12027;
var map__12029 = cljs.core.nth.call(null,vec__12028,(0),null);
var map__12029__$1 = ((cljs.core.seq_QMARK_.call(null,map__12029))?cljs.core.apply.call(null,cljs.core.hash_map,map__12029):map__12029);
var msg = map__12029__$1;
var msg_name = cljs.core.get.call(null,map__12029__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12028,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__12028,map__12029,map__12029__$1,msg,msg_name,_,map__12026,map__12026__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__12028,map__12029,map__12029__$1,msg,msg_name,_,map__12026,map__12026__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__12026,map__12026__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__12033){
var vec__12034 = p__12033;
var map__12035 = cljs.core.nth.call(null,vec__12034,(0),null);
var map__12035__$1 = ((cljs.core.seq_QMARK_.call(null,map__12035))?cljs.core.apply.call(null,cljs.core.hash_map,map__12035):map__12035);
var msg = map__12035__$1;
var msg_name = cljs.core.get.call(null,map__12035__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12034,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__12036){
var map__12044 = p__12036;
var map__12044__$1 = ((cljs.core.seq_QMARK_.call(null,map__12044))?cljs.core.apply.call(null,cljs.core.hash_map,map__12044):map__12044);
var on_compile_warning = cljs.core.get.call(null,map__12044__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__12044__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__12044,map__12044__$1,on_compile_warning,on_compile_fail){
return (function (p__12045){
var vec__12046 = p__12045;
var map__12047 = cljs.core.nth.call(null,vec__12046,(0),null);
var map__12047__$1 = ((cljs.core.seq_QMARK_.call(null,map__12047))?cljs.core.apply.call(null,cljs.core.hash_map,map__12047):map__12047);
var msg = map__12047__$1;
var msg_name = cljs.core.get.call(null,map__12047__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12046,(1));
var pred__12048 = cljs.core._EQ_;
var expr__12049 = msg_name;
if(cljs.core.truth_(pred__12048.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__12049))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__12048.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__12049))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__12044,map__12044__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__,msg_hist,msg_names,msg){
return (function (state_12250){
var state_val_12251 = (state_12250[(1)]);
if((state_val_12251 === (7))){
var inst_12184 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12252_12293 = state_12250__$1;
(statearr_12252_12293[(2)] = inst_12184);

(statearr_12252_12293[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (20))){
var inst_12212 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_12250__$1 = state_12250;
if(cljs.core.truth_(inst_12212)){
var statearr_12253_12294 = state_12250__$1;
(statearr_12253_12294[(1)] = (22));

} else {
var statearr_12254_12295 = state_12250__$1;
(statearr_12254_12295[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (27))){
var inst_12224 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12225 = figwheel.client.heads_up.display_warning.call(null,inst_12224);
var state_12250__$1 = state_12250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12250__$1,(30),inst_12225);
} else {
if((state_val_12251 === (1))){
var inst_12172 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_12250__$1 = state_12250;
if(cljs.core.truth_(inst_12172)){
var statearr_12255_12296 = state_12250__$1;
(statearr_12255_12296[(1)] = (2));

} else {
var statearr_12256_12297 = state_12250__$1;
(statearr_12256_12297[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (24))){
var inst_12240 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12257_12298 = state_12250__$1;
(statearr_12257_12298[(2)] = inst_12240);

(statearr_12257_12298[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (4))){
var inst_12248 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12250__$1,inst_12248);
} else {
if((state_val_12251 === (15))){
var inst_12200 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12201 = figwheel.client.format_messages.call(null,inst_12200);
var inst_12202 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12203 = figwheel.client.heads_up.display_error.call(null,inst_12201,inst_12202);
var state_12250__$1 = state_12250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12250__$1,(18),inst_12203);
} else {
if((state_val_12251 === (21))){
var inst_12242 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12258_12299 = state_12250__$1;
(statearr_12258_12299[(2)] = inst_12242);

(statearr_12258_12299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (31))){
var inst_12231 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12250__$1 = state_12250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12250__$1,(34),inst_12231);
} else {
if((state_val_12251 === (32))){
var state_12250__$1 = state_12250;
var statearr_12259_12300 = state_12250__$1;
(statearr_12259_12300[(2)] = null);

(statearr_12259_12300[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (33))){
var inst_12236 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12260_12301 = state_12250__$1;
(statearr_12260_12301[(2)] = inst_12236);

(statearr_12260_12301[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (13))){
var inst_12190 = (state_12250[(2)]);
var inst_12191 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12192 = figwheel.client.format_messages.call(null,inst_12191);
var inst_12193 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12194 = figwheel.client.heads_up.display_error.call(null,inst_12192,inst_12193);
var state_12250__$1 = (function (){var statearr_12261 = state_12250;
(statearr_12261[(7)] = inst_12190);

return statearr_12261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12250__$1,(14),inst_12194);
} else {
if((state_val_12251 === (22))){
var inst_12214 = figwheel.client.heads_up.clear.call(null);
var state_12250__$1 = state_12250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12250__$1,(25),inst_12214);
} else {
if((state_val_12251 === (29))){
var inst_12238 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12262_12302 = state_12250__$1;
(statearr_12262_12302[(2)] = inst_12238);

(statearr_12262_12302[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (6))){
var inst_12180 = figwheel.client.heads_up.clear.call(null);
var state_12250__$1 = state_12250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12250__$1,(9),inst_12180);
} else {
if((state_val_12251 === (28))){
var inst_12229 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_12250__$1 = state_12250;
if(cljs.core.truth_(inst_12229)){
var statearr_12263_12303 = state_12250__$1;
(statearr_12263_12303[(1)] = (31));

} else {
var statearr_12264_12304 = state_12250__$1;
(statearr_12264_12304[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (25))){
var inst_12216 = (state_12250[(2)]);
var inst_12217 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12218 = figwheel.client.heads_up.display_warning.call(null,inst_12217);
var state_12250__$1 = (function (){var statearr_12265 = state_12250;
(statearr_12265[(8)] = inst_12216);

return statearr_12265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12250__$1,(26),inst_12218);
} else {
if((state_val_12251 === (34))){
var inst_12233 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12266_12305 = state_12250__$1;
(statearr_12266_12305[(2)] = inst_12233);

(statearr_12266_12305[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (17))){
var inst_12244 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12267_12306 = state_12250__$1;
(statearr_12267_12306[(2)] = inst_12244);

(statearr_12267_12306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (3))){
var inst_12186 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_12250__$1 = state_12250;
if(cljs.core.truth_(inst_12186)){
var statearr_12268_12307 = state_12250__$1;
(statearr_12268_12307[(1)] = (10));

} else {
var statearr_12269_12308 = state_12250__$1;
(statearr_12269_12308[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (12))){
var inst_12246 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12270_12309 = state_12250__$1;
(statearr_12270_12309[(2)] = inst_12246);

(statearr_12270_12309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (2))){
var inst_12174 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_12250__$1 = state_12250;
if(cljs.core.truth_(inst_12174)){
var statearr_12271_12310 = state_12250__$1;
(statearr_12271_12310[(1)] = (5));

} else {
var statearr_12272_12311 = state_12250__$1;
(statearr_12272_12311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (23))){
var inst_12222 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_12250__$1 = state_12250;
if(cljs.core.truth_(inst_12222)){
var statearr_12273_12312 = state_12250__$1;
(statearr_12273_12312[(1)] = (27));

} else {
var statearr_12274_12313 = state_12250__$1;
(statearr_12274_12313[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (19))){
var inst_12209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12210 = figwheel.client.heads_up.append_message.call(null,inst_12209);
var state_12250__$1 = state_12250;
var statearr_12275_12314 = state_12250__$1;
(statearr_12275_12314[(2)] = inst_12210);

(statearr_12275_12314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (11))){
var inst_12198 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_12250__$1 = state_12250;
if(cljs.core.truth_(inst_12198)){
var statearr_12276_12315 = state_12250__$1;
(statearr_12276_12315[(1)] = (15));

} else {
var statearr_12277_12316 = state_12250__$1;
(statearr_12277_12316[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (9))){
var inst_12182 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12278_12317 = state_12250__$1;
(statearr_12278_12317[(2)] = inst_12182);

(statearr_12278_12317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (5))){
var inst_12176 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12250__$1 = state_12250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12250__$1,(8),inst_12176);
} else {
if((state_val_12251 === (14))){
var inst_12196 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12279_12318 = state_12250__$1;
(statearr_12279_12318[(2)] = inst_12196);

(statearr_12279_12318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (26))){
var inst_12220 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12280_12319 = state_12250__$1;
(statearr_12280_12319[(2)] = inst_12220);

(statearr_12280_12319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (16))){
var inst_12207 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_12250__$1 = state_12250;
if(cljs.core.truth_(inst_12207)){
var statearr_12281_12320 = state_12250__$1;
(statearr_12281_12320[(1)] = (19));

} else {
var statearr_12282_12321 = state_12250__$1;
(statearr_12282_12321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (30))){
var inst_12227 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12283_12322 = state_12250__$1;
(statearr_12283_12322[(2)] = inst_12227);

(statearr_12283_12322[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (10))){
var inst_12188 = figwheel.client.heads_up.clear.call(null);
var state_12250__$1 = state_12250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12250__$1,(13),inst_12188);
} else {
if((state_val_12251 === (18))){
var inst_12205 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12284_12323 = state_12250__$1;
(statearr_12284_12323[(2)] = inst_12205);

(statearr_12284_12323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12251 === (8))){
var inst_12178 = (state_12250[(2)]);
var state_12250__$1 = state_12250;
var statearr_12285_12324 = state_12250__$1;
(statearr_12285_12324[(2)] = inst_12178);

(statearr_12285_12324[(1)] = (7));


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
});})(c__7047__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6985__auto__,c__7047__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto____0 = (function (){
var statearr_12289 = [null,null,null,null,null,null,null,null,null];
(statearr_12289[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto__);

(statearr_12289[(1)] = (1));

return statearr_12289;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto____1 = (function (state_12250){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_12250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e12290){if((e12290 instanceof Object)){
var ex__6989__auto__ = e12290;
var statearr_12291_12325 = state_12250;
(statearr_12291_12325[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12326 = state_12250;
state_12250 = G__12326;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto__ = function(state_12250){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto____1.call(this,state_12250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__,msg_hist,msg_names,msg))
})();
var state__7049__auto__ = (function (){var statearr_12292 = f__7048__auto__.call(null);
(statearr_12292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_12292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__,msg_hist,msg_names,msg))
);

return c__7047__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7047__auto___12389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___12389,ch){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___12389,ch){
return (function (state_12372){
var state_val_12373 = (state_12372[(1)]);
if((state_val_12373 === (1))){
var state_12372__$1 = state_12372;
var statearr_12374_12390 = state_12372__$1;
(statearr_12374_12390[(2)] = null);

(statearr_12374_12390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12373 === (2))){
var state_12372__$1 = state_12372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12372__$1,(4),ch);
} else {
if((state_val_12373 === (3))){
var inst_12370 = (state_12372[(2)]);
var state_12372__$1 = state_12372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12372__$1,inst_12370);
} else {
if((state_val_12373 === (4))){
var inst_12360 = (state_12372[(7)]);
var inst_12360__$1 = (state_12372[(2)]);
var state_12372__$1 = (function (){var statearr_12375 = state_12372;
(statearr_12375[(7)] = inst_12360__$1);

return statearr_12375;
})();
if(cljs.core.truth_(inst_12360__$1)){
var statearr_12376_12391 = state_12372__$1;
(statearr_12376_12391[(1)] = (5));

} else {
var statearr_12377_12392 = state_12372__$1;
(statearr_12377_12392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12373 === (5))){
var inst_12360 = (state_12372[(7)]);
var inst_12362 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_12360);
var state_12372__$1 = state_12372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12372__$1,(8),inst_12362);
} else {
if((state_val_12373 === (6))){
var state_12372__$1 = state_12372;
var statearr_12378_12393 = state_12372__$1;
(statearr_12378_12393[(2)] = null);

(statearr_12378_12393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12373 === (7))){
var inst_12368 = (state_12372[(2)]);
var state_12372__$1 = state_12372;
var statearr_12379_12394 = state_12372__$1;
(statearr_12379_12394[(2)] = inst_12368);

(statearr_12379_12394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12373 === (8))){
var inst_12364 = (state_12372[(2)]);
var state_12372__$1 = (function (){var statearr_12380 = state_12372;
(statearr_12380[(8)] = inst_12364);

return statearr_12380;
})();
var statearr_12381_12395 = state_12372__$1;
(statearr_12381_12395[(2)] = null);

(statearr_12381_12395[(1)] = (2));


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
});})(c__7047__auto___12389,ch))
;
return ((function (switch__6985__auto__,c__7047__auto___12389,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__6986__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__6986__auto____0 = (function (){
var statearr_12385 = [null,null,null,null,null,null,null,null,null];
(statearr_12385[(0)] = figwheel$client$heads_up_plugin_$_state_machine__6986__auto__);

(statearr_12385[(1)] = (1));

return statearr_12385;
});
var figwheel$client$heads_up_plugin_$_state_machine__6986__auto____1 = (function (state_12372){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_12372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e12386){if((e12386 instanceof Object)){
var ex__6989__auto__ = e12386;
var statearr_12387_12396 = state_12372;
(statearr_12387_12396[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12397 = state_12372;
state_12372 = G__12397;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__6986__auto__ = function(state_12372){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__6986__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__6986__auto____1.call(this,state_12372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__6986__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__6986__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___12389,ch))
})();
var state__7049__auto__ = (function (){var statearr_12388 = f__7048__auto__.call(null);
(statearr_12388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___12389);

return statearr_12388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___12389,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__){
return (function (state_12418){
var state_val_12419 = (state_12418[(1)]);
if((state_val_12419 === (1))){
var inst_12413 = cljs.core.async.timeout.call(null,(3000));
var state_12418__$1 = state_12418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12418__$1,(2),inst_12413);
} else {
if((state_val_12419 === (2))){
var inst_12415 = (state_12418[(2)]);
var inst_12416 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_12418__$1 = (function (){var statearr_12420 = state_12418;
(statearr_12420[(7)] = inst_12415);

return statearr_12420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12418__$1,inst_12416);
} else {
return null;
}
}
});})(c__7047__auto__))
;
return ((function (switch__6985__auto__,c__7047__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__6986__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__6986__auto____0 = (function (){
var statearr_12424 = [null,null,null,null,null,null,null,null];
(statearr_12424[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__6986__auto__);

(statearr_12424[(1)] = (1));

return statearr_12424;
});
var figwheel$client$enforce_project_plugin_$_state_machine__6986__auto____1 = (function (state_12418){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_12418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e12425){if((e12425 instanceof Object)){
var ex__6989__auto__ = e12425;
var statearr_12426_12428 = state_12418;
(statearr_12426_12428[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12429 = state_12418;
state_12418 = G__12429;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__6986__auto__ = function(state_12418){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__6986__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__6986__auto____1.call(this,state_12418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__6986__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__6986__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__))
})();
var state__7049__auto__ = (function (){var statearr_12427 = f__7048__auto__.call(null);
(statearr_12427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_12427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__))
);

return c__7047__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__12430){
var map__12436 = p__12430;
var map__12436__$1 = ((cljs.core.seq_QMARK_.call(null,map__12436))?cljs.core.apply.call(null,cljs.core.hash_map,map__12436):map__12436);
var ed = map__12436__$1;
var formatted_exception = cljs.core.get.call(null,map__12436__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__12436__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__12436__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__12437_12441 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__12438_12442 = null;
var count__12439_12443 = (0);
var i__12440_12444 = (0);
while(true){
if((i__12440_12444 < count__12439_12443)){
var msg_12445 = cljs.core._nth.call(null,chunk__12438_12442,i__12440_12444);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12445);

var G__12446 = seq__12437_12441;
var G__12447 = chunk__12438_12442;
var G__12448 = count__12439_12443;
var G__12449 = (i__12440_12444 + (1));
seq__12437_12441 = G__12446;
chunk__12438_12442 = G__12447;
count__12439_12443 = G__12448;
i__12440_12444 = G__12449;
continue;
} else {
var temp__4423__auto___12450 = cljs.core.seq.call(null,seq__12437_12441);
if(temp__4423__auto___12450){
var seq__12437_12451__$1 = temp__4423__auto___12450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12437_12451__$1)){
var c__5094__auto___12452 = cljs.core.chunk_first.call(null,seq__12437_12451__$1);
var G__12453 = cljs.core.chunk_rest.call(null,seq__12437_12451__$1);
var G__12454 = c__5094__auto___12452;
var G__12455 = cljs.core.count.call(null,c__5094__auto___12452);
var G__12456 = (0);
seq__12437_12441 = G__12453;
chunk__12438_12442 = G__12454;
count__12439_12443 = G__12455;
i__12440_12444 = G__12456;
continue;
} else {
var msg_12457 = cljs.core.first.call(null,seq__12437_12451__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12457);

var G__12458 = cljs.core.next.call(null,seq__12437_12451__$1);
var G__12459 = null;
var G__12460 = (0);
var G__12461 = (0);
seq__12437_12441 = G__12458;
chunk__12438_12442 = G__12459;
count__12439_12443 = G__12460;
i__12440_12444 = G__12461;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__12462){
var map__12464 = p__12462;
var map__12464__$1 = ((cljs.core.seq_QMARK_.call(null,map__12464))?cljs.core.apply.call(null,cljs.core.hash_map,map__12464):map__12464);
var w = map__12464__$1;
var message = cljs.core.get.call(null,map__12464__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4297__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4297__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4297__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__12471 = cljs.core.seq.call(null,plugins);
var chunk__12472 = null;
var count__12473 = (0);
var i__12474 = (0);
while(true){
if((i__12474 < count__12473)){
var vec__12475 = cljs.core._nth.call(null,chunk__12472,i__12474);
var k = cljs.core.nth.call(null,vec__12475,(0),null);
var plugin = cljs.core.nth.call(null,vec__12475,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12477 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12471,chunk__12472,count__12473,i__12474,pl_12477,vec__12475,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_12477.call(null,msg_hist);
});})(seq__12471,chunk__12472,count__12473,i__12474,pl_12477,vec__12475,k,plugin))
);
} else {
}

var G__12478 = seq__12471;
var G__12479 = chunk__12472;
var G__12480 = count__12473;
var G__12481 = (i__12474 + (1));
seq__12471 = G__12478;
chunk__12472 = G__12479;
count__12473 = G__12480;
i__12474 = G__12481;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__12471);
if(temp__4423__auto__){
var seq__12471__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12471__$1)){
var c__5094__auto__ = cljs.core.chunk_first.call(null,seq__12471__$1);
var G__12482 = cljs.core.chunk_rest.call(null,seq__12471__$1);
var G__12483 = c__5094__auto__;
var G__12484 = cljs.core.count.call(null,c__5094__auto__);
var G__12485 = (0);
seq__12471 = G__12482;
chunk__12472 = G__12483;
count__12473 = G__12484;
i__12474 = G__12485;
continue;
} else {
var vec__12476 = cljs.core.first.call(null,seq__12471__$1);
var k = cljs.core.nth.call(null,vec__12476,(0),null);
var plugin = cljs.core.nth.call(null,vec__12476,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12486 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12471,chunk__12472,count__12473,i__12474,pl_12486,vec__12476,k,plugin,seq__12471__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_12486.call(null,msg_hist);
});})(seq__12471,chunk__12472,count__12473,i__12474,pl_12486,vec__12476,k,plugin,seq__12471__$1,temp__4423__auto__))
);
} else {
}

var G__12487 = cljs.core.next.call(null,seq__12471__$1);
var G__12488 = null;
var G__12489 = (0);
var G__12490 = (0);
seq__12471 = G__12487;
chunk__12472 = G__12488;
count__12473 = G__12489;
i__12474 = G__12490;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__12492 = arguments.length;
switch (G__12492) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__5349__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5349__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__12495){
var map__12496 = p__12495;
var map__12496__$1 = ((cljs.core.seq_QMARK_.call(null,map__12496))?cljs.core.apply.call(null,cljs.core.hash_map,map__12496):map__12496);
var opts = map__12496__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq12494){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12494));
});

//# sourceMappingURL=client.js.map