import { Controller } from "@hotwired/stimulus"
import consumer from "../channels/consumer"

export default class extends Controller {
  static values = { chatroomId: Number }
  static targets = ["messages"]

  connect() {
    consumer.subscriptions.create(
      { channel: "ChatroomChannel", id: this.chatroomIdValue },
      { received: (message) => {
        // this.element.insertAdjacentHTML('beforeend', message)
        this.messagesTarget.insertAdjacentHTML("beforeend", message)
      } }
      )

    console.log(`Subscribe to the chatroom with the id ${this.chatroomIdValue}.`)
  }
}
