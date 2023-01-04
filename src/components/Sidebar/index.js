import { Link, NavLink } from "react-router-dom";

// Icons
import {
  DashboardIcon,
  QuestionIcon,
  OrderIcon,
  UsersIcon,
  InboxIcon,
  ReferralIcon,
  HelpIcon,
} from "../../assets/icons";
import "./sidebar.scss";

const Sidebar = () => {
  const nav = [
    {
      label: "Dashboard",
      slug: "/dashboard",
      icon: <DashboardIcon />,
      icon_name: "dashboard",
    },
    {
      label: "Post a Question",
      slug: "/question",
      icon: <QuestionIcon />,
      icon_name: "question",
    },
    {
      label: "My Orders",
      slug: "/orders",
      icon: <OrderIcon />,
      icon_name: "orders",
    },
    {
      label: "Browse Tutors",
      slug: "/tutors",
      icon: <UsersIcon />,
      icon_name: "tutors",
    },
    {
      label: "Inbox",
      slug: "/",
      icon: <InboxIcon />,
      icon_name: "inbox",
    },
    {
      label: "Referrals",
      slug: "/referrals",
      icon: <ReferralIcon />,
      icon_name: "referrals",
    },
    {
      label: "Help Center",
      slug: "/help",
      icon: <HelpIcon />,
      icon_name: "help",
    },
  ];

  return (
    <div className="sidebar-cmp">
      <Link to="/" className="logo font s22 b7 color">
        Read.
      </Link>
      <div className="nav flex flex-col">
        {nav.map((item, index) => (
          <NavLink
            exact
            key={index}
            to={item.slug}
            className={`link flex aic ${item.icon_name}`}
          >
            <div className="icon">{item.icon}</div>
            <div className="lbl font">{item.label}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
