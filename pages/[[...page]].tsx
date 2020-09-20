import {GetServerSideProps, NextPage} from "next";
import PathContext from "../src/utilities/PathContext/PathContext";
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
    const pos = path.search('\\?');
    let pathWithoutQueryString = path;
    if (pos !== -1) pathWithoutQueryString = path.substring(0, pos);

    let title = '';
    if (data.meta) {
        ({title} = data.meta); //Todo
    }

    console.log(data.page);

    return (
            <PathContext.Provider value={{
                host,
                path: pathWithoutQueryString,
                title,
                rendering,
                // query,
                url: `${host}${path}`,
            }}
            >
                <Page {...data.page}/>
            </PathContext.Provider>
    );
};

export const getServerSideProps: GetServerSideProps = async ({
                                                                 query,
                                                                 req,
                                                                 res,
                                                             }) => {
    const {page, ...rest} = query;

    const urlSegment = Array.isArray(page) ? page.join('/') : '';

    // const queryString = querystring.stringify(rest);

    let frontendHost = '';
    let rendering = '';

    if (typeof req === 'undefined') {
        // Client
        rendering = 'client';
        frontendHost = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    } else if (req.connection) {
        // Server
        rendering = 'server';
        frontendHost = `https://${req.headers.host}`;
    } else {
        // Export
        rendering = 'export';
        frontendHost = '';
    }

    const json = await getPageData(urlSegment);

    console.log(json);

    return {
        props: {
            data: json,
            host: frontendHost,
            path: urlSegment,
            rendering,
            query: rest,
        }
    }
};

export default IndexPage;
