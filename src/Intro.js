import React from "react";
import "./intro.css";

function HowToUse() {
  return (
    <div class="intro">
      <h1>Quick Setup</h1>
      <p>
        Welcome to the Quick Setup page! This page will walk you through the
        setup process for the Twitch Chat Overlay.
      </p>
      <ol>
        <li>
          <p>
            Add a new browser source to your streaming software. The name of the
            source can be anything you want.
          </p>
          <img
            src="Screenshot 2023-06-14 021155.png"
            alt="Add a new browser source"
          />
        </li>
        <li>
          <p>
            Set the URL of the browser source to{" "}
            <code>
              https://tylerguy.github.io/chat-bubbles/#/chat/&#123;user&#125;
            </code>
            , replacing <code>&#123;user&#125;</code> with your Twitch username.
          </p>
          <img
            src="Screenshot 2023-06-14 021517.png"
            alt="Set the URL of the browser source"
          />
        </li>
        <li>
          <p>
            Set the width and height of the browser source to the width and
            height of your stream.
          </p>
          <img
            src="Screenshot 2023-06-14 021653.png"
            alt="Set the width and height of the browser source"
          />
        </li>
        <li>
          <p>
            Postion the browser source on your stream. You can use the preview
            in the browser source settings to help you position it.
          </p>
          <img
            src="Screenshot 2023-06-14 021842.png"
            alt="Position the browser source on your stream"
          />
        </li>
      </ol>
      <p>
        That's it! If you have any questions or issues, please create a new
        issue at{" "}
        <a href="https://github.com/tylerguy/Chat-Bubbles/issues">
          https://github.com/tylerguy/Chat-Bubbles/issues
        </a>
      </p>
    </div>
  );
}

export default HowToUse;
