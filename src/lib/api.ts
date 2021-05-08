import axios from 'axios';

import { FetchAPIParamOptions, LandingPageProps } from '@/shared';
import {
  aboutSectionQuery,
  homeSectionQuery,
  contactSectionQuery,
  projectsSectionQuery
} from '@/lib';
import { LandingPagePropsMapper } from '@/lib/mappers';

const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

export async function fetchAPI(
  query: string,
  options: FetchAPIParamOptions = {}
) {
  const { variables, preview } = options;
  let endpoint = API_URL;

  if (process.env.NEXT_DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.NEXT_DATOCMS_ENVIRONMENT}`;
  }

  if (preview) {
    endpoint += `/preview`;
  }

  const dataToSend = JSON.stringify({ query, variables });

  const { data: apiResponse } = await axios.post(endpoint, dataToSend, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    }
  });

  if (apiResponse.errors) {
    console.error(apiResponse.errors);
    throw new Error('Failed to fetch API');
  }

  return apiResponse.data;
}

export async function getLandingPageContent(
  preview: boolean
): Promise<LandingPageProps> {
  const data = await fetchAPI(
    `
      {
        ${homeSectionQuery}
        ${aboutSectionQuery}
        ${projectsSectionQuery}
        ${contactSectionQuery}
      }
    `,
    { preview }
  );

  const mappedData = new LandingPagePropsMapper(data)
    .mapHomeSectionProps()
    .mapAboutSectionProps()
    .mapProjectsSectionProps()
    .mapContactSectionProps()
    .getProps();

  return mappedData;
}
