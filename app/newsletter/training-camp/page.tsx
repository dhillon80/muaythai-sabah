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
            Official News
          </span>
          <h1 style={{ color: '#fff', margin: '20px 0 10px', fontSize: '2.5em', fontWeight: '900', lineHeight: '1.1' }}>
            The Proving Ground: Sabah Muaythai Kicks Off Road to SUKMA 2026
          </h1>
          <p style={{ fontSize: '1.1em', color: '#94a3b8', fontWeight: '500', marginTop: '10px' }}>
            JAN 19, 2026 | Revolution Combat Muaythai Gym
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
              src="/training-camp-main.jpg" 
              alt="Sabah Muaythai Training Camp Group" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </header>

        {/* Content */}
        <section>
          <p style={{ fontSize: '1.2em', color: '#fff' }}>
            <strong style={{ color: '#ef4444' }}>The grind has officially begun.</strong> The sound of heavy bags and the echo of shin pads filled the air at Revolution Combat Muaythai Gym today, marking the start of the Sabah Muaythai team's intensive preparation for SUKMA Selangor 2026.
          </p>

          <h2 style={{ color: '#60a5fa', borderBottom: '1px solid #334155', paddingBottom: '10px', marginTop: '40px', fontSize: '1.5em' }}>
            🌍 World-Class Guidance
          </h2>
          <p>
            This initial training phase (running Jan 16 – 23) received a massive boost with the arrival of guest head coach, <strong>Thachtana "Kru Rim" Luangphon</strong>. 
          </p>
          <p>
            Currently the Malaysian National Team Coach for the SEA Games in Thailand, Kru Rim brings an elite pedigree to Sabah. He is the son of the legendary <strong>Arjan Chuchat</strong>—the former National Head Coach who led Malaysia through three SEA Games campaigns.
          </p>

          {/* IMAGE 2: ACTION / KRU RIM */}
          <div style={{ 
            marginTop: '30px', 
            marginBottom: '30px',
            borderRadius: '12px', 
            overflow: 'hidden', 
            border: '1px solid #475569'
          }}>
            <img 
              src="/kru-rim-training.jpg" 
              alt="Kru Rim Teaching" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <p style={{ fontSize: '0.8em', textAlign: 'center', padding: '10px', backgroundColor: '#0f172a', color: '#94a3b8', margin: 0 }}>
              Kru Rim (Right) instructing athletes during the intensive camp.
            </p>
          </div>

          {/* Highlight Box */}
          <div style={{ 
            backgroundColor: 'rgba(239, 68, 68, 0.1)', 
            padding: '25px', 
            borderRadius: '12px', 
            borderLeft: '4px solid #ef4444', 
            margin: '30px 0' 
          }}>
             <h3 style={{ margin: '0 0 10px', color: '#ef4444', fontSize: '1.1em' }}>🎯 The Mission</h3>
             <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
               <li style={{ marginBottom: '10px' }}>🔥 <strong>Longlist:</strong> 24 elite athletes currently in camp</li>
               <li>🏆 <strong>Target:</strong> Shortlisting the top 12 warriors for SUKMA 2026</li>
             </ul>
          </div>

          <h2 style={{ color: '#60a5fa', borderBottom: '1px solid #334155', paddingBottom: '10px', marginTop: '40px', fontSize: '1.5em' }}>
            🤝 A United Coaching Front
          </h2>
          <p>
            Kru Rim is assisted by <strong>Kru Yee</strong> (Muaythai Academy of International Sport, Thailand) and supported by a strong lineup of local coaches: <strong>Coach Ranjit, Coach Kenny,</strong> and <strong>Coach Sharon</strong>. 
          </p>
          <p>
             Spearheading the program is Sabah’s Head Coach, <strong>Dhillon Tahing</strong>, who remains the central pillar of the team's development.
          </p>

          <h2 style={{ color: '#60a5fa', borderBottom: '1px solid #334155', paddingBottom: '10px', marginTop: '40px', fontSize: '1.5em' }}>
            🚀 What’s Next?
          </h2>
          <p>
            The team will face their first test very soon. The squad is scheduled to compete at the <strong>Bintulu Amateur Muaythai Challenge</strong> (Jan 29 – Feb 1), followed by international exposure at the <strong>IFMA World Muaythai Championship</strong> this June.
          </p>

          <div style={{ textAlign: 'center', marginTop: '40px', fontStyle: 'italic', color: '#94a3b8' }}>
             "Stay tuned for an exclusive interview with Kru Rim as we discuss the roadmap and medal targets for Muaythai Sabah."
          </div>

        </section>

        {/* Footer */}
        <footer style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid #334155', paddingTop: '30px', color: '#64748b' }}>
          <p style={{ fontWeight: 'bold', color: '#cbd5e1' }}>#MuaythaiSabah #RoadToSUKMA2026 #TeamSabah #RevolutionCombat</p>
          <br />
          <p style={{ fontSize: '0.9em' }}>&copy; 2026 Muaythai Sabah. All Rights Reserved.</p>
        </footer>

      </div>
    </main>
  );
}