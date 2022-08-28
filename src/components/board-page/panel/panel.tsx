import './panel.css';

export const Panel = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="board-panel">
      <div className="board-panel__right">{children}</div>
    </div>
  );
};
