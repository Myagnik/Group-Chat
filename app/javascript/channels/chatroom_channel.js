import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server

    alert("connected to chatroommmchannel")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    //alert(data.body)
    // console.log(data,"Froom Chatroom controller")
    $("#message-container").append(data.mod_message)
  }
});
