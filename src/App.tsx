import { useEffect, useMemo, useState } from 'react';
import { iconMap, iconNames } from '@judix/icon';
import type { IconName } from '@judix/icon';
import Hero from './components/Hero';
import IconGrid from './components/IconGrid';
import type { ShowcaseIcon } from './types';
import DeveloperPanel from './components/DeveloperPanel';

const INITIAL_BATCH = 160;
const LOAD_STEP = 160;

const toTokens = (name: IconName) =>
  name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(' ')
    .filter(Boolean);

const App = () => {
  const iconLibrary = useMemo<ShowcaseIcon[]>(
    () =>
      iconNames.map((name) => {
        const tokens = toTokens(name);
        const displayName = tokens.join(' ');
        const group = tokens[0] ?? 'General';

        return {
          name,
          displayName,
          group,
          component: iconMap[name],
          keywords: [name.toLowerCase(), displayName.toLowerCase(), ...tokens.map((token) => token.toLowerCase())],
        } satisfies ShowcaseIcon;
      }),
    [],
  );

  const [activeView, setActiveView] = useState<'icons' | 'developer'>('icons');
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  useEffect(() => {
    setVisibleCount(INITIAL_BATCH);
  }, [query]);

  const filteredIcons = useMemo(() => {
    const q = query.trim().toLowerCase();
    return iconLibrary.filter((icon) => {
      if (!q) {
        return true;
      }

      return icon.keywords.some((keyword) => keyword.toLowerCase().indexOf(q) !== -1);
    });
  }, [iconLibrary, query]);

  const visibleIcons = filteredIcons.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredIcons.length;

  const handleCopyIcon = (icon: ShowcaseIcon) => {
    const clipboard = navigator.clipboard;
    if (!clipboard || typeof clipboard.writeText !== 'function') {
      console.error('Clipboard API not available');
      return;
    }

    clipboard
      .writeText(icon.name)
      .then(() => {
        setCopiedIcon(icon.name);
        setTimeout(() => setCopiedIcon(null), 1600);
      })
      .catch((error) => {
        console.error('Cannot copy icon name', error);
      });
  };

  const handleLoadMore = () => {
    setVisibleCount((count) => Math.min(count + LOAD_STEP, filteredIcons.length));
  };

  return (
    <div className="app-shell">
      <Hero
        query={query}
        onQueryChange={setQuery}
        totalIcons={iconLibrary.length}
        resultCount={filteredIcons.length}
        activeView={activeView}
        onViewChange={setActiveView}
      />
      {activeView === 'icons' ? (
        <>
          <IconGrid icons={visibleIcons} copiedIcon={copiedIcon} onCopyIcon={handleCopyIcon} />
          {canLoadMore && (
            <div className="load-more">
              <button type="button" onClick={handleLoadMore}>
                Load {Math.min(LOAD_STEP, filteredIcons.length - visibleCount)} more
              </button>
            </div>
          )}
        </>
      ) : (
        <DeveloperPanel />
      )}
    </div>
  );
};

export default App;
