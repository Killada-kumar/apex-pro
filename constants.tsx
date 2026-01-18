
import { Project, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'General Construction',
    icon: 'fa-trowel-bricks',
    description: 'Full-service building solutions from ground-up construction to final handover.'
  },
  {
    id: 2,
    title: 'Civil Engineering',
    icon: 'fa-bridge',
    description: 'Expertise in infrastructure, roads, and large-scale structural engineering.'
  },
  {
    id: 3,
    title: 'Project Management',
    icon: 'fa-clipboard-check',
    description: 'Comprehensive oversight ensuring timelines, budgets, and quality standards are met.'
  },
  {
    id: 4,
    title: 'Architectural Design',
    icon: 'fa-compass-drafting',
    description: 'Innovative and functional blueprints tailored to your specific vision and needs.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'The Skyview Tower',
    category: 'Commercial',
    image: 'https://picsum.photos/id/122/800/600',
    description: 'A 45-story sustainable office complex in the heart of the business district.'
  },
  {
    id: 2,
    title: 'Golden Meadows',
    category: 'Residential',
    image: 'https://picsum.photos/id/123/800/600',
    description: 'Luxury housing development featuring 50 smart-enabled smart villas.'
  },
  {
    id: 3,
    title: 'Bridge of Unity',
    category: 'Infrastructure',
    image: 'https://picsum.photos/id/124/800/600',
    description: 'Strategic link spans over 500 meters, connecting two major industrial hubs.'
  }
];
