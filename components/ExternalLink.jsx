'use client';

export default function ExternalLink({ href, children, className }) {
  const handleClick = (e) => {
    e.preventDefault();
    const proceed = window.confirm(
      'You are about to leave the Trivantage Capital website and be redirected to an external website. Trivantage Capital is not responsible for the content or security of the external site.\n\nDo you wish to continue?'
    );
    if (proceed) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
