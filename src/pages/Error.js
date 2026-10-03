import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error happened</h1>
        <p>Page not found.</p>
      </main>
    </>
  );
}

export default ErrorPage;
