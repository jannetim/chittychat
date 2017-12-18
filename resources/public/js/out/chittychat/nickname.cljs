(ns chittychat.nickname)

  (def nick (atom {:nick ""}))

  (defn set-nick!
    "docstring"
    [nick]
      (println "plaa")
      (swap! nick update-in [nick] nick))
