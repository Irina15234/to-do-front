import { Drawer } from '@mui/material';
import { useSidePanel } from './useSidePanel';
import './side-panel.css';
import { ItemBlock } from './item-block';

export const SidePanel = () => {
  const { isOpenPanel, handleClosePanel, itemsBlocks } = useSidePanel();

  return (
    <Drawer open={isOpenPanel} anchor="left" onClose={handleClosePanel}>
      <div className="side-panel">
        {itemsBlocks.map((block) => (
          <ItemBlock key={block.title} block={block} />
        ))}
      </div>
    </Drawer>
  );
};
