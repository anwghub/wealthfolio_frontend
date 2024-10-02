/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)/ForgotPasswordScreen` | `/(auth)/LoginScreen` | `/(onboarding)/onboarding_screen` | `/ForgotPasswordScreen` | `/LoginScreen` | `/_sitemap` | `/onboarding_screen`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
