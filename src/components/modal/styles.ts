import { css } from 'lit';

export const modalDialogStyles = css`
  .dialog-modal {
    position: fixed;
    z-index: 990;
    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    border-radius: 1.5rem 1.5rem 0 0;
    border-width: 0;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1);
    bottom: 0;
    overflow: hidden;
    backdrop-filter: blur(20px);
    transform: translateY(100%);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .dialog-modal[open] {
    transform: translateY(0);
  }

  @media screen and (min-width: 768px) {
    .dialog-modal {
      bottom: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.95);
      max-width: 48rem;
      border-radius: 1.5rem;
      box-shadow: 
        0 32px 64px -12px rgba(0, 0, 0, 0.35),
        0 0 0 1px rgba(255, 255, 255, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }

    .dialog-modal[open] {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const modalDialogBodyStyles = css`
  .dialog-modal-body {
    display: flex;
    flex-direction: column-reverse;
  }

  .dialog-modal-body__help,
  .dialog-modal-body__wallets {
    width: 100%;
    flex-basis: 100%;
  }

  .dialog-modal-body__help {
    padding: 1.5rem;
  }

  .dialog-modal-body__wallets {
    padding: 1.5rem;
  }

  .dialog-text-solid {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .dialog-text {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  @media (prefers-color-scheme: light) {
    .dialog-modal-body__help {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      border-top: 1px solid rgba(148, 163, 184, 0.2);
    }

    @media screen and (min-width: 768px) {
      .dialog-modal-body__help {
        border-top: none;
        border-right: 1px solid rgba(148, 163, 184, 0.2);
      }
    }

    .dialog-modal-body__wallets,
    .dialog-modal-body {
      background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    }

    .dialog-text-solid {
      color: var(--modal-solid-text-color, #1e293b);
      font-weight: 600;
    }

    .dialog-text {
      color: var(--modal-text-color, #64748b);
      font-weight: 400;
    }
  }

  @media (prefers-color-scheme: dark) {
    .dialog-modal-body__help {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      border-top: 1px solid rgba(100, 116, 139, 0.2);
    }

    @media screen and (min-width: 768px) {
      .dialog-modal-body__help {
        border-top: none;
        border-right: 1px solid rgba(100, 116, 139, 0.2);
      }
    }

    .dialog-modal-body__wallets,
    .dialog-modal-body {
      background: linear-gradient(135deg, #0f172a 0%, #020617 100%);
    }

    .dialog-text-solid {
      color: var(--modal-solid-text-color, #f1f5f9);
      font-weight: 600;
    }

    .dialog-text {
      color: var(--modal-text-color, #94a3b8);
      font-weight: 400;
    }
  }

  @media screen and (min-width: 768px) {
    .dialog-modal-body {
      flex-direction: row;
    }

    .dialog-modal-body__help,
    .dialog-modal-body__wallets {
      padding: 2rem;
    }
  }
`;

export const modalHelpSection = css`
  .help-container {
    width: 100%;
  }

  .help-header {
    display: none;
    margin: 0 0 2rem 0;
  }

  .help-header__modal-title {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
  }

  .help__title,
  .help__text {
    text-align: center;
  }

  .help__title {
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .help__text {
    max-width: 21rem;
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
    margin-top: 0;
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
  }

  .wallets-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .wallets-header__modal-title {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
  }

  .wallets-header__button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (prefers-color-scheme: light) {
    .wallets-header__button svg {
      fill: var(--modal-header-button-color, #8f8f8f);
    }
  }

  @media (prefers-color-scheme: dark) {
    .wallets-header__button svg {
      fill: var(--modal-header-button-color, #707070);
    }
  }

  .wallets-body {
    margin: 0;
    width: 100%;
    list-style: none;
    padding: 0 !important;
  }

  .wallets-body__item {
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-bottom: 0.75rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
  }

  .wallets-body__item:hover {
    transform: translateY(-1px);
    border: 1px solid rgba(59, 130, 246, 0.3);
  }

  .wallets-body__item img {
    margin-right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease;
  }

  .wallets-body__item:hover img {
    transform: scale(1.05);
  }

  .wallets-body__item.not-available {
    cursor: alias;
  }

  .wallets-body__item .not-available {
    margin-left: auto;
    font-size: 10px;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
  }

  @media (prefers-color-scheme: light) {
    .wallets-body__item .not-available {
      border: solid var(--modal-not-available-border-color, #e2e2e2) 1px;
      background-color: var(--modal-not-available-bg-color, #f3f3f3);
      color: var(--modal-not-available-text-color, #6f6f6f);
    }
  }

  @media (prefers-color-scheme: dark) {
    .wallets-body__item .not-available {
      border: solid var(--modal-not-available-border-color, #343434) 1px;
      background-color: var(--modal-not-available-bg-color, #232323);
      color: var(--modal-not-available-text-color, #a0a0a0);
    }
  }

  @media screen and (min-width: 768px) {
  }
`;

export const backdropStyles = css`
  .dialog-modal[open] + .backdrop {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%);
    backdrop-filter: blur(8px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const modalAnimations = css`
  .dialog-modal[open] {
    animation: showModal 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  
  @keyframes showModal {
    from {
      transform: translateY(100%) scale(0.95);
      opacity: 0;
    }
    to {
      transform: translateY(0%) scale(1);
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    @keyframes showModal {
      from {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0;
      }
      to {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }
  }

  .dialog-modal.closing {
    animation: hideModal 0.3s cubic-bezier(0.4, 0, 1, 1) forwards !important;
  }
  
  @keyframes hideModal {
    from {
      transform: translateY(0%) scale(1);
      opacity: 1;
    }
    to {
      transform: translateY(100%) scale(0.95);
      opacity: 0;
    }
  }

  @media screen and (min-width: 768px) {
    @keyframes hideModal {
      from {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
      to {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0;
      }
    }
  }

  .backdrop.closing {
    animation: hideBackdrop 0.3s ease-out forwards !important;
  }
  
  @keyframes hideBackdrop {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
