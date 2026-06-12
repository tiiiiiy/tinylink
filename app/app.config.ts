export default defineAppConfig({
  title: 'TinyLink',
  github: '',
  coffee: '',
  twitter: '',
  telegram: '',
  description: 'Link Shortener.',
  image: '',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9_!.~$'*()]+(?:-[a-z0-9_!.~$'*()]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
