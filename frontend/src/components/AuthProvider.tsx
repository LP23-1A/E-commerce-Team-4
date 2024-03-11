"use client";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const AuthProvider = ({ children }: any) => {
  return (
    <Auth0Provider
      domain="dev-7gtwvyczke6ra0n2.us.auth0.com"
      clientId="OYbhi5QRT2JMxtzT6uHZjmLqIfLLmZ16"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
