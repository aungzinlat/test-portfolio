import React from "react";
import {
  AboutComponent,
  BannerComponent,
  ContactComponent,
  HeaderComponent,
  NavComponent,
  ServicesComponent,
  WorkComponent,
} from "./components";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <HeaderComponent />
      <BannerComponent />
      <NavComponent />
      <AboutComponent />
      <ServicesComponent />
      <WorkComponent />
      <ContactComponent />
      <div className="min-h-screen"></div>
    </div>
  );
};

export default App;
