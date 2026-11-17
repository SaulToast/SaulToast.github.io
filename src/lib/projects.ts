import { getCollection } from 'astro:content';

export async function getVisibleProjects() {
  const showPreview = import.meta.env.DEV || import.meta.env.PORTFOLIO_PREVIEW === 'true';
  return (await getCollection('projects', ({ data }) =>
    data.published || (showPreview && data.preview)
  )).sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export async function getFeaturedProjects() {
  return (await getVisibleProjects()).filter((project) => project.data.featured);
}

export const projectUrl = (id: string) => `${import.meta.env.BASE_URL}projects/${id}/`;
