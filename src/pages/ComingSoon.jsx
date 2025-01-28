import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import "./ComingSoon.css";
import IFChamberLogo from "../assets/IFChamber-logo.png";
import BGClock from "../assets/bg-clock.png";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-03-01T00:00:00Z");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Open links in a new tab
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="coming-soon-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="logo-wrapper w-100 text-center">
          <img
            src={IFChamberLogo}
            alt="IFChamber Logo"
            className="ifchamber-logo"
          />
        </div>
        <div>
          <h1>We are coming soon.</h1>
          <p>
            The Islamic Finance Chamber (IFChamber) is a global community of
            finance experts and enthusiasts leveraging Islamic Finance and
            Economics to make the world better, one degree at a time.
          </p>

          <div className="notification-section">
            <p>Get notified when we go live!</p>
            <button
              onClick={() =>
                openLink("https://chat.whatsapp.com/FJKIyU87hgq9tC3ob3DB7D")
              }
            >
              Join Our WhatsApp Community
            </button>
          </div>
        </div>
        <div className="contact-section">
          <p>Follow us on</p>
          <div className="social-icons">
            <button onClick={() => openLink("https://facebook.com")}>
              <Facebook size={24} />
            </button>
            <button onClick={() => openLink("https://twitter.com")}>
              <Twitter size={24} />
            </button>
            <button
              onClick={() =>
                openLink("https://my.linkedin.com/company/ifchamber")
              }
            >
              <Linkedin size={24} />
            </button>
          </div>
          <p className="copyright">
            © Copyrights IFChamber | All Rights Reserved
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="bg-dark-shade"></div>
        <img src={BGClock} alt="Clock Background" className="bg-clock" />
        <div className="arriving-in">Arriving in...</div>
        <div className="countdown">
          {["days", "hours", "minutes"].map((unit, index) => (
            <div className="countdown-box" key={index}>
              <p>{timeLeft[unit]}</p>
              <hr />
              <span>{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
