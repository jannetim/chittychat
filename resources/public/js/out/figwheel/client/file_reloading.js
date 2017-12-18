// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__12818_SHARP_,p2__12819_SHARP_){
var and__4297__auto__ = p1__12818_SHARP_;
if(cljs.core.truth_(and__4297__auto__)){
return p2__12819_SHARP_;
} else {
return and__4297__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4309__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4309__auto__){
return or__4309__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__4309__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4309__auto__){
return or__4309__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4309__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__5204__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5206__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5207__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5208__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5208__auto__,method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__12820){
var map__12821 = p__12820;
var map__12821__$1 = ((cljs.core.seq_QMARK_.call(null,map__12821))?cljs.core.apply.call(null,cljs.core.hash_map,map__12821):map__12821);
var file = cljs.core.get.call(null,map__12821__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__12822){
var map__12823 = p__12822;
var map__12823__$1 = ((cljs.core.seq_QMARK_.call(null,map__12823))?cljs.core.apply.call(null,cljs.core.hash_map,map__12823):map__12823);
var namespace = cljs.core.get.call(null,map__12823__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__5204__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5206__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5207__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5208__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5208__auto__,method_table__5204__auto__,prefer_table__5205__auto__,method_cache__5206__auto__,cached_hierarchy__5207__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e12824){if((e12824 instanceof Error)){
var e = e12824;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e12824;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__12826 = arguments.length;
switch (G__12826) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__12828,callback){
var map__12830 = p__12828;
var map__12830__$1 = ((cljs.core.seq_QMARK_.call(null,map__12830))?cljs.core.apply.call(null,cljs.core.hash_map,map__12830):map__12830);
var file_msg = map__12830__$1;
var request_url = cljs.core.get.call(null,map__12830__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__12830,map__12830__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__12830,map__12830__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__12831){
var map__12833 = p__12831;
var map__12833__$1 = ((cljs.core.seq_QMARK_.call(null,map__12833))?cljs.core.apply.call(null,cljs.core.hash_map,map__12833):map__12833);
var file_msg = map__12833__$1;
var namespace = cljs.core.get.call(null,map__12833__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__12833__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__4309__auto__ = meta_data;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4297__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4297__auto__){
var or__4309__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4309__auto____$1)){
return or__4309__auto____$1;
} else {
var and__4297__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4297__auto____$1){
var or__4309__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4309__auto____$2){
return or__4309__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4297__auto____$1;
}
}
}
} else {
return and__4297__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__12834,callback){
var map__12836 = p__12834;
var map__12836__$1 = ((cljs.core.seq_QMARK_.call(null,map__12836))?cljs.core.apply.call(null,cljs.core.hash_map,map__12836):map__12836);
var file_msg = map__12836__$1;
var request_url = cljs.core.get.call(null,map__12836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__12836__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__7047__auto___12923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto___12923,out){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto___12923,out){
return (function (state_12905){
var state_val_12906 = (state_12905[(1)]);
if((state_val_12906 === (1))){
var inst_12883 = cljs.core.nth.call(null,files,(0),null);
var inst_12884 = cljs.core.nthnext.call(null,files,(1));
var inst_12885 = files;
var state_12905__$1 = (function (){var statearr_12907 = state_12905;
(statearr_12907[(7)] = inst_12883);

(statearr_12907[(8)] = inst_12884);

(statearr_12907[(9)] = inst_12885);

return statearr_12907;
})();
var statearr_12908_12924 = state_12905__$1;
(statearr_12908_12924[(2)] = null);

(statearr_12908_12924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12906 === (2))){
var inst_12885 = (state_12905[(9)]);
var inst_12888 = (state_12905[(10)]);
var inst_12888__$1 = cljs.core.nth.call(null,inst_12885,(0),null);
var inst_12889 = cljs.core.nthnext.call(null,inst_12885,(1));
var inst_12890 = (inst_12888__$1 == null);
var inst_12891 = cljs.core.not.call(null,inst_12890);
var state_12905__$1 = (function (){var statearr_12909 = state_12905;
(statearr_12909[(11)] = inst_12889);

(statearr_12909[(10)] = inst_12888__$1);

return statearr_12909;
})();
if(inst_12891){
var statearr_12910_12925 = state_12905__$1;
(statearr_12910_12925[(1)] = (4));

} else {
var statearr_12911_12926 = state_12905__$1;
(statearr_12911_12926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12906 === (3))){
var inst_12903 = (state_12905[(2)]);
var state_12905__$1 = state_12905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12905__$1,inst_12903);
} else {
if((state_val_12906 === (4))){
var inst_12888 = (state_12905[(10)]);
var inst_12893 = figwheel.client.file_reloading.reload_js_file.call(null,inst_12888);
var state_12905__$1 = state_12905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12905__$1,(7),inst_12893);
} else {
if((state_val_12906 === (5))){
var inst_12899 = cljs.core.async.close_BANG_.call(null,out);
var state_12905__$1 = state_12905;
var statearr_12912_12927 = state_12905__$1;
(statearr_12912_12927[(2)] = inst_12899);

(statearr_12912_12927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12906 === (6))){
var inst_12901 = (state_12905[(2)]);
var state_12905__$1 = state_12905;
var statearr_12913_12928 = state_12905__$1;
(statearr_12913_12928[(2)] = inst_12901);

(statearr_12913_12928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12906 === (7))){
var inst_12889 = (state_12905[(11)]);
var inst_12895 = (state_12905[(2)]);
var inst_12896 = cljs.core.async.put_BANG_.call(null,out,inst_12895);
var inst_12885 = inst_12889;
var state_12905__$1 = (function (){var statearr_12914 = state_12905;
(statearr_12914[(12)] = inst_12896);

(statearr_12914[(9)] = inst_12885);

return statearr_12914;
})();
var statearr_12915_12929 = state_12905__$1;
(statearr_12915_12929[(2)] = null);

(statearr_12915_12929[(1)] = (2));


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
});})(c__7047__auto___12923,out))
;
return ((function (switch__6985__auto__,c__7047__auto___12923,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto____0 = (function (){
var statearr_12919 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12919[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto__);

(statearr_12919[(1)] = (1));

return statearr_12919;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto____1 = (function (state_12905){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_12905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e12920){if((e12920 instanceof Object)){
var ex__6989__auto__ = e12920;
var statearr_12921_12930 = state_12905;
(statearr_12921_12930[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12931 = state_12905;
state_12905 = G__12931;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto__ = function(state_12905){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto____1.call(this,state_12905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto___12923,out))
})();
var state__7049__auto__ = (function (){var statearr_12922 = f__7048__auto__.call(null);
(statearr_12922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto___12923);

return statearr_12922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto___12923,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__12932,p__12933){
var map__12936 = p__12932;
var map__12936__$1 = ((cljs.core.seq_QMARK_.call(null,map__12936))?cljs.core.apply.call(null,cljs.core.hash_map,map__12936):map__12936);
var opts = map__12936__$1;
var url_rewriter = cljs.core.get.call(null,map__12936__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__12937 = p__12933;
var map__12937__$1 = ((cljs.core.seq_QMARK_.call(null,map__12937))?cljs.core.apply.call(null,cljs.core.hash_map,map__12937):map__12937);
var file_msg = map__12937__$1;
var file = cljs.core.get.call(null,map__12937__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__12938){
var map__12941 = p__12938;
var map__12941__$1 = ((cljs.core.seq_QMARK_.call(null,map__12941))?cljs.core.apply.call(null,cljs.core.hash_map,map__12941):map__12941);
var eval_body__$1 = cljs.core.get.call(null,map__12941__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__12941__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4297__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4297__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4297__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e12942){var e = e12942;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__12947,p__12948){
var map__13150 = p__12947;
var map__13150__$1 = ((cljs.core.seq_QMARK_.call(null,map__13150))?cljs.core.apply.call(null,cljs.core.hash_map,map__13150):map__13150);
var opts = map__13150__$1;
var before_jsload = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__13151 = p__12948;
var map__13151__$1 = ((cljs.core.seq_QMARK_.call(null,map__13151))?cljs.core.apply.call(null,cljs.core.hash_map,map__13151):map__13151);
var msg = map__13151__$1;
var files = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files){
return (function (state_13276){
var state_val_13277 = (state_13276[(1)]);
if((state_val_13277 === (7))){
var inst_13166 = (state_13276[(7)]);
var inst_13165 = (state_13276[(8)]);
var inst_13163 = (state_13276[(9)]);
var inst_13164 = (state_13276[(10)]);
var inst_13171 = cljs.core._nth.call(null,inst_13164,inst_13166);
var inst_13172 = figwheel.client.file_reloading.eval_body.call(null,inst_13171);
var inst_13173 = (inst_13166 + (1));
var tmp13278 = inst_13165;
var tmp13279 = inst_13163;
var tmp13280 = inst_13164;
var inst_13163__$1 = tmp13279;
var inst_13164__$1 = tmp13280;
var inst_13165__$1 = tmp13278;
var inst_13166__$1 = inst_13173;
var state_13276__$1 = (function (){var statearr_13281 = state_13276;
(statearr_13281[(7)] = inst_13166__$1);

(statearr_13281[(8)] = inst_13165__$1);

(statearr_13281[(9)] = inst_13163__$1);

(statearr_13281[(11)] = inst_13172);

(statearr_13281[(10)] = inst_13164__$1);

return statearr_13281;
})();
var statearr_13282_13351 = state_13276__$1;
(statearr_13282_13351[(2)] = null);

(statearr_13282_13351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (20))){
var inst_13212 = (state_13276[(12)]);
var inst_13208 = (state_13276[(13)]);
var inst_13213 = (state_13276[(14)]);
var inst_13209 = (state_13276[(15)]);
var inst_13215 = (state_13276[(16)]);
var inst_13218 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_13220 = (function (){var all_files = inst_13208;
var files_SINGLEQUOTE_ = inst_13209;
var res_SINGLEQUOTE_ = inst_13212;
var res = inst_13213;
var files_not_loaded = inst_13215;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13212,inst_13208,inst_13213,inst_13209,inst_13215,inst_13218,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files){
return (function (p__13219){
var map__13283 = p__13219;
var map__13283__$1 = ((cljs.core.seq_QMARK_.call(null,map__13283))?cljs.core.apply.call(null,cljs.core.hash_map,map__13283):map__13283);
var namespace = cljs.core.get.call(null,map__13283__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__13283__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13212,inst_13208,inst_13213,inst_13209,inst_13215,inst_13218,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files))
})();
var inst_13221 = cljs.core.map.call(null,inst_13220,inst_13213);
var inst_13222 = cljs.core.pr_str.call(null,inst_13221);
var inst_13223 = figwheel.client.utils.log.call(null,inst_13222);
var inst_13224 = (function (){var all_files = inst_13208;
var files_SINGLEQUOTE_ = inst_13209;
var res_SINGLEQUOTE_ = inst_13212;
var res = inst_13213;
var files_not_loaded = inst_13215;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13212,inst_13208,inst_13213,inst_13209,inst_13215,inst_13218,inst_13220,inst_13221,inst_13222,inst_13223,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13212,inst_13208,inst_13213,inst_13209,inst_13215,inst_13218,inst_13220,inst_13221,inst_13222,inst_13223,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files))
})();
var inst_13225 = setTimeout(inst_13224,(10));
var state_13276__$1 = (function (){var statearr_13284 = state_13276;
(statearr_13284[(17)] = inst_13223);

(statearr_13284[(18)] = inst_13218);

return statearr_13284;
})();
var statearr_13285_13352 = state_13276__$1;
(statearr_13285_13352[(2)] = inst_13225);

(statearr_13285_13352[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (27))){
var inst_13235 = (state_13276[(19)]);
var state_13276__$1 = state_13276;
var statearr_13286_13353 = state_13276__$1;
(statearr_13286_13353[(2)] = inst_13235);

(statearr_13286_13353[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (1))){
var inst_13155 = (state_13276[(20)]);
var inst_13152 = before_jsload.call(null,files);
var inst_13153 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_13154 = (function (){return ((function (inst_13155,inst_13152,inst_13153,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files){
return (function (p1__12943_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12943_SHARP_);
});
;})(inst_13155,inst_13152,inst_13153,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files))
})();
var inst_13155__$1 = cljs.core.filter.call(null,inst_13154,files);
var inst_13156 = cljs.core.not_empty.call(null,inst_13155__$1);
var state_13276__$1 = (function (){var statearr_13287 = state_13276;
(statearr_13287[(21)] = inst_13152);

(statearr_13287[(22)] = inst_13153);

(statearr_13287[(20)] = inst_13155__$1);

return statearr_13287;
})();
if(cljs.core.truth_(inst_13156)){
var statearr_13288_13354 = state_13276__$1;
(statearr_13288_13354[(1)] = (2));

} else {
var statearr_13289_13355 = state_13276__$1;
(statearr_13289_13355[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (24))){
var state_13276__$1 = state_13276;
var statearr_13290_13356 = state_13276__$1;
(statearr_13290_13356[(2)] = null);

(statearr_13290_13356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (4))){
var inst_13200 = (state_13276[(2)]);
var inst_13201 = (function (){return ((function (inst_13200,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files){
return (function (p1__12944_SHARP_){
var and__4297__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__12944_SHARP_);
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12944_SHARP_));
} else {
return and__4297__auto__;
}
});
;})(inst_13200,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files))
})();
var inst_13202 = cljs.core.filter.call(null,inst_13201,files);
var state_13276__$1 = (function (){var statearr_13291 = state_13276;
(statearr_13291[(23)] = inst_13202);

(statearr_13291[(24)] = inst_13200);

return statearr_13291;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_13292_13357 = state_13276__$1;
(statearr_13292_13357[(1)] = (16));

} else {
var statearr_13293_13358 = state_13276__$1;
(statearr_13293_13358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (15))){
var inst_13190 = (state_13276[(2)]);
var state_13276__$1 = state_13276;
var statearr_13294_13359 = state_13276__$1;
(statearr_13294_13359[(2)] = inst_13190);

(statearr_13294_13359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (21))){
var state_13276__$1 = state_13276;
var statearr_13295_13360 = state_13276__$1;
(statearr_13295_13360[(2)] = null);

(statearr_13295_13360[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (31))){
var inst_13243 = (state_13276[(25)]);
var inst_13253 = (state_13276[(2)]);
var inst_13254 = cljs.core.not_empty.call(null,inst_13243);
var state_13276__$1 = (function (){var statearr_13296 = state_13276;
(statearr_13296[(26)] = inst_13253);

return statearr_13296;
})();
if(cljs.core.truth_(inst_13254)){
var statearr_13297_13361 = state_13276__$1;
(statearr_13297_13361[(1)] = (32));

} else {
var statearr_13298_13362 = state_13276__$1;
(statearr_13298_13362[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (32))){
var inst_13243 = (state_13276[(25)]);
var inst_13256 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13243);
var inst_13257 = cljs.core.pr_str.call(null,inst_13256);
var inst_13258 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_13257)].join('');
var inst_13259 = figwheel.client.utils.log.call(null,inst_13258);
var state_13276__$1 = state_13276;
var statearr_13299_13363 = state_13276__$1;
(statearr_13299_13363[(2)] = inst_13259);

(statearr_13299_13363[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (33))){
var state_13276__$1 = state_13276;
var statearr_13300_13364 = state_13276__$1;
(statearr_13300_13364[(2)] = null);

(statearr_13300_13364[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (13))){
var inst_13176 = (state_13276[(27)]);
var inst_13180 = cljs.core.chunk_first.call(null,inst_13176);
var inst_13181 = cljs.core.chunk_rest.call(null,inst_13176);
var inst_13182 = cljs.core.count.call(null,inst_13180);
var inst_13163 = inst_13181;
var inst_13164 = inst_13180;
var inst_13165 = inst_13182;
var inst_13166 = (0);
var state_13276__$1 = (function (){var statearr_13301 = state_13276;
(statearr_13301[(7)] = inst_13166);

(statearr_13301[(8)] = inst_13165);

(statearr_13301[(9)] = inst_13163);

(statearr_13301[(10)] = inst_13164);

return statearr_13301;
})();
var statearr_13302_13365 = state_13276__$1;
(statearr_13302_13365[(2)] = null);

(statearr_13302_13365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (22))){
var inst_13215 = (state_13276[(16)]);
var inst_13228 = (state_13276[(2)]);
var inst_13229 = cljs.core.not_empty.call(null,inst_13215);
var state_13276__$1 = (function (){var statearr_13303 = state_13276;
(statearr_13303[(28)] = inst_13228);

return statearr_13303;
})();
if(cljs.core.truth_(inst_13229)){
var statearr_13304_13366 = state_13276__$1;
(statearr_13304_13366[(1)] = (23));

} else {
var statearr_13305_13367 = state_13276__$1;
(statearr_13305_13367[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (36))){
var state_13276__$1 = state_13276;
var statearr_13306_13368 = state_13276__$1;
(statearr_13306_13368[(2)] = null);

(statearr_13306_13368[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (29))){
var inst_13242 = (state_13276[(29)]);
var inst_13247 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13242);
var inst_13248 = cljs.core.pr_str.call(null,inst_13247);
var inst_13249 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_13248)].join('');
var inst_13250 = figwheel.client.utils.log.call(null,inst_13249);
var state_13276__$1 = state_13276;
var statearr_13307_13369 = state_13276__$1;
(statearr_13307_13369[(2)] = inst_13250);

(statearr_13307_13369[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (6))){
var inst_13197 = (state_13276[(2)]);
var state_13276__$1 = state_13276;
var statearr_13308_13370 = state_13276__$1;
(statearr_13308_13370[(2)] = inst_13197);

(statearr_13308_13370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (28))){
var inst_13242 = (state_13276[(29)]);
var inst_13241 = (state_13276[(2)]);
var inst_13242__$1 = cljs.core.get.call(null,inst_13241,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_13243 = cljs.core.get.call(null,inst_13241,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_13244 = cljs.core.get.call(null,inst_13241,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_13245 = cljs.core.not_empty.call(null,inst_13242__$1);
var state_13276__$1 = (function (){var statearr_13309 = state_13276;
(statearr_13309[(30)] = inst_13244);

(statearr_13309[(29)] = inst_13242__$1);

(statearr_13309[(25)] = inst_13243);

return statearr_13309;
})();
if(cljs.core.truth_(inst_13245)){
var statearr_13310_13371 = state_13276__$1;
(statearr_13310_13371[(1)] = (29));

} else {
var statearr_13311_13372 = state_13276__$1;
(statearr_13311_13372[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (25))){
var inst_13274 = (state_13276[(2)]);
var state_13276__$1 = state_13276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13276__$1,inst_13274);
} else {
if((state_val_13277 === (34))){
var inst_13244 = (state_13276[(30)]);
var inst_13262 = (state_13276[(2)]);
var inst_13263 = cljs.core.not_empty.call(null,inst_13244);
var state_13276__$1 = (function (){var statearr_13312 = state_13276;
(statearr_13312[(31)] = inst_13262);

return statearr_13312;
})();
if(cljs.core.truth_(inst_13263)){
var statearr_13313_13373 = state_13276__$1;
(statearr_13313_13373[(1)] = (35));

} else {
var statearr_13314_13374 = state_13276__$1;
(statearr_13314_13374[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (17))){
var inst_13202 = (state_13276[(23)]);
var state_13276__$1 = state_13276;
var statearr_13315_13375 = state_13276__$1;
(statearr_13315_13375[(2)] = inst_13202);

(statearr_13315_13375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (3))){
var state_13276__$1 = state_13276;
var statearr_13316_13376 = state_13276__$1;
(statearr_13316_13376[(2)] = null);

(statearr_13316_13376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (12))){
var inst_13193 = (state_13276[(2)]);
var state_13276__$1 = state_13276;
var statearr_13317_13377 = state_13276__$1;
(statearr_13317_13377[(2)] = inst_13193);

(statearr_13317_13377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (2))){
var inst_13155 = (state_13276[(20)]);
var inst_13162 = cljs.core.seq.call(null,inst_13155);
var inst_13163 = inst_13162;
var inst_13164 = null;
var inst_13165 = (0);
var inst_13166 = (0);
var state_13276__$1 = (function (){var statearr_13318 = state_13276;
(statearr_13318[(7)] = inst_13166);

(statearr_13318[(8)] = inst_13165);

(statearr_13318[(9)] = inst_13163);

(statearr_13318[(10)] = inst_13164);

return statearr_13318;
})();
var statearr_13319_13378 = state_13276__$1;
(statearr_13319_13378[(2)] = null);

(statearr_13319_13378[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (23))){
var inst_13212 = (state_13276[(12)]);
var inst_13208 = (state_13276[(13)]);
var inst_13213 = (state_13276[(14)]);
var inst_13209 = (state_13276[(15)]);
var inst_13215 = (state_13276[(16)]);
var inst_13235 = (state_13276[(19)]);
var inst_13231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_13234 = (function (){var all_files = inst_13208;
var files_SINGLEQUOTE_ = inst_13209;
var res_SINGLEQUOTE_ = inst_13212;
var res = inst_13213;
var files_not_loaded = inst_13215;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13212,inst_13208,inst_13213,inst_13209,inst_13215,inst_13235,inst_13231,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files){
return (function (p__13233){
var map__13320 = p__13233;
var map__13320__$1 = ((cljs.core.seq_QMARK_.call(null,map__13320))?cljs.core.apply.call(null,cljs.core.hash_map,map__13320):map__13320);
var meta_data = cljs.core.get.call(null,map__13320__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13212,inst_13208,inst_13213,inst_13209,inst_13215,inst_13235,inst_13231,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files))
})();
var inst_13235__$1 = cljs.core.group_by.call(null,inst_13234,inst_13215);
var inst_13236 = cljs.core.seq_QMARK_.call(null,inst_13235__$1);
var state_13276__$1 = (function (){var statearr_13321 = state_13276;
(statearr_13321[(32)] = inst_13231);

(statearr_13321[(19)] = inst_13235__$1);

return statearr_13321;
})();
if(inst_13236){
var statearr_13322_13379 = state_13276__$1;
(statearr_13322_13379[(1)] = (26));

} else {
var statearr_13323_13380 = state_13276__$1;
(statearr_13323_13380[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (35))){
var inst_13244 = (state_13276[(30)]);
var inst_13265 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13244);
var inst_13266 = cljs.core.pr_str.call(null,inst_13265);
var inst_13267 = [cljs.core.str("not required: "),cljs.core.str(inst_13266)].join('');
var inst_13268 = figwheel.client.utils.log.call(null,inst_13267);
var state_13276__$1 = state_13276;
var statearr_13324_13381 = state_13276__$1;
(statearr_13324_13381[(2)] = inst_13268);

(statearr_13324_13381[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (19))){
var inst_13212 = (state_13276[(12)]);
var inst_13208 = (state_13276[(13)]);
var inst_13213 = (state_13276[(14)]);
var inst_13209 = (state_13276[(15)]);
var inst_13212__$1 = (state_13276[(2)]);
var inst_13213__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_13212__$1);
var inst_13214 = (function (){var all_files = inst_13208;
var files_SINGLEQUOTE_ = inst_13209;
var res_SINGLEQUOTE_ = inst_13212__$1;
var res = inst_13213__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_13212,inst_13208,inst_13213,inst_13209,inst_13212__$1,inst_13213__$1,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files){
return (function (p1__12946_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__12946_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_13212,inst_13208,inst_13213,inst_13209,inst_13212__$1,inst_13213__$1,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files))
})();
var inst_13215 = cljs.core.filter.call(null,inst_13214,inst_13212__$1);
var inst_13216 = cljs.core.not_empty.call(null,inst_13213__$1);
var state_13276__$1 = (function (){var statearr_13325 = state_13276;
(statearr_13325[(12)] = inst_13212__$1);

(statearr_13325[(14)] = inst_13213__$1);

(statearr_13325[(16)] = inst_13215);

return statearr_13325;
})();
if(cljs.core.truth_(inst_13216)){
var statearr_13326_13382 = state_13276__$1;
(statearr_13326_13382[(1)] = (20));

} else {
var statearr_13327_13383 = state_13276__$1;
(statearr_13327_13383[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (11))){
var state_13276__$1 = state_13276;
var statearr_13328_13384 = state_13276__$1;
(statearr_13328_13384[(2)] = null);

(statearr_13328_13384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (9))){
var inst_13195 = (state_13276[(2)]);
var state_13276__$1 = state_13276;
var statearr_13329_13385 = state_13276__$1;
(statearr_13329_13385[(2)] = inst_13195);

(statearr_13329_13385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (5))){
var inst_13166 = (state_13276[(7)]);
var inst_13165 = (state_13276[(8)]);
var inst_13168 = (inst_13166 < inst_13165);
var inst_13169 = inst_13168;
var state_13276__$1 = state_13276;
if(cljs.core.truth_(inst_13169)){
var statearr_13330_13386 = state_13276__$1;
(statearr_13330_13386[(1)] = (7));

} else {
var statearr_13331_13387 = state_13276__$1;
(statearr_13331_13387[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (14))){
var inst_13176 = (state_13276[(27)]);
var inst_13185 = cljs.core.first.call(null,inst_13176);
var inst_13186 = figwheel.client.file_reloading.eval_body.call(null,inst_13185);
var inst_13187 = cljs.core.next.call(null,inst_13176);
var inst_13163 = inst_13187;
var inst_13164 = null;
var inst_13165 = (0);
var inst_13166 = (0);
var state_13276__$1 = (function (){var statearr_13332 = state_13276;
(statearr_13332[(7)] = inst_13166);

(statearr_13332[(8)] = inst_13165);

(statearr_13332[(33)] = inst_13186);

(statearr_13332[(9)] = inst_13163);

(statearr_13332[(10)] = inst_13164);

return statearr_13332;
})();
var statearr_13333_13388 = state_13276__$1;
(statearr_13333_13388[(2)] = null);

(statearr_13333_13388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (26))){
var inst_13235 = (state_13276[(19)]);
var inst_13238 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13235);
var state_13276__$1 = state_13276;
var statearr_13334_13389 = state_13276__$1;
(statearr_13334_13389[(2)] = inst_13238);

(statearr_13334_13389[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (16))){
var inst_13202 = (state_13276[(23)]);
var inst_13204 = (function (){var all_files = inst_13202;
return ((function (all_files,inst_13202,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files){
return (function (p1__12945_SHARP_){
return cljs.core.update_in.call(null,p1__12945_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_13202,state_val_13277,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files))
})();
var inst_13205 = cljs.core.map.call(null,inst_13204,inst_13202);
var state_13276__$1 = state_13276;
var statearr_13335_13390 = state_13276__$1;
(statearr_13335_13390[(2)] = inst_13205);

(statearr_13335_13390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (30))){
var state_13276__$1 = state_13276;
var statearr_13336_13391 = state_13276__$1;
(statearr_13336_13391[(2)] = null);

(statearr_13336_13391[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (10))){
var inst_13176 = (state_13276[(27)]);
var inst_13178 = cljs.core.chunked_seq_QMARK_.call(null,inst_13176);
var state_13276__$1 = state_13276;
if(inst_13178){
var statearr_13337_13392 = state_13276__$1;
(statearr_13337_13392[(1)] = (13));

} else {
var statearr_13338_13393 = state_13276__$1;
(statearr_13338_13393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (18))){
var inst_13208 = (state_13276[(13)]);
var inst_13209 = (state_13276[(15)]);
var inst_13208__$1 = (state_13276[(2)]);
var inst_13209__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_13208__$1);
var inst_13210 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_13209__$1);
var state_13276__$1 = (function (){var statearr_13339 = state_13276;
(statearr_13339[(13)] = inst_13208__$1);

(statearr_13339[(15)] = inst_13209__$1);

return statearr_13339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13276__$1,(19),inst_13210);
} else {
if((state_val_13277 === (37))){
var inst_13271 = (state_13276[(2)]);
var state_13276__$1 = state_13276;
var statearr_13340_13394 = state_13276__$1;
(statearr_13340_13394[(2)] = inst_13271);

(statearr_13340_13394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13277 === (8))){
var inst_13176 = (state_13276[(27)]);
var inst_13163 = (state_13276[(9)]);
var inst_13176__$1 = cljs.core.seq.call(null,inst_13163);
var state_13276__$1 = (function (){var statearr_13341 = state_13276;
(statearr_13341[(27)] = inst_13176__$1);

return statearr_13341;
})();
if(inst_13176__$1){
var statearr_13342_13395 = state_13276__$1;
(statearr_13342_13395[(1)] = (10));

} else {
var statearr_13343_13396 = state_13276__$1;
(statearr_13343_13396[(1)] = (11));

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
});})(c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files))
;
return ((function (switch__6985__auto__,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto____0 = (function (){
var statearr_13347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13347[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto__);

(statearr_13347[(1)] = (1));

return statearr_13347;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto____1 = (function (state_13276){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_13276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e13348){if((e13348 instanceof Object)){
var ex__6989__auto__ = e13348;
var statearr_13349_13397 = state_13276;
(statearr_13349_13397[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13398 = state_13276;
state_13276 = G__13398;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto__ = function(state_13276){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto____1.call(this,state_13276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files))
})();
var state__7049__auto__ = (function (){var statearr_13350 = f__7048__auto__.call(null);
(statearr_13350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_13350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__,map__13150,map__13150__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13151,map__13151__$1,msg,files))
);

return c__7047__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__13401,link){
var map__13403 = p__13401;
var map__13403__$1 = ((cljs.core.seq_QMARK_.call(null,map__13403))?cljs.core.apply.call(null,cljs.core.hash_map,map__13403):map__13403);
var file = cljs.core.get.call(null,map__13403__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__13403,map__13403__$1,file){
return (function (p1__13399_SHARP_,p2__13400_SHARP_){
if(cljs.core._EQ_.call(null,p1__13399_SHARP_,p2__13400_SHARP_)){
return p1__13399_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__13403,map__13403__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__13407){
var map__13408 = p__13407;
var map__13408__$1 = ((cljs.core.seq_QMARK_.call(null,map__13408))?cljs.core.apply.call(null,cljs.core.hash_map,map__13408):map__13408);
var match_length = cljs.core.get.call(null,map__13408__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__13408__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__13404_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__13404_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__13410 = arguments.length;
switch (G__13410) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__13412){
var map__13414 = p__13412;
var map__13414__$1 = ((cljs.core.seq_QMARK_.call(null,map__13414))?cljs.core.apply.call(null,cljs.core.hash_map,map__13414):map__13414);
var f_data = map__13414__$1;
var file = cljs.core.get.call(null,map__13414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__13414__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4309__auto__ = request_url;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__13415,files_msg){
var map__13437 = p__13415;
var map__13437__$1 = ((cljs.core.seq_QMARK_.call(null,map__13437))?cljs.core.apply.call(null,cljs.core.hash_map,map__13437):map__13437);
var opts = map__13437__$1;
var on_cssload = cljs.core.get.call(null,map__13437__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__13438_13458 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__13439_13459 = null;
var count__13440_13460 = (0);
var i__13441_13461 = (0);
while(true){
if((i__13441_13461 < count__13440_13460)){
var f_13462 = cljs.core._nth.call(null,chunk__13439_13459,i__13441_13461);
figwheel.client.file_reloading.reload_css_file.call(null,f_13462);

var G__13463 = seq__13438_13458;
var G__13464 = chunk__13439_13459;
var G__13465 = count__13440_13460;
var G__13466 = (i__13441_13461 + (1));
seq__13438_13458 = G__13463;
chunk__13439_13459 = G__13464;
count__13440_13460 = G__13465;
i__13441_13461 = G__13466;
continue;
} else {
var temp__4423__auto___13467 = cljs.core.seq.call(null,seq__13438_13458);
if(temp__4423__auto___13467){
var seq__13438_13468__$1 = temp__4423__auto___13467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13438_13468__$1)){
var c__5094__auto___13469 = cljs.core.chunk_first.call(null,seq__13438_13468__$1);
var G__13470 = cljs.core.chunk_rest.call(null,seq__13438_13468__$1);
var G__13471 = c__5094__auto___13469;
var G__13472 = cljs.core.count.call(null,c__5094__auto___13469);
var G__13473 = (0);
seq__13438_13458 = G__13470;
chunk__13439_13459 = G__13471;
count__13440_13460 = G__13472;
i__13441_13461 = G__13473;
continue;
} else {
var f_13474 = cljs.core.first.call(null,seq__13438_13468__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_13474);

var G__13475 = cljs.core.next.call(null,seq__13438_13468__$1);
var G__13476 = null;
var G__13477 = (0);
var G__13478 = (0);
seq__13438_13458 = G__13475;
chunk__13439_13459 = G__13476;
count__13440_13460 = G__13477;
i__13441_13461 = G__13478;
continue;
}
} else {
}
}
break;
}

var c__7047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7047__auto__,map__13437,map__13437__$1,opts,on_cssload){
return (function (){
var f__7048__auto__ = (function (){var switch__6985__auto__ = ((function (c__7047__auto__,map__13437,map__13437__$1,opts,on_cssload){
return (function (state_13448){
var state_val_13449 = (state_13448[(1)]);
if((state_val_13449 === (1))){
var inst_13442 = cljs.core.async.timeout.call(null,(100));
var state_13448__$1 = state_13448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13448__$1,(2),inst_13442);
} else {
if((state_val_13449 === (2))){
var inst_13444 = (state_13448[(2)]);
var inst_13445 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_13446 = on_cssload.call(null,inst_13445);
var state_13448__$1 = (function (){var statearr_13450 = state_13448;
(statearr_13450[(7)] = inst_13444);

return statearr_13450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13448__$1,inst_13446);
} else {
return null;
}
}
});})(c__7047__auto__,map__13437,map__13437__$1,opts,on_cssload))
;
return ((function (switch__6985__auto__,c__7047__auto__,map__13437,map__13437__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto____0 = (function (){
var statearr_13454 = [null,null,null,null,null,null,null,null];
(statearr_13454[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto__);

(statearr_13454[(1)] = (1));

return statearr_13454;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto____1 = (function (state_13448){
while(true){
var ret_value__6987__auto__ = (function (){try{while(true){
var result__6988__auto__ = switch__6985__auto__.call(null,state_13448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6988__auto__;
}
break;
}
}catch (e13455){if((e13455 instanceof Object)){
var ex__6989__auto__ = e13455;
var statearr_13456_13479 = state_13448;
(statearr_13456_13479[(5)] = ex__6989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13480 = state_13448;
state_13448 = G__13480;
continue;
} else {
return ret_value__6987__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto__ = function(state_13448){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto____1.call(this,state_13448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6986__auto__;
})()
;})(switch__6985__auto__,c__7047__auto__,map__13437,map__13437__$1,opts,on_cssload))
})();
var state__7049__auto__ = (function (){var statearr_13457 = f__7048__auto__.call(null);
(statearr_13457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7047__auto__);

return statearr_13457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7049__auto__);
});})(c__7047__auto__,map__13437,map__13437__$1,opts,on_cssload))
);

return c__7047__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map