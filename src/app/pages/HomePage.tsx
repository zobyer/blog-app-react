import React from "react";
import LayOut from "app/components/layout";
import HomePageContainer from "app/components/home/container";

function HomePage() {
  return (
    <>
      <LayOut>
        <div className="container mx-auto">
          <HomePageContainer />
        </div>
      </LayOut>
    </>
  );
}

export default HomePage;
