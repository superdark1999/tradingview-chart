// pages/EmbeddedWebsitePage.js

import React, { useEffect, useRef } from "react";

const EmbeddedWebsitePage = () => {
  console.log("render");
  const handleIframeLoaded = () => {
    setTimeout(() => {
      let frameElement: any = document.getElementById("myiFrame");
      console.log("frameElement: ", frameElement);
      const text = frameElement?.querySelector("modal-heading__text");
      console.log("text: ", text);
      console.log();
      const modalHeading = frameElement.querySelector("h2.modal-heading__text");
      console.log("modalHeading: ", modalHeading);
    }, 2000);
    // <h2 class="modal-heading__text">DChart - KHP</h2>;
  };

  return (
    <div>
      <h1>Embedded Website Page</h1>
      <iframe
        src="https://dstock.vndirect.com.vn/tong-quan/KHP/stock-chart-popup" // Replace this URL with the website you want to embed
        width="100%"
        height="800"
        onLoad={handleIframeLoaded}
        id="myiFrame"
      />
    </div>
  );
};

export default EmbeddedWebsitePage;
