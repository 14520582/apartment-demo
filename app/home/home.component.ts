import { Component, ViewChild, ElementRef } from '@angular/core';
import { ListView } from 'ui/list-view';
import { TextView } from 'ui/text-view';
export interface User {
  name: string;
  pictureUrl: string;
  coverUrl?: string;
}

export interface Message {
  sender: User;
  content: string;
  date: Date;
}

export interface Participants {
  me: User;
  other: User;
}

export interface Chat {
  participants: Participants;
  messages: Array<Message>;
}
const temp = {
  participants: {
    me: {
      name: "Me",
      pictureUrl: "https://unsplash.it/100/100?image=837"
    },
    other: {
      name: "Jameson Stokes",
      pictureUrl: "https://unsplash.it/100/100?image=823",
      coverUrl: "https://unsplash.it/400/400?image=531"
    }
  },
  messages: [
    {
      sender: {
        name: "Me",
        pictureUrl: "https://unsplash.it/100/100?image=837"
      },
      content: "Et in sed dicta porro et et aliquam aspernatur mollitia.",
      date: "2016-09-24T04:59:26.506Z"
    },
    {
      sender: {
        name: "Me",
        pictureUrl: "https://unsplash.it/100/100?image=837"
      },
      content: "Et eos molestiae af fdf.",
      date: "2016-09-25T11:10:43.887Z"
    },
    {
      sender: {
        name: "Me",
        pictureUrl: "https://unsplash.it/100/100?image=837"
      },
      content: "Esse ex sunt ad fugit eligendi facilis iste unde.",
      date: "2016-09-25T22:48:47.886Z"
    },
    {
      sender: {
        name: "Jameson Stokes",
        pictureUrl: "https://unsplash.it/100/100?image=823",
        coverUrl: "https://unsplash.it/400/400?image=531"
      },
      content: "Nobis ullam recusandae quasi saepe adipisci cumque pariatur non.",
      date: "2016-09-26T00:17:07.502Z"
    }
  ]
}
@Component({
  selector: "home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public me: User;
  public other: User;
  public messages: Array<any>;


  @ViewChild('chatBox') chatBoxRef: ElementRef;

  private get chatBox(): ListView {
    return this.chatBoxRef.nativeElement;
  }

  @ViewChild('newMessage') newMessageRef: ElementRef;

  private get newMessage(): TextView {
    return this.newMessageRef.nativeElement;
  }

  constructor() {
    const chat = temp;

    this.me = chat.participants.me;
    this.other = chat.participants.other;
    this.messages = chat.messages;
  }

  public sendMessage(): void {
    const content = this.newMessage.text;
    if (content == '') {
      return;
    }
    const message = this.initializeMessageWith(content);
    this.messages.push(message);
    this.scrollChatToBottom();
    this.dismissKeyBoard();
  }

  private initializeMessageWith(content: string): Message {
    return {
      content: content,
      sender: this.me,
      date: new Date()
    };
  }

  public scrollChatToBottom(): void {
    setTimeout(() => {
      this.chatBox.scrollToIndex(this.messages.length - 1);
    }, 0);
  }

  private dismissKeyBoard(): void {
    this.newMessage.text = '';
    this.chatBox.focus();
  }

  public bubbleClass(message: Message): string {
    const sender = this.isMy(message) ? 'me' : 'other';

    return `bubble-from-${sender}`;
  }

  private isMy(message: Message): boolean {
    return message.sender.name == 'Me';
  }
}