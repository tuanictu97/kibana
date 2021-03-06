/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export type ObservabilityApp =
  | 'infra_metrics'
  | 'infra_logs'
  | 'apm'
  | 'uptime'
  | 'observability'
  | 'stack_monitoring';

export type PromiseReturnType<Func> = Func extends (...args: any[]) => Promise<infer Value>
  ? Value
  : Func;

export { Coordinates } from '../public/typings/fetch_overview_data/';
