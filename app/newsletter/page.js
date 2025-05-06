import Image from "next/image";
import Head from "next/head";

export default function NewsletterPage() {
  return (
    <>
      <Head>
        <title>Sabah Muaythai Open 2025 – Newsletter</title>
        <meta name="description" content="Catch the highlights of Sabah Muaythai Open 2025 in Kota Belud. Cultural showcases, amateur fights, and the rising stars of Muaythai Sabah!" />
        <meta property="og:title" content="Sabah Muaythai Open 2025 – Highlights & Cultural Showcase" />
        <meta property="og:description" content="Catch the highlights of Sabah Muaythai Open 2025 in Kota Belud. A powerful showcase of sportsmanship, culture, and youth development in Muaythai Sabah." />
        <meta property="og:image" content="/SMO25.png" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-red-600">🥊 Sabah Muaythai Open 2025: A Spectacular Showdown in Kota Belud!</h1>

        <Image
          src="/SMO25.png"
          alt="Sabah Muaythai Open 2025"
          width={800}
          height={450}
          className="rounded-xl mx-auto mb-10"
        />

        <section className="mb-10">
          <p className="mb-4">
            Sabah once again made history in the world of Muaythai with the thrilling <strong>Sabah Muaythai Open 2025</strong>, held from <strong>February 21 to 23 in Kota Belud</strong>. More than just a tournament, this event served as a testament to the rapid development of Muaythai in the state, providing a vital platform for young athletes to showcase their skills and compete at a higher level.
          </p>
          <p className="mb-4">
            Organized by the <strong>Sabah Muaythai Association</strong>, the tournament was expertly managed by <strong>Sabah State Coach, Dhillon Tahing</strong>, and overseen by <strong>Tournament Director, the President of Sabah Muaythai Association, and Chief Technical Director, Readwan Matin</strong>. The event was officially launched by <strong>Sabah’s Assistant Minister of Youth and Sports, YB Datuk Fairuz bin Renddan</strong>, reaffirming the state’s commitment to nurturing Muaythai as a premier sport.
          </p>

          <h2 className="text-2xl font-semibold mb-4">🔥 A Thrilling Opening Fight That Had Everyone Talking!</h2>
          <p className="mb-4">
            The tournament kicked off with an electrifying showdown between <strong>Shahir Quluq "The Assassin"</strong> and <strong>Mumin "Samaranun Killer"</strong>, two well-known influencers from Kota Belud. Their highly anticipated bout drew intense excitement from fans both inside the venue and across social media platforms.
          </p>
          <p className="mb-4">
            Both fighters displayed remarkable technique and strategy, each determined to claim victory in front of a roaring crowd. This clash demonstrated that Muaythai isn’t just about physical prowess—it’s a battle of mental resilience, strategy, and the unwavering support of the audience.
          </p>
          <p className="mb-4">
            Another highlight was the <strong>Waikru competition</strong>, showcasing the deep-rooted traditions of Muaythai. This sacred pre-fight ritual, honoring trainers and martial arts heritage, was an awe-inspiring addition to the event, reinforcing the importance of preserving the cultural aspects of Muaythai.
          </p>

          <h2 className="text-2xl font-semibold mb-4">🌍 Growing Sabah’s Muaythai Scene: A New Wave of Fighters</h2>
          <p className="mb-4">
            Sabah has become one of Malaysia’s leading hubs for Muaythai, with extensive efforts focused on <strong>developing new talent and expanding the pool of competitive athletes</strong>.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Structured training programs</strong> led by certified coaches, helping athletes sharpen their techniques and build strong fight strategies.</li>
            <li><strong>Development leagues</strong> such as the Rookie Challenge, allowing fighters with <strong>0-5 fight experience</strong> to gain confidence before entering elite-level tournaments.</li>
            <li><strong>Traditional Muaythai showcases</strong> like Waikru and Maimuay, emphasizing the sport’s rich cultural heritage while fostering disciplined and respectful athletes.</li>
            <li><strong>International exposure opportunities</strong>, enabling Sabah’s fighters to compete beyond national borders and represent Malaysia on the global Muaythai stage.</li>
          </ul>
          <p className="mb-4">
            These efforts <strong>increase the number of competitive fighters in Sabah</strong>, ensuring Muaythai continues to thrive as both a professional sport and a disciplined martial art. By nurturing the next generation of athletes, Sabah is strengthening its reputation as a powerhouse for Muaythai talent.
          </p>

          <h2 className="text-2xl font-semibold mb-4">🚀 Upcoming Events: Don’t Miss Out!</h2>
          <p className="mb-4">
            Momentum continues with two exciting events set to take place in the coming months:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>May 24-25, 2025</strong> - <strong>Sabah Muaythai Heritage and Cultural Challenge 2025</strong>, featuring intense <strong>Waikru and Maimuay competitions</strong> that highlight the spiritual and artistic essence of Muaythai.</li>
            <li><strong>June 7-8, 2025</strong> - <strong>Sabah Muaythai Expo, Rookie Challenge 2025</strong>, a dedicated tournament for fighters with <strong>0-5 bouts of experience</strong>, allowing them to gain valuable competition time before stepping into higher-level challenges.</li>
          </ul>
          <p className="mb-4">
            Both events will be held at:
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Sabah State Training Center</strong></li>
              <li><strong>Revolution Combat Gym</strong></li>
              <li><strong>Open Hall, Taman Delima, Penampang</strong></li>
            </ul>
          </p>
          <p className="font-semibold text-blue-600">
            📌 For registration and upcoming events: <a href="http://localhost:3000/events" target="_blank" className="underline">Click Here</a>
          </p>

          <h2 className="text-2xl font-semibold mb-4">📺 Watch the Action Again!</h2>
          <p className="mb-4">
            For those who missed the thrilling battles at <strong>Sabah Muaythai Open 2025</strong>, fear not! You can catch the replay on <strong>YouTube and Facebook</strong>, and stay updated with Muaythai developments in Sabah by following local gym social media pages.
          </p>
          <p className="mb-4">
            With this tournament making waves across Sabah’s combat sports community, public support is crucial in ensuring the long-term success of our rising Muaythai stars. These athletes could soon represent Sabah—and Malaysia—on the world stage!
          </p>
          <p className="font-semibold text-blue-600">
            Keep supporting <strong>Sabah Muaythai</strong>! 💪🔥
          </p>
        </section>
      </main>
    </>
  );
}
