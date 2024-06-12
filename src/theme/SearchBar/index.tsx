import React from "react";
import SearchBar from "@theme-original/SearchBar";
import type SearchBarType from "@theme/SearchBar";
import type { WrapperProps } from "@docusaurus/types";
import AskCookbook from "@cookbookdev/docsbot/react";
type Props = WrapperProps<typeof SearchBarType>;

export default function SearchBarWrapper(props: Props): JSX.Element {
  return (
    <>
      <SearchBar {...props} />
      <AskCookbook apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWNmY2RhZjNhYTYzMmQxMGE5ODVlYTMiLCJpYXQiOjE3MDgxMTc0MjMsImV4cCI6MjAyMzY5MzQyM30.Pn9aad7ILdeyeJPO0bmSaSX1g4p5XiXcT1Y1C3k6X38" />
    </>
  );
}
