import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>This page has not been built!</h2>
      <p>
        This is just a demo web app built as a solution to an assessment for
        Lendsqr. Not all pages are functional.
      </p>
      <p>You can start here at the login page.</p>
      <Link href='/'>Return to Login</Link>
    </div>
  );
}
