// generateAvatarUrl(contactInfo.first_name, contactInfo.last_name)

export default function generateAvatarUrl(firstName, lastName, size = 150) {
  const baseUrl = 'https://ui-avatars.com/api/'
  const name = encodeURIComponent(`${firstName} ${lastName}`)
  return `${baseUrl}?name=${name}&size=${size}`
}
