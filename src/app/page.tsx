// pages/index.js
'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Artwork data
  const artworks = [
    {
      id: 1,
      title: 'La Route',
      artist: 'Jessica Lisse',
      year: '2024',
      gallery: 'Buronzu Gallery',
      price: '€850',
      imageUrl: '/images/artwork-1.jpg',
    },
    {
      id: 2,
      title: 'Hot and Cold',
      artist: 'Flora Temnouche',
      year: '2025',
      gallery: 'Megan Mulrooney',
      price: 'US$4,500',
      imageUrl: '/images/artwork-2.jpg',
    },
    {
      id: 3,
      title: 'Close To Identify 5',
      artist: 'Ritika Sharma',
      year: '2024',
      gallery: 'VHC | Vida Heydari Contemporary',
      price: 'US$600',
      imageUrl: '/images/artwork-3.jpg',
    },
    {
      id: 4,
      title: 'Pivoine V',
      artist: 'Maria Szakats',
      year: '2025',
      gallery: 'Megan Mulrooney',
      price: 'US$3,500',
      imageUrl: '/images/artwork-4.jpg',
    },
    {
      id: 5,
      title: 'Vice',
      artist: 'C. Lucy R. Whitehead',
      year: '2025',
      gallery: 'Megan Mulrooney',
      price: 'US$11,000',
      imageUrl: '/images/artwork-5.jpg',
    },
    {
      id: 6,
      title: 'Garten',
      artist: 'Malwin',
      year: '2024',
      gallery: 'Jarmuschek + Partner',
      price: '€900',
      imageUrl: '/images/artwork-6.jpg',
    },
  ];

  // Carousel data
  const slides = [
    {
      id: 1,
      title: 'Welcome to Gallery OUROUSS',
      description: 'How to make the most of the countless fairs and gallery openings this week.',
      imageUrl: '/images/carousel-1.jpg',
      imageAlt: 'From left: detail of Rowan Renee, detail of Will Cotton, detail of Antonia Showering.',
      ctaText: 'Learn More',
      ctaUrl: '/editorial/new-york-art-week'
    }
  ];

  // State for search and carousel
  const [query, setQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Handle search form submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Searching for:', query);
  };
  
  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  
  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Artsy | Buy, Sell, and Discover Fine Art</title>
        <meta name="description" content="Discover and buy art from leading galleries around the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              {/* <Link href="/"> */}
                <a className="flex-shrink-0">
                  <div className="border border-black w-10 h-10 flex items-center justify-center">
                    <span className="font-bold text-gray-900">A</span>
                  </div>
                </a>
              {/* </Link> */}
              <div className="hidden sm:block sm:ml-6">
                {/* Search Bar */}
                <form onSubmit={handleSearch} className="w-full max-w-lg">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full border border-gray-300 text-gray-900 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                      placeholder="Search by artist, gallery, style, theme, tag, etc."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/buy" className="text-gray-900 hover:text-gray-600">Buy</Link>
              <Link href="/galleries" className="text-gray-900 hover:text-gray-600">Artsy for Galleries</Link>
              <Link href="/price-database" className="text-gray-900 hover:text-gray-600">Price Database</Link>
              <Link href="/editorial" className="text-gray-900 hover:text-gray-600">Editorial</Link>
              <Link href="/login" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Log In
              </Link>
              <Link href="/signup" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800">
                  Sign Up
              </Link>
            </div>
            <div className="flex sm:hidden">
              <button type="button" className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-12">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/whats-new"
                     className="border-transparent text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      What's New
                  </Link>
                  <Link href="/artists"
                      className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Artists
                  </Link>
                  <Link href="/artworks" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Artworks
                  </Link>
                  <Link href="/auctions"
                     className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Auctions
                  </Link>
                  <Link href="/viewing-rooms"
                     className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Viewing Rooms
                  </Link>
                  <Link href="/galleries"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Galleries
                  </Link>
                  <Link href="/fairs-events"
                     className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Fairs & Events
                  </Link>
                  <Link href="/shows"
                     className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Shows                
                  </Link>
                  <Link href="/museums"
                     className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Museums
                  </Link>
                  <Link href="/collecting-101"
                     className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Collecting 101
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Featured Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative">
              <div className="h-96 md:h-[500px] grid grid-cols-1 md:grid-cols-2">
                <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${currentSlideData.imageUrl})` }}>
                  <div className="absolute bottom-4 left-4 text-xs text-white bg-black bg-opacity-50 p-1 rounded">
                    {currentSlideData.imageAlt}
                  </div>
                </div>
                <div className="flex flex-col justify-center px-8 py-12 md:p-16">
                  <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">{currentSlideData.title}</h2>
                  <p className="text-xl md:text-2xl text-gray-900 mb-8">{currentSlideData.description}</p>
                  <div>
                    <a href={currentSlideData.ctaUrl} className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      {currentSlideData.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button 
              onClick={prevSlide} 
              className="p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 focus:outline-none"
              aria-label="Previous slide"
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className="p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 focus:outline-none"
              aria-label="Next slide"
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Artwork Grid */}
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>

          <div className="my-12">
            <hr className="border-gray-200" />
          </div>

          {/* Editorial Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Artsy Editorial</h2>
              <Link href="/editorial"
                 className="text-gray-900 hover:underline">Explore Editorial
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Editorial content placeholders */}
              <div className="bg-gray-100 p-4 rounded-md h-64 flex items-center justify-center">
                <p className="text-gray-500">Editorial content 1</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md h-64 flex items-center justify-center">
                <p className="text-gray-500">Editorial content 2</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md h-64 flex items-center justify-center">
                <p className="text-gray-500">Editorial content 3</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Open Source</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Collecting Guide</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Education</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Partners</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Galleries</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Fairs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Auctions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Museums</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">© 2025 Motoko. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Artwork Card Component (defined within the same file)
interface Artwork {
  id: number;
  title: string;
  artist: string;
  year: string;
  gallery: string;
  price: string;
  imageUrl: string;
}

function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };
  
  return (
    <div className="group">
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Link href={`/artwork/${artwork.id}`}>
            <div className="w-full h-full relative">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${artwork.imageUrl})` }}
              ></div>
            </div>
        </Link>
        <button 
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-1 text-gray-500 hover:text-black focus:outline-none"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>
      </div>
      <div className="mt-2">
        <Link href={`/artist/${artwork.artist.toLowerCase().replace(' ', '-')}`}
           className="block text-base font-medium text-gray-900 hover:underline">{artwork.artist}
        </Link>
        <Link href={`/artwork/${artwork.id}`}
           className="block text-sm text-gray-500 italic hover:underline">
            {artwork.title}, {artwork.year}
        </Link>
        <Link href={`/gallery/${artwork.gallery.toLowerCase().replace(' ', '-')}`}
           className="block text-sm text-gray-500 hover:underline">{artwork.gallery}
        </Link>
        <p className="text-sm font-medium text-gray-900 mt-1">{artwork.price}</p>
      </div>
    </div>
  );
}