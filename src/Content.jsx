import React, {  useState } from "react";
import "./Content.css";
import { FaFileImage, FaMapMarkerAlt, FaSmile, FaTag } from "react-icons/fa";
import store from "./Redux/store";
import { FaTrash } from "react-icons/fa";

import { addTweet, removeTweet } from "./Redux/actions";
store.dispatch(addTweet({
  "userName": "Bibby Siderfin",
  "tweet": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "date": "10/16/2021"
}));
store.dispatch(addTweet({
  "userName": "Bibby Siderfin",
  "tweet": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "date": "10/16/2021"
}));

export default function Content() {

  const [tweet, setnewtweet] = useState("");
  const [tweets, setTweets] =useState([...store.getState().reducer2]);
  
function addTweet_(){

  (tweet.trim()) && store.dispatch(addTweet({
    "userName": "Bibby Siderfin",
    "tweet": tweet ,
    "date": "10/16/2021"
  }));
  setTweets([...store.getState().reducer2]);
}

function deleteTweet(id){
  store.dispatch(removeTweet({id}));
  setTweets([...store.getState().reducer2]);
}


  return (
    <div>
      <div className="container">
        <div className="wrapperr">
          <div className="input-box">
            <div className="tweet-area">
              <textarea
                maxLength="500"
                type="text"
                onChange={(e) => setnewtweet(e.target.value)}
                placeholder="What's happening?"
                className="input editable input"
                spellCheck="false"
              />
            </div>
            <div className="privacy">
              <i className="fas fa-globe-asia"></i>
              <span>Everyone can reply</span>
            </div>
          </div>
          <div className="bottom">
            <ul className="icons">
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
            <a className="myButton" onClick={addTweet_}>
              Tweet
            </a>
          </div>
        </div>
        <div className="tweets-list">
          <ul>
         {   
          tweets.map((ele)=> <li key={ele.tweet.id}>
            <div className="card">
              <div className="card-user">
                <img
                  src="https://th.bing.com/th/id/OIP.0oAaZ9FyGxTXXYSBSlXziQHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                  alt=""
                />
               
                <h3 className="user-name">{ele.tweet.userName}</h3>
              </div>
              <div className="card-tweet">{ele.tweet.tweet}</div>
              <div className="delete-icon" onClick={()=>deleteTweet(ele.tweet.id)}> <FaTrash /></div>
             
            </div>
           
          </li>)
       
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
