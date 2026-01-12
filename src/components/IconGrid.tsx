import IconCard from './IconCard';
import type { ShowcaseIcon } from '../types';

interface IconGridProps {
  icons: ShowcaseIcon[];
  copiedIcon: string | null;
  onCopyIcon: (icon: ShowcaseIcon) => void;
}

const IconGrid = ({ icons, copiedIcon, onCopyIcon }: IconGridProps) => {
  if (icons.length === 0) {
    return (
      <div className="empty-state">
        <h3>No icons found</h3>
        <p>Try a different keyword or clear the search.</p>
      </div>
    );
  }

  return (
    <div className="icon-grid">
      {icons.map((icon) => (
        <IconCard
          key={icon.name}
          icon={icon}
          onCopy={() => onCopyIcon(icon)}
          isCopied={copiedIcon === icon.name}
        />
      ))}
    </div>
  );
};

export default IconGrid;
