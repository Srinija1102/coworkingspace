import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Offer from "./components/service/offer";
import Explore from "./components/service/explore";
import OurServicesPage from "./pages/Service";
function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/service" element={<OurServicesPage />} />
      </Routes>
      {/* <Offer
        title="Flexible Workspaces"
        description="Our state-of-the-art coworking spaces are crafted to cater to your specific needs. Whether you're a solopreneur, a startup team, or a remote worker, we have the perfect workspace for you"
        imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon1.png?fit=1123%2C962&ssl=1"
      />
      <Explore
        title="Flexible Workspaces"
        description="Our state-of-the-art coworking spaces are crafted to cater to your specific needs. Whether you're a solopreneur, a startup team, or a remote worker, we have the perfect workspace for you"
        imagesrc="https://i0.wp.com/www.603thecoworkingspace.com/wp-content/uploads/2023/08/icon1.png?fit=1123%2C962&ssl=1"
      /> */}
    </div>
  );
}

export default App;
