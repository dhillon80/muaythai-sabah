/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// --- 🌐 SEO & FACEBOOK METADATA ---
export const metadata: Metadata = {
  title: 'Muaythai Sabah | AGM 2026 & Strategic Future',
  description: 'Sabah Muaythai Association (PMNS) AGM 2026 reinforces grassroots development, upcoming tournaments, and a historic Ladies Fight event.',
  openGraph: {
    title: 'Forging the Future: Sabah Muaythai AGM 2026',
    description: 'Strategic roadmaps, upcoming expos, and a historic push for the Malaysia Book of Records.',
    url: 'https://muaythaisbh.my/newsletter/agm-2026',
    siteName: 'Muaythai Sabah',
    images: [
      {
        url: 'https://muaythaisbh.my/agm1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sabah Muaythai Association AGM 2026 Committee',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

export default function AgmStory2026() {
  return (
    <main className="min-h-screen bg-[#050506] text-white selection:bg-yellow-500 overflow-x-hidden">
      
      {/* 🏆 HERO SECTION */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <Image 
          src="/agm1.jpeg" 
          alt="Muaythai Sabah Family AGM 2026 Background" 
          fill 
          priority
          className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 object-[center_20%]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/40 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20 w-full">
          <div className="max-w-3xl">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-4 sm:mb-6 inline-block italic shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              Annual General Meeting 2026
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-4">
              Forging A New Era of <br className="hidden sm:block" />
              <span className="text-yellow-500">Combat Excellence</span>
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-xs border-l-2 border-yellow-500 pl-3 md:pl-4">
              14 March 2026 • Spice Island, Marina Sutera Harbour Resort & Spa
            </p>
          </div>
        </div>
      </section>

      {/* 📰 MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        
        {/* 📸 FEATURED COMMITTEE PHOTO */}
        <div className="relative aspect-[4/3] md:aspect-video w-full rounded-3xl md:rounded-[3.5rem] overflow-hidden border border-white/10 mb-8 md:mb-12 group shadow-2xl bg-zinc-900/50">
          <Image 
            src="/agm1.jpeg" 
            alt="Sabah Muaythai Association Committee 2026" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90"></div>
          <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12">
            <p className="text-yellow-500 font-black uppercase italic tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-2 md:mb-3">The Leadership Core</p>
            <p className="text-white font-black uppercase italic tracking-tighter text-2xl sm:text-3xl md:text-4xl leading-none">
              Uniting Districts for a Singular Vision
            </p>
          </div>
        </div>

        {/* 📋 CAPTION FOR MAIN PHOTO */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24 bg-zinc-900/40 p-4 md:p-6 rounded-2xl border border-white/5 text-[9px] md:text-xs text-gray-400 uppercase tracking-wider md:tracking-widest leading-relaxed">
          <p className="mb-2"><strong className="text-yellow-500">Seated (L-R):</strong> Cik Sofia Binti Dahlan (Treasurer PMNS), Cik Norzilahwati Ab Razak (Secretary PMNS), Ir. Hj. Nazri Ab Razak (President PMNS / President KK District), Ahmad Ridwan Ghazali (Deputy President PMNS / President Kudat), Readwan Matin (AJK PMNS), Muhammadin Januddin (AJK PMNS).</p>
          <p><strong className="text-yellow-500">Standing (L-R):</strong> Kudat Representative, Ajman Ajmain (President Sandakan), En. Raziman (AJK KK), Nor Asyikin (Ranau), Addyanna Adangku (AJK PMNS / President KM), Cyrille Dhillon Tahing (State Head Coach), Calvin Shung (President Penampang), Mohd Asyir (Coach KM).</p>
        </div>

        {/* 🖋️ EXPANDED AGM STORY */}
        <div className="max-w-4xl mx-auto font-sans">
          <div className="mb-16 md:mb-24">
            <p className="text-xl md:text-2xl text-gray-200 leading-tight italic font-black uppercase mb-8 md:mb-12 border-b border-white/10 pb-8 md:pb-12">
              <span className="text-yellow-500 not-italic tracking-widest block text-[10px] md:text-xs mb-3 md:mb-4">STRATEGIC ALIGNMENT</span>
              Held on 14 March 2026 at the exclusive Spice Island, Marina Sutera Harbour Resort & Spa, the Annual General Meeting of the Sabah Muaythai Association (PMNS) concluded with resounding success, marking a pivotal moment in strengthening the trajectory of Muaythai development across the state.
            </p>
            
            <div className="space-y-6 md:space-y-8 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                Chaired by the President of the Sabah Muaythai Association, <strong>Ir. Hj. Nazri Ab Razak</strong>, the assembly reinforced the association's unwavering commitment to empowering administrative structures, cultivating grassroots athletes, elevating technical programs, and organizing high-impact tournaments. 
              </p>

              <p>
                The comprehensive session, which commenced at 3:00 PM, demonstrated the deep dedication of the committee. Proceedings paused respectfully for a communal <em>buka puasa</em> (breaking of fast) session within the resort, fostering deep camaraderie and unity among the delegates before the meeting reconvened and officially adjourned at 9:30 PM.
              </p>

              <p>
                The meeting saw full collaborative attendance from district Muaythai association presidents and secretaries, including delegates from <strong>Penampang, Kota Kinabalu, Kota Marudu, Sandakan, Ranau, and Kudat</strong>. Together, the leadership discussed a multitude of strategic proposals aimed at fortifying the martial art's growth within every corner of Sabah.
              </p>

              <h3 className="text-white text-2xl md:text-3xl font-black uppercase italic tracking-tighter mt-10 md:mt-12 mb-4 md:mb-6">Expanding the Competitive Horizon</h3>
              
              <p>
                A primary consensus reached during the AGM was the crucial need to expand the frequency and scale of tournaments to serve as progressive developmental platforms for athletes. To solidify the career pathways of local fighters, PMNS is set to launch a <strong>Monthly Professional Debut Platform</strong>. This systematic approach provides a dedicated, highly competitive arena for local athletes to officially launch their professional careers.
              </p>

              <p>
                Furthermore, the association confirmed the continuation of the <strong>Sabah Muaythai Championship</strong>. Held biennially, this flagship state tournament will remain the ultimate proving ground for state selections and the benchmark for evaluating the Sabah Muaythai team's performance at the national level.
              </p>

              <p>
                Beyond the ring, the association places heavy emphasis on technical evolution. PMNS is committed to upgrading the competency of coaches, referees, and technical officials through continuous courses, workshops, and certification programs, ensuring the technical standards of Sabah Muaythai remain world-class.
              </p>
            </div>
          </div>
        </div>

        {/* 🥊 UPCOMING EVENTS HIGHLIGHTS */}
        <div className="mb-20 md:mb-32">
          <h3 className="text-yellow-500 font-black uppercase italic text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] mb-8 md:mb-12 text-center">2026 TOURNAMENT ROADMAP</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 not-prose">
            
            {/* THE YOUNG GUNS */}
            <div className="relative min-h-[400px] md:h-[500px] rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-zinc-800 group hover:border-zinc-600 transition-colors bg-zinc-900 shadow-xl p-6 md:p-10 flex flex-col justify-end">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black opacity-50"></div>
              <div className="relative z-10 flex flex-col h-full justify-end">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white text-black px-3 py-1 text-[9px] md:text-[10px] font-black uppercase italic inline-block">9 - 12 APRIL 2026</span>
                    <span className="bg-zinc-800 text-white border border-zinc-700 px-3 py-1 text-[9px] md:text-[10px] font-black uppercase italic inline-block">1 BORNEO HYPERMALL</span>
                  </div>
                  <h4 className="text-white font-black uppercase italic text-3xl md:text-4xl leading-none mb-3 md:mb-4">Sabah Muaythai Expo:<br/><span className="text-yellow-500">The Young Guns</span></h4>
                  <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed mb-6">
                    Dedicated strictly to the cultivation of the next generation. This premier expo focuses entirely on the development of youth athletes under 17 years old, ensuring a robust and battle-tested pipeline for the future of Sabah Muaythai.
                  </p>
                </div>
                <Link 
                  href="https://www.muaythaisbh.my/events" 
                  className="bg-yellow-500 hover:bg-white text-black text-center font-black uppercase tracking-widest text-[10px] md:text-xs py-3 md:py-4 px-6 rounded-full transition-all duration-300"
                >
                  View Event Details →
                </Link>
              </div>
            </div>

            {/* LADIES FIGHT & MBOR */}
            <div className="relative min-h-[400px] md:h-[500px] rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-yellow-500/50 group bg-zinc-900 shadow-[0_0_50px_rgba(234,179,8,0.1)] p-6 md:p-10 flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-zinc-900 to-black opacity-80"></div>
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 text-[9px] md:text-[10px] font-black uppercase italic inline-block">MAY 2026</span>
                  <span className="bg-zinc-800 text-white border border-zinc-700 px-3 py-1 text-[9px] md:text-[10px] font-black uppercase italic inline-block">KOTA KINABALU</span>
                </div>
                <h4 className="text-white font-black uppercase italic text-3xl md:text-4xl leading-none mb-3 md:mb-4">Sabah Muaythai Expo:<br/><span className="text-yellow-500">Ladies Fight</span></h4>
                <p className="text-gray-300 text-xs md:text-sm font-medium leading-relaxed mb-4">
                  A groundbreaking initiative spotlighting comprehensive female involvement in combat sports. This event will feature women not just as athletes, but operating entirely as the technical officials, coaches, and event management team.
                </p>
                <div className="bg-black/50 border-l-2 border-yellow-500 p-3 rounded-r-lg">
                  <p className="text-yellow-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest">🏆 Historic Milestone Target</p>
                  <p className="text-gray-400 text-[10px] md:text-xs mt-1">PMNS is actively working to secure a sanction from the <strong>Malaysia Book of Records</strong> to cement this event in history as the first fully all-women managed Muaythai tournament and athlete management initiative in the nation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 📸 GALLERY HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-20 md:mb-32 not-prose">
          
          <div className="relative aspect-square sm:aspect-video rounded-3xl md:rounded-[2rem] overflow-hidden border border-white/10 group bg-zinc-900">
            <Image src="/agm5.jpeg" alt="President chairing the meeting" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
              <p className="text-white font-black uppercase italic text-base md:text-lg leading-none">Commanding the Room</p>
              <p className="text-gray-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] mt-1 md:mt-2">President Ir. Hj. Nazri chairing the pivotal 2026 sessions.</p>
            </div>
          </div>

          <div className="relative aspect-square sm:aspect-video rounded-3xl md:rounded-[2rem] overflow-hidden border border-white/10 group bg-zinc-900">
            <Image src="/agm4.jpeg" alt="Ir HJ Nazri Ab Razak in action" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
              <p className="text-white font-black uppercase italic text-base md:text-lg leading-none">Leading the Charge</p>
              <p className="text-gray-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] mt-1 md:mt-2">Outlining the vision for high-impact tournaments.</p>
            </div>
          </div>

          <div className="relative aspect-square sm:aspect-video rounded-3xl md:rounded-[2rem] overflow-hidden border border-white/10 group bg-zinc-900">
            <Image src="/agm3.jpeg" alt="AGM Meeting Proceedings" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
              <p className="text-white font-black uppercase italic text-base md:text-lg leading-none">Strategic Focus</p>
              <p className="text-gray-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] mt-1 md:mt-2">Deliberating grassroots structures and technical upgrades.</p>
            </div>
          </div>

          <div className="relative aspect-square sm:aspect-video rounded-3xl md:rounded-[2rem] overflow-hidden border border-white/10 group bg-zinc-900">
            <Image src="/agm2.jpeg" alt="Attendees freestyle pose" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
              <p className="text-white font-black uppercase italic text-base md:text-lg leading-none">United Front</p>
              <p className="text-gray-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] mt-1 md:mt-2">The delegates celebrating a constructive session and buka puasa.</p>
            </div>
          </div>
          
        </div>

        {/* 📰 LEADERSHIP STATEMENTS */}
        <div className="max-w-4xl mx-auto font-sans">
          <div className="bg-zinc-900/80 p-6 sm:p-8 md:p-20 rounded-3xl md:rounded-[4rem] border border-white/5 shadow-2xl relative mb-12">
            <h2 className="text-yellow-500 font-black uppercase italic text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.4em] mb-6 md:mb-10">PRESIDENTIAL DECREE</h2>
            <p className="text-gray-200 text-lg md:text-3xl italic leading-relaxed mb-8 md:mb-10">
              “Our agenda is clear. We are unyielding in our mission to fortify the administrative backbone of this association, foster grassroots talent with precision, and elevate our technical programs to deliver tournaments of the highest caliber and impact.”
            </p>
            <p className="text-white font-black uppercase tracking-widest text-[10px] md:text-sm">— Ir. Hj. Nazri Ab Razak, <span className="text-gray-500 text-[9px] md:text-xs">President, PMNS</span></p>
          </div>

          <div className="mb-20 md:mb-32">
            <div className="text-gray-400">
              <div className="my-10 md:my-16 p-6 sm:p-8 md:p-12 bg-black/40 border-l-4 border-yellow-500 rounded-r-2xl md:rounded-r-[3rem]">
                <h2 className="text-yellow-500 font-black uppercase italic text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] mb-4 md:mb-6">TECHNICAL DIRECTION</h2>
                <p className="text-white italic text-base md:text-2xl leading-relaxed mb-6 md:mb-8">
                  “The implementation of targeted platforms like The Young Guns and our monthly pro debuts ensures a systematic and highly competitive progression for our fighters. We are heavily investing in our technical officials and coaches because world-class athletes require a world-class ecosystem to thrive.”
                </p>
                <p className="text-yellow-500 font-black uppercase text-[10px] md:text-sm tracking-widest">— Cyrille Dhillon Tahing, <span className="text-gray-500 text-[9px] md:text-xs">State Head Coach, Sabah</span></p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="pt-12 md:pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] italic text-center md:text-left">
              The AGM concluded in a highly constructive atmosphere, reflecting the shared determination to position Sabah Muaythai as a formidable, elite combat sport capable of producing state and national champions.
            </p>
            <Link href="/newsletter" className="text-white whitespace-nowrap font-black uppercase text-[10px] tracking-[0.5em] hover:text-yellow-500 transition-all italic border border-white/10 px-6 py-3 rounded-full hover:border-yellow-500 w-full md:w-auto text-center">
              ← BACK TO NEWS
            </Link>
          </div>
        </div>
      </section>

      {/* 🌌 BACKGROUND DECOR */}
      <div className="fixed bottom-10 right-10 opacity-[0.02] pointer-events-none -z-10 select-none">
        <h1 className="text-[20vw] md:text-[15vw] font-black italic uppercase leading-none tracking-tighter">AGM26</h1>
      </div>
    </main>
  );
}