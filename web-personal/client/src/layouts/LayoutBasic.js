import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu ...</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Daniel Angel</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
