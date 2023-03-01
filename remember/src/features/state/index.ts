console.log("State");
class testState {

    private state : string = "draft";
    publish () {
        switch (this.state) {
            case "draft":
                this.state = "moderation";
                break;
            case "moderation":
                this.state = "published";
                break;
            default:
                break;
        }
    }
    get getState (){
        return this.state
    }
}
const newPublish = new testState();
newPublish.publish();
console.log(newPublish.getState);
newPublish.publish();
console.log(newPublish.getState);