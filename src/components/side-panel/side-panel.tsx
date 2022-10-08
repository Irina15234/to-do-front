import { Drawer } from '@mui/material';
import { useSidePanel } from './useSidePanel';
import './side-panel.css';
import { ThemeBlock } from './theme-block/theme-block';

export const SidePanel = () => {
  const { isOpenPanel, handleClosePanel } = useSidePanel();

  return (
    <Drawer open={isOpenPanel} anchor="left" onClose={handleClosePanel}>
      <div className="side-panel">
        <ThemeBlock />
      </div>
    </Drawer>
  );
};
