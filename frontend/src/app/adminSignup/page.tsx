"use client";

import React, { useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import SignUppage1 from "@/components/SignUppage1";

const page = () => {
  // const domain = process.env.AUTH0_DOMAIN;
  // const clientId = process.env.AUTH0_CLIENT_ID;
  return (
    <Auth0Provider
      domain="dev-7gtwvyczke6ra0n2.us.auth0.com"
      clientId="OYbhi5QRT2JMxtzT6uHZjmLqIfLLmZ16"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <SignUppage1 />
    </Auth0Provider>
  );
};

export default page;
