import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

const Container = styled.main``;

const IndexPage: React.FC<PageProps> = () => {
  return <Container></Container>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
