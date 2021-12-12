import Card from "../UI/Card";
import "../Dist/inbox.css";
import Header from "../Components/Header";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Button from "@mui/material/Button";
import { Fragment } from "react";

const Inbox = () => {
  return (
    <Fragment>
      <Header />
      <Card className="chat-box-container">
        <div className="chat-box-contacts">
          <div className="chat-box-user">
            <h3>User</h3>
          </div>
          <div className="chat-box-friends">
            <div className="chat-box-chat1">
              <h3>Friend #1</h3>
            </div>
            <div className="chat-box-chat2">
              <h3>Friend #2</h3>
            </div>
          </div>
        </div>
        <div className="chat-box-conversation">
          <SendRoundedIcon fontSize="large" className="chat-box-img" />
          <h3>Your Messages Will Be Displayed Here</h3>
          <p>Send private photos and messages to a friend or group.</p>
          <Button variant="contained" type="button">
            Send Message
          </Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default Inbox;
