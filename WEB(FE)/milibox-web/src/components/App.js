import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApplicationListScreen from './screens/ApplicationListScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import VideoListScreen from './screens/VideoListScreen';
import VideoPlayScreen from './screens/VideoPlayScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoListScreen />} />
        <Route path="videos">
          <Route path=":videoId" element={<VideoPlayScreen />} />
        </Route>
        <Route path="application" element={<ApplicationListScreen />}>
          <Route path=":applicationId" />
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
