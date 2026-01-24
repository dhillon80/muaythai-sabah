import React from 'react';

export default function TrainingCampNewsletter() {
  return (
    <main style={{ backgroundColor: '#0f172a', minHeight: '100vh', padding: '20px' }}>
      <div style={{
        maxWidth: '800px',
        margin: '80px auto 40px',
        backgroundColor: '#1e293b',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#e2e8f0',
        lineHeight: '1.8',
        border: '1px solid #334155'
      }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ 
            backgroundColor: '#ef4444', 
            color: 'white', 
            padding: '4px 12px', 
            borderRadius: '9999px', 
            fontSize: '0.8em', 
            fontWeight: 'bold', 
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Technical Update
          </span>
          <h1 style={{ color: '#fff', margin: '20px 0 10px', fontSize: '2.5em', fontWeight: '900', lineHeight: '1.1' }}>
            Focus on Technique, Solid Stamina: Sabah Muaythai Sharpens for SUKMA
          </h1>
          <p style={{ fontSize: '1.1em', color: '#94a3b8', fontWeight: '500', marginTop: '10px' }}>
            JAN 24, 2026 | State Training Camp Update
          </p>
          
          {/* IMAGE 1: MAIN HERO */}
          <div style={{ 
            marginTop: '30px', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            border: '1px solid #475569',
            position: 'relative',
            aspectRatio: '16/9'
          }}>
            <img 
              src="/camp1.jpg" 
              alt="Sabah Muaythai Final Sessiom" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </header>

        {/* Content */}
        <section>
          <p style={{ fontSize: '1.2em', color: '#fff' }}>
            <strong style={{ color: '#ef4444' }}>Precision over power.</strong> While the final session with Thai guest coach <strong>Thachtana Luangphon (Kru Rim)</strong> took the form of "soft training," the impact was profound for the Sabah Muaythai squad.
          </p>

          <h2 style={{ color: '#60a5fa', borderBottom: '1px solid #334155', paddingBottom: '10px', marginTop: '40px', fontSize: '1.5em' }}>
            🎨 The Art of the Counter
          </h2>
          <p>
            Kru Rim’s priority wasn't just speed—it was the finesse of modern Muaythai. The training focused heavily on the "nadi" (pulse) of the sport: <strong>defensive parries and counter-attacks.</strong>
          </p>
          <p>
            Beyond the clinch and the strike, he emphasized that Muaythai is a rhythmic art. Every step, swing, knee, and elbow must be composed and orderly. Athletes practiced reading opponent movements, controlling distance, and managing tempo to strike with intelligence rather than raw aggression.
          </p>

          {/* IMAGE 2: ACTION */}
          <div style={{ 
            marginTop: '30px', 
            marginBottom: '30px',
            borderRadius: '12px', 
            overflow: 'hidden', 
            border: '1px solid #475569'
          }}>
            <img 
              src="/camp2.jpg" 
              alt="Technical Drills" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <p style={{ fontSize: '0.8em', textAlign: 'center', padding: '10px', backgroundColor: '#0f172a', color: '#94a3b8', margin: 0 }}>
              Athletes refining their defensive posture and counter-timing.
            </p>
          </div>

          <h2 style={{ color: '#60a5fa', borderBottom: '1px solid #334155', paddingBottom: '10px', marginTop: '40px', fontSize: '1.5em' }}>
            ⚡ Stamina: The Non-Negotiable Foundation
          </h2>
          <p>
            A key takeaway from the coaching staff was the uncompromising role of <strong>stamina</strong>. Kru Rim and his assistants stressed that fitness is the core of the entire program.
          </p>

          {/* Highlight Box */}
          <div style={{ 
            backgroundColor: 'rgba(96, 165, 250, 0.1)', 
            padding: '25px', 
            borderRadius: '12px', 
            borderLeft: '4px solid #60a5fa', 
            margin: '30px 0' 
          }}>
             <h3 style={{ margin: '0 0 10px', color: '#60a5fa', fontSize: '1.1em' }}>💡 The Kru Rim Philosophy</h3>
             <p style={{ margin: 0, fontStyle: 'italic' }}>
               "Without superior stamina, every technique and tactic—no matter how perfect—will fail in the ring. Stamina isn't just physical; it is the ultimate test of mental discipline."
             </p>
          </div>

          <h2 style={{ color: '#60a5fa', borderBottom: '1px solid #334155', paddingBottom: '10px', marginTop: '40px', fontSize: '1.5em' }}>
            🤝 Leadership & Support
          </h2>
          <p>
            The session was attended by Sabah Muaythai Association President, <strong>Tuan Ir. Nazri</strong>, alongside <strong>Cik Kartina Dumin</strong> (SDO MSN Sabah). They were joined by our dedicated local coaching team: <strong>Coach Dhillon (Head Coach), Coach Sharon, Coach Ranjit, and Coach Addyana.</strong>
          </p>

          {/* IMAGE 3: TEAM/CLOSING */}
          <div style={{ 
            marginTop: '30px', 
            marginBottom: '30px',
            borderRadius: '12px', 
            overflow: 'hidden', 
            border: '1px solid #475569'
          }}>
            <img 
              src="/camp3.jpg" 
              alt="Sabah Muaythai Team with President and Coaches" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <p>
            The week concluded with personal feedback for every athlete. Kru Rim didn't just correct their kicks; he analyzed their character and confidence, building the <strong>mentality of a true warrior</strong> for the upcoming SUKMA Selangor games this August.
          </p>

          <div style={{ textAlign: 'center', marginTop: '40px', fontStyle: 'italic', color: '#94a3b8' }}>
             "Stamina is the foundation. Technique is the weapon. Sabah is ready."
          </div>

        </section>

        {/* Footer */}
        <footer style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid #334155', paddingTop: '30px', color: '#64748b' }}>
          <p style={{ fontWeight: 'bold', color: '#cbd5e1' }}>#MuaythaiSabah #RoadToSUKMA2026 #StaminaMentaliti #SabahMajuJaya</p>
          <br />
          <p style={{ fontSize: '0.9em' }}>&copy; 2026 Muaythai Sabah. Official Newsletter.</p>
        </footer>

      </div>
    </main>
  );
}