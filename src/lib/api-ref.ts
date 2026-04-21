export type Endpoint = {
  path: string;
  method: string;
  summary: string;
  description: string;
  parameters: any[];
  responses: Record<string, any>;
};
