"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var temp = {
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
};
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var chat = temp;
        this.me = chat.participants.me;
        this.other = chat.participants.other;
        this.messages = chat.messages;
    }
    Object.defineProperty(HomeComponent.prototype, "chatBox", {
        get: function () {
            return this.chatBoxRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "newMessage", {
        get: function () {
            return this.newMessageRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.sendMessage = function () {
        var content = this.newMessage.text;
        if (content == '') {
            return;
        }
        var message = this.initializeMessageWith(content);
        this.messages.push(message);
        this.scrollChatToBottom();
        this.dismissKeyBoard();
    };
    HomeComponent.prototype.initializeMessageWith = function (content) {
        return {
            content: content,
            sender: this.me,
            date: new Date()
        };
    };
    HomeComponent.prototype.scrollChatToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.chatBox.scrollToIndex(_this.messages.length - 1);
        }, 0);
    };
    HomeComponent.prototype.dismissKeyBoard = function () {
        this.newMessage.text = '';
        this.chatBox.focus();
    };
    HomeComponent.prototype.bubbleClass = function (message) {
        var sender = this.isMy(message) ? 'me' : 'other';
        return "bubble-from-" + sender;
    };
    HomeComponent.prototype.isMy = function (message) {
        return message.sender.name == 'Me';
    };
    __decorate([
        core_1.ViewChild('chatBox'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "chatBoxRef", void 0);
    __decorate([
        core_1.ViewChild('newMessage'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "newMessageRef", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQXdCakUsSUFBTSxJQUFJLEdBQUc7SUFDWCxZQUFZLEVBQUU7UUFDWixFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSx1Q0FBdUM7U0FDcEQ7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLFVBQVUsRUFBRSx1Q0FBdUM7WUFDbkQsUUFBUSxFQUFFLHVDQUF1QztTQUNsRDtLQUNGO0lBQ0QsUUFBUSxFQUFFO1FBQ1I7WUFDRSxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLElBQUk7Z0JBQ1YsVUFBVSxFQUFFLHVDQUF1QzthQUNwRDtZQUNELE9BQU8sRUFBRSwwREFBMEQ7WUFDbkUsSUFBSSxFQUFFLDBCQUEwQjtTQUNqQztRQUNEO1lBQ0UsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJO2dCQUNWLFVBQVUsRUFBRSx1Q0FBdUM7YUFDcEQ7WUFDRCxPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLElBQUksRUFBRSwwQkFBMEI7U0FDakM7UUFDRDtZQUNFLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsSUFBSTtnQkFDVixVQUFVLEVBQUUsdUNBQXVDO2FBQ3BEO1lBQ0QsT0FBTyxFQUFFLG1EQUFtRDtZQUM1RCxJQUFJLEVBQUUsMEJBQTBCO1NBQ2pDO1FBQ0Q7WUFDRSxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsVUFBVSxFQUFFLHVDQUF1QztnQkFDbkQsUUFBUSxFQUFFLHVDQUF1QzthQUNsRDtZQUNELE9BQU8sRUFBRSxrRUFBa0U7WUFDM0UsSUFBSSxFQUFFLDBCQUEwQjtTQUNqQztLQUNGO0NBQ0YsQ0FBQTtBQU9EO0lBa0JFO1FBQ0UsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQWhCRCxzQkFBWSxrQ0FBTzthQUFuQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUlELHNCQUFZLHFDQUFVO2FBQXRCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBVU0sbUNBQVcsR0FBbEI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sNkNBQXFCLEdBQTdCLFVBQThCLE9BQWU7UUFDM0MsTUFBTSxDQUFDO1lBQ0wsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2YsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRU0sMENBQWtCLEdBQXpCO1FBQUEsaUJBSUM7UUFIQyxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRU8sdUNBQWUsR0FBdkI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sbUNBQVcsR0FBbEIsVUFBbUIsT0FBZ0I7UUFDakMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFbkQsTUFBTSxDQUFDLGlCQUFlLE1BQVEsQ0FBQztJQUNqQyxDQUFDO0lBRU8sNEJBQUksR0FBWixVQUFhLE9BQWdCO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7SUFDckMsQ0FBQztJQTFEcUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUFNcEI7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWdCLGlCQUFVO3dEQUFDO0lBWnhDLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7O09BQ1csYUFBYSxDQWlFekI7SUFBRCxvQkFBQztDQUFBLEFBakVELElBaUVDO0FBakVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSAndWkvdGV4dC12aWV3JztcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGljdHVyZVVybDogc3RyaW5nO1xuICBjb3ZlclVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgc2VuZGVyOiBVc2VyO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGRhdGU6IERhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFydGljaXBhbnRzIHtcbiAgbWU6IFVzZXI7XG4gIG90aGVyOiBVc2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXQge1xuICBwYXJ0aWNpcGFudHM6IFBhcnRpY2lwYW50cztcbiAgbWVzc2FnZXM6IEFycmF5PE1lc3NhZ2U+O1xufVxuY29uc3QgdGVtcCA9IHtcbiAgcGFydGljaXBhbnRzOiB7XG4gICAgbWU6IHtcbiAgICAgIG5hbWU6IFwiTWVcIixcbiAgICAgIHBpY3R1cmVVcmw6IFwiaHR0cHM6Ly91bnNwbGFzaC5pdC8xMDAvMTAwP2ltYWdlPTgzN1wiXG4gICAgfSxcbiAgICBvdGhlcjoge1xuICAgICAgbmFtZTogXCJKYW1lc29uIFN0b2tlc1wiLFxuICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Vuc3BsYXNoLml0LzEwMC8xMDA/aW1hZ2U9ODIzXCIsXG4gICAgICBjb3ZlclVybDogXCJodHRwczovL3Vuc3BsYXNoLml0LzQwMC80MDA/aW1hZ2U9NTMxXCJcbiAgICB9XG4gIH0sXG4gIG1lc3NhZ2VzOiBbXG4gICAge1xuICAgICAgc2VuZGVyOiB7XG4gICAgICAgIG5hbWU6IFwiTWVcIixcbiAgICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Vuc3BsYXNoLml0LzEwMC8xMDA/aW1hZ2U9ODM3XCJcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiBcIkV0IGluIHNlZCBkaWN0YSBwb3JybyBldCBldCBhbGlxdWFtIGFzcGVybmF0dXIgbW9sbGl0aWEuXCIsXG4gICAgICBkYXRlOiBcIjIwMTYtMDktMjRUMDQ6NTk6MjYuNTA2WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBzZW5kZXI6IHtcbiAgICAgICAgbmFtZTogXCJNZVwiLFxuICAgICAgICBwaWN0dXJlVXJsOiBcImh0dHBzOi8vdW5zcGxhc2guaXQvMTAwLzEwMD9pbWFnZT04MzdcIlxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6IFwiRXQgZW9zIG1vbGVzdGlhZSBhZiBmZGYuXCIsXG4gICAgICBkYXRlOiBcIjIwMTYtMDktMjVUMTE6MTA6NDMuODg3WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBzZW5kZXI6IHtcbiAgICAgICAgbmFtZTogXCJNZVwiLFxuICAgICAgICBwaWN0dXJlVXJsOiBcImh0dHBzOi8vdW5zcGxhc2guaXQvMTAwLzEwMD9pbWFnZT04MzdcIlxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6IFwiRXNzZSBleCBzdW50IGFkIGZ1Z2l0IGVsaWdlbmRpIGZhY2lsaXMgaXN0ZSB1bmRlLlwiLFxuICAgICAgZGF0ZTogXCIyMDE2LTA5LTI1VDIyOjQ4OjQ3Ljg4NlpcIlxuICAgIH0sXG4gICAge1xuICAgICAgc2VuZGVyOiB7XG4gICAgICAgIG5hbWU6IFwiSmFtZXNvbiBTdG9rZXNcIixcbiAgICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Vuc3BsYXNoLml0LzEwMC8xMDA/aW1hZ2U9ODIzXCIsXG4gICAgICAgIGNvdmVyVXJsOiBcImh0dHBzOi8vdW5zcGxhc2guaXQvNDAwLzQwMD9pbWFnZT01MzFcIlxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6IFwiTm9iaXMgdWxsYW0gcmVjdXNhbmRhZSBxdWFzaSBzYWVwZSBhZGlwaXNjaSBjdW1xdWUgcGFyaWF0dXIgbm9uLlwiLFxuICAgICAgZGF0ZTogXCIyMDE2LTA5LTI2VDAwOjE3OjA3LjUwMlpcIlxuICAgIH1cbiAgXVxufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImhvbWVcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICBwdWJsaWMgbWU6IFVzZXI7XG4gIHB1YmxpYyBvdGhlcjogVXNlcjtcbiAgcHVibGljIG1lc3NhZ2VzOiBBcnJheTxhbnk+O1xuXG5cbiAgQFZpZXdDaGlsZCgnY2hhdEJveCcpIGNoYXRCb3hSZWY6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBnZXQgY2hhdEJveCgpOiBMaXN0VmlldyB7XG4gICAgcmV0dXJuIHRoaXMuY2hhdEJveFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnbmV3TWVzc2FnZScpIG5ld01lc3NhZ2VSZWY6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBnZXQgbmV3TWVzc2FnZSgpOiBUZXh0VmlldyB7XG4gICAgcmV0dXJuIHRoaXMubmV3TWVzc2FnZVJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgY2hhdCA9IHRlbXA7XG5cbiAgICB0aGlzLm1lID0gY2hhdC5wYXJ0aWNpcGFudHMubWU7XG4gICAgdGhpcy5vdGhlciA9IGNoYXQucGFydGljaXBhbnRzLm90aGVyO1xuICAgIHRoaXMubWVzc2FnZXMgPSBjaGF0Lm1lc3NhZ2VzO1xuICB9XG5cbiAgcHVibGljIHNlbmRNZXNzYWdlKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLm5ld01lc3NhZ2UudGV4dDtcbiAgICBpZiAoY29udGVudCA9PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5pbml0aWFsaXplTWVzc2FnZVdpdGgoY29udGVudCk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHRoaXMuc2Nyb2xsQ2hhdFRvQm90dG9tKCk7XG4gICAgdGhpcy5kaXNtaXNzS2V5Qm9hcmQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZU1lc3NhZ2VXaXRoKGNvbnRlbnQ6IHN0cmluZyk6IE1lc3NhZ2Uge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgc2VuZGVyOiB0aGlzLm1lLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsQ2hhdFRvQm90dG9tKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGF0Qm94LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzbWlzc0tleUJvYXJkKCk6IHZvaWQge1xuICAgIHRoaXMubmV3TWVzc2FnZS50ZXh0ID0gJyc7XG4gICAgdGhpcy5jaGF0Qm94LmZvY3VzKCk7XG4gIH1cblxuICBwdWJsaWMgYnViYmxlQ2xhc3MobWVzc2FnZTogTWVzc2FnZSk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5pc015KG1lc3NhZ2UpID8gJ21lJyA6ICdvdGhlcic7XG5cbiAgICByZXR1cm4gYGJ1YmJsZS1mcm9tLSR7c2VuZGVyfWA7XG4gIH1cblxuICBwcml2YXRlIGlzTXkobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXNzYWdlLnNlbmRlci5uYW1lID09ICdNZSc7XG4gIH1cbn0iXX0=