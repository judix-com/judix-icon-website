interface HeroProps {
  query: string;
  onQueryChange: (value: string) => void;
  totalIcons: number;
  resultCount: number;
  activeView: 'icons' | 'developer';
  onViewChange: (view: 'icons' | 'developer') => void;
}

const Hero = ({ query, onQueryChange, totalIcons, resultCount, activeView, onViewChange }: HeroProps) => (
  <section className="hero">
    <div className="hero__tabs" role="tablist" aria-label="Judix pages">
      <button
        type="button"
        role="tab"
        aria-selected={activeView === 'icons'}
        className={`hero__tab ${activeView === 'icons' ? 'hero__tab--active' : ''}`}
        onClick={() => onViewChange('icons')}
      >
        Icon gallery
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={activeView === 'developer'}
        className={`hero__tab ${activeView === 'developer' ? 'hero__tab--active' : ''}`}
        onClick={() => onViewChange('developer')}
      >
        Developer docs
      </button>
    </div>
    <p className="hero__eyebrow">Judix Icon Pack</p>
    <h1 className="hero__title">Judix Icons</h1>
    <p className="hero__description">
      List of all active icons of Judix design system.
    </p>
    {activeView === 'icons' ? (
      <div className="hero__search">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20.5 20.5L16.2 16.2M18 11.5C18 15.0899 15.0899 18 11.5 18C7.91015 18 5 15.0899 5 11.5C5 7.91015 7.91015 5 11.5 5C15.0899 5 18 7.91015 18 11.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="search"
          value={query}
          placeholder="Search icons by name"
          onChange={(event) => onQueryChange(event.target.value)}
          aria-label="Search icons"
        />
        {query && (
          <button type="button" onClick={() => onQueryChange('')} aria-label="Clear search">
            Clear
          </button>
        )}
      </div>
    ) : (
      <p className="hero__dev-note">Installation and usage.</p>
    )}
    <div className="hero__meta">
      <span>Total icons · {totalIcons}</span>
      {activeView === 'icons' ? <span>Showing {resultCount}</span> : <span>Docs · Maintained by Judix</span>}
    </div>
  </section>
);

export default Hero;
