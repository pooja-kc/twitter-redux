import React from "react";
import "./Content.css";
import { FaFileImage, FaMapMarkerAlt,FaSmile , FaTag} from "react-icons/fa";

export default function Content() {
  return (
    <div>
      <div class="container">
        <div class="wrapperr">
          <div class="input-box">
            <div class="tweet-area">
              <textarea
                maxlength="500"
                type="text"
                v-model="tweetText"
                placeholder="What's happening?"
                class="input editable input"
                spellcheck="false"
              />
              <div
                class="input readonly"
                contenteditable="true"
                spellcheck="false"
              ></div>
            </div>
            <div class="privacy">
              <i class="fas fa-globe-asia"></i>
              <span>Everyone can reply</span>
            </div>
          </div>
          <div class="bottom">
            <ul class="icons">
              <li>
                <FaFileImage />
              </li>
              <li>
                <FaMapMarkerAlt />
              </li>
              <li>
                <FaSmile />
              </li>
              <li>
                <FaTag />
              </li>
            </ul>
            <a href="#" class="myButton">
              Tweet
            </a>
          </div>
        </div>
        <div class="tweets-list">
          <ul>
            <li v-for="product in posts">
              <div class="card">
                <div class="card-user">
                  <img
                    src="https://th.bing.com/th/id/OIP.0oAaZ9FyGxTXXYSBSlXziQHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                    alt=""
                  />
                  <h3 class="user-name"></h3>
                </div>
                <div class="card-tweet"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
