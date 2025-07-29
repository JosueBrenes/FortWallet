import { css } from 'lit';

export const buttonContainer = css`
  .btn-container {
    position: relative;
  }
`;

export const buttonStyles = css`
  .btn {
    background: none;
    border: none;
    border-radius: var(--button-border-radius, 1rem);
    cursor: pointer;
    padding: var(--button-padding, 0.875rem 1.5rem);
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    line-height: 100%;
    margin: 0;
    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    font-weight: 500;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  .btn:hover::before {
    left: 100%;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .btn:active {
    transform: translateY(0);
  }

  .btn svg {
    width: 1rem;
    height: auto;
    margin-left: 0.5rem;
  }

  @media (prefers-color-scheme: light) {
    .btn {
      background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
      color: var(--button-text-color, #1e293b);
      border: 2px solid rgba(59, 130, 246, 0.2);
      box-shadow: 
        0 4px 12px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }

    .btn:hover {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      color: white;
      border-color: #3b82f6;
      box-shadow: 
        0 12px 30px rgba(59, 130, 246, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .btn svg circle,
    .btn svg path {
      stroke: var(--button-text-color, #1e293b);
    }

    .btn:hover svg circle,
    .btn:hover svg path {
      stroke: white;
    }
  }

  @media (prefers-color-scheme: dark) {
    .btn {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      color: var(--button-text-color, #f1f5f9);
      border: 2px solid rgba(59, 130, 246, 0.3);
      box-shadow: 
        0 4px 12px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    .btn:hover {
      background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
      color: white;
      border-color: #3b82f6;
      box-shadow: 
        0 12px 30px rgba(59, 130, 246, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .btn svg circle,
    .btn svg path {
      stroke: var(--button-text-color, #f1f5f9);
    }

    .btn:hover svg circle,
    .btn:hover svg path {
      stroke: white;
    }
  }
`;

export const dropdownWrapper = css`
  .dropdown-wrapper {
    position: absolute;
    top: 110%;
    right: 0;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.05);
    z-index: 900;
    border-radius: 1.25rem;
    padding: 1.5rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    backdrop-filter: blur(20px);
    animation: dropdownShow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes dropdownShow {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .dropdown-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .dropdown-text-solid {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .dropdown-text {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  .dropdown-action-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .dropdown-action-button {
    padding: 0.75rem;
    border-radius: 0.75rem;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 500;
  }

  .dropdown-action-button:hover {
    transform: translateY(-1px);
    background: rgba(59, 130, 246, 0.1);
  }

  .dropdown-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
  }

  @media (prefers-color-scheme: light) {
    .dropdown-wrapper {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    .dropdown-text-solid,
    .dropdown-action-button,
    .dropdown-close {
      color: var(--button-solid-text-color, #1e293b);
    }

    .dropdown-text {
      color: var(--button-text-color, #64748b);
    }

    svg circle,
    svg path {
      stroke: var(--button-text-color, #64748b);
    }

    .dropdown-action-button {
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    .dropdown-action-button:hover {
      border-color: rgba(59, 130, 246, 0.3);
      color: #3b82f6;
    }
  }

  @media (prefers-color-scheme: dark) {
    .dropdown-wrapper {
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%);
      border: 1px solid rgba(100, 116, 139, 0.2);
    }

    .dropdown-text-solid,
    .dropdown-action-button,
    .dropdown-close {
      color: var(--button-solid-text-color, #f1f5f9);
    }

    .dropdown-text {
      color: var(--button-text-color, #94a3b8);
    }

    svg circle,
    svg path {
      stroke: var(--button-text-color, #94a3b8);
    }

    .dropdown-action-button {
      border: 1px solid rgba(100, 116, 139, 0.2);
    }

    .dropdown-action-button:hover {
      border-color: rgba(59, 130, 246, 0.4);
      color: #60a5fa;
      background: rgba(59, 130, 246, 0.1);
    }
  }
`;
