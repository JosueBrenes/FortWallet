import { css } from 'lit';

export const buttonContainer = css`
  .btn-container {
    position: relative;
  }
`;

export const buttonStyles = css`
  .btn {
    background: rgba(15, 15, 30, 0.7);
    backdrop-filter: blur(30px) saturate(150%);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: var(--button-border-radius, 1.5rem);
    cursor: pointer;
    padding: var(--button-padding, 1rem 2rem);
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    line-height: 100%;
    margin: 0;
    font-family: 'SF Pro Display', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.9);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 
      0 8px 32px rgba(139, 92, 246, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  /* Animated gradient border */
  .btn::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4, #8b5cf6);
    background-size: 300% 300%;
    border-radius: inherit;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    animation: borderGlow 3s linear infinite;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  /* Shimmer effect */
  .btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.6s ease;
  }

  .btn:hover::before {
    opacity: 1;
  }

  .btn:hover::after {
    left: 100%;
  }

  .btn:hover {
    transform: translateY(-4px) scale(1.02);
    background: rgba(139, 92, 246, 0.2);
    border-color: rgba(139, 92, 246, 0.6);
    box-shadow: 
      0 20px 40px rgba(139, 92, 246, 0.3),
      0 0 0 1px rgba(139, 92, 246, 0.4),
      inset 0 2px 0 rgba(255, 255, 255, 0.3),
      0 0 60px rgba(139, 92, 246, 0.2);
    color: rgba(255, 255, 255, 1);
  }

  .btn:active {
    transform: translateY(-2px) scale(1.01);
  }

  .btn svg {
    width: 1.25rem;
    height: auto;
    margin-left: 0.75rem;
    transition: all 0.3s ease;
  }

  .btn:hover svg {
    transform: rotate(5deg) scale(1.1);
  }

  .btn svg circle,
  .btn svg path {
    stroke: rgba(255, 255, 255, 0.8);
    transition: stroke 0.3s ease;
  }

  .btn:hover svg circle,
  .btn:hover svg path {
    stroke: rgba(255, 255, 255, 1);
  }

  @keyframes borderGlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Floating particles animation */
  .btn:hover {
    animation: buttonFloat 2s ease-in-out infinite;
  }

  @keyframes buttonFloat {
    0%, 100% {
      transform: translateY(-4px) scale(1.02);
    }
    50% {
      transform: translateY(-6px) scale(1.02);
    }
  }
`;

export const dropdownWrapper = css`
  .dropdown-wrapper {
    position: absolute;
    top: 110%;
    right: 0;
    background: rgba(10, 10, 20, 0.9);
    backdrop-filter: blur(40px) saturate(150%);
    border: 1px solid rgba(139, 92, 246, 0.3);
    box-shadow: 
      0 40px 80px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 2px 0 rgba(255, 255, 255, 0.15),
      0 0 60px rgba(139, 92, 246, 0.2);
    z-index: 900;
    border-radius: 2rem;
    padding: 2rem;
    width: 22rem;
    display: flex;
    flex-direction: column;
    font-family: 'SF Pro Display', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    animation: dropdownShow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  /* Animated background particles */
  .dropdown-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    animation: particleFloat 15s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }

  .dropdown-wrapper > * {
    position: relative;
    z-index: 1;
  }

  @keyframes dropdownShow {
    0% {
      opacity: 0;
      transform: translateY(-20px) scale(0.8) rotateX(15deg);
      filter: blur(10px);
    }
    50% {
      opacity: 0.8;
      transform: translateY(-5px) scale(0.95) rotateX(5deg);
      filter: blur(2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1) rotateX(0deg);
      filter: blur(0px);
    }
  }

  .dropdown-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .dropdown-profile svg {
    filter: drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3));
  }

  .dropdown-text-solid {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.025em;
  }

  .dropdown-text {
    font-size: 0.95rem;
    line-height: 1.4rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
  }

  .dropdown-action-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .dropdown-action-button {
    padding: 1rem 1.5rem;
    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    overflow: hidden;
  }

  .dropdown-action-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(139, 92, 246, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  .dropdown-action-button:hover::before {
    left: 100%;
  }

  .dropdown-action-button:hover {
    transform: translateY(-2px) scale(1.02);
    background: rgba(139, 92, 246, 0.15);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 
      0 12px 24px rgba(139, 92, 246, 0.2),
      0 0 0 1px rgba(139, 92, 246, 0.3);
    color: rgba(255, 255, 255, 1);
  }

  .dropdown-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 1.25rem;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
  }

  .dropdown-close:hover {
    background: rgba(239, 68, 68, 0.2);
    border-color: rgba(239, 68, 68, 0.4);
    color: #fca5a5;
    transform: scale(1.1);
  }

  svg circle,
  svg path {
    stroke: rgba(255, 255, 255, 0.8);
    transition: stroke 0.3s ease;
  }

  .dropdown-action-button:hover svg circle,
  .dropdown-action-button:hover svg path {
    stroke: rgba(255, 255, 255, 1);
  }
`;
