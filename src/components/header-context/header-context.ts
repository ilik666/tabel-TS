import React from "react";
export const {
  Provider: HeaderTitlesProvider,
  Consumer: HeaderTitlesConsumer
}  = React.createContext<string[] | undefined>(undefined)

