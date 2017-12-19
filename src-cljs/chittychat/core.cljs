(ns chittychat.core
  (:require [reagent.core :as r :refer [atom]]
            [chittychat.websockets :as ws]))

(defonce messages (atom []))

(defonce room (atom nil))

(defn update-messages! [{:keys [message]}]
  (swap! messages #(vec (take 100 (conj % message)))))

(defn message-list []
  [:ul
   (for [[i message] (map-indexed vector @messages)]
     ^{:key i}
     [:li message])])

(defn message-input [nick]
  (let [value (atom nil)]
    (fn []
      [:input.form-control
       {:type :text
        :placeholder "Type message and press enter"
        :value @value
        :on-change #(reset! value (-> % .-target .-value))
        :on-key-down
        #(when (= (.-keyCode %) 13)
           (ws/send-transit-msg!
            {:room @room :message (str @nick ": " @value)})
           (reset! value nil))}])))

(defn room-input []
  (let [value (atom nil)]
    (fn []
      [:input.form-control
       {:type :text
        :placeholder "Type room and press enter"
        :value @value
        :on-change #(reset! value (-> % .-target .-value))
        :on-key-down
        #(when (= (.-keyCode %) 13)
           (let [previous @room]
             (reset! room @value)
             (ws/room-filter! @value)
             (if (not= previous @value)
               (reset! messages nil))))}])))

(defn nick-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn chat-page []
  (let [nick (atom "Chittychatter")]
    (fn []
  [:div.container
    [:div.controls
     [:h2 "Websocket Chittychat"]
      [:div
       ;[:p "Nick is now: " @nick]
       [:p "Nickname: " [nick-input nick]]]
      [:div.chatroom
       [:p "Chat room: " [room-input]]]
      [:div
       [message-input nick]]
     ]
    [:div.messages
     [:h2 "Messages to " @room]
     [:div.message-scroll
       [message-list]]
     ]
  ])))


(defn mount-components []
  (r/render-component [#'chat-page] (.getElementById js/document "app")))

(defn init! []
  (ws/make-websocket! (str "ws://" (.-host js/location) "/ws") update-messages!)
  (mount-components))


