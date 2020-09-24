import {GetServerSideProps, NextPage} from "next";
import Page from "../src/components/organisms/Page/Page";
// import querystring from "querystring";
import React from "react";
import {getPageData} from "../src/utilities/api/api";

interface IIndex {
    data: any,
    path: string,
    host: string,
    rendering: string,
    query: {},
}

const IndexPage: NextPage<IIndex> = ({
                                         data,
                                         path,
                                         host,
                                         rendering,
                                         query,
                                     }) => {
    return (
        <Page {...data.page}/>
    );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
}) => {
    const {page, ...rest} = query;
    const path = Array.isArray(page) ? page.join('/') : '';

    const data = await getPageData(path);

    return {
        props: {
            data,
            path,
            query: rest,
        }
    }
};

export default IndexPage;
