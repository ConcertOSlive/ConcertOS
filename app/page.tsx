import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to /landing
  redirect('/landing');

  // This return is optional; it won't render because redirect exits
  return null;
}