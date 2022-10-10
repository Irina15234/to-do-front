import { PhotoSection } from '../../components/user-page/photo-section/photo-section';
import { InfoSection } from '../../components/user-page/info-section/info-section';
import './user-page.css';

export const UserPage = () => {
  return (
    <div className="user-page">
      <PhotoSection />
      <InfoSection />
    </div>
  );
};
