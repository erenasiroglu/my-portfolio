import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://erenasiroglu.tech',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 8,
    }
  ]
} 