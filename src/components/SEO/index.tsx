import { Helmet } from 'react-helmet'

interface TypeSEO {
  title: string,
  description: string,
  keywords: string,
}

export default function SEO({ title, description, keywords }: TypeSEO) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}