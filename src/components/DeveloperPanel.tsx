const DeveloperPanel = () => (
  <section className="developer-panel">
    <article className="developer-card">
      <p className="developer-card__eyebrow">Install</p>
      <h2>@judix/icon</h2>
      <p>React SVG icon library for the Judix design system.</p>
      <pre className="code-block">
        <code>npm install @judix/icon</code>
      </pre>
    </article>

    <article className="developer-card">
      <p className="developer-card__eyebrow">Usage</p>
      <h3>Drop in any icon</h3>
      <p>Import specific glyphs or reach for the generic <span className="code-inline">Icon</span> component.</p>
      <pre className="code-block">
        <code>{`import { Icon, Heart } from '@judix/icon';

<Heart size={32} color="#FF4D80" strokeWidth={1.75} />
<Icon name="heart" color="rebeccapurple" />`}</code>
      </pre>
    </article>
  </section>
);

export default DeveloperPanel;
