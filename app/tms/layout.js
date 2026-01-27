export default function TMSLayout({ children }) {
  return (
    <section className="min-h-screen bg-gray-900">
      {/* This layout has NO public Navbar and NO Footer */}
      
      {/* We just render the page content directly */}
      {children}
      
    </section>
  )
}