import React from "react";
import { useEffect } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Chatbot = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v8.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
  return (
    <div>
      <MessengerCustomerChat
        pageId="100090430233827"
        appId="<3029975887303737>"
      />
    </div>
  );
};

export default Chatbot;
