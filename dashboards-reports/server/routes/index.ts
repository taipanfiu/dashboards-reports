/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import registerReportRoute from './report';
import registerReportDefinitionRoute from './reportDefinition';
import registerReportSourceRoute from './reportSource';
import registerMetricRoute from './metric';
import registerNotificationRoute from './notifications';
import {IRouter, IUiSettingsClient} from '../../../../src/core/server';
import { ReportingConfig } from 'server/config/config';

export default function (router: IRouter, config: ReportingConfig, getUiSettingsClient: () => IUiSettingsClient | undefined) {
  registerReportRoute(router, config, getUiSettingsClient);
  registerReportDefinitionRoute(router, config);
  registerReportSourceRoute(router);
  registerMetricRoute(router);
  registerNotificationRoute(router);
}
