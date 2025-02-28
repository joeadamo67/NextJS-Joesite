import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Joe Adamo</title>
        <meta name="description" content="The page you're looking for doesn't exist" />
      </Head>
      
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="text-8xl font-bold text-[#00B8A9]">404</div>
            <div className="h-16 border-l-2 border-gray-300 mx-8"></div>
            <div className="text-xl text-gray-700">This page could not be found.</div>
          </div>
          
          <p className="mb-8 text-gray-600 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <Link 
            href="/" 
            className="btn btn-primary inline-flex items-center"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
}