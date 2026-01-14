import React from 'react';

export default function SukmaSelectionNewsletter() {
  return (
    <main style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '20px' }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#333',
        lineHeight: '1.6'
      }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#d32f2f', marginBottom: '10px', fontSize: '2.2em' }}>
            🥊 SUKMA Selangor 2026
          </h1>
          <p style={{ fontSize: '1.3em', color: '#444', fontWeight: 'bold', marginTop: '0' }}>
            Sabah Muaythai Selection Concludes Successfully
          </p>
          
          <img 
            src="/sukma2025.jpeg" 
            alt="SUKMA Sabah Muaythai Selection" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
          />
        </header>

        {/* Content */}
        <section>
          <p style={{ fontSize: '1.1em' }}>
            The Sabah Muaythai selection trials for SUKMA Selangor 2026 concluded successfully following a two-day evaluation held on 3–4 January 2026 at PLN Revolution Combat Gym, Taman Delima, Penampang.
          </p>
          <p>
            The closed-door selection brought together Sabah’s top emerging Muaythai athletes, marking a crucial step in identifying the best talents to represent the state at Malaysia’s premier multi-sport event.
          </p>

          <h2 style={{ color: '#003366', borderBottom: '2px solid #eee', paddingBottom: '10px', marginTop: '40px' }}>
            📍 Selection Overview
          </h2>
          <p>
            The selection process was conducted in a controlled and professional environment to ensure fairness, athlete safety, and high-performance assessment.
          </p>

          {/* Event Details Box */}
          <div style={{ backgroundColor: '#f0f4f8', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #003366', marginBottom: '20px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}><strong>📅 Date:</strong> 3–4 January 2026</li>
              <li style={{ marginBottom: '10px' }}><strong>🏟️ Venue:</strong> PLN Revolution Combat Gym, Taman Delima, Penampang</li>
              <li><strong>🛡️ Event Type:</strong> Closed selection for Sabah SUKMA Selangor 2026 Muaythai team</li>
            </ul>
          </div>
          
          <p>Athletes were evaluated across multiple criteria including:</p>
          <ul style={{ marginBottom: '30px' }}>
            <li>Technical skill and execution</li>
            <li>Physical conditioning and stamina</li>
            <li>Ring intelligence and strategy</li>
            <li>Discipline and competitive readiness</li>
          </ul>

          <h2 style={{ color: '#003366', borderBottom: '2px solid #eee', paddingBottom: '10px', marginTop: '30px' }}>
            🔍 High Standards & Intense Competition
          </h2>
          <p>
            The selection trials featured a strong turnout of athletes from across Sabah, reflecting the depth and competitiveness of Muaythai development in the state. Throughout the two days, athletes demonstrated:
          </p>
          <ul style={{ backgroundColor: '#fffbf0', padding: '20px 20px 20px 40px', borderRadius: '8px', border: '1px solid #ffeeba' }}>
            <li style={{ marginBottom: '5px' }}><strong>Technical proficiency</strong> and tactical awareness</li>
            <li style={{ marginBottom: '5px' }}><strong>Mental resilience</strong> under pressure</li>
            <li><strong>Respect</strong> for rules, officials, and fellow competitors</li>
          </ul>
          <p>
            The closely contested sessions highlighted the narrowing gap between emerging talents and elite-level performance standards.
          </p>

          <h2 style={{ color: '#003366', borderBottom: '2px solid #eee', paddingBottom: '10px', marginTop: '30px' }}>
            🏆 Building the Sabah SUKMA Squad
          </h2>
          <p>
            The selection trials form part of a structured pathway toward assembling a strong, disciplined, and competitive Sabah contingent for SUKMA Selangor 2026. Selected athletes will proceed to the next phase, which includes:
          </p>
          <ol style={{ fontWeight: 'bold', color: '#555' }}>
            <li style={{ marginBottom: '10px' }}>Centralised training programmes</li>
            <li style={{ marginBottom: '10px' }}>Performance monitoring and evaluation</li>
            <li>Exposure through preparatory competitions</li>
          </ol>
          <p>
            This phased approach ensures athletes are not only competition-ready, but also physically and mentally prepared for the demands of SUKMA.
          </p>

          <h2 style={{ color: '#003366', borderBottom: '2px solid #eee', paddingBottom: '10px', marginTop: '30px' }}>
            🤝 Collaboration & Commitment
          </h2>
          <p>
            The successful execution of the selection trials reflects the strong collaboration between coaches, officials, clubs, and supporting bodies, all working toward a shared goal — elevating Sabah Muaythai at the national level.
          </p>
          <p>
            PLN Revolution Combat Gym once again proved to be a suitable high-performance environment, supporting structured assessment and athlete development.
          </p>
        </section>

        {/* Footer */}
        <footer style={{ marginTop: '50px', textAlign: 'center', borderTop: '2px solid #eee', paddingTop: '30px', color: '#666' }}>
          <h3 style={{ color: '#333' }}>In Summary</h3>
          <p>
            The completion of the SUKMA Selangor 2026 Muaythai selection marks an important milestone in Sabah’s preparation journey. With a clear development pathway and rising athlete standards, Sabah continues to strengthen its position as a competitive force in Malaysian Muaythai.
          </p>
          <p style={{ fontStyle: 'italic', marginTop: '20px' }}>
            Further updates on squad confirmation and training programmes will be announced in due course.
          </p>
          <br />
          <p style={{ fontSize: '0.9em' }}>&copy; 2026 Muaythai Sabah. All Rights Reserved.</p>
        </footer>

      </div>
    </main>
  );
}