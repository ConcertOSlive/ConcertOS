const EMAIL = "founders@concertoslive.com";

const SUBJECT = "Request Access to ConcertOS";

const BODY = `Hi ConcertOS Team,

I'd love to request access.

Name:
Company:
Role:

Thanks!
`;

export function getRequestAccessMailto() {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    SUBJECT
  )}&body=${encodeURIComponent(BODY)}`;
}