// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type { BaseClientOptions } from "@xata.io/client";
import { apiKey } from "better-auth/plugins";
import { dot } from "node:test/reporters";

export type DatabaseSchema = {};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://lakshya-singh-s-workspace-q1gf6v.eu-central-1.xata.sh/db/snappy",
  apiKey: process.env.XATA_API_KEY,
  branch: "main",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options });
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
