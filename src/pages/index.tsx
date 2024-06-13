import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import PortfolioPage from "./portfolio";

const IndexPage: React.FC<PageProps> = (props) => {
    return (
        <PortfolioPage {...props} />
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
