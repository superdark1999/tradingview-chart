// pages/EmbeddedWebsitePage.js

import React from "react";

const EmbeddedWebsitePage = () => {
  return (
    <div>
      <h1>Embedded Website Page</h1>
      <iframe
        src="https://dstock.vndirect.com.vn/tong-quan/KHP/stock-chart-popup" // Replace this URL with the website you want to embed
        width="100%"
        height="800"
        scrolling="auto"
      />
    </div>
  );
};

export default EmbeddedWebsitePage;
