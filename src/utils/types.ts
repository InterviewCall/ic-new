export type MonthContent = {
  time: string;
  content: {
    heading: string;
    subHeading: string;
  }[];
  why: {
    text: string;
    topic: string[];
  };
};

export type ContentItem = {
  heading: string;
  subHeading: string;
  why: {
    text: string;
    topic: string[];
  };
};

export type MonthContentArray = {
  id: number;
  time: string;
  content: ContentItem[];
};