import React from 'react';

export default function SeaGamesNewsletter() {
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
            🥇 Sabah Shines at the SEA Games
          </h1>
          <p style={{ fontSize: '1.2em', color: '#555', fontStyle: 'italic', marginTop: '0' }}>
            Celebrating Our Muaythai Athletes
          </p>
          
          <img 
            src="/seagames.jpeg" 
            alt="Sabah Muaythai Athletes at SEA Games 2025" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
          />
        </header>

        {/* Introduction */}
        <section>
          <p style={{ fontSize: '1.1em' }}>
            Sabah once again made its mark on the international stage as its athletes delivered outstanding performances at the SEA Games, bringing pride not only to the state but also to Malaysia’s Muaythai community.
          </p>
          <p>
            The achievements of <strong>Yan Jia Chi</strong>, <strong>Asyraf Danial</strong>, and <strong>Eva Anastasia</strong> stand as a testament to the discipline, dedication, and rising standard of Muaythai development in Sabah.
          </p>

          <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '30px 0' }} />

          {/* Gold Section */}
          <div style={{ backgroundColor: '#fffbf0', borderLeft: '6px solid #FFD700', padding: '20px', marginBottom: '25px', borderRadius: '0 8px 8px 0' }}>
            <h2 style={{ color: '#B8860B', marginTop: '0' }}>🌟 Yan Jia Chi – Gold with Grace and Precision</h2>
            <p>
              Yan Jia Chi etched her name into history by capturing the <strong>Gold Medal</strong> in the Women’s Wai Kru category, delivering a performance that embodied technical excellence, cultural depth, and artistic precision.
            </p>
            <p>
              Her victory reflects not only individual brilliance, but also Sabah’s strength in preserving and elevating the cultural dimensions of Muaythai at the highest international level. Yan Jia Chi’s success has positioned her as a role model for young athletes, especially female practitioners aspiring to compete on the world stage.
            </p>
          </div>

          {/* Silver Section */}
          <div style={{ backgroundColor: '#f8f9fa', borderLeft: '6px solid #C0C0C0', padding: '20px', marginBottom: '25px', borderRadius: '0 8px 8px 0' }}>
            <h2 style={{ color: '#708090', marginTop: '0' }}>🥈 Eva Anastasia – Silver Through Determination</h2>
            <p>
              Eva Anastasia showcased exceptional composure and fighting spirit to secure a <strong>Silver Medal</strong>, demonstrating resilience and consistency throughout the competition.
            </p>
            <p>
              Her achievement highlights the growing presence and competitiveness of Sabah’s female Muaythai athletes at elite multi-sport events. Eva’s performance underlines the effectiveness of long-term athlete development and the increasing depth of talent emerging from the state.
            </p>
          </div>

          {/* Bronze Section */}
          <div style={{ backgroundColor: '#fff5ee', borderLeft: '6px solid #CD7F32', padding: '20px', marginBottom: '25px', borderRadius: '0 8px 8px 0' }}>
            <h2 style={{ color: '#A0522D', marginTop: '0' }}>🥉 Asyraf Danial – Grit, Heart, and National Pride</h2>
            <p>
              Asyraf Danial delivered a commendable performance in his category, earning a <strong>Bronze Medal</strong> through determination, courage, and tactical awareness against strong regional opposition.
            </p>
            <p>
              His achievement reflects the readiness of Sabah’s male athletes to compete at elite international levels and reinforces the state’s reputation as a consistent contributor to Malaysia’s Muaythai success.
            </p>
          </div>

          <h2 style={{ color: '#003366', marginTop: '40px' }}>🏆 A Collective Achievement for Sabah</h2>
          <p>
            These SEA Games results are not isolated successes. They represent the combined efforts of athletes, coaches, support teams, associations, and grassroots programs that continue to strengthen Muaythai in Sabah.
          </p>
          <p>
            From youth development platforms such as SUKMA and Sabah Games, to international exposure at SEA Games level, Sabah’s athlete pathway continues to produce competitors who excel both technically and mentally.
          </p>

          <div style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
            <h3 style={{ marginTop: '0', color: '#0d47a1' }}>🔥 Looking Ahead</h3>
            <p style={{ margin: 0 }}>
              The achievements of Yan Jia Chi, Eva Anastasia, and Asyraf Danial serve as inspiration for the next generation of Sabahan athletes. With continued support, structured development, and strong community backing, Sabah remains well-positioned to produce future champions on the regional, continental, and world stage.
            </p>
          </div>

        </section>

        {/* Footer */}
        <footer style={{ marginTop: '50px', textAlign: 'center', borderTop: '2px solid #eee', paddingTop: '30px', color: '#666' }}>
          <h3 style={{ color: '#333' }}>In Summary</h3>
          <p>
            Sabah’s presence at the SEA Games reflects more than medals — it represents progress, pride, and potential. These athletes have carried the Sabah and Malaysian flag with honour, proving that the state continues to be a driving force in the growth of Muaythai.
          </p>
          <br />
          <p style={{ fontSize: '0.9em' }}>&copy; 2025 Muaythai Sabah. All Rights Reserved.</p>
        </footer>

      </div>
    </main>
  );
}