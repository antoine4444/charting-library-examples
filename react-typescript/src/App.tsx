/* tslint:disable */
import * as React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import { IJsonModel, Layout, Model, TabNode } from "flexlayout-react";
import OtherDiv from "./components/OtherDiv";
import Iframe from "./components/Iframe";

export const json = {
  global: {
    tabEnableClose: true,
    tabEnableFloat: true,
    tabEnableRename: true,
    tabSetEnableMaximize: true,
  },
  layout: {
    type: "row",
    children: [
      {
        type: "tabset",
        weight: 50,
        children: [
          {
            type: "tab",
            component: <Wrapper />,
            name: "TV",
            id: "TV",
          },
        ],
      },
      {
        type: "tabset",
        weight: 25,
        children: [
          {
            type: "tab",
            component: <OtherDiv />,
            name: "Other div with with TV id",
            id: "Otherdiv",
          },
        ],
      },
      {
        type: "tabset",
        weight: 25,
        children: [
          {
            type: "tab",
            component: <Iframe />,
            name: "Another div",
            id: "Another div",
          },
          {
            type: "tab",
            component: "div",
            name: "Another div2",
            id: "Another div2",
          },
        ],
      },
    ],
  },
} as IJsonModel;

const factory = (node: TabNode) => node.getComponent();
class App extends React.Component {
  render() {
    return (
      <div className={"App"}>
        <Layout
          model={Model.fromJson(json)}
          factory={factory}
          popoutURL="floating-window.html"
          icons={{
            close: "(close)",
            maximize: "(maximize)",
            restore: "(restore)",
            popout: "(popout)",
            more: "(more)",
          }}
        />
      </div>
    );
  }
}

export default App;
