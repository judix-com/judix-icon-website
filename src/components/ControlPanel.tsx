interface ControlPanelProps {
  query: string;
  onQueryChange: (value: string) => void;
  groups: Array<{ name: string; count: number }>;
  activeGroup: string;
  onGroupChange: (value: string) => void;
  totalCount: number;
  size: number;
  onSizeChange: (value: number) => void;
  strokeWidth: number;
  onStrokeWidthChange: (value: number) => void;
  color: string;
  onColorChange: (value: string) => void;
  darkTiles: boolean;
  onDarkTilesChange: (value: boolean) => void;
}

const ControlPanel = ({
  query,
  onQueryChange,
  groups,
  activeGroup,
  onGroupChange,
  totalCount,
  size,
  onSizeChange,
  strokeWidth,
  onStrokeWidthChange,
  color,
  onColorChange,
  darkTiles,
  onDarkTilesChange,
}: ControlPanelProps) => (
  <section className="panel">
    <div className="panel__section">
      <p className="panel__section-title">Search by name</p>
      <div className="input-field">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.5 20.5L16.2 16.2M18 11.5C18 15.0899 15.0899 18 11.5 18C7.91015 18 5 15.0899 5 11.5C5 7.91015 7.91015 5 11.5 5C15.0899 5 18 7.91015 18 11.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          value={query}
          type="search"
          placeholder="Try Arrow, Wallet, Calendar..."
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>
      <div className="chip-row">
        <button
          type="button"
          className={`chip ${activeGroup === 'all' ? 'chip--active' : ''}`}
          onClick={() => onGroupChange('all')}
        >
          All ({totalCount})
        </button>
        {groups.map((group) => (
          <button
            type="button"
            key={group.name}
            className={`chip ${activeGroup === group.name ? 'chip--active' : ''}`}
            onClick={() => onGroupChange(group.name)}
          >
            {group.name} ({group.count})
          </button>
        ))}
      </div>
    </div>
    <div className="panel__section">
      <p className="panel__section-title">Live controls</p>
      <div className="control-grid">
        <div className="dial-control">
          <label htmlFor="size">
            Size
            <span>{size}px</span>
          </label>
          <input
            id="size"
            type="range"
            min={16}
            max={96}
            value={size}
            onChange={(event) => onSizeChange(Number(event.target.value))}
          />
        </div>
        <div className="dial-control">
          <label htmlFor="stroke">
            Stroke
            <span>{strokeWidth.toFixed(1)}</span>
          </label>
          <input
            id="stroke"
            type="range"
            min={0.5}
            max={3}
            step={0.1}
            value={strokeWidth}
            onChange={(event) => onStrokeWidthChange(Number(event.target.value))}
          />
        </div>
        <div className="dial-control">
          <label htmlFor="color">Color</label>
          <div className="swatch-control">
            <input id="color" type="color" value={color} onChange={(event) => onColorChange(event.target.value)} />
            <span>{color.toUpperCase()}</span>
          </div>
        </div>
        <div className="dial-control">
          <div className="toggle">
            Preview glow
            <button
              type="button"
              aria-pressed={darkTiles}
              data-state={darkTiles}
              onClick={() => onDarkTilesChange(!darkTiles)}
            >
              <span />
            </button>
          </div>
          <p style={{ margin: '8px 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Adds a subtle aurora glow behind each icon tile.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ControlPanel;
