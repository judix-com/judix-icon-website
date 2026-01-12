import type { ShowcaseIcon } from '../types';

interface IconCardProps {
  icon: ShowcaseIcon;
  onCopy: () => void;
  isCopied: boolean;
}

const IconCard = ({ icon, onCopy, isCopied }: IconCardProps) => {
  const IconComponent = icon.component;

  return (
    <article className="icon-card">
      <div className="icon-card__preview">
        <IconComponent size={56} strokeWidth={1.6} color="currentColor" />
      </div>
      <div className="icon-card__meta">
        <p className="icon-card__name">{icon.displayName}</p>
        <p className="icon-card__group">{icon.name}</p>
      </div>
      <button className="icon-card__copy" type="button" onClick={onCopy} aria-label={`Copy ${icon.name} name`}>
        {isCopied ? 'Copied' : 'Copy icon name'}
      </button>
    </article>
  );
};

export default IconCard;
