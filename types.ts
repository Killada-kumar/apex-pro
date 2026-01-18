
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export enum EstimateType {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  RENOVATION = 'Renovation'
}
