export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags?: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface BeforeAfterImage {
  before: string;
  after: string;
  label: string;
}