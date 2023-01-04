import React from "react";
import { BellIcon, DropDownIcon } from "../../assets/icons";
import Searchbar from "../Searchbar";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="header-cmp flex aic">
        <div className="wrapper app-padding flex aic">
          <div className="left flex aic">
            <div className="title font s18 b6 c000">Inbox</div>
          </div>
          <div className="right flex aic">
            <div className="search flex aic">
              <Searchbar />
            </div>
            <div className="notification rel">
              <div className="icon">
                <BellIcon />
              </div>
            </div>
            <div className="user flex aic">
              <div
                className="dp"
                style={{
                  backgroundImage: `url(/images/dp.png)`,
                }}
              />
              <div className="name font s13">Sadia</div>
              <button className="cleanbtn drop-btn">
                <DropDownIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="clean-header" />
    </>
  );
};

export default Header;
