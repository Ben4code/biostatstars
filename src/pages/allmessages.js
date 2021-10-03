import React from "react";
import dataObj from "../data.json";

export default function allMessages() {
  return (
    <div className="">
      <div className="allmessages">
        <h2>All Messages</h2> <br />
        <div className="allmessages-list">
          {dataObj.map((obj, i) => (
            <div className="allmessages-item" key={i}>
              <h5>{obj.name}</h5>
              <br />
              <p>Email: {obj.email}</p>
              <br />
              <p>Time: {obj.time}</p>
              <br />
              <p>Date: {obj.date}</p>
              <br />
              <p>Body: {obj.message}</p>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
