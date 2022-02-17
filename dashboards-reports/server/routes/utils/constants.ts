/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CountersType } from './types';

export enum FORMAT {
  pdf = 'pdf',
  png = 'png',
  csv = 'csv',
}

export enum REPORT_STATE {
  created = 'Created',
  error = 'Error',
  pending = 'Pending',
  shared = 'Shared',
}

export enum REPORT_DEFINITION_STATUS {
  active = 'Active',
  disabled = 'Disabled',
}

export enum DELIVERY_CHANNEL {
  email = 'Email',
  slack = 'Slack',
  chime = 'Chime',
  opensearchDashboards = 'OpenSearch Dashboards user',
}

export enum SCHEDULE_TYPE {
  recurring = 'Recurring',
  cron = 'Cron based',
}

export enum REPORT_TYPE {
  savedSearch = 'Saved search',
  dashboard = 'Dashboard',
  visualization = 'Visualization',
  notebook = 'Notebook',
}

export enum DATA_REPORT_CONFIG {
  excelDateFormat = 'MM/DD/YYYY h:mm:ss.SSS a',
}

export enum TRIGGER_TYPE {
  schedule = 'Schedule',
  onDemand = 'On demand',
}

export enum DELIVERY_TYPE {
  opensearchDashboardsUser = 'OpenSearch Dashboards user',
  channel = 'Channel',
}

export enum SELECTOR {
  dashboard = '#dashboardViewport',
  visualization = '.visEditor__content',
  notebook = '.euiPageBody',
}

// https://www.elastic.co/guide/en/elasticsearch/reference/6.8/search-request-from-size.html
export const DEFAULT_MAX_SIZE = 10000;

export const DEFAULT_REPORT_HEADER = '<h3>Taipan - Reports</h3>';

export const SECURITY_CONSTANTS = {
  TENANT_LOCAL_STORAGE_KEY: 'opendistro::security::tenant::show_popup',
};

export const EXTRA_HEADERS = [
  'cookie',
  'x-proxy-user',
  'x-proxy-roles',
  'x-forwarded-for',
];

export const CHROMIUM_PATH = `${__dirname}/../../../.chromium/headless_shell`;

/**
 * Metric constants
 */
export const WINDOW = 3600;
export const INTERVAL = 60;
export const CAPACITY = (WINDOW / INTERVAL) * 2;

export const GLOBAL_BASIC_COUNTER: CountersType = {
  report: {
    create: {
      total: 0,
    },
    create_from_definition: {
      total: 0,
    },
    download: {
      total: 0,
    },
    list: {
      total: 0,
    },
    info: {
      total: 0,
    },
  },
  report_definition: {
    create: {
      total: 0,
    },
    list: {
      total: 0,
    },
    info: {
      total: 0,
    },
    update: {
      total: 0,
    },
    delete: {
      total: 0,
    },
  },
  report_source: {
    list: {
      total: 0,
    },
  },
  dashboard: {
    pdf: {
      download: {
        total: 0,
      },
    },
    png: {
      download: {
        total: 0,
      },
    },
  },
  visualization: {
    pdf: {
      download: {
        total: 0,
      },
    },
    png: {
      download: {
        total: 0,
      },
    },
  },
  notebook: {
    pdf: {
      download: {
        count: 0,
      },
    },
    png: {
      download: {
        count: 0,
      },
    },
  },
  saved_search: {
    csv: {
      download: {
        total: 0,
      },
    },
  },
};

export const DEFAULT_ROLLING_COUNTER: CountersType = {
  report: {
    create: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
    create_from_definition: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
    download: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
    list: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
    info: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
  },
  report_definition: {
    create: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
    list: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
    info: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
    update: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
    delete: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
  },
  report_source: {
    list: {
      count: 0,
      system_error: 0,
      user_error: 0,
    },
  },
  dashboard: {
    pdf: {
      download: {
        count: 0,
      },
    },
    png: {
      download: {
        count: 0,
      },
    },
  },
  visualization: {
    pdf: {
      download: {
        count: 0,
      },
    },
    png: {
      download: {
        count: 0,
      },
    },
  },
  notebook: {
    pdf: {
      download: {
        count: 0,
      },
    },
    png: {
      download: {
        count: 0,
      },
    },
  },
  saved_search: {
    csv: {
      download: {
        count: 0,
      },
    },
  },
};
