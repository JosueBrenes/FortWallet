import { css } from 'lit';

export const modalDialogStyles = css`
  .dialog-modal {
    position: fixed;
    z-index: 990;
    font-family: 'SF Pro Display', 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    border-radius: 2rem 2rem 0 0;
    border-width: 0;
    background: rgba(15, 15, 15, 0.8);
    backdrop-filter: blur(40px) saturate(150%);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 
      0 40px 80px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    bottom: 0;
    overflow: hidden;
    transform: translateY(100%);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .dialog-modal[open] {
    transform: translateY(0);
  }

  @media screen and (min-width: 768px) {
    .dialog-modal {
      bottom: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      max-width: 56rem;
      border-radius: 2.5rem;
      background: rgba(10, 10, 20, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 60px 120px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(147, 51, 234, 0.3),
        inset 0 2px 0 rgba(255, 255, 255, 0.15),
        0 0 60px rgba(147, 51, 234, 0.1);
    }

    .dialog-modal[open] {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  /* Animated border gradient */
  .dialog-modal::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4, #8b5cf6);
    background-size: 300% 300%;
    border-radius: inherit;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    animation: borderRotate 4s linear infinite;
    z-index: -1;
  }

  @keyframes borderRotate {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const modalDialogBodyStyles = css`
  .dialog-modal-body {
    display: flex;
    flex-direction: column-reverse;
    min-height: 60vh;
    position: relative;
    overflow: hidden;
  }

  /* Animated background particles */
  .dialog-modal-body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
    animation: particleFloat 20s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes particleFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(5px) rotate(-1deg); }
  }

  .dialog-modal-body__help,
  .dialog-modal-body__wallets {
    width: 100%;
    flex-basis: 100%;
    position: relative;
    z-index: 1;
  }

  .dialog-modal-body__help {
    padding: 2rem;
    background: rgba(20, 20, 30, 0.6);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .dialog-modal-body__wallets {
    padding: 2rem;
    background: rgba(15, 15, 25, 0.8);
    backdrop-filter: blur(30px);
  }

  .dialog-text-solid {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.025em;
  }

  .dialog-text {
    font-size: 0.95rem;
    line-height: 1.4rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.01em;
  }

  @media screen and (min-width: 768px) {
    .dialog-modal-body {
      flex-direction: row;
    }

    .dialog-modal-body__help {
      border-top: none;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(25, 25, 40, 0.7);
    }

    .dialog-modal-body__wallets {
      background: rgba(15, 15, 30, 0.8);
    }

    .dialog-modal-body__help,
    .dialog-modal-body__wallets {
      padding: 3rem;
    }
  }
`;

export const modalHelpSection = css`
  .help-container {
    width: 100%;
    position: relative;
  }

  .help-header {
    display: none;
    margin: 0 0 3rem 0;
    position: relative;
  }

  .help-header__modal-title {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
    letter-spacing: -0.025em;
  }

  .help__title,
  .help__text {
    text-align: center;
  }

  .help__title {
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    background: linear-gradient(135deg, #ffffff 0%, #d1d5db 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
  }

  .help__title::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2rem;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #3b82f6);
    border-radius: 1px;
  }

  .help__text {
    max-width: 24rem;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 2rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }

  .help__whats_a_wallet,
  .help__whats_stellar {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  .help__whats_a_wallet:hover,
  .help__whats_stellar:hover {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(139, 92, 246, 0.3);
    transform: translateY(-2px);
  }

  .help__whats_stellar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .help-header {
      display: block;
    }

    .help__title,
    .help__text {
      text-align: left;
      margin-left: 0;
    }

    .help__title::after {
      left: 0;
      transform: none;
    }

    .help__whats_a_wallet {
      margin-bottom: 2rem;
    }

    .help__whats_stellar {
      display: block;
    }
  }
`;

export const modalWalletsSection = css`
  .wallets-container {
    width: 100%;
    height: 100%;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .wallets-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
  }

  .wallets-header__modal-title {
    font-size: 1.75rem;
    padding: 0;
    margin: 0;
    background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
    letter-spacing: -0.025em;
    position: relative;
  }

  .wallets-header__modal-title::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50%;
    height: 3px;
    background: linear-gradient(90deg, #8b5cf6, #3b82f6);
    border-radius: 2px;
  }

  .wallets-header__button {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    border-radius: 0.75rem;
    padding: 0.75rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .wallets-header__button:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(139, 92, 246, 0.5);
    transform: scale(1.05);
  }

  .wallets-header__button svg {
    fill: rgba(255, 255, 255, 0.8);
    transition: fill 0.3s ease;
  }

  .wallets-header__button:hover svg {
    fill: #8b5cf6;
  }

  .wallets-body {
    margin: 0;
    width: 100%;
    list-style: none;
    padding: 0 !important;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .wallets-body__item {
    display: flex;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    padding: 1.5rem;
    border-radius: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .wallets-body__item::before {
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

  .wallets-body__item:hover::before {
    left: 100%;
  }

  .wallets-body__item:hover {
    transform: translateY(-4px) scale(1.02);
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(139, 92, 246, 0.4);
    box-shadow: 
      0 20px 40px rgba(139, 92, 246, 0.15),
      0 0 0 1px rgba(139, 92, 246, 0.1);
  }

  .wallets-body__item img {
    margin-right: 1.25rem;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .wallets-body__item:hover img {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 
      0 12px 32px rgba(139, 92, 246, 0.4),
      0 0 0 2px rgba(139, 92, 246, 0.3);
  }

  .wallets-body__item span {
    font-size: 1.1rem;
    background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .wallets-body__item.not-available {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .wallets-body__item.not-available:hover {
    transform: none;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: none;
  }

  .wallets-body__item .not-available {
    margin-left: auto;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    border: 1px solid rgba(239, 68, 68, 0.3);
    background: rgba(239, 68, 68, 0.1);
    color: #fca5a5;
    font-weight: 500;
    backdrop-filter: blur(10px);
  }

  @media screen and (max-width: 767px) {
    .wallets-body {
      grid-template-columns: 1fr;
    }
  }
`;

export const backdropStyles = css`
  .dialog-modal[open] + .backdrop {
    background: 
      radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%);
    backdrop-filter: blur(20px) saturate(150%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: backdropFadeIn 0.6s ease-out forwards;
  }

  @keyframes backdropFadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px) saturate(100%);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(20px) saturate(150%);
    }
  }
`;

export const modalAnimations = css`
  .dialog-modal[open] {
    animation: showModal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  
  @keyframes showModal {
    0% {
      transform: translateY(100%) scale(0.8) rotateX(15deg);
      opacity: 0;
      filter: blur(10px);
    }
    50% {
      transform: translateY(20%) scale(0.95) rotateX(5deg);
      opacity: 0.7;
      filter: blur(5px);
    }
    100% {
      transform: translateY(0%) scale(1) rotateX(0deg);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @media screen and (min-width: 768px) {
    @keyframes showModal {
      0% {
        transform: translate(-50%, -50%) scale(0.7) rotateX(20deg) rotateY(10deg);
        opacity: 0;
        filter: blur(15px);
      }
      50% {
        transform: translate(-50%, -45%) scale(0.9) rotateX(5deg) rotateY(2deg);
        opacity: 0.8;
        filter: blur(5px);
      }
      100% {
        transform: translate(-50%, -50%) scale(1) rotateX(0deg) rotateY(0deg);
        opacity: 1;
        filter: blur(0px);
      }
    }
  }

  .dialog-modal.closing {
    animation: hideModal 0.5s cubic-bezier(0.4, 0, 1, 1) forwards !important;
  }
  
  @keyframes hideModal {
    0% {
      transform: translateY(0%) scale(1) rotateX(0deg);
      opacity: 1;
      filter: blur(0px);
    }
    50% {
      transform: translateY(20%) scale(0.95) rotateX(-5deg);
      opacity: 0.6;
      filter: blur(5px);
    }
    100% {
      transform: translateY(100%) scale(0.8) rotateX(-15deg);
      opacity: 0;
      filter: blur(10px);
    }
  }

  @media screen and (min-width: 768px) {
    @keyframes hideModal {
      0% {
        transform: translate(-50%, -50%) scale(1) rotateX(0deg) rotateY(0deg);
        opacity: 1;
        filter: blur(0px);
      }
      50% {
        transform: translate(-50%, -45%) scale(0.9) rotateX(-5deg) rotateY(-2deg);
        opacity: 0.6;
        filter: blur(5px);
      }
      100% {
        transform: translate(-50%, -50%) scale(0.7) rotateX(-20deg) rotateY(-10deg);
        opacity: 0;
        filter: blur(15px);
      }
    }
  }

  .backdrop.closing {
    animation: hideBackdrop 0.5s ease-out forwards !important;
  }
  
  @keyframes hideBackdrop {
    from {
      opacity: 1;
      backdrop-filter: blur(20px) saturate(150%);
    }
    to {
      opacity: 0;
      backdrop-filter: blur(0px) saturate(100%);
    }
  }
`;
