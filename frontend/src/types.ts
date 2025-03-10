/*
 * Common types, should be kept up to date with backend types
 */

export type DashboardConfig = {
  enablement: boolean;
  disableInfo: boolean;
  disableSupport: boolean;
  disableClusterManager: boolean;
};

export type OdhApplication = {
  metadata: {
    name: string;
    annotations?: { [key: string]: string };
  };
  spec: {
    displayName: string;
    provider: string;
    description: string;
    route?: string | null;
    routeNamespace?: string | null;
    routeSuffix?: string | null;
    serviceName?: string | null;
    endpoint?: string | null;
    link?: string | null;
    img: string;
    docsLink: string;
    getStartedLink: string;
    category?: string;
    support?: string;
    quickStart: string | null;
    comingSoon?: boolean | null;
    beta?: boolean | null;
    betaTitle?: string | null;
    betaText?: string | null;
    shownOnEnabledPage: boolean | null;
    isEnabled: boolean | null;
    kfdefApplications?: string[];
    csvName?: string;
    enable?: {
      title: string;
      actionLabel: string;
      description?: string;
      linkPreface?: string;
      link?: string;
      variables?: { [key: string]: string };
      variableDisplayText?: { [key: string]: string };
      variableHelpText?: { [key: string]: string };
      validationSecret: string;
      validationJob: string;
      validationConfigMap?: string;
    };
    featureFlag?: string;
  };
};

export enum OdhDocumentType {
  Documentation = 'documentation',
  HowTo = 'how-to',
  QuickStart = 'quickstart',
  Tutorial = 'tutorial',
}

export type OdhDocument = {
  metadata: {
    name: string;
    type: string;
    annotations?: { [key: string]: string };
  };
  spec: {
    displayName: string;
    appName?: string;
    appDisplayName?: string; // Only set on UI side in resources section
    appEnabled?: boolean; // Only set on UI side in resources section
    appCategory?: string; // Only set on UI side in resources section
    provider?: string;
    description: string;
    url: string;
    img?: string;
    icon?: string;
    durationMinutes?: number;
    featureFlag?: string;
  };
};

export type OdhGettingStarted = {
  appName: string;
  markdown: string;
};

export enum BUILD_PHASE {
  none = 'Not started',
  new = 'New',
  running = 'Running',
  pending = 'Pending',
  complete = 'Complete',
  failed = 'Failed',
  cancelled = 'Cancelled',
}

export type BuildStatus = {
  name: string;
  status: BUILD_PHASE;
  timestamp: string;
};

export type K8sResourceCommon = {
  apiVersion?: string;
  kind?: string;
  metadata: {
    name: string;
    namespace?: string;
    uid: string;
    labels?: { [key: string]: string };
    annotations?: { [key: string]: string };
  };
};

// Minimal type for ConsoleLinks
export type ConsoleLinkKind = {
  spec: {
    text: string;
    location: string;
    href: string;
    applicationMenu: {
      section: string;
      imageURL: string;
    };
  };
} & K8sResourceCommon;

//
// Used for Telemetry
//
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    analytics?: any;
    clusterID?: string;
  }
}

export type ODHSegmentKey = {
  segmentKey: string;
};

export type TrackingEventProperties = {
  name?: string;
  anonymousID?: string;
  type?: string;
  term?: string;
};
