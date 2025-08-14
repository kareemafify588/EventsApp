export interface EventData {
  _embedded: {
    events: EventItem[];
  };
}

export interface EventItem {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  sales: Sales;
  dates: Dates;
  classifications: Classification[];
  promoter: Promoter;
  promoters: Promoter[];
  info: string;
  pleaseNote: string;
  seatmap: Seatmap;
  accessibility: Accessibility;
  ticketLimit: TicketLimit;
  ageRestrictions: AgeRestrictions;
  ticketing: Ticketing;
  _links: EventLinks;
  _embedded: EventEmbedded;
}

export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
  attribution?: string;
}

export interface Sales {
  public: PublicSale;
  presales: Presale[];
}

export interface PublicSale {
  startDateTime: string;
  startTBD: boolean;
  startTBA: boolean;
  endDateTime: string;
}

export interface Presale {
  startDateTime: string;
  endDateTime: string;
  name: string;
}

export interface Dates {
  start: StartDate;
  timezone: string;
  status: Status;
  spanMultipleDays: boolean;
}

export interface StartDate {
  localDate: string;
  localTime: string;
  dateTime: string;
  dateTBD: boolean;
  dateTBA: boolean;
  timeTBA: boolean;
  noSpecificTime: boolean;
}

export interface Status {
  code: string;
}

export interface Classification {
  primary: boolean;
  segment: {
    id: string;
    name: string;
  };
  genre: {
    id: string;
    name: string;
  };
  subGenre: {
    id: string;
    name: string;
  };
  type: {
    id: string;
    name: string;
  };
  subType: {
    id: string;
    name: string;
  };
  family: boolean;
}

export interface Promoter {
  id: string;
  name: string;
  description: string;
}

export interface Seatmap {
  staticUrl: string;
  id: string;
}

export interface Accessibility {
  info: string;
  ticketLimit: number;
  id: string;
}

export interface TicketLimit {
  info: string;
  id: string;
}

export interface AgeRestrictions {
  legalAgeEnforced: boolean;
  id: string;
}

export interface Ticketing {
  safeTix: {
    enabled: boolean;
  };
  allInclusivePricing: {
    enabled: boolean;
  };
  id: string;
}

export interface EventLinks {
  self: {
    href: string;
  };
  attractions: {
    href: string;
  }[];
  venues: {
    href: string;
  }[];
}

export interface EventEmbedded {
  venues: Venue[];
  attractions: Attraction[];
}

export interface Venue {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  postalCode: string;
  timezone: string;
  city: {
    name: string;
  };
  state: {
    name: string;
    stateCode: string;
  };
  country: {
    name: string;
    countryCode: string;
  };
  address: {
    line1: string;
  };
  location: {
    longitude: string;
    latitude: string;
  };
  markets: {
    name: string;
    id: string;
  }[];
  dmas: {
    id: number;
  }[];
  boxOfficeInfo: {
    openHoursDetail: string;
  };
  parkingDetail: string;
  upcomingEvents: {
    archtics: number;
    tmr: number;
    ticketmaster: number;
    _total: number;
    _filtered: number;
  };
  ada: {
    adaPhones: string;
    adaCustomCopy: string;
    adaHours: string;
  };
  _links: {
    self: {
      href: string;
    };
  };
}

export interface Attraction {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  externalLinks: ExternalLinks;
  images: Image[];
  classifications: Classification[];
  upcomingEvents: {
    tmr: number;
    ticketmaster: number;
    _total: number;
    _filtered: number;
  };
  _links: {
    self: {
      href: string;
    };
  };
}

export interface ExternalLinks {
  twitter: {
    url: string;
  }[];
  facebook: {
    url: string;
  }[];
  wiki: {
    url: string;
  }[];
  instagram: {
    url: string;
  }[];
  homepage: {
    url: string;
  }[];
}

export interface GetEventsParams {
  search?: string;
  size?: number;
}
