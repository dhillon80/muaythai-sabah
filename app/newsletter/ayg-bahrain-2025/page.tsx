import React from 'react';

export default function AygBahrainNewsletter() {
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
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#d32f2f', marginBottom: '10px' }}>🌏 Asian Youth Games Bahrain</h1>
          <p style={{ fontSize: '1.1em', color: '#666', fontStyle: 'italic' }}>
            Sabah Athletes Deliver Medals for Team Malaysia
          </p>
          
          {/* UPDATED IMAGE PATH BELOW */}
          <img 
            src="/aygbahrain.jpeg" 
            alt="Sabah Muaythai Team at Asian Youth Games Bahrain" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
          />
        </header>

        {/* Content */}
        <section>
          <p>
            Sabah’s young Muaythai athletes made a significant impact at the Asian Youth Games in Bahrain, emerging not only as representatives of Team Malaysia, but also as key medal contributors on the international stage. Their performances reflected the strength of Sabah’s youth development system and its growing role in Malaysia’s Muaythai success.
          </p>

          <h2 style={{ color: '#003366', borderBottom: '2px solid #eee', paddingBottom: '10px', marginTop: '30px' }}>
            🇲🇾 Sabahan Medal Contributors for Team Malaysia
          </h2>
          <p>Five Sabahan athletes proudly carried the national colours, producing medal-winning performances against strong Asian opposition:</p>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {/* Silver Medal Item */}
            <li style={{ background: '#f9f9f9', marginBottom: '10px', padding: '15px', borderLeft: '5px solid #C0C0C0', borderRadius: '4px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Auryelle Xzandra</span>
              <span style={{ float: 'right', fontWeight: 'bold', color: '#666' }}>🥈 Silver Medal, Women’s Wai Kru</span>
              <div style={{ clear: 'both' }}></div>
            </li>

            {/* Bronze Medal Items */}
            <li style={{ background: '#f9f9f9', marginBottom: '10px', padding: '15px', borderLeft: '5px solid #CD7F32', borderRadius: '4px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Ariesya Dania</span>
              <span style={{ float: 'right', fontWeight: 'bold', color: '#666' }}>🥉 Bronze Medal, Women’s Wai Kru</span>
              <div style={{ clear: 'both' }}></div>
            </li>
            <li style={{ background: '#f9f9f9', marginBottom: '10px', padding: '15px', borderLeft: '5px solid #CD7F32', borderRadius: '4px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Jaethan Quan</span>
              <span style={{ float: 'right', fontWeight: 'bold', color: '#666' }}>🥉 Bronze Medal, Men’s Wai Kru</span>
              <div style={{ clear: 'both' }}></div>
            </li>
            <li style={{ background: '#f9f9f9', marginBottom: '10px', padding: '15px', borderLeft: '5px solid #CD7F32', borderRadius: '4px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Jaethan Quan & Bethany Lai</span>
              <span style={{ float: 'right', fontWeight: 'bold', color: '#666' }}>🥉 Bronze Medal, Maimuay Duo Mix</span>
              <div style={{ clear: 'both' }}></div>
            </li>
          </ul>

          <p>These achievements highlight Sabah’s excellence not only in competitive Muaythai, but also in the technical and cultural disciplines that form the foundation of the sport.</p>

          <h2 style={{ color: '#003366', borderBottom: '2px solid #eee', paddingBottom: '10px', marginTop: '30px' }}>
            🥊 Sabahan Leadership on the National Bench
          </h2>
          <p>Adding to Sabah’s contribution, <strong>Cyrille Dhillon Tahing</strong> was appointed Head Coach of Team Malaysia Muaythai for the Asian Youth Games, supported by <strong>Mardiana Mohd Maulana</strong> as Assistant Coach.</p>
          <p>Their leadership ensured the athletes were well-prepared physically, mentally, and technically, reinforcing Sabah’s reputation as a producer of both elite athletes and national-level coaches.</p>

          <h2 style={{ color: '#003366', borderBottom: '2px solid #eee', paddingBottom: '10px', marginTop: '30px' }}>
            🎭 Excellence in Cultural Muaythai Disciplines
          </h2>
          <p>The medals secured in Wai Kru and Maimuay categories demonstrate Malaysia’s — and Sabah’s — strength in Muaythai’s cultural expressions. These disciplines are internationally recognised and contested at major multi-sport events, reflecting Muaythai’s unique blend of tradition, respect, and artistry.</p>
          <p>Sabah’s success in these categories positions the state as a regional leader in cultural Muaythai development.</p>

          <h2 style={{ color: '#003366', borderBottom: '2px solid #eee', paddingBottom: '10px', marginTop: '30px' }}>
            🌱 Building Malaysia’s Future Champions
          </h2>
          <p>The Asian Youth Games serve as a vital platform for long-term athlete development, exposing young athletes to elite competition and international standards at an early stage.</p>
          
          <div style={{ backgroundColor: '#e3f2fd', border: '1px solid #bbdefb', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
            <h3 style={{ marginTop: 0, color: '#444' }}>Sabah’s medal contributions reaffirm:</h3>
            <ul>
              <li>The effectiveness of structured grassroots and youth pathways</li>
              <li>Strong collaboration between state and national associations</li>
              <li>A sustainable pipeline from Sabah Games and SUKMA to continental and global championships</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '0.9em', color: '#777', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <h3 style={{ color: '#444' }}>In Summary</h3>
          <p>Sabah’s participation at the Asian Youth Games Bahrain was marked by pride, performance, and podium success. Through its athletes and coaching leadership, Sabah played a decisive role in Team Malaysia’s medal tally, further cementing its position as a key driver of Muaythai excellence in the region.</p>
          <br />
          <p>&copy; 2025 Muaythai Sabah. All Rights Reserved.</p>
        </footer>

      </div>
    </main>
  );
}