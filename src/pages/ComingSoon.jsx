import React, { useState, useEffect } from "react";
// import { Facebook, Twitter, Linkedin } from "lucide-react";
import "./ComingSoon.css";
import IFChamberLogo from "../assets/IFChamber-logo.png";
import BGClock from "../assets/bg-clock.png";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-10T00:00:00Z");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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

  const unitLabels = {
    hours: "hrs",
    minutes: "mins",
    seconds: "secs",
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

        <h1>Launching Soon!</h1>

        <p>
          The Islamic Finance Chamber (IFChamber) is a global community of
          finance experts and enthusiasts leveraging Islamic Finance and
          Economics to make the world better, one degree at a time.
        </p>

        <div className="notification-section">
          <p>
            Meanwhile, <br />
            Don’t be left out the Conversations
          </p>
          <button
            onClick={() =>
              openLink("https://chat.whatsapp.com/FJKIyU87hgq9tC3ob3DB7D")
            }
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.64569 12.5C3.64569 7.60998 7.60984 3.64583 12.4998 3.64583C17.3898 3.64583 21.354 7.60998 21.354 12.5C21.354 17.39 17.3898 21.3542 12.4998 21.3542C10.758 21.3542 9.13658 20.8523 7.76857 19.9855C7.51397 19.8243 7.202 19.7811 6.91321 19.8673L3.9141 20.7624L5.04331 18.1201C5.17678 17.8078 5.14962 17.4501 4.97054 17.1616C4.13078 15.8083 3.64569 14.2124 3.64569 12.5ZM12.4998 1.5625C6.45925 1.5625 1.56236 6.45939 1.56236 12.5C1.56236 14.4147 2.05521 16.217 2.92135 17.7841L1.12533 21.9865C0.966555 22.358 1.03693 22.7878 1.3059 23.0893C1.57487 23.3908 1.99392 23.5096 2.38108 23.394L7.06797 21.9953C8.66906 22.913 10.5245 23.4375 12.4998 23.4375C18.5405 23.4375 23.4373 18.5406 23.4373 12.5C23.4373 6.45939 18.5405 1.5625 12.4998 1.5625ZM14.8879 14.7733L13.5189 15.7376C12.8778 15.3724 12.1689 14.8626 11.4579 14.1516C10.7187 13.4124 10.1707 12.6493 9.76663 11.9493L10.6366 11.2108C11.0099 10.894 11.1121 10.3597 10.8821 9.92737L9.77363 7.84404C9.62436 7.56351 9.35521 7.36646 9.0427 7.3089C8.73018 7.25134 8.40849 7.33958 8.16908 7.54853L7.84042 7.83536C7.05008 8.52515 6.58265 9.65865 6.97006 10.8064C7.37169 11.9961 8.22883 13.8687 9.98476 15.6247C11.8739 17.5139 13.7929 18.2578 14.915 18.5468C15.8192 18.7795 16.6748 18.4675 17.2778 17.9762L17.8939 17.4742C18.1574 17.2595 18.2996 16.9296 18.2748 16.5905C18.2499 16.2515 18.0612 15.9458 17.7691 15.7718L16.0209 14.7301C15.6678 14.5198 15.224 14.5367 14.8879 14.7733Z"
                fill="white"
              />
            </svg>
            Join Our WhatsApp Community
          </button>
        </div>

        <div className="contact-section">
          <p>and follow us on</p>
          {/* <div className="social-icons"> */}
          <button
            onClick={() =>
              openLink("https://my.linkedin.com/company/ifchamber")
            }
          >
            {/* <Linkedin size={24} /> */}

            <svg
              width="60"
              height="59"
              viewBox="0 0 60 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2439_1321)">
                <path
                  d="M45.8375 45.0834H39.175V34.8149C39.175 32.3664 39.125 29.2148 35.7 29.2148C32.2275 29.2148 31.6975 31.8797 31.6975 34.6355V45.0834H25.0325V23.9688H31.4325V26.845H31.52C32.415 25.1881 34.59 23.4353 37.84 23.4353C44.59 23.4353 45.84 27.8062 45.84 33.4923V45.0834H45.8375ZM17.5075 21.0802C16.9989 21.0809 16.4951 20.9828 16.0252 20.7916C15.5552 20.6004 15.1282 20.3199 14.7686 19.9662C14.4091 19.6124 14.1241 19.1924 13.93 18.7301C13.7359 18.2678 13.6365 17.7724 13.6375 17.2723C13.638 16.5196 13.8654 15.784 14.2911 15.1584C14.7168 14.5329 15.3215 14.0455 16.0288 13.7579C16.7362 13.4704 17.5143 13.3955 18.265 13.5428C19.0156 13.6901 19.7049 14.053 20.2458 14.5856C20.7866 15.1181 21.1548 15.7964 21.3036 16.5347C21.4525 17.273 21.3753 18.0381 21.082 18.7333C20.7886 19.4285 20.2922 20.0225 19.6555 20.4402C19.0188 20.858 18.2704 21.0807 17.505 21.0802H17.5075ZM20.8475 45.0834H14.165V23.9688H20.85V45.0834H20.8475ZM49.175 7.375H10.8225C8.9825 7.375 7.5 8.80083 7.5 10.5635V48.4365C7.5 50.1992 8.985 51.625 10.82 51.625H49.165C51 51.625 52.5 50.1992 52.5 48.4365V10.5635C52.5 8.80083 51 7.375 49.165 7.375H49.1725H49.175Z"
                  fill="#1E72FA"
                />
              </g>
              <defs>
                <clipPath id="clip0_2439_1321">
                  <rect width="60" height="59" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          {/* </div> */}
        </div>
        <p className="copyright">
          © Copyrights Ifchamber | All Rights Reserved
        </p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="bg-dark-shade"></div>
        <img src={BGClock} alt="Clock Background" className="bg-clock" />
        <div className="countdown-container">
          <h2 className="arriving-in">Arriving in...</h2>

          <div className="days-box">
            <p className="days-number">{timeLeft.days}</p>
            <span className="days-label">Days</span>
            <hr />
            <p className="date-info">10th Ramadan, 1446 | 10th March, 2025</p>
          </div>

          <div className="countdown-boxes">
            {["hours", "minutes", "seconds"].map((unit) => (
              <div className="countdown-box" key={unit}>
                <p>{String(timeLeft[unit]).padStart(2, "0")}</p>
                <hr />
                <span>{unitLabels[unit]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
