const API_URL = process.env.API_PATH || '';

export const fetchAPI = async (query: string) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query}),
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data;
}

const fromEntries = (arr: any) => Object.assign({}, ...Array.from(arr, ([k, v]) => ({[k]: v}) ));

export async function getPageData(pageurl="") {
    const data =  await fetchAPI(`
query {
  page(UrlSegment:"${pageurl}") {
    id: ID,
    link: FrontendLink,
    title: Title,
    siteTitle: SiteTitle,
    menu: Menu {
      id: ID,
      menuTitle: MenuTitle,
      link: FrontendLink,
    },
    elements: Elements {
      id: ID,
      className: ClassName,
      title: Title,
      contentFields: ContentFieldsJson,
    }
  }
}
  `);

    if(data.page)
        data.page.elements = data.page.elements.map((element: any) => {
            const contentData = JSON.parse(element.contentFields);
            const contentFields = fromEntries(
                Object.entries(contentData).map(([k, v]) => [k.toLowerCase(), v])
            );
            return Object.assign({}, element, contentFields);
        });

    return data;
}
