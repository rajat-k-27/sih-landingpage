
import Image from "next/image";

export default function Home() {
      
      <>
        <svg className="absolute left-1/3 top-10 w-10 h-10 opacity-28 z-0 animate-float-cube6 drop-shadow-lg" style={{filter:'blur(1px)'}} viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="cube6g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f472b6"/>
              <stop offset="1" stopColor="#a5b4fc"/>
            </linearGradient>
          </defs>
          <rect x="14" y="14" width="36" height="36" rx="8" fill="url(#cube6g)"/>
        </svg>
        <svg className="absolute right-1/3 top-1/4 w-12 h-12 opacity-22 z-0 animate-float-cube7 drop-shadow-xl" style={{filter:'blur(2px)'}} viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="cube7g" x1="64" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a78bfa"/>
              <stop offset="1" stopColor="#f472b6"/>
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="44" height="44" rx="10" fill="url(#cube7g)"/>
        </svg>
        <svg className="absolute left-1/5 bottom-1/4 w-14 h-14 opacity-18 z-0 animate-float-cube8 drop-shadow-lg" style={{filter:'blur(1.5px)'}} viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="cube8g" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818cf8"/>
              <stop offset="1" stopColor="#f472b6"/>
            </linearGradient>
          </defs>
          <rect x="12" y="12" width="40" height="40" rx="8" fill="url(#cube8g)"/>
        </svg>
      </>
  return (
    
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-950 overflow-hidden">
      
      <div className="animated-bg-blob" style={{ top: '-10%', left: '-15%', width: 500, height: 500, background: 'radial-gradient(circle at 30% 30%, #a5b4fc 60%, #818cf8 100%)' }} />
      <div className="animated-bg-blob2" style={{ bottom: '-10%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(circle at 70% 70%, #f472b6 60%, #a78bfa 100%)' }} />
      <div className="animated-bg-blob" style={{ top: '60%', left: '60%', width: 400, height: 400, background: 'radial-gradient(circle at 60% 60%, #f472b6 60%, #818cf8 100%)' }} />
      <div className="animated-bg-blob2" style={{ top: '10%', right: '-12%', width: 350, height: 350, background: 'radial-gradient(circle at 80% 20%, #f472b6 60%, #818cf8 100%)' }} />
      <div className="animated-bg-blob" style={{ bottom: '15%', left: '-10%', width: 300, height: 300, background: 'radial-gradient(circle at 20% 80%, #a5b4fc 60%, #f472b6 100%)' }} />
      <div className="animated-bg-blob2" style={{ top: '40%', left: '80%', width: 250, height: 250, background: 'radial-gradient(circle at 60% 60%, #818cf8 60%, #a78bfa 100%)' }} />
      <div className="animated-bg-blob" style={{ bottom: '5%', right: '20%', width: 200, height: 200, background: 'radial-gradient(circle at 50% 50%, #f472b6 60%, #a5b4fc 100%)' }} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-0" />

      
      <svg className="absolute left-10 top-24 w-16 h-16 opacity-40 z-0 animate-float-cube1 drop-shadow-xl" style={{filter:'blur(1px)'}} viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="cube1g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a5b4fc"/>
            <stop offset="1" stopColor="#818cf8"/>
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="48" height="48" rx="10" fill="url(#cube1g)"/>
      </svg>
      <svg className="absolute right-20 top-40 w-20 h-20 opacity-30 z-0 animate-float-cube2 drop-shadow-2xl" style={{filter:'blur(2px)'}} viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="cube2g" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f472b6"/>
            <stop offset="1" stopColor="#a78bfa"/>
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#cube2g)"/>
      </svg>
      <svg className="absolute left-[55%] top-1/3 w-12 h-12 opacity-25 z-0 animate-float-cube3 drop-shadow-lg" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="cube3g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818cf8"/>
            <stop offset="1" stopColor="#f472b6"/>
          </linearGradient>
        </defs>
        <rect x="12" y="12" width="40" height="40" rx="8" fill="url(#cube3g)"/>
      </svg>
      <svg className="absolute right-1/4 bottom-24 w-14 h-14 opacity-30 z-0 animate-float-cube4 drop-shadow-xl" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="cube4g" x1="64" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa"/>
            <stop offset="1" stopColor="#f472b6"/>
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="44" height="44" rx="10" fill="url(#cube4g)"/>
      </svg>
      <svg className="absolute left-1/4 bottom-10 w-10 h-10 opacity-35 z-0 animate-float-cube5 drop-shadow-lg" style={{filter:'blur(1.5px)'}} viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="cube5g" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f472b6"/>
            <stop offset="1" stopColor="#818cf8"/>
          </linearGradient>
        </defs>
        <rect x="16" y="16" width="32" height="32" rx="6" fill="url(#cube5g)"/>
      </svg>
      <main className="relative z-10 flex flex-col items-center justify-center gap-10 py-20 px-4 w-full max-w-5xl">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-2xl text-center mb-4 animate-fade-in flex items-center justify-center gap-4 ">
          <Image
            src="/sihlandlogo.png" 
            alt="Ping City Logo"
            width={90}
            height={90}
            className="inline-block rounded-xl shadow-lg animate-zoom-in"
            priority
          />
          Ping City
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          
          <div className="relative group bg-gradient-to-br from-pink-400/30 via-purple-400/20 to-blue-400/20 rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-white/20 backdrop-blur-xl animate-fade-in delay-300 hover:scale-105 transition-transform duration-500">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center animate-float">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.337-8 4v2h16v-2c0-2.663-5.33-4-8-4z"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-pink-200 mb-4 mt-8 text-center">For Citizens</h3>
            <ul className="space-y-4 w-full">
              <li className="flex items-center gap-3 animate-fade-in delay-400">
                <span className="w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 bg-gradient-to-tr from-pink-400 to-purple-400 rounded-lg flex items-center justify-center shadow-md">
                  
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4"/></svg>
                </span>
                <span className="text-white/90 text-lg font-medium">Simple sign-up/login</span>
              </li>
              <li className="flex items-center gap-3 animate-fade-in delay-500">
                <span className="w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 bg-gradient-to-tr from-blue-400 to-pink-400 rounded-lg flex items-center justify-center shadow-md">
                  
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M12 2C7 2 2 7 2 12c0 5 5 10 10 10s10-5 10-10c0-5-5-10-10-10zm0 0l2 4m-2-4l-2 4"/></svg>
                </span>
                <span className="text-white/90 text-lg font-medium">Report issues with photos, geolocation, and descriptions</span>
              </li>
              <li className="flex items-center gap-3 animate-fade-in delay-600">
                <span className="w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-lg flex items-center justify-center shadow-md">
                  
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7"/><path d="M9 21V9a3 3 0 0 1 6 0v12"/></svg>
                </span>
                <span className="text-white/90 text-lg font-medium">Categorize issues (Pothole, Streetlight, Trash, etc.)</span>
              </li>
              <li className="flex items-center gap-3 animate-fade-in delay-700">
                <span className="w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 bg-gradient-to-tr from-pink-400 to-blue-400 rounded-lg flex items-center justify-center shadow-md">
                  
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                </span>
                <span className="text-white/90 text-lg font-medium">Track your reports and get real-time notifications</span>
              </li>
            </ul>
          </div>
          
          <div className="relative group bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/20 rounded-3xl shadow-2xl p-8 flex flex-col items-center border border-white/20 backdrop-blur-xl animate-fade-in delay-400 hover:scale-105 transition-transform duration-500">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-tr from-blue-400 to-pink-400 rounded-full shadow-lg flex items-center justify-center animate-float">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-200 mb-4 mt-8 text-center">For Municipalities</h3>
            <ul className="space-y-4 w-full">
              <li className="flex items-center gap-3 animate-fade-in delay-500">
                <span className="w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-lg flex items-center justify-center shadow-md">
                  
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="8" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                <span className="text-white/90 text-lg font-medium">Secure staff login</span>
              </li>
              <li className="flex items-center gap-3 animate-fade-in delay-600">
                <span className="w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 bg-gradient-to-tr from-pink-400 to-blue-400 rounded-lg flex items-center justify-center shadow-md">
                  
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="13" width="7" height="8" rx="2"/><rect x="14" y="3" width="7" height="18" rx="2"/></svg>
                </span>
                <span className="text-white/90 text-lg font-medium">Centralized dashboard of all reports</span>
              </li>
              <li className="flex items-center gap-3 animate-fade-in delay-700">
                <span className="w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-md">
                  
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A2 2 0 0 1 2 15.382V6.618a2 2 0 0 1 1.553-1.894L9 2m0 18l6-3m-6 3v-18m6 15l5.447-2.724A2 2 0 0 0 22 15.382V6.618a2 2 0 0 0-1.553-1.894L15 2m0 18v-18"/></svg>
                </span>
                <span className="text-white/90 text-lg font-medium">Interactive map of issues</span>
              </li>
              <li className="flex items-center gap-3 animate-fade-in delay-800">
                <span className="w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 bg-gradient-to-tr from-blue-400 to-pink-400 rounded-lg flex items-center justify-center shadow-md">
                  
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M6 12h12M8 18h8"/></svg>
                </span>
                <span className="text-white/90 text-lg font-medium">Filter, sort, and manage reports</span>
              </li>
              <li className="flex items-center gap-3 animate-fade-in delay-900">
                <span className="w-8 h-8 min-w-8 min-h-8 max-w-8 max-h-8 bg-gradient-to-tr from-pink-400 to-purple-400 rounded-lg flex items-center justify-center shadow-md">
                  
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
                </span>
                <span className="text-white/90 text-lg font-medium">Update status and communicate with citizens</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center gap-4 animate-fade-in delay-1000">
          <span className="text-lg text-white/80 font-medium">App Launching Soon!</span>
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg text-xl font-bold hover:scale-105 transition-transform">
            Stay Tuned
          </button>
        </div>
      </main>
      
      <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-30 z-0 animate-float" viewBox="0 0 200 200" fill="none">
        <rect x="30" y="120" width="40" height="40" rx="8" fill="#a5b4fc"/>
        <rect x="120" y="30" width="50" height="50" rx="10" fill="#f472b6"/>
        <rect x="80" y="80" width="30" height="30" rx="6" fill="#818cf8"/>
      </svg>
      <footer className="relative z-10 mt-16 text-white/60 text-center text-sm pb-6">
        &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}
