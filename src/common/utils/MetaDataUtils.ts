/*
Samuel PLANCHON William BERNHARD
SPDX-License-Identifier: Apache-2.0
*/
import ResourceMetadata from "../../stores/ResourceMetadata";

export function getResourceTypes(metadata: ResourceMetadata[]): string[] {
  return metadata
    .map((resource: any) => {
      return resource.type;
    })
    .sort();
}
