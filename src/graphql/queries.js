/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMetric = /* GraphQL */ `
  query GetMetric($id: ID!) {
    getMetric(id: $id) {
      id
      metric_type
      text
    }
  }
`;
export const listMetrics = /* GraphQL */ `
  query ListMetrics {
    listMetrics {
      id
      metric_type
      text
    }
  }
`;
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
      id
      name
    }
  }
`;
export const listCountry = /* GraphQL */ `
  query ListCountry {
    listCountry {
      id
      name
    }
  }
`;
