/*
Samuel PLANCHON William BERNHARD
SPDX-License-Identifier: Apache-2.0
*/
import SideNavigation, {
  SideNavigationProps,
} from "@awsui/components-react/side-navigation";
import { useHistory } from "react-router-dom";

import React from "react";
const { REACT_APP_FHIR_SERVER_URL } = process.env;
export const navHeader = { text: "FHIR Works UI", href: "/" };

export const navItems: SideNavigationProps.Section[] = [
  {
    type: "section",
    text: "FHIR Resources",
    items: [
      { type: "link", text: "Create", href: "/create" },
      { type: "link", text: "Read", href: "/read" },
      { type: "link", text: "Search", href: "/search" },
      { type: "link", text: "Update", href: "/update" },
      { type: "link", text: "Delete", href: "/delete" },
    ],
  },
  {
    type: "section",
    text: "Source Code",
    items: [
      {
        type: "link",
        text: "Web App Github",
        href: "https://github.com/Samuel-planchon/fhir-aws-UI-WEBAPP",
      },
      {
        type: "link",
        text: "Android App github",
        href: "https://github.com/Samuel-planchon/FHIR_SERVER_UI_ANDROID",
      },
    ],
  },
  {
    type: "section",
    text: "Other Resources",
    items: [
      {
        type: "link",
        text: "Capability Statement",
        href: `${REACT_APP_FHIR_SERVER_URL}/metadata`,
      },
    ],
  },
];

export const Navigation: React.FC<{}> = () => {
  const history = useHistory();
  function onFollowHandler(ev: any) {
    if (!ev.detail.href.startsWith("http")) {
      ev.preventDefault();
      history.push(ev.detail.href);
    }
  }

  return (
    <SideNavigation
      items={navItems}
      header={navHeader}
      activeHref={history.location.pathname}
      onFollow={onFollowHandler}
    />
  );
};
