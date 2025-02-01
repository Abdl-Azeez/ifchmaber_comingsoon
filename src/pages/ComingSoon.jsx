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
    const targetDate = new Date("2025-03-01T00:00:00Z");

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

        <h1>We are coming soon.</h1>
        <div>
          <p>
            The Islamic Finance Chamber (IFChamber) is a global community of
            finance experts and enthusiasts leveraging Islamic Finance and
            Economics to make the world better, one degree at a time.
          </p>

          <div className="notification-section">
            <p>Get notified when we get live!</p>
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
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2323_274)">
                <path
                  d="M18.335 18.839H15.67V14.662C15.67 13.666 15.65 12.384 14.28 12.384C12.891 12.384 12.679 13.468 12.679 14.589V18.839H10.013V10.25H12.573V11.42H12.608C12.966 10.746 13.836 10.033 15.136 10.033C17.836 10.033 18.336 11.811 18.336 14.124V18.839H18.335ZM7.003 9.075C6.79956 9.07526 6.59806 9.03537 6.41006 8.95761C6.22207 8.87984 6.05127 8.76574 5.90746 8.62184C5.76365 8.47793 5.64965 8.30706 5.57201 8.11901C5.49437 7.93097 5.4546 7.72944 5.455 7.526C5.4552 7.21983 5.54618 6.9206 5.71644 6.66615C5.8867 6.41169 6.12859 6.21343 6.41153 6.09645C6.69447 5.97947 7.00574 5.94902 7.30598 6.00894C7.60622 6.06886 7.88196 6.21648 8.09831 6.43311C8.31466 6.64974 8.46191 6.92566 8.52145 7.22598C8.58099 7.5263 8.55013 7.83753 8.43278 8.12032C8.31543 8.4031 8.11687 8.64474 7.86219 8.81467C7.60751 8.9846 7.30817 9.0752 7.002 9.075H7.003ZM8.339 18.839H5.666V10.25H8.34V18.839H8.339ZM19.67 3.5H4.329C3.593 3.5 3 4.08 3 4.797V20.203C3 20.92 3.594 21.5 4.328 21.5H19.666C20.4 21.5 21 20.92 21 20.203V4.797C21 4.08 20.4 3.5 19.666 3.5H19.669H19.67Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_2323_274">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
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
        <div className="arriving-in">Arriving in...</div>
        <div className="countdown">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div className="countdown-box" key={unit}>
              <p>{String(timeLeft[unit]).padStart(2, "0")}</p>
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
