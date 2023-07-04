import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginScreen, Logout, ResetPassword } from "../pages/auth/AuthScreen";
import { Layout } from "../pages/layout/layout";
import { DashboardScreen } from "../pages/dashboard/DashboardScreen";
import { FileScreen } from "../pages/file/FileScreen";
import { SchemeScreen } from "../pages/scheme/SchemeScreen";
import { SchemeDetailsScreen } from "../pages/scheme/SchemeDetailsScreen";
import { CompanyScreen } from "../pages/company/CompanyScreen";
import { CompanyDetailsScreen } from "../pages/company/CompanyDetailsScreen";
import { SubscriptionScreen } from "../pages/subscription/SubscriptionScreen";
import { SubscriptionDetailsScreen } from "../pages/subscription/SubscriptionDetailsScreen";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="login">
        <Route path="" element={<LoginScreen />} />
        <Route path="forgotpassword" element={<ResetPassword />} />
      </Route>
      <Route path="" element={<Layout />}>
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="file" element={<FileScreen />} />
        <Route path="scheme">
          <Route path="" element={<SchemeScreen />} />
          <Route path="details" element={<SchemeDetailsScreen />} />
        </Route>
        <Route path="company">
          <Route path="" element={<CompanyScreen />} />
          <Route path="details" element={<CompanyDetailsScreen />} />
        </Route>
        <Route path="subscription">
          <Route path="" element={<SubscriptionScreen />} />
          <Route path="details" element={<SubscriptionDetailsScreen />} />
        </Route>
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export { AppRoute };
