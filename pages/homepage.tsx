import Link from 'next/link';
import './css/homepage.css'; // Import your CSS file

export default function Homepage() {

  const isLoggedIn=() => {
    
  }

  const component = () => {
    return (
        <section className="infoSection">
          <h3>Project title</h3>
          <div className="infoField">
            <strong>Topic</strong>Topic
          </div>
          <div className="infoField">
            <strong>Description:</strong>Description
          </div>
          <div className="infoField">
            <strong>Project creator:</strong>Project creator
          </div>
          <div className="infoField">
            <strong>Other participants:</strong>(only if you're already a member)
          </div>
        </section>
    )
  }

  return (
    <div>
      <nav className="navbar">
        <ul className="navList">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main className="mainContent">
        <h2>Welcome to Our Homepage</h2>
      </main>
      {component()}
      {component()}
    </div>
  );
}