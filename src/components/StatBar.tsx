interface StatBarProps {
  visibleCount: number;
  total: number;
  activeGroup: string;
  query: string;
}

const StatBar = ({ visibleCount, total, activeGroup, query }: StatBarProps) => (
  <div className="stat-bar">
    <div className="stat-pill">Showing {visibleCount} of {total} icons</div>
    {activeGroup !== 'all' && <div className="stat-pill">Filter / {activeGroup}</div>}
    {query.trim() && <div className="stat-pill">Search / {query.trim()}</div>}
  </div>
);

export default StatBar;
