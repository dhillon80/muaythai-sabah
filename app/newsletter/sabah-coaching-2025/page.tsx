"use client";

import Image from "next/image";

export default function NewsletterPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          54 Coaches Successfully Complete Muaythai Basic Coaching Course in Kota Kinabalu
        </h1>

        <Image
          src="/coaching.jpeg"
          alt="Muaythai Coaching Course"
          width={1200}
          height={600}
          className="rounded-lg mb-6"
        />

        <p className="mb-4">
          A total of <strong>54 participants</strong> have successfully completed the{" "}
          <strong>Muaythai Basic Coaching Course</strong>, which took place over two days on{" "}
          <strong>5th and 6th July 2025</strong> at Arena Belia, Kota Kinabalu. The course was
          fully organised by the <strong>Sabah Muaythai Association (Persatuan Muaythai Negeri Sabah – PMNS)</strong>
          as part of its key initiatives to strengthen Muaythai development in the state.
        </p>

        <p className="mb-4">
          The programme was coordinated by <strong>Sabah State Head Coach, Cyrille Dhillon Tahing</strong>,
          who also led the team of speakers and trainers. According to Cyrille:
        </p>

        <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-4">
          “This course is a vital step towards expanding coaching capacity throughout Sabah and
          paving the way for a more structured and professional coaching career pathway.
          By empowering more coaches, we hope to nurture more athletes, especially at the school
          level, and ultimately boost both the number and quality of Muaythai athletes in the future.”
        </blockquote>

        <p className="mb-4">
          Among the speakers involved were Cyrille Dhillon Tahing (Head Coach, Muaythai Sabah),{" "}
          <strong>Mardiana Mohd Maulana</strong> (Sabah Muaythai Art Coach),{" "}
          <strong>Ranjit Singh Maan</strong> (Strength & Conditioning Coach),{" "}
          <strong>Jonathan Quan</strong>, and <strong>Greg Sipidi</strong> (Muaythai Coaches). 
          PMNS President, <strong>Ir. Hj. Nazri Abdul Razak</strong>, also participated as a speaker.
        </p>

        <p className="mb-4">
          Two guest speakers were invited: <strong>Mr. Nik Faiz</strong> from the National Sports Institute 
          (MSN) Sabah Sports Science Centre and <strong>Ms. Valerie Wong</strong>, Deputy Director of 
          the Sports Sector at MSN Sabah.
        </p>

        <p className="mb-4">
          The course syllabus covered essential coaching components such as coaching ethics and
          responsibilities, methods for teaching basic Muaythai techniques, the association’s
          development roadmap, and a deeper understanding of Muaythai as a sport. Participants
          also gained valuable insights into sports science relevant to combat sports, the roles
          and career pathways for coaches, session management, effective communication in sports,
          and the technical and tactical aspects that form the backbone of quality instruction.
        </p>

        <p className="mb-4">
          The course balanced both theory and practical sessions, emphasising a holistic approach
          to talent development from the grassroots level. Participants gave highly positive
          feedback on the comprehensive course content and the delivery by the experienced speakers.
        </p>

        <p className="mb-4">
          <strong>PMNS President, Ir. Hj. Nazri Abdul Razak</strong>, who officiated the closing ceremony
          together with <strong>Ms. Valerie Wong</strong>, expressed his satisfaction:
        </p>

        <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-4">
          “The organisation of this basic Muaythai course was excellent, with a well-structured
          syllabus. The focus on balancing theory and practical sessions, along with delivery
          by expert speakers, has made a significant impact on the participating coaches.
          Feedback from the participants has been very encouraging.”
        </blockquote>

        <p className="mb-4">
          The closing ceremony also included a symbolic certificate presentation, with{" "}
          <strong>Mr. Stefanus Andreas</strong> from Sipitang receiving his certificate on behalf of
          all participants who successfully completed the course.
        </p>

        <p>
          Through initiatives like this, the <strong>Sabah Muaythai Association</strong> hopes to
          produce more certified coaches across Sabah, strengthening the ecosystem for athlete
          development from grassroots to national and international stages.
        </p>
      </div>
    </div>
  );
}
