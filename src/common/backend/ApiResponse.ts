/*
Samuel PLANCHON William BERNHARD
SPDX-License-Identifier: Apache-2.0
*/
export default interface ApiResponse {
  statusCode: number | undefined;
  body: any;
  headers: any;
}

export const defaultApiResponse = {
  statusCode: undefined,
  body: undefined,
  headers: undefined,
};
