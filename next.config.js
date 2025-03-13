/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'd.media.kavehome.com',
      'www.organizedinteriors.com',
      'rigstudio.international',
      'www.nismaayadecor.in',
      'hebbkxlanhila5yf.public.blob.vercel-storage.com'
    ],
  },
  output: 'standalone',  // Add this line
}

module.exports = nextConfig
