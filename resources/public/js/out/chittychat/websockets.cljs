(ns chittychat.websockets
  (:require [cognitect.transit :as t]))

(defonce ws-chan (atom nil))
(defonce chatroom (atom nil))
(def json-reader (t/reader :json))
(def json-writer (t/writer :json))

(defn receive-transit-msg!
  [update-fn]
  (fn [msg]
    (if (= (get-in(->> msg .-data (t/read json-reader)) [:room]) @chatroom)
      (update-fn
        (->> msg .-data (t/read json-reader))
        ))))

(defn send-transit-msg!
  [msg]
  (if @ws-chan
    (.send @ws-chan (t/write json-writer msg))
    (throw (js/Error. "Websocket is not available!"))))

(defn make-websocket! [url receive-handler]
  (println "attempting to connect websocket")
  (if-let [chan (js/WebSocket. url)]
    (do
      (set! (.-onmessage chan) (receive-transit-msg! receive-handler))
      (reset! ws-chan chan)
      (println "Websocket connection established with: " url))
    (throw (js/Error. "Websocket connection failed!"))))

(defn room-filter! [room]
  (println room)
  (println @chatroom)
  (reset! chatroom room)
  )
