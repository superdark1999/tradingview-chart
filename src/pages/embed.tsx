// pages/EmbeddedWebsitePage.js

import React from "react";

const EmbeddedWebsitePage = () => {
  return (
    <div>
      <h1>Embedded Website Page</h1>
      <iframe
        src="https://dchart.vndirect.com.vn/?symbol=ACB&theme=dark" // Replace this URL with the website you want to embed
        width="100%"
        height="800"
      />
      sdfdsfdsfd
      <iframe
        // style="border:0;width:100%;height:70vh"
        src="https://dchart.vndirect.com.vn/?symbol=KHP&theme=dark"
      ></iframe>
    </div>
  );
};

export default EmbeddedWebsitePage;
