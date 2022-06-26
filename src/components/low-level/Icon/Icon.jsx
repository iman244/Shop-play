import "./Icon.css";
import React from "react";

function Icon({ className, badge_className, icon, badge }) {
  return (
    <div className={className ? `il-icon ${className}` : "il-icon"}>
      {icon}
      {badge && (
        <span
          className={
            badge_className ? `il-badge ${badge_className}` : "il-badge"
          }
        >
          {badge}
        </span>
      )}
    </div>
  );
}

export default Icon;
